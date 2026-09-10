import { NextRequest, NextResponse } from "next/server";

import {
  createEmptyAssessmentDraft,
  parseAssessmentDraft,
} from "@/components/assessments/assessment-scoring";
import { createAssessmentBlueprint } from "@/components/assessments/blueprints";
import { ASSESSMENT_TEMPLATES } from "@/lib/assessment-catalog";
import { createAssessmentPdf } from "@/lib/assessment-pdf";
import { getStaffIdFromRequest, isObjectId } from "@/lib/auth-token";
import prisma from "@/lib/db";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const auth = getStaffIdFromRequest(req);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const studentId = req.nextUrl.searchParams.get("studentId")?.trim() ?? "";
  const assessmentCode =
    req.nextUrl.searchParams.get("assessmentCode")?.trim().toLowerCase() ?? "";

  if (!isObjectId(studentId) || !assessmentCode) {
    return NextResponse.json(
      { error: "Valid studentId and assessmentCode are required" },
      { status: 400 },
    );
  }

  const template = ASSESSMENT_TEMPLATES.find(
    (item) => item.code === assessmentCode,
  );
  if (!template) {
    return NextResponse.json(
      { error: "Assessment template not found" },
      { status: 404 },
    );
  }

  try {
    const [student, record] = await Promise.all([
      prisma.students.findUnique({
        where: { id: studentId },
        select: {
          admissionNumber: true,
          profile: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      }),
      prisma.studentassessments.findUnique({
        where: {
          studentId_assessmentCode: {
            studentId,
            assessmentCode: template.code,
          },
        },
      }),
    ]);

    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    const blueprint = createAssessmentBlueprint(template);
    const draft =
      parseAssessmentDraft(record?.comments ?? null) ??
      createEmptyAssessmentDraft(blueprint);
    const fullName =
      `${student.profile.firstName} ${student.profile.lastName}`.trim();
    const pdf = await createAssessmentPdf({
      blueprint,
      draft,
      student: {
        fullName,
        admissionNumber: student.admissionNumber,
      },
      completed: Boolean(record?.completed),
      generatedAt: new Date().toLocaleString("en-ZA"),
    });
    const filename = `${fullName}-${template.code}-assessment.pdf`
      .replace(/[^a-z0-9._-]+/gi, "-")
      .replace(/-+/g, "-");

    return new NextResponse(pdf as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Failed to generate assessment PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate assessment PDF" },
      { status: 500 },
    );
  }
}
