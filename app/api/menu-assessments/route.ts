import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import prisma from "@/lib/db";

type AccessTokenPayload = {
  id?: string;
  userType?: string;
};

type MarkRequestBody = {
  studentIds?: string[];
  outcomeId?: string;
  testScore?: number;
  taskScore?: number;
  competency?: boolean;
};

const OBJECT_ID_REGEX = /^[0-9a-fA-F]{24}$/;

function isObjectId(value: string): boolean {
  return OBJECT_ID_REGEX.test(value);
}

function toNumber(value: unknown): number | null {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

async function getStaffFromAccessToken(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  if (!token) {
    return { error: "Unauthorized - No access token", status: 401 as const };
  }

  if (!process.env.JWT_SECRET) {
    return { error: "JWT_SECRET is not configured", status: 500 as const };
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
    ) as AccessTokenPayload;

    if (!decoded?.id || decoded.userType !== "Staff") {
      return {
        error: "Unauthorized - Only staff can add marks",
        status: 403 as const,
      };
    }

    if (!isObjectId(decoded.id)) {
      return { error: "Invalid staff token payload", status: 401 as const };
    }

    return { staffId: decoded.id };
  } catch {
    return { error: "Unauthorized - Invalid token", status: 401 as const };
  }
}

export async function GET(req: NextRequest) {
  try {
    const auth = await getStaffFromAccessToken(req);
    if ("error" in auth) {
      return NextResponse.json({ error: auth.error }, { status: auth.status });
    }

    const campusId = req.nextUrl.searchParams.get("campusId")?.trim();
    const intakeGroupId = req.nextUrl.searchParams.get("intakeGroupId")?.trim();

    if (campusId && !isObjectId(campusId)) {
      return NextResponse.json({ error: "Invalid campusId" }, { status: 400 });
    }

    if (intakeGroupId && !isObjectId(intakeGroupId)) {
      return NextResponse.json(
        { error: "Invalid intakeGroupId" },
        { status: 400 },
      );
    }

    const students = await prisma.students.findMany({
      where: {
        active: true,
        ...(campusId ? { campus: { has: campusId } } : {}),
        ...(intakeGroupId ? { intakeGroup: { has: intakeGroupId } } : {}),
      },
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
      orderBy: {
        admissionNumber: "asc",
      },
    });

    return NextResponse.json({ students });
  } catch (error) {
    console.error("Menu assessment student fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getStaffFromAccessToken(req);
    if ("error" in auth) {
      return NextResponse.json({ error: auth.error }, { status: auth.status });
    }

    const body = (await req.json()) as MarkRequestBody;

    const studentIds = Array.isArray(body.studentIds)
      ? body.studentIds.map((id: string) => String(id).trim())
      : [];
    const outcomeId = String(body.outcomeId || "").trim();
    const testScore = toNumber(body.testScore);
    const taskScore = toNumber(body.taskScore);

    if (!studentIds.length) {
      return NextResponse.json(
        { error: "studentIds is required" },
        { status: 400 },
      );
    }

    if (!isObjectId(outcomeId)) {
      return NextResponse.json(
        { error: "Valid outcomeId is required" },
        { status: 400 },
      );
    }

    if (!studentIds.every(isObjectId)) {
      return NextResponse.json(
        { error: "All studentIds must be valid ObjectIds" },
        { status: 400 },
      );
    }

    if (testScore === null || taskScore === null) {
      return NextResponse.json(
        { error: "testScore and taskScore must be valid numbers" },
        { status: 400 },
      );
    }

    if (testScore < 0 || taskScore < 0) {
      return NextResponse.json(
        { error: "Scores cannot be negative" },
        { status: 400 },
      );
    }

    const competency =
      typeof body.competency === "boolean"
        ? body.competency
        : (testScore + taskScore) / 2 >= 50;

    const mark = Number(((testScore + taskScore) / 2).toFixed(2));

    const existingStudents = await prisma.students.findMany({
      where: {
        id: { in: studentIds },
        active: true,
      },
      select: { id: true },
    });

    const activeIds = new Set(
      existingStudents.map((student: { id: string }) => student.id),
    );
    const invalidStudentIds = studentIds.filter(
      (id: string) => !activeIds.has(id),
    );

    if (invalidStudentIds.length) {
      return NextResponse.json(
        {
          error: "Some selected students were not found or are inactive",
          invalidStudentIds,
        },
        { status: 400 },
      );
    }

    const saved = [] as Array<{
      id: string;
      studentId: string;
      action: "created" | "updated";
    }>;

    for (const studentId of studentIds) {
      const existing = await prisma.results.findFirst({
        where: {
          studentId,
          outcomeId,
          source: "manual",
        },
        orderBy: {
          dateCreated: "desc",
        },
        select: { id: true },
      });

      if (existing) {
        const updated = await prisma.results.update({
          where: { id: existing.id },
          data: {
            testScore,
            taskScore,
            mark,
            average: mark,
            competency,
            updatedBy: auth.staffId,
          },
          select: { id: true, studentId: true },
        });

        saved.push({
          id: updated.id,
          studentId: updated.studentId,
          action: "updated",
        });
        continue;
      }

      const created = await prisma.results.create({
        data: {
          studentId,
          outcomeId,
          testScore,
          taskScore,
          mark,
          average: mark,
          competency,
          source: "manual",
          updatedBy: auth.staffId,
        },
        select: { id: true, studentId: true },
      });

      saved.push({
        id: created.id,
        studentId: created.studentId,
        action: "created",
      });
    }

    return NextResponse.json({
      message: "Menu assessment marks saved",
      count: saved.length,
      mark,
      saved,
    });
  } catch (error) {
    console.error("Menu assessment mark save error:", error);
    return NextResponse.json(
      { error: "Failed to save marks" },
      { status: 500 },
    );
  }
}
