"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type AssessmentsErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function AssessmentsError({ error, reset }: AssessmentsErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Failed to load assessment workspace</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <Button onClick={reset}>Try again</Button>
      </CardContent>
    </Card>
  )
}
