import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

interface EmptyStateProps {
  onAdjustFilters: () => void
}

export default function EmptyState({ onAdjustFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <div className="mb-4 p-4 rounded-full bg-muted">
        <Users className="h-10 w-10 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">No matches found</h2>
      <p className="text-muted-foreground max-w-sm">
        Try adjusting your filters to find more potential matches.
      </p>
      <Button 
        variant="outline" 
        className="mt-6 hover:cursor-pointer"
        onClick={onAdjustFilters}
      >
        Adjust Filters
      </Button>
    </div>
  )
}