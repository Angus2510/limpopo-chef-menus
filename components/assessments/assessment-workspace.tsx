"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Filter, ClipboardList } from "lucide-react"
import { toast } from "sonner"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ASSESSMENT_CATEGORY_LABELS,
  ASSESSMENT_TEMPLATES,
} from "@/lib/assessment-catalog"
import { AssessmentTemplate, IntakeGroupOption, StudentOption } from "@/types/assessment"

type GroupedAssessments = {
  category: string
  label: string
  items: AssessmentTemplate[]
}

export function AssessmentWorkspace() {
  const router = useRouter()

  const [intakeGroups, setIntakeGroups] = useState<IntakeGroupOption[]>([])
  const [selectedIntakeGroupId, setSelectedIntakeGroupId] = useState("")
  const [students, setStudents] = useState<StudentOption[]>([])
  const [selectedStudentId, setSelectedStudentId] = useState("")
  const [selectedAssessmentCode, setSelectedAssessmentCode] = useState("")
  const [assessmentSearchOpen, setAssessmentSearchOpen] = useState(false)

  const [loadingGroups, setLoadingGroups] = useState(true)
  const [loadingStudents, setLoadingStudents] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const groupedAssessments = useMemo<GroupedAssessments[]>(() => {
    return Object.entries(ASSESSMENT_CATEGORY_LABELS).map(([category, label]) => ({
      category,
      label,
      items: ASSESSMENT_TEMPLATES.filter((assessment) => assessment.category === category),
    }))
  }, [])

  const selectedAssessment = useMemo(
    () => ASSESSMENT_TEMPLATES.find((assessment) => assessment.code === selectedAssessmentCode),
    [selectedAssessmentCode],
  )

  const selectedStudent = useMemo(
    () => students.find((student) => student.id === selectedStudentId),
    [students, selectedStudentId],
  )

  useEffect(() => {
    let cancelled = false

    async function loadIntakeGroups() {
      setLoadingGroups(true)
      setErrorMessage("")

      try {
        const response = await fetch("/api/intake-groups", { cache: "no-store" })
        const payload = (await response.json()) as {
          intakeGroups?: IntakeGroupOption[]
          error?: string
        }

        if (!response.ok) {
          throw new Error(payload.error || "Unable to load intake groups")
        }

        if (!cancelled) {
          setIntakeGroups(payload.intakeGroups ?? [])
        }
      } catch (error) {
        if (!cancelled) {
          const message = error instanceof Error ? error.message : "Unable to load intake groups"
          setErrorMessage(message)
          toast.error(message)
        }
      } finally {
        if (!cancelled) {
          setLoadingGroups(false)
        }
      }
    }

    loadIntakeGroups()

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    async function loadStudents() {
      if (!selectedIntakeGroupId) {
        setStudents([])
        setSelectedStudentId("")
        return
      }

      setLoadingStudents(true)
      setErrorMessage("")

      try {
        const response = await fetch(
          `/api/students?intakeGroupId=${selectedIntakeGroupId}`,
          {
            cache: "no-store",
          },
        )
        const payload = (await response.json()) as {
          students?: StudentOption[]
          error?: string
        }

        if (!response.ok) {
          throw new Error(payload.error || "Unable to load students")
        }

        if (!cancelled) {
          setStudents(payload.students ?? [])
          setSelectedStudentId("")
        }
      } catch (error) {
        if (!cancelled) {
          const message = error instanceof Error ? error.message : "Unable to load students"
          setErrorMessage(message)
          toast.error(message)
        }
      } finally {
        if (!cancelled) {
          setLoadingStudents(false)
        }
      }
    }

    loadStudents()

    return () => {
      cancelled = true
    }
  }, [selectedIntakeGroupId])

  function openAssessment() {
    if (!selectedStudentId || !selectedAssessmentCode) {
      toast.error("Select a student and menu before continuing")
      return
    }

    router.push(
      `/dashboard/assessments/${selectedAssessmentCode}?studentId=${selectedStudentId}&intakeGroupId=${selectedIntakeGroupId}`,
    )
  }

  function resetSelections() {
    setSelectedIntakeGroupId("")
    setStudents([])
    setSelectedStudentId("")
    setSelectedAssessmentCode("")
    toast.info("Selection reset")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-3">
          <div>
            <CardTitle>Assessment Selection</CardTitle>
            <p className="text-sm text-muted-foreground">
              Choose intake group, student, and assessment menu.
            </p>
          </div>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" size="sm" />}>
              Workflow
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Assessment workflow</DialogTitle>
                <DialogDescription>
                  This framework supports selecting a student and menu, autosaving progress,
                  and enforcing read-only mode after completion.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-sm font-medium">Intake Group</p>
            <Select
              value={selectedIntakeGroupId}
              onValueChange={(value) => setSelectedIntakeGroupId(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={loadingGroups ? "Loading groups..." : "Select group"} />
              </SelectTrigger>
              <SelectContent>
                {intakeGroups.map((group) => (
                  <SelectItem key={group.id} value={group.id}>
                    {group.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Selected Student</p>
            <Select value={selectedStudentId} onValueChange={(value) => setSelectedStudentId(value)}>
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={
                    selectedIntakeGroupId
                      ? loadingStudents
                        ? "Loading students..."
                        : "Select student"
                      : "Choose intake first"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {students.map((student) => (
                  <SelectItem key={student.id} value={student.id}>
                    {student.fullName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Selected Menu</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 justify-start"
                onClick={() => setAssessmentSearchOpen(true)}
              >
                <Search />
                {selectedAssessment ? selectedAssessment.title : "Find menu"}
              </Button>
              <Button variant="secondary" onClick={openAssessment}>
                Open
              </Button>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{intakeGroups.length} Intake Groups</Badge>
              <Badge variant="secondary">{students.length} Students</Badge>
              <Badge variant="secondary">{ASSESSMENT_TEMPLATES.length} Menus</Badge>
              <AlertDialog>
                <AlertDialogTrigger render={<Button variant="ghost" size="sm" />}>
                  Reset selection
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Reset current selection?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This clears selected intake group, student, and menu from this screen.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={resetSelections}>Reset</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="students">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="menus">Menus</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Filter className="size-4" />
                Students in Selected Intake Group
              </CardTitle>
            </CardHeader>
            <CardContent>
              {errorMessage ? (
                <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
                  {errorMessage}
                </div>
              ) : null}

              {!selectedIntakeGroupId ? (
                <div className="rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
                  Select an intake group to load students.
                </div>
              ) : null}

              {selectedIntakeGroupId && !loadingStudents && students.length === 0 ? (
                <div className="rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
                  No students found for the selected intake group.
                </div>
              ) : null}

              {selectedIntakeGroupId && students.length > 0 ? (
                <ScrollArea className="h-72 rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Admission</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-24 text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => {
                        const selected = selectedStudentId === student.id

                        return (
                          <TableRow key={student.id} data-state={selected ? "selected" : undefined}>
                            <TableCell>{student.admissionNumber}</TableCell>
                            <TableCell>{student.fullName}</TableCell>
                            <TableCell>
                              <Badge variant={selected ? "default" : "outline"}>
                                {selected ? "Selected" : "Ready"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                size="sm"
                                variant={selected ? "secondary" : "outline"}
                                onClick={() => setSelectedStudentId(student.id)}
                              >
                                {selected ? "Current" : "Select"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </ScrollArea>
              ) : null}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="menus">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <ClipboardList className="size-4" />
                Available Menu Assessments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full">
                {groupedAssessments.map((group) => (
                  <AccordionItem key={group.category} value={group.category}>
                    <AccordionTrigger>
                      <span className="flex items-center gap-2">
                        {group.label}
                        <Badge variant="outline">{group.items.length}</Badge>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {group.items.map((assessment) => {
                          const active = assessment.code === selectedAssessmentCode

                          return (
                            <Button
                              key={assessment.id}
                              variant={active ? "default" : "outline"}
                              className="justify-start"
                              onClick={() => setSelectedAssessmentCode(assessment.code)}
                            >
                              {assessment.title}
                            </Button>
                          )
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Separator className="my-4" />

              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-muted-foreground">
                  {selectedAssessment
                    ? `Selected menu: ${selectedAssessment.title}`
                    : "No menu selected yet."}
                </p>
                <Button variant="secondary" onClick={openAssessment}>
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <CommandDialog
        open={assessmentSearchOpen}
        onOpenChange={setAssessmentSearchOpen}
        title="Select menu"
        description="Find and select a menu assessment"
      >
        <Command>
          <CommandInput placeholder="Search menu code or title..." />
          <CommandList>
            <CommandEmpty>No menus match your search.</CommandEmpty>
            {groupedAssessments.map((group, index) => (
              <div key={group.category}>
                <CommandGroup heading={group.label}>
                  {group.items.map((assessment) => (
                    <CommandItem
                      key={assessment.id}
                      value={`${assessment.code} ${assessment.title}`}
                      onSelect={() => {
                        setSelectedAssessmentCode(assessment.code)
                        setAssessmentSearchOpen(false)
                      }}
                    >
                      {assessment.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
                {index < groupedAssessments.length - 1 ? <CommandSeparator /> : null}
              </div>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>

      {selectedStudent ? (
        <p className="text-sm text-muted-foreground">
          Ready to assess <span className="font-medium text-foreground">{selectedStudent.fullName}</span>.
        </p>
      ) : null}
    </div>
  )
}
