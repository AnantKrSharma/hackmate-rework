import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { ScrollArea } from '@/components/ui/scroll-area'
import FilterPanel from './filter-panel'
import { FilterOptions } from '../../types'

interface MobileFilterSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  filters: FilterOptions
  isLoadingPreferences: boolean
  userCoordinates: { latitude: number; longitude: number; geohash: string } | null
  isSavingLocation: boolean
  locationPermissionRequested: boolean
  requestLocationPermission: () => void
  handleFilterChange: (newFilters: Partial<FilterOptions>) => void
}

export default function MobileFilterSheet({
  open,
  onOpenChange,
  filters,
  isLoadingPreferences,
  userCoordinates,
  isSavingLocation,
  locationPermissionRequested,
  requestLocationPermission,
  handleFilterChange
}: MobileFilterSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2 mt-3">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[480px] overflow-y-auto px-4">
        <SheetHeader className="-ml-3">
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Refine your matches based on preferences
          </SheetDescription>
        </SheetHeader>
        
        <ScrollArea className="px-1 sm:px-2">
          <FilterPanel 
            filters={filters}
            isLoadingPreferences={isLoadingPreferences}
            userCoordinates={userCoordinates}
            isSavingLocation={isSavingLocation}
            locationPermissionRequested={locationPermissionRequested}
            requestLocationPermission={requestLocationPermission}
            handleFilterChange={handleFilterChange}
            onClose={() => onOpenChange(false)}
          />
        </ScrollArea>
        
        {/* <SheetFooter className="mt-4">
          <Button onClick={() => onOpenChange(false)}>Apply Filters</Button>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
