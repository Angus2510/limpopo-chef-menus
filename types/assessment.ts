export type AssessmentCategory = "menu" | "menu-a" | "menu-b" | "menu-c" | "menu-p"

export type AssessmentTemplate = {
  id: string
  code: string
  title: string
  category: AssessmentCategory
}

export type IntakeGroupOption = {
  id: string
  title: string
}

export type StudentOption = {
  id: string
  admissionNumber: string
  fullName: string
}

export type StudentAssessmentRecord = {
  id: string
  studentId: string
  assessorId: string
  assessmentCode: string
  assessmentTitle: string
  assessmentCategory: AssessmentCategory
  score: number | null
  comments: string | null
  completed: boolean
  locked: boolean
  createdAt: string
  updatedAt: string
}
