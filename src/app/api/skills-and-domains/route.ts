/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prsimadb';

export async function GET() {
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
    
    // Add caching headers
    const headers = {
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    };
    
    return NextResponse.json({ allSkills, allDomains }, { headers });
  } catch (error) {
    console.error('Error fetching skills and domains:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills and domains' }, 
      { status: 500 }
    );
  }
}