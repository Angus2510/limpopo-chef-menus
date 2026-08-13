import { NextRequest, NextResponse } from "next/server";

import { createAssessmentBlueprint } from "@/components/assessments/blueprints";
import {
  ASSESSMENT_COMPETENCY_THRESHOLDS,
  ASSESSMENT_TEMPLATES,
} from "@/lib/assessment-catalog";
import { getStaffIdFromRequest, isObjectId } from "@/lib/auth-token";
import prisma from "@/lib/db";
import type { AssessmentItem } from "@/types/assessment";

function getTemplateByCode(code: string) {
  return ASSESSMENT_TEMPLATES.find((template) => template.code === code);
}

function getItemMaxMark(item: AssessmentItem): number {
  if (
    item.type === "checkbox" ||
    item.type === "recipe-card" ||
    item.type === "practical-dish"
  ) {
    return item.maxMark;
  }

  if (item.type === "group") {
    return item.items.reduce(
      (runningTotal, childItem) => runningTotal + getItemMaxMark(childItem),
      0,
    );
  }

  return 0;
}

function getBlueprintMaxScore(code: string): number | null {
  const template = getTemplateByCode(code);
  if (!template) {
    return null;
  }

  const blueprint = createAssessmentBlueprint(template);
  return blueprint.sections.reduce(
    (runningTotal, section) =>
      runningTotal +
      section.items.reduce(
        (sectionTotal, item) => sectionTotal + getItemMaxMark(item),
        0,
      ),
    0,
  );
}

function buildOutcomeTitleCandidates(templateTitle: string): string[] {
  const candidates = new Set<string>([templateTitle]);
  const finalSuffix = /\s+Final Summative Practical Exam$/i;
  const variantSuffix = /\s+(?:CATHSSETA|DIPLOMA|OCG)$/i;

  if (finalSuffix.test(templateTitle)) {
    const baseTitle = templateTitle.replace(finalSuffix, "").trim();
    candidates.add(`${baseTitle}- Final Summative Practical Exam`);
    candidates.add(`${baseTitle}: Final summative practical exam`);
  }

  if (variantSuffix.test(templateTitle)) {
    candidates.add(templateTitle.replace(variantSuffix, "").trim());
  }

  return [...candidates];
}

function getOutcomePriority(type: string | null | undefined): number {
  const normalizedType = String(type ?? "")
    .trim()
    .toLowerCase();

  if (normalizedType === "practical") {
    return 3;
  }

  if (normalizedType.includes("practical")) {
    return 2;
  }

  if (normalizedType.includes("exam")) {
    return 1;
  }

  return 0;
}

async function syncPortalResult(params: {
  studentId: string;
  assessmentCode: string;
  rawScore: number;
  updatedBy: string;
}) {
  const template = getTemplateByCode(params.assessmentCode);
  if (!template) {
    return;
  }

  const maxScore = getBlueprintMaxScore(params.assessmentCode);
  if (!maxScore || maxScore <= 0) {
    return;
  }

  const percentage = Number(((params.rawScore / maxScore) * 100).toFixed(2));
  const competencyThreshold =
    ASSESSMENT_COMPETENCY_THRESHOLDS[params.assessmentCode] ?? 70;
  const competency = percentage >= competencyThreshold;
  const candidateTitles = buildOutcomeTitleCandidates(template.title);

  const outcomes = await prisma.outcomes.findMany({
    where: {
      title: { in: candidateTitles },
    },
    select: {
      id: true,
      title: true,
      type: true,
    },
  });

  const selectedOutcome = [...outcomes].sort((left, right) => {
    return getOutcomePriority(right.type) - getOutcomePriority(left.type);
  })[0];

  if (!selectedOutcome) {
    console.warn(
      `No portal outcome mapping found for assessment ${params.assessmentCode} (${template.title})`,
    );
    return;
  }

  const existing = await prisma.results.findFirst({
    where: {
      studentId: params.studentId,
      outcomeId: selectedOutcome.id,
      source: "manual",
    },
    orderBy: {
      dateCreated: "desc",
    },
    select: {
      id: true,
    },
  });

  if (existing) {
    await prisma.results.update({
      where: { id: existing.id },
      data: {
        testScore: percentage,
        taskScore: percentage,
        mark: percentage,
        average: percentage,
        competency,
        updatedBy: params.updatedBy,
      },
    });
    return;
  }

  await prisma.results.create({
    data: {
      studentId: params.studentId,
      outcomeId: selectedOutcome.id,
      testScore: percentage,
      taskScore: percentage,
      mark: percentage,
      average: percentage,
      competency,
      source: "manual",
      updatedBy: params.updatedBy,
    },
  });
}

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

  try {
    const assessment = await prisma.studentassessments.findUnique({
      where: {
        studentId_assessmentCode: {
          studentId,
          assessmentCode,
        },
      },
    });

    return NextResponse.json({ assessment });
  } catch (error) {
    console.error("Failed to fetch student assessment:", error);
    return NextResponse.json(
      { error: "Failed to fetch student assessment" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const auth = getStaffIdFromRequest(req);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const payload = (await req.json()) as {
      studentId?: string;
      assessmentCode?: string;
      score?: number;
      comments?: string;
    };

    const studentId = String(payload.studentId || "").trim();
    const assessmentCode = String(payload.assessmentCode || "")
      .trim()
      .toLowerCase();

    if (!isObjectId(studentId) || !assessmentCode) {
      return NextResponse.json(
        { error: "Valid studentId and assessmentCode are required" },
        { status: 400 },
      );
    }

    const template = getTemplateByCode(assessmentCode);
    if (!template) {
      return NextResponse.json(
        { error: "Assessment template not found" },
        { status: 404 },
      );
    }

    const student = await prisma.students.findUnique({
      where: { id: studentId },
      select: { id: true, active: true },
    });

    if (!student || !student.active) {
      return NextResponse.json(
        { error: "Selected student is not available" },
        { status: 404 },
      );
    }

    const assessment = await prisma.studentassessments.upsert({
      where: {
        studentId_assessmentCode: {
          studentId,
          assessmentCode,
        },
      },
      create: {
        studentId,
        assessorId: auth.staffId,
        assessmentCode: template.code,
        assessmentTitle: template.title,
        assessmentCategory: template.category,
        score: typeof payload.score === "number" ? payload.score : null,
        comments:
          typeof payload.comments === "string" ? payload.comments : null,
        completed: false,
        locked: false,
      },
      update: {
        assessorId: auth.staffId,
        score: typeof payload.score === "number" ? payload.score : undefined,
        comments:
          typeof payload.comments === "string" ? payload.comments : undefined,
      },
    });

    return NextResponse.json({ assessment });
  } catch (error) {
    console.error("Failed to autosave student assessment:", error);
    return NextResponse.json(
      { error: "Failed to autosave student assessment" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: NextRequest) {
  const auth = getStaffIdFromRequest(req);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const payload = (await req.json()) as {
      studentId?: string;
      assessmentCode?: string;
      completed?: boolean;
      unlock?: boolean;
      score?: number;
      comments?: string;
    };

    const studentId = String(payload.studentId || "").trim();
    const assessmentCode = String(payload.assessmentCode || "")
      .trim()
      .toLowerCase();

    if (!isObjectId(studentId) || !assessmentCode) {
      return NextResponse.json(
        { error: "Valid studentId and assessmentCode are required" },
        { status: 400 },
      );
    }

    const current = await prisma.studentassessments.findUnique({
      where: {
        studentId_assessmentCode: {
          studentId,
          assessmentCode,
        },
      },
    });

    if (!current) {
      return NextResponse.json(
        { error: "Student assessment not found" },
        { status: 404 },
      );
    }

    if (current.locked && payload.unlock !== true) {
      return NextResponse.json(
        { error: "Assessment is locked and read-only" },
        { status: 423 },
      );
    }

    const completed = payload.completed === true;
    const updated = await prisma.studentassessments.update({
      where: { id: current.id },
      data: {
        completed,
        locked: completed ? true : current.locked,
        assessorId: auth.staffId,
        score: typeof payload.score === "number" ? payload.score : undefined,
        comments:
          typeof payload.comments === "string" ? payload.comments : undefined,
      },
    });

    if (completed && typeof payload.score === "number") {
      await syncPortalResult({
        studentId,
        assessmentCode,
        rawScore: payload.score,
        updatedBy: auth.staffId,
      });
    }

    return NextResponse.json({ assessment: updated });
  } catch (error) {
    console.error("Failed to update student assessment:", error);
    return NextResponse.json(
      { error: "Failed to update student assessment" },
      { status: 500 },
    );
  }
}
