import { NextRequest, NextResponse } from "next/server"

import { ASSESSMENT_TEMPLATES } from "@/lib/assessment-catalog"
import { getStaffIdFromRequest, isObjectId } from "@/lib/auth-token"
import prisma from "@/lib/db"

function getTemplateByCode(code: string) {
  return ASSESSMENT_TEMPLATES.find((template) => template.code === code)
}

export async function GET(req: NextRequest) {
  const auth = getStaffIdFromRequest(req)
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status })
  }

  const studentId = req.nextUrl.searchParams.get("studentId")?.trim() ?? ""
  const assessmentCode =
    req.nextUrl.searchParams.get("assessmentCode")?.trim().toLowerCase() ?? ""

  if (!isObjectId(studentId) || !assessmentCode) {
    return NextResponse.json(
      { error: "Valid studentId and assessmentCode are required" },
      { status: 400 },
    )
  }

  try {
    const assessment = await prisma.studentassessments.findUnique({
      where: {
        studentId_assessmentCode: {
          studentId,
          assessmentCode,
        },
      },
    })

    return NextResponse.json({ assessment })
  } catch (error) {
    console.error("Failed to fetch student assessment:", error)
    return NextResponse.json(
      { error: "Failed to fetch student assessment" },
      { status: 500 },
    )
  }
}

export async function POST(req: NextRequest) {
  const auth = getStaffIdFromRequest(req)
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status })
  }

  try {
    const payload = (await req.json()) as {
      studentId?: string
      assessmentCode?: string
    }

    const studentId = String(payload.studentId || "").trim()
    const assessmentCode = String(payload.assessmentCode || "")
      .trim()
      .toLowerCase()

    if (!isObjectId(studentId) || !assessmentCode) {
      return NextResponse.json(
        { error: "Valid studentId and assessmentCode are required" },
        { status: 400 },
      )
    }

    const template = getTemplateByCode(assessmentCode)
    if (!template) {
      return NextResponse.json(
        { error: "Assessment template not found" },
        { status: 404 },
      )
    }

    const student = await prisma.students.findUnique({
      where: { id: studentId },
      select: { id: true, active: true },
    })

    if (!student || !student.active) {
      return NextResponse.json(
        { error: "Selected student is not available" },
        { status: 404 },
      )
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
        completed: false,
        locked: false,
      },
      update: {
        assessorId: auth.staffId,
      },
    })

    return NextResponse.json({ assessment })
  } catch (error) {
    console.error("Failed to autosave student assessment:", error)
    return NextResponse.json(
      { error: "Failed to autosave student assessment" },
      { status: 500 },
    )
  }
}

export async function PATCH(req: NextRequest) {
  const auth = getStaffIdFromRequest(req)
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status })
  }

  try {
    const payload = (await req.json()) as {
      studentId?: string
      assessmentCode?: string
      completed?: boolean
      unlock?: boolean
    }

    const studentId = String(payload.studentId || "").trim()
    const assessmentCode = String(payload.assessmentCode || "")
      .trim()
      .toLowerCase()

    if (!isObjectId(studentId) || !assessmentCode) {
      return NextResponse.json(
        { error: "Valid studentId and assessmentCode are required" },
        { status: 400 },
      )
    }

    const current = await prisma.studentassessments.findUnique({
      where: {
        studentId_assessmentCode: {
          studentId,
          assessmentCode,
        },
      },
    })

    if (!current) {
      return NextResponse.json(
        { error: "Student assessment not found" },
        { status: 404 },
      )
    }

    if (current.locked && payload.unlock !== true) {
      return NextResponse.json(
        { error: "Assessment is locked and read-only" },
        { status: 423 },
      )
    }

    const completed = payload.completed === true
    const updated = await prisma.studentassessments.update({
      where: { id: current.id },
      data: {
        completed,
        locked: completed ? true : current.locked,
        assessorId: auth.staffId,
      },
    })

    return NextResponse.json({ assessment: updated })
  } catch (error) {
    console.error("Failed to update student assessment:", error)
    return NextResponse.json(
      { error: "Failed to update student assessment" },
      { status: 500 },
    )
  }
}
