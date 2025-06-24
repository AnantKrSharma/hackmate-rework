import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationControlsProps {
  currentIndex: number
  totalCount: number
  onPrevious: () => void
  onNext: () => void
}

export default function PaginationControls({
  currentIndex,
  totalCount,
  onPrevious,
  onNext
}: PaginationControlsProps) {
  return (
    <div className="flex justify-center mt-8 gap-6">
      <Button 
        variant="outline" 
        size="sm"
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="hover:cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        onClick={onNext}
        disabled={currentIndex === totalCount - 1}
        className="hover:cursor-pointer"
      >
        Next
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )
}