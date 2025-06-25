import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prsimadb';
import { z } from 'zod';

// Define the request body schema for updates
const userUpdateSchema = z.object({ 
  id: z.string(),
  name: z.string().min(2),
  description: z.string().min(50, { message: "Tell us a bit more about yourself (min 50 characters)" }).optional(),
  avatarUrl: z.string().url().optional(),
  location: z.string(),
  personalityTags: z.array(z.string()),
  workingStyle: z.enum(['ASYNC', 'REAL_TIME', 'FLEXIBLE', 'STRUCTURED']),
  collaborationPref: z.enum(['REMOTE', 'HYBRID', 'IN_PERSON', 'DOESNT_MATTER']),
  currentRole: z.string(),
  yearsExperience: z.number().min(0),
  domainExpertise: z.array(z.string()),
  skills: z.array(z.string()),
  pastProjects: z.array(z.object({
    id: z.string().optional(), // For existing projects
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

export async function GET(
  request: Request,
) {
  try {
    const userId = request.url.split('/').pop();

    if (!userId) {
      return new NextResponse('ID is required', { status: 400 });
    }

    if (!userId) {
      return NextResponse.json({ error: 'no userId provided' }, { status: 401 });
    }
    
    // Fetch the user and all related data
    const user = await prismaClient.user.findUnique({
      where: { id: userId },
      include: {
        pastProjects: {
          select: {
            id: true,
            name: true,
            description: true,
            link: true
          }
        },
        startupInfo: {
          select: {
            startupStage: true,
            startupGoals: true,
            startupCommitment: true,
            lookingFor: true
          }
        },
        contactInfo : {
          select: {
            id: true,
            email: true,
            twitterUrl: true,
            linkedinUrl: true,
            scheduleUrl: true
          }
        }
      }
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    // Get the user ID from the URL
    const userId = request.url.split('/').pop();
    
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }
    
    // Process as multipart form data
    const formData = await request.formData();
    
    // Parse the JSON data from the form
    const userData = JSON.parse(formData.get('userData') as string);
    
    // Make sure the ID in the URL matches the ID in the data
    if (userData.id !== userId) {
      return NextResponse.json({ 
        error: 'ID mismatch', 
        message: 'The ID in the URL does not match the ID in the request body' 
      }, { status: 400 });
    }
    
    // Validate user data
    const validatedData = userUpdateSchema.parse(userData);

    // Check if user exists
    const existingUser = await prismaClient.user.findUnique({
      where: { id: userId },
      include: {
        pastProjects: true,
        startupInfo: true,
        contactInfo: true
      }
    });

    if (!existingUser) {
      return NextResponse.json({ 
        error: 'User not found', 
        message: 'The user you are trying to update does not exist' 
      }, { status: 404 });
    }

    
    
    try {
      // Update user with transaction
      const updatedUser = await prismaClient.$transaction(async (tx) => {
        // Update base user data
        const user = await tx.user.update({
          where: { id: userId },
          data: {
            name: validatedData.name,
            avatarUrl: validatedData.avatarUrl,
            description: validatedData.description,
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

        // Update contact info
        if (validatedData.contactInfo) {
          if (existingUser.contactInfo) {
            // Update existing contact info
            await tx.contactInfo.update({
              where: { userId: userId },
              data: {
                email: validatedData.contactInfo.email,
                twitterUrl: validatedData.contactInfo.twitterUrl || null,
                linkedinUrl: validatedData.contactInfo.linkedinUrl || null,
                scheduleUrl: validatedData.contactInfo.scheduleUrl || null
              }
            });
          } else {
            // Create new contact info
            await tx.contactInfo.create({
              data: {
                userId: userId,
                email: validatedData.contactInfo.email,
                twitterUrl: validatedData.contactInfo.twitterUrl || null,
                linkedinUrl: validatedData.contactInfo.linkedinUrl || null,
                scheduleUrl: validatedData.contactInfo.scheduleUrl || null
              }
            });
          }
        }
        
        // Handle past projects
        if (validatedData.pastProjects) {
          // Get existing project IDs
          const existingProjectIds = existingUser.pastProjects.map(p => p.id);
          
          // Get project IDs from the updated data
          const updatedProjectIds = validatedData.pastProjects
            .filter(p => p.id)
            .map(p => p.id as string);
          
          // Find projects to delete (exist in DB but not in updated data)
          const projectIdsToDelete = existingProjectIds.filter(
            id => !updatedProjectIds.includes(id)
          );
          
          // Delete projects that are no longer in the updated data
          if (projectIdsToDelete.length > 0) {
            await tx.project.deleteMany({
              where: {
                id: { in: projectIdsToDelete }
              }
            });
          }
          
          // Update or create projects
          for (const project of validatedData.pastProjects) {
            if (project.id) {
              // Update existing project
              await tx.project.update({
                where: { id: project.id },
                data: {
                  name: project.name,
                  description: project.description,
                  link: project.link || null
                }
              });
            } else {
              // Create new project
              await tx.project.create({
                data: {
                  name: project.name,
                  description: project.description,
                  link: project.link || null,
                  userId: userId
                }
              });
            }
          }
        }
        
        // Handle startup info
        if (validatedData.startupInfo) {
          if (existingUser.startupInfo) {
            // Update existing startup info
            await tx.startupinfo.update({
              where: { userId: userId },
              data: {
                startupStage: validatedData.startupInfo.stage,
                startupGoals: validatedData.startupInfo.goals,
                startupCommitment: validatedData.startupInfo.commitment,
                lookingFor: validatedData.startupInfo.lookingFor
              }
            });
          } else {
            // Create new startup info
            await tx.startupinfo.create({
              data: {
                userId: userId,
                startupStage: validatedData.startupInfo.stage,
                startupGoals: validatedData.startupInfo.goals,
                startupCommitment: validatedData.startupInfo.commitment,
                lookingFor: validatedData.startupInfo.lookingFor
              }
            });
          }
        }
        
        return user;
      });

      return NextResponse.json(updatedUser, { status: 200 });
    } catch (dbError) {
      console.error('Database operation error:', dbError);
      throw dbError;
    }
  } catch (error) {
    console.error('Error updating user:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request data', details: error.errors }, { status: 400 });
    }
    
    return NextResponse.json({ error: 'Failed to update user', message: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const userId = request.url.split('/').pop();

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await prismaClient.user.findUnique({
      where: { id: userId }
    });

    if (!existingUser) {
      return NextResponse.json({ 
        error: 'User not found', 
        message: 'The user you are trying to delete does not exist' 
      }, { status: 404 });
    }

    // Delete user and all related data (will cascade delete related records)
    await prismaClient.user.delete({
      where: { id: userId }
    });

    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Failed to delete user', message: (error as Error).message }, { status: 500 });
  }
}