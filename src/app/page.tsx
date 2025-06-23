'use client'

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Code, Users, Rocket, MessageSquare, Laptop, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navbar } from "@/components/ui/navbar"

export default function LandingPage() {
  const { isSignedIn } = useUser()
  const router = useRouter()
  
  // Handle CTA button click
  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/explore')
    } else {
      router.push('/sign-in')
    }
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  <span className="text-primary block">Find your perfect</span>
                  <span className="block">co-founder match</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                  A swipe-based platform connecting founders and builders with their ideal collaborators. 
                  No social profiles, no fluff. Just raw experience, aligned intent, and mutual interest.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={handleGetStarted}
                  className="px-8 py-6 text-lg flex items-center gap-2 hover:cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => router.push('/about')}
                  className="px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Profile Card - Hidden on Mobile */}
            <div className="hidden md:block">
              <Card className="overflow-hidden shadow-xl border-2 border-primary/10 transform hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="p-0 bg-gradient-to-r from-primary/10 to-primary/5">
                  <div className="p-6 flex items-start gap-4">
                    <Avatar className="h-16 w-16 border-2 border-white shadow-md">
                      <AvatarImage src="/demo-avatar.jpg" alt="Profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">Jane Developer</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">San Francisco, CA</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">Full-Stack Developer</Badge>
                        <Badge variant="outline">5+ years</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">About</h4>
                    <p className="text-sm">Passionate about building user-focused products with clean, maintainable code. Looking to join an early-stage startup with ambitious goals.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>React</Badge>
                      <Badge>Node.js</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>UI/UX</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Domains</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">SaaS</Badge>
                      <Badge variant="secondary">FinTech</Badge>
                      <Badge variant="secondary">EdTech</Badge>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-medium">Working Style:</span> Flexible
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Prefers:</span> Remote
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="bg-gray-50 dark:bg-gray-900/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">How Hackmate Works</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
              Our platform makes it easy to find the perfect match for your next project or startup.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Users className="h-6 w-6 text-primary" />}
                title="Create your profile" 
                description="Showcase your skills, experience, and what you're looking to build. Our profiles focus on what matters - your abilities and goals." 
              />
              <FeatureCard 
                icon={<Rocket className="h-6 w-6 text-primary" />}
                title="Swipe to match" 
                description="Browse potential collaborators and express interest with a simple swipe. Our algorithm helps find people who complement your skillset." 
              />
              <FeatureCard 
                icon={<MessageSquare className="h-6 w-6 text-primary" />}
                title="Connect & build" 
                description="When there's mutual interest, start a conversation and begin collaborating on your next big idea." 
              />
            </div>
          </div>
        </div>
        
        {/* Additional Benefits */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Hackmate</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitCard 
                icon={<Code className="h-8 w-8 text-primary" />}
                title="Skill-First Matching" 
                description="Our platform prioritizes your skills and experience over your network or background. Find people who complement your abilities." 
              />
              <BenefitCard 
                icon={<Laptop className="h-8 w-8 text-primary" />}
                title="Remote-Friendly" 
                description="Whether you prefer working remotely or in-person, find collaborators that match your preferred working style." 
              />
              <BenefitCard 
                icon={<Briefcase className="h-8 w-8 text-primary" />}
                title="For Every Stage" 
                description="From idea stage to scaling up, connect with people at the right stage for your project or startup." 
              />
              <BenefitCard 
                icon={<Sparkles className="h-8 w-8 text-primary" />}
                title="Build Together" 
                description="Our platform is designed to help you build meaningful connections that lead to successful collaborations." 
              />
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold">Hackmate</span>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Hackmate. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}
