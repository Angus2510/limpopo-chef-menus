import { notFound } from "next/navigation"

import { AssessmentPage } from "@/components/assessments/assessment-page"
import { ASSESSMENT_TEMPLATES } from "@/lib/assessment-catalog"
import prisma from "@/lib/db"

type AssessmentRouteProps = {
  params: Promise<{ assessmentCode: string }>
  searchParams: Promise<{ studentId?: string }>
}

const objectIdRegex = /^[0-9a-fA-F]{24}$/

export default async function AssessmentRoute({
  params,
  searchParams,
}: AssessmentRouteProps) {
  const [{ assessmentCode }, { studentId }] = await Promise.all([params, searchParams])

  const template = ASSESSMENT_TEMPLATES.find(
    (item) => item.code === assessmentCode.toLowerCase(),
  )

  if (!template) {
    notFound()
  }

  if (!studentId || !objectIdRegex.test(studentId)) {
    notFound()
  }

  const student = await prisma.students.findUnique({
    where: { id: studentId },
    select: {
      id: true,
      admissionNumber: true,
      profile: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  })

  if (!student) {
    notFound()
  }

  return (
    <AssessmentPage
      template={template}
      student={{
        id: student.id,
        admissionNumber: student.admissionNumber,
        fullName: `${student.profile.firstName} ${student.profile.lastName}`.trim(),
      }}
    />
  )
}
