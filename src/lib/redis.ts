/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { createClient } from 'redis';
import type { User } from '@prisma/client';

// Create Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on('error', (err) => console.error('Redis error:', err));

// Connect to Redis
await redisClient.connect();

// Default TTL values (in seconds)
const DEFAULT_TTL = {
  USER_PROFILE: 3600, // 1 hour
  VIEWED_PROFILES: 3600, // 1 hour
  LIKES: 3600, // 1 hour
  MATCHES: 3600 // 1 hour
};

// User likes functions
export async function addLike(userId: string, likedUserId: string): Promise<boolean> {
  const result = await redisClient.sAdd(`likes:${userId}`, likedUserId);
  await redisClient.expire(`likes:${userId}`, DEFAULT_TTL.LIKES);
  return result === 1;
}

export async function hasLiked(userId: string, likedUserId: string): Promise<boolean> {
  return await redisClient.sIsMember(`likes:${userId}`, likedUserId);
}

// Match queue functions
export async function addToMatchQueue(userId: string, matchUserId: string): Promise<void> {
  await redisClient.rPush(`matches:${userId}`, matchUserId);
  await redisClient.expire(`matches:${userId}`, DEFAULT_TTL.MATCHES);
}

export async function getNextMatch(userId: string): Promise<string | null> {
  return await redisClient.lPop(`matches:${userId}`);
}

// User profile cache functions
export async function cacheUserProfile(user: User): Promise<void> {
  // Cache all fields needed for profile rendering
  const userCache = {
    id: user.id,
    name: user.name,
    description: user.description || '',
    avatarUrl: user.avatarUrl || '',
    location: user.location || '',
    personalityTags: JSON.stringify(user.personalityTags || []),
    workingStyle: user.workingStyle || '',
    collaborationPref: user.collaborationPref || '',
    currentRole: user.currentRole || '',
    yearsExperience: user.yearsExperience?.toString() || '0',
    domainExpertise: JSON.stringify(user.domainExpertise || []),
    skills: JSON.stringify(user.skills || []),
    // Handle nested objects
    pastProjects: JSON.stringify(user.pastProjects || []),
    startupInfo: user.startupInfo ? JSON.stringify(user.startupInfo) : null,
    contactInfo: user.contactInfo ? JSON.stringify(user.contactInfo) : null,
  };
  
  await redisClient.hSet(`user:${user.id}`, userCache);
  await redisClient.expire(`user:${user.id}`, DEFAULT_TTL.USER_PROFILE);
}
export async function getCachedUserProfile(userId: string): Promise<Record<string, string> | null> {
  const cachedUser = await redisClient.hGetAll(`user:${userId}`);
  return Object.keys(cachedUser).length > 0 ? cachedUser : null;
}

export async function invalidateUserCache(userId: string): Promise<void> {
  await redisClient.del(`user:${userId}`);
}

// Viewed profiles functions (simple get/set with TTL)
export async function addViewedProfile(userId: string, viewedId: string): Promise<void> {
  await redisClient.sAdd(`viewed:${userId}`, viewedId);
  await redisClient.expire(`viewed:${userId}`, DEFAULT_TTL.VIEWED_PROFILES);
}

export async function getViewedProfiles(userId: string): Promise<string[]> {
  return await redisClient.sMembers(`viewed:${userId}`);
}

export async function resetViewedProfiles(userId: string): Promise<void> {
  await redisClient.del(`viewed:${userId}`);
}

export async function isProfileViewed(userId: string, profileId: string): Promise<boolean> {
  return await redisClient.sIsMember(`viewed:${userId}`, profileId);
}

// Simple key-value set with TTL
export async function setValue(key: string, value: string, ttl?: number): Promise<void> {
  await redisClient.set(key, value);
  if (ttl) {
    await redisClient.expire(key, ttl);
  }
}

// Simple key-value get
export async function getValue(key: string): Promise<string | null> {
  return await redisClient.get(key);
}

// Export the client for direct use if needed
export { redisClient };