/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import prismaClient from '@/lib/prsimadb';

// This makes the function a server action that can be called from client components
export async function getAvailableSkillsAndDomains() {
  try {
    // Fetch all users with just the fields we need
    const users = await prismaClient.user.findMany({
      select: {
        skills: true,
        domainExpertise: true
      }
    });
    
    // Extract unique skills and domains
    const allSkills = Array.from(
      new Set(users.flatMap(user => user.skills))
    ).sort();
    
    const allDomains = Array.from(
      new Set(users.flatMap(user => user.domainExpertise))
    ).sort();
    
    return { allSkills, allDomains };
  } catch (error) {
    console.error('Error fetching skills and domains:', error);
    // Return empty arrays as fallback
    return { allSkills: [], allDomains: [] };
  }
}

// For client-side components that need to fetch this data
export async function fetchAvailableSkillsAndDomains() {
  try {
    const response = await fetch('/api/skills-and-domains');
    if (!response.ok) {
      throw new Error('Failed to fetch skills and domains');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching skills and domains:', error);
    return { allSkills: [], allDomains: [] };
  }
}