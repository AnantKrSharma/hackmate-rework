// Update the LoadingState component to accept a message prop

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = "Loading profiles..." }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-80 p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
      <p className="text-lg font-medium text-muted-foreground">{message}</p>
    </div>
  )
}
