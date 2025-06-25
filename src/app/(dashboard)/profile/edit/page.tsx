'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { X, Plus, Loader2 } from "lucide-react"
import Image from "next/image"
import { useUser } from "@clerk/nextjs"
import { toast } from "sonner"
import { uploadOnCloudinary } from '@/lib/cloudinary';


// Constants for file upload
const MAX_FILE_SIZE = 5 * 1024 * 1024
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

// Form Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  avatar: z
    .custom<FileList>()
    .refine((files) => !files || files.length === 0 || files.length === 1, "Only one image is allowed")
    .refine(
      (files) => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (files) => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files[0].type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    )
    .optional(),
  description: z.string().min(50, { message: "Tell us a bit more about yourself (min 50 characters)" }).optional(),
  location: z.string().min(1, { message: "Location is required" }),
  currentRole: z.string().min(1, { message: "Current role is required" }),
  yearsExperience: z.number().min(0),
  workingStyle: z.enum(['ASYNC', 'REAL_TIME', 'FLEXIBLE', 'STRUCTURED']),
  collaborationPref: z.enum(['REMOTE', 'HYBRID', 'IN_PERSON', 'DOESNT_MATTER']),
  personalityTags: z.array(z.string()).min(1, { message: "Select at least one personality trait" }),
  domainExpertise: z.array(z.string()).min(1, { message: "Select at least one domain" }),
  skills: z.array(z.string()).min(1, { message: "Select at least one skill" }),
  pastProjects: z.array(z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Project name is required"),
    description: z.string().min(50, { message: "Tell us a bit more about yourself (min 50 characters)" }),
    link: z.string().url().optional().or(z.literal('')),
  })).optional(),
  startupInfo: z.object({
    stage: z.enum(['IDEA', 'MVP', 'SCALING', 'EXITED']),
    goals: z.string().min(50, "Please describe your startup goals in detail"),
    commitment: z.enum(['EXPLORING', 'BUILDING', 'LAUNCHING', 'FULL_TIME_READY']),
    lookingFor: z.array(z.string()).min(1, "Select what you're looking for").optional(),
  }).optional(),
  contactInfo: z.object({
    email: z.string().email("Please enter a valid email").optional(),
    twitterUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
    linkedinUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
    scheduleUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  }).optional(),
})

type FormValues = z.infer<typeof formSchema>

const personalityOptions = [
  "Problem Solver", "Creative", "Team Player", "Leader", 
  "Detail-Oriented", "Fast Learner", "Self-Motivated", 
  "Strategic Thinker", "Innovative", "Analytical"
]

const skillOptions = [
  "JavaScript", "React", "Node.js", "Python", "Java",
  "Product Management", "UI/UX Design", "Data Science",
  "Machine Learning", "Marketing", "Sales", "Business Development"
]

const domainOptions = [
  "SaaS", "E-commerce", "FinTech", "HealthTech",
  "EdTech", "AI/ML", "Blockchain", "IoT",
  "Mobile Apps", "Enterprise Software"
]

export default function ProfileEditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const { user } = useUser()
  const router = useRouter()
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      currentRole: "",
      yearsExperience: 0,
      workingStyle: "FLEXIBLE",
      collaborationPref: "DOESNT_MATTER",
      personalityTags: [],
      domainExpertise: [],
      skills: [],
      pastProjects: [],
      contactInfo: {
        email: "",
        twitterUrl: "",
        linkedinUrl: "",
        scheduleUrl: ""
      }
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "pastProjects",
  })

  // Fetch user data when component mounts
  useEffect(() => {
    if (!user?.id) return;
    
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/user/${user.id}`);
        const userData = response.data;
        
        // Set avatar preview if exists
        if (userData.avatarUrl) {
          setAvatarPreview(userData.avatarUrl);
        }
        
        // Map the fetched data to the form fields
        form.reset({
          name: userData.name || "",
          location: userData.location || "",
          description: userData.description || "",
          currentRole: userData.currentRole || "",
          yearsExperience: userData.yearsExperience || 0,
          workingStyle: userData.workingStyle || "FLEXIBLE",
          collaborationPref: userData.collaborationPref || "DOESNT_MATTER",
          personalityTags: userData.personalityTags || [],
          domainExpertise: userData.domainExpertise || [],
          skills: userData.skills || [],
          pastProjects: userData.pastProjects || [],
          contactInfo: {
            email: userData.contactInfo?.email || "",
            twitterUrl: userData.contactInfo?.twitterUrl || "",
            linkedinUrl: userData.contactInfo?.linkedinUrl || "",
            scheduleUrl: userData.contactInfo?.scheduleUrl || ""
          },
          startupInfo: userData.startupInfo ? {
            stage: userData.startupInfo.startupStage || "IDEA",
            goals: userData.startupInfo.startupGoals || "",
            commitment: userData.startupInfo.startupCommitment || "EXPLORING",
            lookingFor: userData.startupInfo.lookingFor || []
          } : undefined
        });
        
        setError(null);
      } catch (err) {
        console.error('Error fetching user data:', err);
        toast.error('Error fetching user data');
        setError('Failed to load your profile data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserData();
  }, [user?.id, form]);

  async function onSubmit(values: FormValues) {
    if (!user?.id) return;
    
    setIsSubmitting(true);
    
    try {
      // Create FormData object for multipart/form-data submission
      const formData = new FormData();
      let avatarUrl: string | undefined;

      
      // Add avatar file if it exists
      if (values.avatar?.[0]) {
          const uploadResult = await uploadOnCloudinary(values.avatar[0]);
          avatarUrl = uploadResult.secure_url;
      }
      
      // Prepare the user data object
      const userData = {
        id: user.id,
        name: values.name,
        description: values.description,
        location: values.location,
        personalityTags: values.personalityTags,
        workingStyle: values.workingStyle,
        collaborationPref: values.collaborationPref,
        currentRole: values.currentRole,
        yearsExperience: values.yearsExperience,
        domainExpertise: values.domainExpertise || [],
        skills: values.skills,
        pastProjects: values.pastProjects,
        startupInfo: values.startupInfo,
        contactInfo: values.contactInfo,
        avatarUrl: avatarUrl,
      };
      
      // Add the userData as a JSON string
      formData.append('userData', JSON.stringify(userData));
      
      // Submit the form data to the API using PUT method for the specific user ID
      const response = await axios.put(`/api/user/${user.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log('Profile updated successfully:', response.data);
      toast.success('Profile updated successfully');
      
      // Redirect to profile page
      router.push('/profile');
      
    } catch (error) {
      console.error('Error updating profile:', error);
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.response?.data?.error || 'Failed to update profile';
        toast.error(errorMessage);
      } else {
        toast.error('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading your profile data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <p className="text-red-700 dark:text-red-400">{error}</p>
        </div>
        <Button onClick={() => router.push('/profile')}
                className="hover:cursor-pointer"  
        >
          Return to Profile
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Edit Your Profile</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Update your profile information and preferences.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Your location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="avatar"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormLabel>Profile Picture</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-4">
                    {(value && value.length > 0) ? (
                      <Image
                        src={URL.createObjectURL(value[0])}
                        alt="Profile preview"
                        className="w-20 h-20 rounded-full object-cover"
                        width={100}
                        height={100}
                      />
                    ) : avatarPreview ? (
                      <Image
                        src={avatarPreview}
                        alt="Current profile picture"
                        className="w-20 h-20 rounded-full object-cover"
                        width={100}
                        height={100}
                      />
                    ) : null}
                    <Input
                      type="file"
                      accept={ACCEPTED_IMAGE_TYPES.join(",")}
                      onChange={(e) => {
                        onChange(e.target.files);
                        if (e.target.files?.[0]) {
                          setAvatarPreview(URL.createObjectURL(e.target.files[0]));
                        }
                      }}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Upload a new profile picture or keep your current one
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About You</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about yourself, your background, and what you're looking for..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="currentRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Role</FormLabel>
                  <FormControl>
                    <Input placeholder="Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="yearsExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of Experience</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      {...field} 
                      onChange={e => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workingStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Working Style</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select working style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ASYNC">Async</SelectItem>
                      <SelectItem value="REAL_TIME">Real Time</SelectItem>
                      <SelectItem value="FLEXIBLE">Flexible</SelectItem>
                      <SelectItem value="STRUCTURED">Structured</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="collaborationPref"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Collaboration Preference</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="REMOTE">Remote</SelectItem>
                      <SelectItem value="HYBRID">Hybrid</SelectItem>
                      <SelectItem value="IN_PERSON">In Person</SelectItem>
                      <SelectItem value="DOESNT_MATTER">Does not Matter</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="personalityTags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Personality Traits</FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-2 p-4 border rounded-md">
                      {personalityOptions.map((tag) => (
                        <Badge
                          key={tag}
                          variant={field.value.includes(tag) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => {
                            const newValue = field.value.includes(tag)
                              ? field.value.filter((t) => t !== tag)
                              : [...field.value, tag]
                            field.onChange(newValue)
                          }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="domainExpertise"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domain Expertise</FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-2 p-4 border rounded-md">
                      {domainOptions.map((tag) => (
                        <Badge
                          key={tag}
                          variant={field.value.includes(tag) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => {
                            const newValue = field.value.includes(tag)
                              ? field.value.filter((t) => t !== tag)
                              : [...field.value, tag]
                            field.onChange(newValue)
                          }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills</FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-2 p-4 border rounded-md">
                      {skillOptions.map((skill) => (
                        <Badge
                          key={skill}
                          variant={field.value.includes(skill) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => {
                            const newValue = field.value.includes(skill)
                              ? field.value.filter((s) => s !== skill)
                              : [...field.value, skill]
                            field.onChange(newValue)
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-6 border rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium">Contact Information</h3>
            
            <FormField
              control={form.control}
              name="contactInfo.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (Optional)</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} value={field.value || ''} />
                  </FormControl>
                  <FormDescription>
                    Your public contact email (can be different from your login email)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <FormField
                control={form.control}
                name="contactInfo.twitterUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter Profile (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://twitter.com/yourusername" {...field} value={field.value || ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactInfo.linkedinUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://linkedin.com/in/yourusername" {...field} value={field.value || ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactInfo.scheduleUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Scheduling Link (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://calendly.com/yourusername" {...field} value={field.value || ''} />
                    </FormControl>
                    <FormDescription>
                      Link to your Calendly, Cal.com or other scheduling service
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <FormLabel>Past Projects</FormLabel>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => append({ name: '', description: '', link: '' })}
                className="hover:cursor-pointer"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </div>
            
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-4 items-start p-4 border rounded-md">
                <div className="flex-1 space-y-4">
                  <FormField
                    control={form.control}
                    name={`pastProjects.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name={`pastProjects.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name={`pastProjects.${index}.link`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Link</FormLabel>
                        <FormControl>
                          <Input {...field} type="url" placeholder="https://..." />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => remove(index)}
                  className="hover:cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="space-y-6 border rounded-lg p-6">
            <h3 className="text-lg font-medium">Startup Information</h3>
            
            <FormField
              control={form.control}
              name="startupInfo.stage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Startup Stage</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select stage" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="IDEA">Idea Stage</SelectItem>
                      <SelectItem value="MVP">MVP</SelectItem>
                      <SelectItem value="SCALING">Scaling</SelectItem>
                      <SelectItem value="EXITED">Exited</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="startupInfo.goals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Startup Goals</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your startup goals and vision..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="startupInfo.commitment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commitment Level</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select commitment level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="EXPLORING">Exploring</SelectItem>
                      <SelectItem value="BUILDING">Building</SelectItem>
                      <SelectItem value="LAUNCHING">Launching</SelectItem>
                      <SelectItem value="FULL_TIME_READY">Full Time Ready</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="startupInfo.lookingFor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Looking For</FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-2 p-4 border rounded-md">
                      {skillOptions.map((skill) => (
                        <Badge
                          key={skill}
                          variant={field.value?.includes(skill) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => {
                            const newValue = field.value?.includes(skill)
                              ? field.value.filter((s) => s !== skill)
                              : [...(field.value || []), skill]
                            field.onChange(newValue)
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>

          <div className="flex space-x-4">
            <Button type="button" variant="outline" onClick={() => router.push('/profile')}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1 hover:cursor-pointer" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : 'Save Changes'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
