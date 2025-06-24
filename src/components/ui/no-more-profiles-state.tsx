import { Button } from './button'
import { Loader2 } from 'lucide-react'

interface NoMoreProfilesStateProps {
  onStartOver: () => void
  onAdjustFilters: () => void
  isRefreshing?: boolean
}

export default function NoMoreProfilesState({
  onStartOver,
  onAdjustFilters,
  isRefreshing = false
}: NoMoreProfilesStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center p-4 rounded-lg border border-dashed">
      <h3 className="text-2xl font-bold mb-2">No More Profiles</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        You have seen all available profiles matching your current filters.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button onClick={onStartOver} disabled={isRefreshing} className='hover:cursor-pointer'>
          {isRefreshing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Refreshing...
            </>
          ) : (
            'Start Over'
          )}
        </Button>
        <Button onClick={onAdjustFilters} variant="outline" className='hover:cursor-pointer'>
          Adjust Filters
        </Button>
      </div>
    </div>
  )
}