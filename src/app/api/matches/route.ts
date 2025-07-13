import { NextRequest, NextResponse } from 'next/server';
import prismaClient from '@/lib/prsimadb';
import { getAuth } from '@clerk/nextjs/server';
import { redisClient, getValue, setValue } from '@/lib/redis';

export async function GET(request: NextRequest) {
  try {
    const { userId } = getAuth(request);
    const url = new URL(request.url);
    const requestedUserId = url.searchParams.get('userId');
    
    // Check authentication
    if (!userId) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    
    // Verify the requested user ID matches the authenticated user
    if (requestedUserId && requestedUserId !== userId) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 });
    }
    
    // Add caching headers
    const headers = new Headers();
    headers.set('Cache-Control', 'private, max-age=30'); // Short browser cache for authenticated data
    headers.set('Vary', 'Authorization'); // Vary cache by auth header
    
    // Create a cache key for this user's matches
    const cacheKey = `matches:${userId}`;
    
    // Try to get matches from Redis cache first
    const cachedMatches = await getValue(cacheKey);
    
    if (cachedMatches) {
      console.log('Cache hit: Returning cached matches');
      return NextResponse.json(
        JSON.parse(cachedMatches),
        { headers }
      );
    }
    
    console.log('Cache miss: Fetching matches from database');
    
    // Build the query to get matches
    const matchQuery = {
      where: {
        OR: [
          { userAId: userId },
          { userBId: userId }
        ],
        mutual: true // Only get mutual matches
      },
      include: {
        userA: {
          select: {
            id: true,
            name: true,
            avatarUrl: true
          }
        },
        userB: {
          select: {
            id: true,
            name: true,
            avatarUrl: true
          }
        }
      }
    };
    
    // Get matches from the database
    const matches = await prismaClient.match.findMany(matchQuery);
    
    // Format matches for consistent response structure
    interface User {
      id: string;
      name: string;
      avatarUrl: string;
    }

    interface Match {
      id: string;
      userAId: string;
      userBId: string;
      mutual: boolean;
      createdAt: Date;
      userA: User;
      userB: User;
    }

    interface FormattedMatch {
      id: string;
      matchedAt: Date;
      matchedUserId: string;
      matchedUserName: string;
      matchedUserAvatar: string;
    }

    const formattedMatches: FormattedMatch[] = (matches as Match[]).map((match: Match): FormattedMatch => {
      // Determine which user is the other person (not the current user)
      const matchedUser: User = match.userAId === userId ? match.userB : match.userA;
      
      return {
      id: match.id,
      matchedAt: match.createdAt,
      matchedUserId: matchedUser.id,
      matchedUserName: matchedUser.name,
      matchedUserAvatar: matchedUser.avatarUrl
      };
    });
    
    const response = { matches: formattedMatches };
    
    // Cache the matches in Redis for 60 seconds
    await setValue(cacheKey, JSON.stringify(response), 60);
    
    return NextResponse.json(response, { headers });
  } catch (error) {
    console.error('Error fetching matches:', error);
    return NextResponse.json(
      { error: 'Failed to fetch matches', message: (error as Error).message },
      { status: 500 }
    );
  }
}

// POST handler for updating matches (creating new likes)
export async function POST(request: NextRequest) {
  try {
    const { userId } = getAuth(request);
    
    // Check authentication
    if (!userId) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    
    // Parse request body
    const body = await request.json();
    const { likedUserId } = body;
    
    if (!likedUserId) {
      return NextResponse.json({ error: 'likedUserId is required' }, { status: 400 });
    }
    
    // Create a cache key for debounce protection
    const debounceKey = `like:${userId}:${likedUserId}`;
    
    // Check if this operation was recently performed (debounce)
    const recentlyProcessed = await redisClient.get(debounceKey);
    if (recentlyProcessed) {
      console.log('Debounced: Like operation recently processed');
      return NextResponse.json({
        success: true,
        message: 'Like already processed',
      });
    }
    
    // Set a temporary marker to prevent duplicate requests (30 second TTL)
    await redisClient.set(debounceKey, '1', { EX: 30 });
    
    // Check if there's an existing like from the other user
    const existingLikeFromOther = await prismaClient.match.findFirst({
      where: {
        userAId: likedUserId,
        userBId: userId,
      },
    });
    
    // Check if there's an existing like from this user
    const existingLikeFromUser = await prismaClient.match.findFirst({
      where: {
        userAId: userId,
        userBId: likedUserId,
      },
    });
    
    let result;
    
    if (existingLikeFromUser) {
      // User already liked this profile
      result = {
        success: true,
        message: 'You already liked this user',
        isMatch: existingLikeFromUser.mutual
      };
    } else {
      // Create a new like
      if (existingLikeFromOther) {
        // It's a match! Update the existing like to be mutual
        await prismaClient.match.update({
          where: { id: existingLikeFromOther.id },
          data: { mutual: true }
        });
        
        result = {
          success: true,
          message: "It's a match!",
          isMatch: true
        };
      } else {
        // Create a new like (not mutual yet)
        await prismaClient.match.create({
          data: {
            userAId: userId,
            userBId: likedUserId,
            mutual: false
          }
        });
        
        result = {
          success: true,
          message: 'Like sent successfully',
          isMatch: false
        };
      }
    }
    
    // Invalidate matches cache for both users
    await redisClient.del(`matches:${userId}`);
    await redisClient.del(`matches:${likedUserId}`);
    
    // Clear the debounce marker
    await redisClient.del(debounceKey);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing like:', error);
    return NextResponse.json(
      { error: 'Failed to process like', message: (error as Error).message },
      { status: 500 }
    );
  }
}