/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import prismaClient from '@/lib/prsimadb';
import { z } from 'zod';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { 
  getViewedProfiles,
  cacheUserProfile,
  getCachedUserProfile,
  setValue,
  getValue,
  redisClient
} from '@/lib/redis';

// Define the request body schema for user creation
const userCreateSchema = z.object({ 
  id: z.string(),
  name: z.string().min(2),
  description: z.string().min(50, { message: "Tell us a bit more about yourself (min 50 characters)" }).optional(),
  avatarUrl: z.string().optional(),
  location: z.string(),
  personalityTags: z.array(z.string()),
  workingStyle: z.enum(['ASYNC', 'REAL_TIME', 'FLEXIBLE', 'STRUCTURED']),
  collaborationPref: z.enum(['REMOTE', 'HYBRID', 'IN_PERSON', 'DOESNT_MATTER']),
  currentRole: z.string(),
  yearsExperience: z.number().min(0),
  domainExpertise: z.array(z.string()),
  skills: z.array(z.string()),
  pastProjects: z.array(z.object({
    name: z.string(),
    description: z.string(),
    link: z.string().optional()
  })).optional(),
  startupInfo: z.object({
    stage: z.enum(['IDEA', 'MVP', 'SCALING', 'EXITED']),
    goals: z.string(),
    commitment: z.enum(['EXPLORING', 'BUILDING', 'LAUNCHING', 'FULL_TIME_READY']),
    lookingFor: z.array(z.string())
  }).optional(),
  contactInfo: z.object({
    email: z.string().email().optional(),
    twitterUrl: z.string().url().optional().or(z.literal('')),
    linkedinUrl: z.string().url().optional().or(z.literal('')),
    scheduleUrl: z.string().url().optional().or(z.literal(''))
  }).optional()
});

// Define filter schema for GET requests with excludeUserIds
const filterSchema = z.object({
  userId: z.string(), // Current user ID
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().min(1).max(50).default(10),
  skills: z.string().optional().transform(val => val ? val.split(',') : []),
  domains: z.string().optional().transform(val => val ? val.split(',') : []),
  workingStyles: z.string().optional().transform(val => {
    return val ? val.split(',').filter(style => 
      ['ASYNC', 'REAL_TIME', 'FLEXIBLE', 'STRUCTURED'].includes(style)
    ) : [];
  }),
  collaborationPrefs: z.string().optional().transform(val => {
    return val ? val.split(',').filter(pref => 
      ['REMOTE', 'HYBRID', 'IN_PERSON', 'DOESNT_MATTER'].includes(pref)
    ) : [];
  }),
  experienceMin: z.coerce.number().min(0).default(0),
  experienceMax: z.coerce.number().min(0).default(50),
  startupStages: z.string().optional().transform(val => {
    return val ? val.split(',').filter(stage => 
      ['IDEA', 'MVP', 'SCALING', 'EXITED'].includes(stage)
    ) : [];
  }),
  enableLocationBasedMatching: z.string().transform(val => val === 'true').default('false'),
  maxDistance: z.coerce.number().min(0).max(10000).default(50), // in km
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
  excludeViewed: z.string().transform(val => val !== 'false').default('true'),
  excludeUserIds: z.string().optional().transform(val => val ? val.split(',') : []),
});

// Helper function to calculate cosine similarity between two arrays of strings
function calculateCosineSimilarity(array1: string[], array2: string[]): number {
  // Create a set of all unique elements
  const allItems = new Set([...array1, ...array2]);
  
  // Create vectors
  const vector1: number[] = [];
  const vector2: number[] = [];
  
  // Fill vectors with binary values (1 if present, 0 if not)
  allItems.forEach(item => {
    vector1.push(array1.includes(item) ? 1 : 0);
    vector2.push(array2.includes(item) ? 1 : 0);
  });
  
  // Calculate dot product
  let dotProduct = 0;
  for (let i = 0; i < vector1.length; i++) {
    dotProduct += vector1[i] * vector2[i];
  }
  
  // Calculate magnitudes
  const magnitude1 = Math.sqrt(vector1.reduce((sum, val) => sum + val * val, 0));
  const magnitude2 = Math.sqrt(vector2.reduce((sum, val) => sum + val * val, 0));
  
  // Avoid division by zero
  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0;
  }
  
  // Return cosine similarity
  return dotProduct / (magnitude1 * magnitude2);
}

// Helper function to calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

// GET handler for filtering and matching users
export async function GET(req: NextRequest) {
  try {
    // Extract URL parameters
    const searchParams = req.nextUrl.searchParams;
    const params = Object.fromEntries(searchParams.entries());
    
    // Add caching headers for browser and CDN caching
    const headers = new Headers();
    headers.set('Cache-Control', 'public, max-age=60, s-maxage=120'); // Cache for 1 minute browser, 2 minutes CDN
    headers.set('Vary', 'Accept, Cookie, X-User-ID'); // Vary cache by these headers
    
    // Validate filters
    const validatedFilters = filterSchema.parse(params);
    
    // Create a cache key based on filter parameters WITHOUT pagination
    // This allows us to reuse the same cached results for different pages
    const filterParams = { ...validatedFilters };
    delete filterParams.page; // Remove page for caching full result set
    delete filterParams.pageSize; // Remove page size for caching full result set
    
    const cacheKey = `users:fullset:${JSON.stringify(filterParams)}`;
    
    // Try to get full result set from Redis cache first
    const cachedFullResults = await getValue(cacheKey);
    
    if (cachedFullResults) {
      console.log('Cache hit: Returning cached user results');
      
      // Parse the full cached results
      const fullResults = JSON.parse(cachedFullResults);
      
      // Calculate pagination for the requested page
      const startIndex = (validatedFilters.page - 1) * validatedFilters.pageSize;
      const endIndex = startIndex + validatedFilters.pageSize;
      
      // Slice the cached results to get the requested page
      const pagedUsers = fullResults.users.slice(startIndex, endIndex);
      
      // Return the paginated results from cache
      const responseData = {
        users: pagedUsers,
        pagination: {
          page: validatedFilters.page,
          pageSize: validatedFilters.pageSize,
          totalCount: fullResults.pagination.totalCount,
          totalPages: Math.ceil(fullResults.pagination.totalCount / validatedFilters.pageSize)
        }
      };
      
      return NextResponse.json(responseData, { headers });
    }
    
    console.log('Cache miss: Fetching users from database');
    
    // Get the user's viewed profiles from the database
    let viewedProfiles: string[] = [];
    if (validatedFilters.excludeViewed) {
      // First try to get from Redis (faster)
      const redisViewedProfiles = await getViewedProfiles(validatedFilters.userId);
      
      // If Redis doesn't have the data, fetch from the database
      if (redisViewedProfiles.length === 0) {
        const views = await prismaClient.view.findMany({
          where: {
            userAId: validatedFilters.userId
          },
          select: {
            userBId: true
          }
        });
        viewedProfiles = views.map(view => view.userBId);
      } else {
        viewedProfiles = redisViewedProfiles;
      }
    }
    
    // Combine all IDs to exclude
    const excludeIds = [
      ...viewedProfiles, 
      validatedFilters.userId,
      ...(validatedFilters.excludeUserIds || [])
    ];
    
    // Log for debugging
    console.log(`Excluding ${excludeIds.length} users: ${excludeIds.join(', ')}`);
    
    // Build the base query with proper structure for your schema
    const query: any = {
      where: {
        id: {
          notIn: excludeIds,
        },
      },
      include: {
        contactInfo: true,
        pastProjects: true,
        startupInfo: true,
      },
      // No pagination parameters here to get the full dataset
    };
    
    // Apply skill filters if provided
    if (validatedFilters.skills.length > 0) {
      query.where.skills = {
        hasSome: validatedFilters.skills,
      };
    }
    
    // Apply domain expertise filters if provided
    if (validatedFilters.domains.length > 0) {
      query.where.domainExpertise = {
        hasSome: validatedFilters.domains,
      };
    }
    
    // Apply working style filters if provided
    if (validatedFilters.workingStyles.length > 0) {
      query.where.workingStyle = {
        in: validatedFilters.workingStyles,
      };
    }
    
    // Apply collaboration preference filters if provided
    if (validatedFilters.collaborationPrefs.length > 0) {
      query.where.collaborationPref = {
        in: validatedFilters.collaborationPrefs,
      };
    }
    
    // Apply experience range filter
    query.where.yearsExperience = {
      gte: validatedFilters.experienceMin,
      lte: validatedFilters.experienceMax,
    };
    
    // Apply startup stage filters if provided
    if (validatedFilters.startupStages.length > 0) {
      query.where.startupInfo = {
        startupStage: {
          in: validatedFilters.startupStages,
        },
      };
    }
    
    // Execute the query to get ALL matching users (without pagination)
    const allUsers = await prismaClient.user.findMany(query);
    
    // Cache individual user profiles in Redis
    for (const user of allUsers) {
      await cacheUserProfile(user);
    }
    
    // Get current user's skills for similarity calculation if needed
    let currentUserSkills: string[] = [];
    if (validatedFilters.skills.length > 0) {
      // Try to get current user from Redis first
      const cachedCurrentUser = await getCachedUserProfile(validatedFilters.userId);
      
      if (cachedCurrentUser && cachedCurrentUser.skills) {
        try {
          currentUserSkills = JSON.parse(cachedCurrentUser.skills);
        } catch (e) {
          console.error('Error parsing cached skills:', e);
        }
      }
      
      // Fall back to database if not in cache
      if (currentUserSkills.length === 0) {
        const currentUser = await prismaClient.user.findUnique({
          where: { id: validatedFilters.userId },
          select: { skills: true }
        });
        
        if (currentUser) {
          currentUserSkills = currentUser.skills;
          // Update cache for future requests
          if (cachedCurrentUser) {
            await redisClient.hSet(`user:${validatedFilters.userId}`, 'skills', JSON.stringify(currentUserSkills));
          }
        }
      }
    }
    
    // Process users with additional filters and scoring
    let processedUsers = [...allUsers];
    
    // Apply location-based filtering if enabled and coordinates are provided
    if (validatedFilters.enableLocationBasedMatching && 
        validatedFilters.latitude && 
        validatedFilters.longitude) {
      
      // Filter based on your schema's structure for location
      processedUsers = processedUsers.filter(user => {
        // Skip users without location data (adjust field names as needed)
        const userLat = user.latitude || 0;
        const userLon = user.longitude || 0;
        
        if (userLat === 0 || userLon === 0) return false;
        
        const distance = calculateDistance(
          validatedFilters.latitude!,
          validatedFilters.longitude!,
          userLat,
          userLon
        );
        
        // Add distance property
        (user as any).distance = Math.round(distance);
        
        // Filter by max distance
        return distance <= validatedFilters.maxDistance;
      });
    }
    
    // Calculate similarity scores if we have current user skills
    if (currentUserSkills.length > 0) {
      processedUsers = processedUsers.map(user => {
        const similarityScore = calculateCosineSimilarity(
          currentUserSkills,
          user.skills
        );
        
        return {
          ...user,
          similarityScore: Math.round(similarityScore * 100) / 100
        };
      });
      
      // Sort by similarity score (descending)
      processedUsers.sort((a, b) => {
        return (b as any).similarityScore - (a as any).similarityScore;
      });
    }
    
    // Format the response
    const formattedUsers = processedUsers.map(user => {
      return {
        id: user.id,
        name: user.name,
        avatarUrl: user.avatarUrl,
        location: user.location || null,
        description: user.description,
        personalityTags: user.personalityTags,
        workingStyle: user.workingStyle,
        collaborationPref: user.collaborationPref,
        currentRole: user.currentRole,
        yearsExperience: user.yearsExperience,
        domainExpertise: user.domainExpertise,
        skills: user.skills,
        similarityScore: (user as any).similarityScore,
        distance: (user as any).distance,
        pastProjects: user.pastProjects,
        startupInfo: user.startupInfo,
        calendarLink: user.contactInfo?.scheduleUrl,
        email: user.contactInfo?.email,
        socialLinks: [
          user.contactInfo?.linkedinUrl ? { platform: 'LinkedIn', url: user.contactInfo.linkedinUrl } : null,
          user.contactInfo?.twitterUrl ? { platform: 'Twitter', url: user.contactInfo.twitterUrl } : null
        ].filter(Boolean)
      };
    });
    
    // Create the full result set for caching
    const fullResultSet = {
      users: formattedUsers,
      pagination: {
        totalCount: formattedUsers.length
      }
    };
    
    // Cache the FULL result set in Redis with 60-second TTL
    await setValue(cacheKey, JSON.stringify(fullResultSet), 60);
    
    // Now paginate for the current request
    const startIndex = (validatedFilters.page - 1) * validatedFilters.pageSize;
    const endIndex = startIndex + validatedFilters.pageSize;
    const pagedUsers = formattedUsers.slice(startIndex, endIndex);
    
    // Create the paginated response
    const responseData = {
      users: pagedUsers,
      pagination: {
        page: validatedFilters.page,
        pageSize: validatedFilters.pageSize,
        totalCount: formattedUsers.length,
        totalPages: Math.ceil(formattedUsers.length / validatedFilters.pageSize)
      }
    };
    
    // Return response with caching headers
    return NextResponse.json(responseData, { headers });
    
  } catch (error) {
    console.error('Error fetching users:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid filter parameters', details: error.errors }, 
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch users', message: (error as Error).message }, 
      { status: 500 }
    );
  }
}

// POST handler for creating a new user
export async function POST(request: Request) {
  try {
    // Process as multipart form data
    const formData = await request.formData();
    
    // Parse the JSON data from the form
    const userData = JSON.parse(formData.get('userData') as string);
    
    // Validate user data
    const validatedData = userCreateSchema.parse(userData);

    const id = validatedData.id;

    // Check if user already exists - try Redis first for a faster check
    const cachedUser = await getCachedUserProfile(id);
    let userExists = cachedUser !== null;
    
    // If not found in Redis, check the database
    if (!userExists) {
      const existingUser = await prismaClient.user.findUnique({
        where: { id }
      });
      userExists = existingUser !== null;
    }

    if (userExists) {
      // Return error if user already exists
      return NextResponse.json({ 
        error: 'User already exists', 
        message: 'A user with this ID already exists. Use the update endpoint instead.' 
      }, { status: 409 });
    }

    
    try {
      // Create a new user
      // Use a transaction to ensure all database operations succeed or fail together
      const user = await prismaClient.$transaction(async (tx) => {
        // Create the base user first
        const createdUser = await tx.user.create({
          data: {
            id,
            name: validatedData.name,
            description : validatedData.description,
            avatarUrl: validatedData.avatarUrl,
            location: validatedData.location,
            personalityTags: validatedData.personalityTags,
            workingStyle: validatedData.workingStyle,
            collaborationPref: validatedData.collaborationPref,
            currentRole: validatedData.currentRole,
            yearsExperience: validatedData.yearsExperience,
            domainExpertise: validatedData.domainExpertise,
            skills: validatedData.skills,
          }
        });

        // Create contact info if provided
        if (validatedData.contactInfo) {
          await tx.contactInfo.create({
            data: {
              userId: createdUser.id,
              email: validatedData.contactInfo.email,
              twitterUrl: validatedData.contactInfo.twitterUrl || null,
              linkedinUrl: validatedData.contactInfo.linkedinUrl || null,
              scheduleUrl: validatedData.contactInfo.scheduleUrl || null
            }
          });
        }
        
        // Create past projects if provided
        if (validatedData.pastProjects && validatedData.pastProjects.length > 0) {
          for (const project of validatedData.pastProjects) {
            await tx.project.create({
              data: {
                name: project.name,
                description: project.description,
                link: project.link,
                userId: createdUser.id
              }
            });
          }
        }
        
        // Create startup info if provided
        if (validatedData.startupInfo) {
          await tx.startupinfo.create({
            data: {
              userId: createdUser.id,
              startupStage: validatedData.startupInfo.stage,
              startupGoals: validatedData.startupInfo.goals,
              startupCommitment: validatedData.startupInfo.commitment,
              lookingFor: validatedData.startupInfo.lookingFor
            }
          });
        }
        
        // Return the created user
        return createdUser;
      });

      // Cache the new user in Redis
      await cacheUserProfile(user);
      
      // Invalidate any related user list caches (both per-page and full set caches)
      const cachePatterns = ['users:*', 'users:fullset:*'];
      for (const pattern of cachePatterns) {
        const keys = await redisClient.keys(pattern);
        if (keys.length > 0) {
          await redisClient.del(keys);
        }
      }
      
      return NextResponse.json(user, { status: 201 });
    } catch (dbError) {
      console.error('Database operation error:', dbError);
      if (dbError instanceof PrismaClientKnownRequestError && dbError.code === 'P2002') {
        return NextResponse.json({ 
          error: 'User already exists', 
          message: 'A user with this ID already exists' 
        }, { status: 409 });
      }
      throw dbError;
    }
  } catch (error) {
    console.error('Error creating user:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request data', details: error.errors }, { status: 400 });
    }
    
    return NextResponse.json({ error: 'Failed to create user', message: (error as Error).message }, { status: 500 });
  }
}