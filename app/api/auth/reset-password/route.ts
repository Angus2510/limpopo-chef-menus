import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import prisma from "@/lib/db";

type ResetAction = "request" | "reset";

const RESET_WINDOW_MS = 15 * 60 * 1000;

function randomCode(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const action = body?.action as ResetAction;

    if (action === "request") {
      const email = String(body?.email || "")
        .trim()
        .toLowerCase();
      if (!email) {
        return NextResponse.json(
          { message: "Email is required" },
          { status: 400 },
        );
      }

      const expiresAt = new Date(Date.now() + RESET_WINDOW_MS);
      const code = randomCode();

      const student = await prisma.students.findFirst({ where: { email } });
      if (student) {
        await prisma.students.update({
          where: { id: student.id },
          data: {
            resetToken: code,
            resetTokenExpiry: expiresAt,
          },
        });
        return NextResponse.json({
          message: "Reset code generated",
          resetCode: process.env.NODE_ENV === "development" ? code : undefined,
        });
      }

      const staff = await prisma.staffs.findFirst({ where: { email } });
      if (staff) {
        await prisma.staffs.update({
          where: { id: staff.id },
          data: {
            resetToken: code,
            resetTokenExpiry: expiresAt,
          },
        });
        return NextResponse.json({
          message: "Reset code generated",
          resetCode: process.env.NODE_ENV === "development" ? code : undefined,
        });
      }

      const guardian = await prisma.guardians.findFirst({ where: { email } });
      if (guardian) {
        await prisma.guardians.update({
          where: { id: guardian.id },
          data: {
            resetToken: code,
            resetTokenExpiry: expiresAt,
          },
        });
        return NextResponse.json({
          message: "Reset code generated",
          resetCode: process.env.NODE_ENV === "development" ? code : undefined,
        });
      }

      return NextResponse.json(
        { message: "No account found for this email" },
        { status: 404 },
      );
    }

    if (action === "reset") {
      const email = String(body?.email || "")
        .trim()
        .toLowerCase();
      const resetCode = String(body?.resetCode || "").trim();
      const newPassword = String(body?.newPassword || "");

      if (!email || !resetCode || !newPassword) {
        return NextResponse.json(
          { message: "Email, reset code and new password are required" },
          { status: 400 },
        );
      }

      if (newPassword.length < 6) {
        return NextResponse.json(
          { message: "Password must be at least 6 characters" },
          { status: 400 },
        );
      }

      const newHash = bcrypt.hashSync(newPassword, 10);
      const now = new Date();

      const student = await prisma.students.findFirst({ where: { email } });
      if (student) {
        if (
          student.resetToken !== resetCode ||
          !student.resetTokenExpiry ||
          student.resetTokenExpiry < now
        ) {
          return NextResponse.json(
            { message: "Invalid or expired reset code" },
            { status: 400 },
          );
        }

        await prisma.students.update({
          where: { id: student.id },
          data: {
            password: newHash,
            resetToken: null,
            resetTokenExpiry: null,
          },
        });

        return NextResponse.json({ message: "Password reset successful" });
      }

      const staff = await prisma.staffs.findFirst({ where: { email } });
      if (staff) {
        if (
          staff.resetToken !== resetCode ||
          !staff.resetTokenExpiry ||
          staff.resetTokenExpiry < now
        ) {
          return NextResponse.json(
            { message: "Invalid or expired reset code" },
            { status: 400 },
          );
        }

        await prisma.staffs.update({
          where: { id: staff.id },
          data: {
            password: newHash,
            resetToken: null,
            resetTokenExpiry: null,
          },
        });

        return NextResponse.json({ message: "Password reset successful" });
      }

      const guardian = await prisma.guardians.findFirst({ where: { email } });
      if (guardian) {
        if (
          guardian.resetToken !== resetCode ||
          !guardian.resetTokenExpiry ||
          guardian.resetTokenExpiry < now
        ) {
          return NextResponse.json(
            { message: "Invalid or expired reset code" },
            { status: 400 },
          );
        }

        await prisma.guardians.update({
          where: { id: guardian.id },
          data: {
            password: newHash,
            resetToken: null,
            resetTokenExpiry: null,
          },
        });

        return NextResponse.json({ message: "Password reset successful" });
      }

      return NextResponse.json(
        { message: "No account found for this email" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Invalid action type" },
      { status: 400 },
    );
  } catch (error) {
    console.error("Password reset error:", error);
    return NextResponse.json(
      { message: "Password reset failed" },
      { status: 500 },
    );
  }
}
