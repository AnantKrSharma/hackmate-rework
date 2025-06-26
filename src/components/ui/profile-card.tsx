/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { motion, MotionValue } from 'framer-motion'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  MapPin,
  Heart,
  X,
  Briefcase,
  Clock,
  Users,
  ExternalLink,
  AlertCircle,
} from "lucide-react"
import { User } from '../../types'
import { 
  WORKING_STYLE_LABELS, 
  COLLABORATION_PREF_LABELS, 
  STARTUP_STAGE_LABELS, 
  COMMITMENT_LEVEL_LABELS,
} from '../../constants'

interface ProfileCardProps {
  activeUser: User
  x: MotionValue<number>
  rotate: MotionValue<number>
  opacity: MotionValue<number>
  likeOpacity: MotionValue<number>
  nopeOpacity: MotionValue<number>
  handleLike: () => void
  handlePass: () => void
  isMatch: boolean
}

export default function ProfileCard({
  activeUser,
  x,
  rotate,
  opacity,
  likeOpacity,
  nopeOpacity,
  handleLike,
  handlePass,
}: ProfileCardProps) {
  if (!activeUser) return null;
  
  return (
    <div className="relative w-full h-auto">
      <motion.div
        style={{ x, rotate, opacity }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onDragEnd={(_, info) => {
          if (info.offset.x > 100) {
            handleLike();
          } else if (info.offset.x < -100) {
            handlePass();
          } else {
            x.set(0); // Reset position if not enough drag
          }
        }}
        className="cursor-grab active:cursor-grabbing"
      >
        {/* Like/Nope indicators */}
        <motion.div 
          className="absolute top-10 right-10 rotate-12 border-4 border-green-500 rounded-md px-6 py-2 z-10"
          style={{ opacity: likeOpacity }}
        >
          <span className="font-extrabold text-3xl text-green-500">LIKE</span>
        </motion.div>
        
        <motion.div 
          className="absolute top-10 left-10 -rotate-12 border-4 border-red-500 rounded-md px-6 py-2 z-10"
          style={{ opacity: nopeOpacity }}
        >
          <span className="font-extrabold text-3xl text-red-500">NOPE</span>
        </motion.div>
        
        <Card className="overflow-hidden max-w-xl mx-auto">
          <div className="relative h-56 sm:h-72 bg-muted">
            {activeUser.avatarUrl ? (
              <img
                src={activeUser.avatarUrl} 
                alt={activeUser.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
                <div className="text-6xl font-bold text-blue-300">
                  {activeUser.name.charAt(0)}
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-2xl font-bold text-foreground">{activeUser.name}</h2>
              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {activeUser.location}
              </div>
              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                <Briefcase className="h-4 w-4 mr-1" />
                {activeUser.currentRole} • {activeUser.yearsExperience}+ years
              </div>
            </div>
          </div>
          
          <CardContent className="p-4">
            <Tabs defaultValue="about" className="mb-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="startup">Startup</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-4 space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {activeUser.description && (
                  <div>
                    <p className="text-sm">{activeUser.description}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground mb-1 flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> Working Style
                    </span>
                    <span className="text-sm font-medium">
                      {WORKING_STYLE_LABELS[activeUser.workingStyle]}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground mb-1 flex items-center">
                      <Users className="h-3 w-3 mr-1" /> Collaboration
                    </span>
                    <span className="text-sm font-medium">
                      {COLLABORATION_PREF_LABELS[activeUser.collaborationPref]}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-1">Personality</h3>
                  <div className="flex flex-wrap gap-1">
                    {activeUser.personalityTags?.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    )) || (
                      <p className="text-sm text-muted-foreground">No personality tags provided</p>
                    )}
                  </div>
                </div>
                
                {activeUser.pastProjects && activeUser.pastProjects.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium mb-1">Past Projects</h3>
                    <div className="space-y-2">
                      {activeUser.pastProjects.map(project => (
                        <div key={project.id || project.name} className="text-sm">
                          <div className="font-medium">{project.name}</div>
                          <p className="text-muted-foreground text-xs">{project.description}</p>
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="text-xs text-primary flex items-center mt-1"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View project
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="skills" className="mt-4 space-y-4 max-h-[300px] overflow-y-auto pr-2">
                <div>
                  <h3 className="text-sm font-medium mb-1">Skills</h3>
                  <div className="flex flex-wrap gap-1">
                    {activeUser.skills?.map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    )) || (
                      <p className="text-sm text-muted-foreground">No skills provided</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-1">Domains</h3>
                  <div className="flex flex-wrap gap-1">
                    {activeUser.domainExpertise?.map(domain => (
                      <Badge key={domain} className="text-xs">
                        {domain}
                      </Badge>
                    )) || (
                      <p className="text-sm text-muted-foreground">No domains provided</p>
                    )}
                  </div>
                </div>
                
                {/* Safely check if rolesOpenTo exists before mapping */}
                {activeUser.rolesOpenTo && (
                  <div>
                    <h3 className="text-sm font-medium mb-1">Open to Roles</h3>
                    <div className="flex flex-wrap gap-1">
                      {activeUser.rolesOpenTo.map(role => (
                        <Badge key={role} variant="outline" className="text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="startup" className="mt-4 space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {activeUser.startupInfo ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">
                        {STARTUP_STAGE_LABELS[activeUser.startupInfo.startupStage]}
                      </Badge>
                      <Badge variant="outline">
                        {COMMITMENT_LEVEL_LABELS[activeUser.startupInfo.startupCommitment]}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-1">Startup Goals</h3>
                      <p className="text-sm">{activeUser.startupInfo.startupGoals}</p>
                    </div>
                    
                    {/* Safely check if lookingFor exists before mapping */}
                    {activeUser.startupInfo.lookingFor && (
                      <div>
                        <h3 className="text-sm font-medium mb-1">Looking For</h3>
                        <div className="flex flex-wrap gap-1">
                          {activeUser.startupInfo.lookingFor.map(role => (
                            <Badge key={role} className="text-xs">
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <AlertCircle className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">
                      This user has not shared any startup information.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
            
            
          </CardContent>
          
          <CardFooter className="flex justify-center gap-4 p-4 pt-0">
            <Button 
              size="icon" 
              variant="outline" 
              className="hover:cursor-pointer h-14 w-14 rounded-full bg-background shadow-md hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-colors"
              onClick={handlePass}
            >
              <X className="h-6 w-6 text-destructive" />
            </Button>
            
            <Button 
              size="icon" 
              className="hover:cursor-pointer h-14 w-14 rounded-full shadow-md hover:bg-green-600 transition-colors"
              onClick={handleLike}
            >
              <Heart className="h-6 w-6" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}