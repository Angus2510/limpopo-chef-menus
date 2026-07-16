import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AssessmentDetailLoading() {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <Skeleton className="h-5 w-72" />
        <Skeleton className="h-4 w-52" />
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton className="h-10 w-56" />
        <Skeleton className="h-48 w-full" />
      </CardContent>
    </Card>
  )
}
