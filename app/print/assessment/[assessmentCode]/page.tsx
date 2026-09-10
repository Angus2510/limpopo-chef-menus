import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

import { AssessmentPrintReport } from "@/components/assessments/assessment-print-report";
import {
  calculateAssessmentScore,
  createEmptyAssessmentDraft,
  parseAssessmentDraft,
} from "@/components/assessments/assessment-scoring";
import { createAssessmentBlueprint } from "@/components/assessments/blueprints";
import { PrintActions } from "@/components/assessments/print-actions";
import { ASSESSMENT_TEMPLATES } from "@/lib/assessment-catalog";
import prisma from "@/lib/db";

type PrintAssessmentRouteProps = {
  params: Promise<{ assessmentCode: string }>;
  searchParams: Promise<{ studentId?: string }>;
};

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export default async function PrintAssessmentRoute({
  params,
  searchParams,
}: PrintAssessmentRouteProps) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    redirect("/login");
  }

  const [{ assessmentCode }, { studentId }] = await Promise.all([
    params,
    searchParams,
  ]);

  const template = ASSESSMENT_TEMPLATES.find(
    (item) => item.code === assessmentCode.toLowerCase(),
  );

  if (!template) {
    notFound();
  }

  if (!studentId || !objectIdRegex.test(studentId)) {
    notFound();
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
  });

  if (!student) {
    notFound();
  }

  const record = await prisma.studentassessments.findUnique({
    where: {
      studentId_assessmentCode: {
        studentId,
        assessmentCode: template.code,
      },
    },
  });

  const blueprint = createAssessmentBlueprint(template);
  const draft =
    parseAssessmentDraft(record?.comments ?? null) ??
    createEmptyAssessmentDraft(blueprint);
  const assessmentScore = calculateAssessmentScore(blueprint, draft);

  return (
    <div className="min-h-full bg-background">
      <PrintActions
        downloadUrl={`/api/student-assessments/pdf?studentId=${student.id}&assessmentCode=${template.code}`}
      />
      <AssessmentPrintReport
        blueprint={blueprint}
        draft={draft}
        student={{
          fullName:
            `${student.profile.firstName} ${student.profile.lastName}`.trim(),
          admissionNumber: student.admissionNumber,
        }}
        score={assessmentScore.score}
        maxScore={assessmentScore.maxScore}
        percentage={assessmentScore.percentage}
        completed={Boolean(record?.completed)}
        generatedAt={new Date().toLocaleString("en-ZA")}
      />
    </div>
  );
}
