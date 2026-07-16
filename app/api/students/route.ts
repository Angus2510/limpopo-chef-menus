import { NextRequest, NextResponse } from "next/server";

import { getStaffIdFromRequest, isObjectId } from "@/lib/auth-token";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  const auth = getStaffIdFromRequest(req);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const intakeGroupId = req.nextUrl.searchParams.get("intakeGroupId")?.trim();

  if (!intakeGroupId || !isObjectId(intakeGroupId)) {
    return NextResponse.json(
      { error: "Valid intakeGroupId is required" },
      { status: 400 },
    );
  }

  try {
    const students = await prisma.students.findMany({
      where: {
        active: true,
        intakeGroup: {
          has: intakeGroupId,
        },
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

    const mapped = students.map((student: (typeof students)[number]) => ({
      id: student.id,
      admissionNumber: student.admissionNumber,
      fullName:
        `${student.profile.firstName} ${student.profile.lastName}`.trim(),
    }));

    return NextResponse.json({ students: mapped });
  } catch (error) {
    console.error("Failed to load students:", error);
    return NextResponse.json(
      { error: "Failed to load students" },
      { status: 500 },
    );
  }
}
