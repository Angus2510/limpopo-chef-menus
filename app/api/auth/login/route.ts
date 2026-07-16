import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import prisma from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { identifier, password } = await request.json();

    if (!identifier || !password) {
      return NextResponse.json(
        { error: "Email/Mobile and password are required" },
        { status: 400 },
      );
    }

    const staff = await prisma.staffs.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }],
      },
    });

    if (staff?.password && bcrypt.compareSync(password, staff.password)) {
      if (!process.env.JWT_SECRET) {
        return NextResponse.json(
          { error: "JWT_SECRET is not configured" },
          { status: 500 },
        );
      }

      const token = jwt.sign(
        {
          id: staff.id,
          userType: "Staff",
        },
        process.env.JWT_SECRET,
        { expiresIn: "5h" },
      );

      const userData = {
        id: staff.id,
        firstName: staff.profile?.firstName || "",
        lastName: staff.profile?.lastName || "",
        userType: "Staff",
      };

      const response = NextResponse.json({
        user: userData,
        accessToken: token,
      });

      response.cookies.set({
        name: "accessToken",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 5,
      });

      response.cookies.set({
        name: "user",
        value: JSON.stringify(userData),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 5,
      });

      return response;
    }

    const student = await prisma.students.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }],
      },
    });

    if (student?.password && bcrypt.compareSync(password, student.password)) {
      if (student.active === false) {
        return NextResponse.json(
          {
            error: "Account disabled",
            reason: student.inactiveReason || "Your account has been disabled",
            accountDisabled: true,
          },
          { status: 403 },
        );
      }

      if (!process.env.JWT_SECRET) {
        return NextResponse.json(
          { error: "JWT_SECRET is not configured" },
          { status: 500 },
        );
      }

      const token = jwt.sign(
        {
          id: student.id,
          userType: "Student",
          active: student.active,
        },
        process.env.JWT_SECRET,
        { expiresIn: "5h" },
      );

      const userData = {
        id: student.id,
        firstName: student.profile?.firstName || "",
        lastName: student.profile?.lastName || "",
        userType: "Student",
        active: student.active,
        inactiveReason: student.inactiveReason,
      };

      const response = NextResponse.json({
        user: userData,
        accessToken: token,
      });

      response.cookies.set({
        name: "accessToken",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 5,
      });

      response.cookies.set({
        name: "user",
        value: JSON.stringify(userData),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 5,
      });

      return response;
    }

    const guardian = await prisma.guardians.findFirst({
      where: {
        OR: [{ email: identifier }, { mobileNumber: identifier }],
      },
    });

    if (guardian?.password && bcrypt.compareSync(password, guardian.password)) {
      const linkedStudent = await prisma.students.findUnique({
        where: { id: guardian.studentId },
      });

      if (!linkedStudent) {
        return NextResponse.json(
          { error: "No student linked to this guardian account" },
          { status: 403 },
        );
      }

      if (!linkedStudent.active) {
        return NextResponse.json(
          {
            error: "Student account disabled",
            reason:
              linkedStudent.inactiveReason ||
              "The linked student account has been disabled",
            accountDisabled: true,
          },
          { status: 403 },
        );
      }

      if (!process.env.JWT_SECRET) {
        return NextResponse.json(
          { error: "JWT_SECRET is not configured" },
          { status: 500 },
        );
      }

      const token = jwt.sign(
        {
          id: guardian.id,
          userType: "Guardian",
          linkedStudentId: linkedStudent.id,
          studentName: `${linkedStudent.profile.firstName} ${linkedStudent.profile.lastName}`,
          viewingAs: "Guardian",
        },
        process.env.JWT_SECRET,
        { expiresIn: "5h" },
      );

      const userData = {
        id: guardian.id,
        firstName: guardian.firstName || "",
        lastName: guardian.lastName || "",
        userType: "Guardian",
        linkedStudentId: linkedStudent.id,
        studentName: `${linkedStudent.profile.firstName} ${linkedStudent.profile.lastName}`,
        viewingAs: "Guardian",
      };

      const response = NextResponse.json({
        user: userData,
        accessToken: token,
      });

      response.cookies.set({
        name: "accessToken",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 5,
      });

      response.cookies.set({
        name: "user",
        value: JSON.stringify(userData),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 5,
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "An error occurred during login" },
      { status: 500 },
    );
  }
}
