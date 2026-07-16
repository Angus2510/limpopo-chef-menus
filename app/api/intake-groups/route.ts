import { NextRequest, NextResponse } from "next/server"

import prisma from "@/lib/db"
import { getStaffIdFromRequest } from "@/lib/auth-token"

export async function GET(req: NextRequest) {
  const auth = getStaffIdFromRequest(req)
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status })
  }

  try {
    const intakeGroups = await prisma.intakegroups.findMany({
      select: {
        id: true,
        title: true,
      },
      orderBy: {
        title: "asc",
      },
    })

    return NextResponse.json({ intakeGroups })
  } catch (error) {
    console.error("Failed to load intake groups:", error)
    return NextResponse.json(
      { error: "Failed to load intake groups" },
      { status: 500 },
    )
  }
}
