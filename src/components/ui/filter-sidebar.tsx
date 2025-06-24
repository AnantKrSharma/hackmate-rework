import { ScrollArea } from '@/components/ui/scroll-area'
import FilterPanel from './filter-panel'
import { FilterOptions } from '../../types'

interface FilterSidebarProps {
  filters: FilterOptions
  isLoadingPreferences: boolean
  userCoordinates: { latitude: number; longitude: number; geohash: string } | null
  isSavingLocation: boolean
  locationPermissionRequested: boolean
  requestLocationPermission: () => void
  handleFilterChange: (newFilters: Partial<FilterOptions>) => void
}

export default function FilterSidebar({
  filters,
  isLoadingPreferences,
  userCoordinates,
  isSavingLocation,
  locationPermissionRequested,
  requestLocationPermission,
  handleFilterChange
}: FilterSidebarProps) {
  return (
    <div className="w-1/3 bg-card rounded-lg border p-4">
      <h2 className="text-2xl font-semibold mb-6">Filters</h2>
      <ScrollArea className="h-[calc(100vh-300px)] p-3">
        <FilterPanel 
          filters={filters}
          isLoadingPreferences={isLoadingPreferences}
          userCoordinates={userCoordinates}
          isSavingLocation={isSavingLocation}
          locationPermissionRequested={locationPermissionRequested}
          requestLocationPermission={requestLocationPermission}
          handleFilterChange={handleFilterChange}
          isDesktop={true}
        />
      </ScrollArea>
    </div>
  )
}