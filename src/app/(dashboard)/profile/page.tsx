'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Edit, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useUser } from "@clerk/nextjs"
import axios from 'axios'
import { toast } from 'sonner'

type Project = {
  id: string
  name: string
  description: string
  link?: string
}

type ContactInfo = {
  id?: string
  email?: string
  twitterUrl?: string
  linkedinUrl?: string
  scheduleUrl?: string
}

type User = {
  id: string
  name: string
  description :string
  avatarUrl?: string
  location: string
  personalityTags: string[]
  workingStyle: 'ASYNC' | 'REAL_TIME' | 'FLEXIBLE' | 'STRUCTURED'
  collaborationPref: 'REMOTE' | 'HYBRID' | 'IN_PERSON' | 'DOESNT_MATTER'
  currentRole: string
  yearsExperience: number
  domainExpertise: string[]
  skills: string[]
  rolesOpenTo?: string[]
  pastProjects?: Project[]
  startupInfo?: {
    startupStage: 'IDEA' | 'MVP' | 'SCALING' | 'EXITED'
    startupGoals: string
    startupCommitment: 'EXPLORING' | 'BUILDING' | 'LAUNCHING' | 'FULL_TIME_READY'
    lookingFor: string[]
  }
  contactInfo?: ContactInfo
}

export default function Profile() {
  const router = useRouter()
  const { user: clerkUser, isLoaded: clerkLoaded, isSignedIn } = useUser()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    // Only fetch user data when Clerk has loaded and user is signed in
    if (clerkLoaded && isSignedIn && clerkUser) {
      fetchUserData(clerkUser.id);
    } else if (clerkLoaded && !isSignedIn) {
      // Redirect to sign in if not signed in
      router.push('/sign-in');
    }
  }, [clerkLoaded, isSignedIn, clerkUser, router]);

  const fetchUserData = async (userId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/user/${userId}`);
      setUser(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching user data:', err);
      toast.error('Error fetching user data');
      setError('Failed to load profile data');
    } finally {
      setLoading(false);
    }
  };

  if (loading || !clerkLoaded) {
    return (
      <div className="container mx-auto py-20 flex justify-center items-center">
        <div className="text-center">
          <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4 text-primary" />
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-red-500">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">{error}</p>
            <div className="flex justify-center mt-4">
              <Button onClick={() => fetchUserData(clerkUser!.id)}>
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto py-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Profile Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">You have not completed your profile yet.</p>
            <div className="flex justify-center mt-4">
              <Button onClick={() => router.push('/onboarding')}>
                Complete Your Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button 
          onClick={() => router.push('/profile/edit')}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Edit className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatarUrl || ''} />
                <AvatarFallback>{user.name?.[0] || '?'}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <CardDescription>{user.location}</CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">{user.currentRole}</Badge>
                  <Badge variant="outline">{user.yearsExperience}+ years</Badge>
                </div>
              </div>
            </CardHeader>
            {user.description && (
            <div className="px-6 pb-2">
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">About</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{user.description}</p>
              </div>
            </div>
          )}

            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Personality Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {user.personalityTags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Domain Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {user.domainExpertise.map((domain) => (
                    <Badge key={domain} variant="secondary">{domain}</Badge>
                  ))}
                </div>
              </div>
              
              {user.contactInfo && (
                <div>
                  <h3 className="font-medium mb-2">Contact</h3>
                  <div className="space-y-2">
                    {user.contactInfo.email && (
                      <p className="text-sm">
                        <span className="font-medium">Email: </span>
                        <a href={`mailto:${user.contactInfo.email}`} className="text-blue-500 hover:underline">
                          {user.contactInfo.email}
                        </a>
                      </p>
                    )}
                    {user.contactInfo.linkedinUrl && (
                      <p className="text-sm">
                        <span className="font-medium">LinkedIn: </span>
                        <a href={user.contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {user.contactInfo.linkedinUrl}
                        </a>
                      </p>
                    )}
                    {user.contactInfo.twitterUrl && (
                      <p className="text-sm">
                        <span className="font-medium">Twitter: </span>
                        <a href={user.contactInfo.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {user.contactInfo.twitterUrl}
                        </a>
                      </p>
                    )}
                    {user.contactInfo.scheduleUrl && (
                      <p className="text-sm">
                        <span className="font-medium">Schedule a meeting: </span>
                        <a href={user.contactInfo.scheduleUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {user.contactInfo.scheduleUrl}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Past Projects */}
          {user.pastProjects && user.pastProjects.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Past Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {user.pastProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-4 rounded-lg border hover:bg-accent cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Working Style</h3>
                <p className="mt-1">{user.workingStyle.charAt(0) + user.workingStyle.slice(1).toLowerCase().replace('_', ' ')}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Collaboration</h3>
                <p className="mt-1">
                  {user.collaborationPref === 'DOESNT_MATTER' 
                    ? 'Doesn\'t Matter'
                    : user.collaborationPref.charAt(0) + user.collaborationPref.slice(1).toLowerCase().replace('_', ' ')}
                </p>
              </div>
            </CardContent>
          </Card>

          {user.startupInfo && (
            <Card>
              <CardHeader>
                <CardTitle>Startup Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Stage</h3>
                  <Badge variant="outline" className="mt-1">{user.startupInfo.startupStage}</Badge>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Commitment</h3>
                  <Badge variant="outline" className="mt-1">
                      {user.startupInfo && user.startupInfo.startupCommitment ? 
                      user.startupInfo.startupCommitment.split('_').map(word => 
                        word.charAt(0) + word.slice(1).toLowerCase()
                      ).join(' ')
                      : 'Not specified'
                    }
                  </Badge>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Looking For</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {user.startupInfo.lookingFor.map((role) => (
                      <Badge key={role} variant="secondary">{role}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Project Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProject?.name}</DialogTitle>
            <DialogDescription>
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          {selectedProject?.link && (
            <div className="mt-4">
              <Button variant="outline" asChild>
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
