/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import prismaClient from '@/lib/prsimadb';
import { z } from 'zod';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { 
  getViewedProfiles, 
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
    headers.set('Cache-Control', 'public, max-age=300, s-maxage=600'); // Cache for 5 minutes browser, 10 minutes CDN
    headers.set('Vary', 'Accept, Cookie, X-User-ID'); // Vary cache by these headers
    
    // Validate filters
    const validatedFilters = filterSchema.parse(params);
    
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
        pastProjects: true,  // Use pastProjects instead of projects
        startupInfo: true,
      },
      skip: (validatedFilters.page - 1) * validatedFilters.pageSize,
      take: validatedFilters.pageSize,
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
    
    // Execute the query
    const users = await prismaClient.user.findMany(query);
    
    // Get current user's skills for similarity calculation if needed
    let currentUserSkills: string[] = [];
    if (validatedFilters.skills.length > 0) {
      const currentUser = await prismaClient.user.findUnique({
        where: { id: validatedFilters.userId },
        select: { skills: true }
      });
      
      if (currentUser) {
        currentUserSkills = currentUser.skills;
      }
    }
    
    // Process users with additional filters and scoring
    let processedUsers = [...users];
    
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
    
    // Get total count for pagination (count remaining matches)
    const totalCount = await prismaClient.user.count({
      where: query.where
    });
    
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
    
    // Return response with caching headers
    return NextResponse.json({
      users: formattedUsers,
      pagination: {
        page: validatedFilters.page,
        pageSize: validatedFilters.pageSize,
        totalCount,
        totalPages: Math.ceil(totalCount / validatedFilters.pageSize)
      }
    }, { headers });
    
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

    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: { id : id }
    });

    if (existingUser) {
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
