"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type AssessmentDetailErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function AssessmentDetailError({
  error,
  reset,
}: AssessmentDetailErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Failed to open assessment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <Button onClick={reset}>Try again</Button>
      </CardContent>
    </Card>
  )
}
