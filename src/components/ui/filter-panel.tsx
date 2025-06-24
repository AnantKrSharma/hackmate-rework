'use client'

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from "@/components/ui/slider"
import { Switch } from '@/components/ui/switch'
import { Loader2, MapPin } from "lucide-react"
import { FilterOptions, WorkingStyle, CollaborationPref, StartupStage } from '../../types'
import { 
  WORKING_STYLE_LABELS, 
  COLLABORATION_PREF_LABELS, 
  STARTUP_STAGE_LABELS, 
  DEFAULT_FILTERS,
  DEFAULT_USER_PREFERENCES 
} from '../../constants'
import { fetchAvailableSkillsAndDomains } from '@/lib/filter-utils'

interface FilterPanelProps {
  filters: FilterOptions
  isLoadingPreferences: boolean
  userCoordinates: { latitude: number; longitude: number; geohash: string } | null
  isSavingLocation: boolean
  locationPermissionRequested: boolean
  requestLocationPermission: () => void
  handleFilterChange: (newFilters: Partial<FilterOptions>) => void
  onClose?: () => void
  isDesktop?: boolean
}

export default function FilterPanel({
  filters,
  isLoadingPreferences,
  userCoordinates,
  isSavingLocation,
  locationPermissionRequested,
  requestLocationPermission,
  handleFilterChange,
  onClose,
  isDesktop = false
}: FilterPanelProps) {
  // State for skills and domains
  const [allSkills, setAllSkills] = useState<string[]>([])
  const [allDomains, setAllDomains] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch skills and domains on component mount
  useEffect(() => {
    const loadSkillsAndDomains = async () => {
      setIsLoading(true)
      try {
        const { allSkills, allDomains } = await fetchAvailableSkillsAndDomains()
        setAllSkills(allSkills)
        setAllDomains(allDomains)
      } catch (error) {
        console.error('Error loading skills and domains:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadSkillsAndDomains()
  }, [])
  
  // Toggle handlers
  const toggleSkill = (skill: string) => {
    handleFilterChange({
      skills: filters.skills.includes(skill)
        ? filters.skills.filter(s => s !== skill)
        : [...filters.skills, skill]
    })
  }

  const toggleDomain = (domain: string) => {
    handleFilterChange({
      domains: filters.domains.includes(domain)
        ? filters.domains.filter(d => d !== domain)
        : [...filters.domains, domain]
    })
  }

  const toggleWorkingStyle = (style: WorkingStyle) => {
    handleFilterChange({
      workingStyles: filters.workingStyles.includes(style)
        ? filters.workingStyles.filter(s => s !== style)
        : [...filters.workingStyles, style]
    })
  }

  const toggleCollaborationPref = (pref: CollaborationPref) => {
    handleFilterChange({
      collaborationPrefs: filters.collaborationPrefs.includes(pref)
        ? filters.collaborationPrefs.filter(p => p !== pref)
        : [...filters.collaborationPrefs, pref]
    })
  }

  const toggleStartupStage = (stage: StartupStage) => {
    handleFilterChange({
      startupStages: filters.startupStages?.includes(stage)
        ? filters.startupStages.filter(s => s !== stage)
        : [...(filters.startupStages || []), stage]
    })
  }
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch 
            id="use-profile-prefs"
            checked={filters.preferencesFromProfile}
            onCheckedChange={(checked) => {
              handleFilterChange({ preferencesFromProfile: checked })
              // Reset filters if turning on profile preferences
              if (checked) {
                setTimeout(() => {
                  handleFilterChange({
                    workingStyles: [DEFAULT_USER_PREFERENCES.workingStyle],
                    collaborationPrefs: [DEFAULT_USER_PREFERENCES.collaborationPref],
                    skills: DEFAULT_USER_PREFERENCES.skills.slice(0, 1),
                    domains: DEFAULT_USER_PREFERENCES.domainExpertise.slice(0, 1),
                    location: DEFAULT_USER_PREFERENCES.location,
                    maxDistance: DEFAULT_USER_PREFERENCES.maxDistance,
                    enableLocationBasedMatching: DEFAULT_USER_PREFERENCES.enableLocationBasedMatching,
                  })
                }, 500)
              }
            }}
          />
          <Label htmlFor="use-profile-prefs" className="cursor-pointer">
            Use my profile preferences
          </Label>
        </div>
        {isLoadingPreferences && <Loader2 className="h-4 w-4 animate-spin" />}
      </div>
      
      {/* Location Filter */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Location</h3>
          <div className="flex items-center space-x-2">
            <Switch 
              id="enable-location"
              checked={filters.enableLocationBasedMatching}
              onCheckedChange={(checked) => {
                handleFilterChange({ enableLocationBasedMatching: checked })
                if (checked && !locationPermissionRequested) {
                  requestLocationPermission()
                }
              }}
            />
            <Label htmlFor="enable-location" className="cursor-pointer">
              Enable location
            </Label>
          </div>
        </div>
        
        {filters.enableLocationBasedMatching && userCoordinates && (
          <div className="mt-2 p-3 bg-muted/30 rounded-md text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium">Your location data:</span>
              {isSavingLocation && <Loader2 className="h-3 w-3 animate-spin" />}
            </div>
            
            <div className="space-y-1 text-muted-foreground">
              <p className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> 
                Coordinates: {userCoordinates.latitude.toFixed(5)}, {userCoordinates.longitude.toFixed(5)}
              </p>
              <p className="flex items-center gap-1">
                <Badge variant="outline" className="text-[10px] h-4">
                  {userCoordinates.geohash}
                </Badge>
                <span className="text-[10px]">(geohash)</span>
              </p>
              <p className="mt-2 text-[10px] border-t border-border/50 pt-1">
                Finding users within approximately {filters.maxDistance} miles of your location
                <Slider
                  value={[filters.maxDistance || 50]}
                  min={5}
                  max={500}
                  step={5}
                  onValueChange={(value) => handleFilterChange({ maxDistance: value[0] })}
                />
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Experience Range */}
      <div className="space-y-4">
        <h3 className="font-medium">Years of Experience</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">{filters.experienceRange[0]} years</span>
            <span className="text-sm text-muted-foreground">{filters.experienceRange[1]} years</span>
          </div>
          <Slider
            value={filters.experienceRange}
            min={0}
            max={15}
            step={1}
            onValueChange={(value) => handleFilterChange({ experienceRange: [value[0], value[1]] })}
          />
        </div>
      </div>
      
      {/* Working Style */}
      <div className="space-y-4">
        <h3 className="font-medium">Working Style</h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(WORKING_STYLE_LABELS).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox 
                id={`style-${value}`}
                checked={filters.workingStyles.includes(value as WorkingStyle)}
                onCheckedChange={() => toggleWorkingStyle(value as WorkingStyle)}
              />
              <Label htmlFor={`style-${value}`}>{label}</Label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Collaboration Preference */}
      <div className="space-y-4">
        <h3 className="font-medium">Collaboration Preference</h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(COLLABORATION_PREF_LABELS).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox 
                id={`collab-${value}`}
                checked={filters.collaborationPrefs.includes(value as CollaborationPref)}
                onCheckedChange={() => toggleCollaborationPref(value as CollaborationPref)}
              />
              <Label htmlFor={`collab-${value}`}>{label}</Label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Skills */}
      <div className="space-y-4">
        <h3 className="font-medium">Skills</h3>
        {isLoading ? (
          <div className="flex items-center justify-center p-4">
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            <span>Loading skills...</span>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {allSkills.map(skill => (
              <Badge 
                key={skill}
                variant={filters.skills.includes(skill) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      {/* Domains */}
      <div className="space-y-4">
        <h3 className="font-medium">Domain Expertise</h3>
        {isLoading ? (
          <div className="flex items-center justify-center p-4">
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            <span>Loading domains...</span>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {allDomains.map(domain => (
              <Badge 
                key={domain}
                variant={filters.domains.includes(domain) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleDomain(domain)}
              >
                {domain}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      {/* Startup Stage */}
      <div className="space-y-4">
        <h3 className="font-medium">Startup Stage</h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(STARTUP_STAGE_LABELS).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox 
                id={`stage-${value}`}
                checked={filters.startupStages?.includes(value as StartupStage)}
                onCheckedChange={() => toggleStartupStage(value as StartupStage)}
              />
              <Label htmlFor={`stage-${value}`}>{label}</Label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between [&>*]:hover:cursor-pointer">
        <Button 
          variant="outline" 
          onClick={() => {
            handleFilterChange(DEFAULT_FILTERS)
          }}
          className="hover:cursor-pointer"
        >
          Reset Filters
        </Button>
        {/* {!isDesktop && onClose && ( */}
          <Button onClick={onClose}
                  className="hover:cursor-pointer"
          >
            Apply Filters
          </Button>
        {/* )} */}
      </div>
    </div>
  )
}