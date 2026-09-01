import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getStaffIdFromRequest, isObjectId } from "@/lib/auth-token";

export async function GET(req: NextRequest) {
  const auth = getStaffIdFromRequest(req);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const campusId = req.nextUrl.searchParams.get("campusId")?.trim();

  if (campusId && !isObjectId(campusId)) {
    return NextResponse.json({ error: "Invalid campusId" }, { status: 400 });
  }

  try {
    const intakeGroups = await prisma.intakegroups.findMany({
      where: {
        ...(campusId ? { campus: { has: campusId } } : {}),
      },
      select: {
        id: true,
        title: true,
        campus: true,
      },
      orderBy: {
        title: "asc",
      },
    });

    return NextResponse.json({ intakeGroups });
  } catch (error) {
    console.error("Failed to load intake groups:", error);
    return NextResponse.json(
      { error: "Failed to load intake groups" },
      { status: 500 },
    );
  }
}
