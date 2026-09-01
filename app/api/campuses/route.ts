import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/db";
import { getStaffIdFromRequest } from "@/lib/auth-token";

export async function GET(req: NextRequest) {
  const auth = getStaffIdFromRequest(req);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const campuses = await prisma.campus.findMany({
      select: {
        id: true,
        title: true,
      },
      orderBy: {
        title: "asc",
      },
    });

    return NextResponse.json({ campuses });
  } catch (error) {
    console.error("Failed to load campuses:", error);
    return NextResponse.json(
      { error: "Failed to load campuses" },
      { status: 500 },
    );
  }
}
