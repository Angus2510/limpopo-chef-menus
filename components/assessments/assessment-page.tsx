"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { toast } from "sonner"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AssessmentTemplate, StudentAssessmentRecord } from "@/types/assessment"

type AssessmentPageProps = {
  template: AssessmentTemplate
  student: {
    id: string
    fullName: string
    admissionNumber: string
  }
}

export function AssessmentPage({ template, student }: AssessmentPageProps) {
  const [record, setRecord] = useState<StudentAssessmentRecord | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [updating, setUpdating] = useState(false)

  const readOnly = useMemo(() => {
    if (!record) {
      return false
    }

    return record.completed || record.locked
  }, [record])

  useEffect(() => {
    let cancelled = false

    async function ensureDraft() {
      setLoading(true)
      setError("")

      try {
        const response = await fetch("/api/student-assessments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId: student.id,
            assessmentCode: template.code,
          }),
        })

        const payload = (await response.json()) as {
          assessment?: StudentAssessmentRecord
          error?: string
        }

        if (!response.ok || !payload.assessment) {
          throw new Error(payload.error || "Unable to autosave assessment")
        }

        if (!cancelled) {
          setRecord(payload.assessment)
        }
      } catch (requestError) {
        if (!cancelled) {
          const message =
            requestError instanceof Error
              ? requestError.message
              : "Unable to autosave assessment"
          setError(message)
          toast.error(message)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    ensureDraft()

    return () => {
      cancelled = true
    }
  }, [student.id, template.code])

  async function markComplete() {
    setUpdating(true)

    try {
      const response = await fetch("/api/student-assessments", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: student.id,
          assessmentCode: template.code,
          completed: true,
        }),
      })

      const payload = (await response.json()) as {
        assessment?: StudentAssessmentRecord
        error?: string
      }

      if (!response.ok || !payload.assessment) {
        throw new Error(payload.error || "Unable to complete assessment")
      }

      setRecord(payload.assessment)
      toast.success("Assessment marked complete and locked")
    } catch (requestError) {
      const message =
        requestError instanceof Error ? requestError.message : "Unable to complete assessment"
      toast.error(message)
    } finally {
      setUpdating(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">{template.title}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Student: {student.fullName} ({student.admissionNumber})
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{template.code.toUpperCase()}</Badge>
            <Badge variant={readOnly ? "secondary" : "default"}>
              {readOnly ? "Read-only" : "Editable draft"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/dashboard/assessments">Back to Selection</Link>
            </Button>
            <Dialog>
              <DialogTrigger render={<Button variant="secondary" />}>
                Assessment Info
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Assessment framework only</DialogTitle>
                  <DialogDescription>
                    Criteria and scoring form fields are intentionally not created yet.
                    This page currently handles routing, state, autosave, and lock behavior.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {!readOnly ? (
              <AlertDialog>
                <AlertDialogTrigger render={<Button disabled={updating} />}>
                  Mark Complete
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Complete assessment?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Once completed, this assessment becomes read-only until an
                      administrator unlocks it.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={markComplete} disabled={updating}>
                      {updating ? "Saving..." : "Confirm"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : null}
          </div>

          <Separator />

          {loading ? (
            <p className="text-sm text-muted-foreground">Preparing assessment draft...</p>
          ) : null}

          {error ? (
            <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
              {error}
            </div>
          ) : null}

          {!loading && !error ? (
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="sections">Sections</TabsTrigger>
                <TabsTrigger value="status">Status</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Empty assessment page</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Assessment form fields and criteria are not implemented yet.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sections" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Sections placeholder</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Section and criterion rendering will be added in the next step.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="status" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Assessment status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>Completed: {record?.completed ? "Yes" : "No"}</p>
                    <p>Locked: {record?.locked ? "Yes" : "No"}</p>
                    <p>
                      Last saved: {record ? new Date(record.updatedAt).toLocaleString() : "-"}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : null}
        </CardContent>
      </Card>
    </div>
  )
}
