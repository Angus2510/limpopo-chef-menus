import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { NextAuthOptions, User as NextAuthUser } from "next-auth";

import prisma from "@/lib/db";
import type { UserType } from "@/types/auth";

type AppUser = NextAuthUser & {
  firstName: string;
  lastName: string;
  userType: UserType;
  avatar?: string;
  active?: boolean;
  inactiveReason?: string;
  linkedStudentId?: string;
  studentName?: string;
  viewingAs?: string;
};

function accountDisabledError(
  message: string,
): Error & { code: "ACCOUNT_DISABLED" } {
  const error = new Error(message) as Error & { code: "ACCOUNT_DISABLED" };
  error.code = "ACCOUNT_DISABLED";
  return error;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Student Number/Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<NextAuthUser | null> {
        if (!credentials?.identifier || !credentials?.password) {
          throw new Error("Email/Mobile and password are required");
        }

        const staff = await prisma.staffs.findFirst({
          where: {
            OR: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          },
        });

        if (
          staff?.password &&
          bcrypt.compareSync(credentials.password, staff.password)
        ) {
          const staffUser: AppUser = {
            id: staff.id,
            firstName: staff.profile?.firstName ?? "",
            lastName: staff.profile?.lastName ?? "",
            email: staff.email,
            userType: "Staff",
          };

          return staffUser;
        }

        const student = await prisma.students.findFirst({
          where: {
            OR: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          },
        });

        if (
          student?.password &&
          bcrypt.compareSync(credentials.password, student.password)
        ) {
          if (!student.active) {
            throw accountDisabledError(
              student.inactiveReason || "Your account has been disabled",
            );
          }

          const studentUser: AppUser = {
            id: student.id,
            firstName: student.profile?.firstName ?? "",
            lastName: student.profile?.lastName ?? "",
            email: student.email,
            userType: "Student",
            active: student.active,
            inactiveReason: student.inactiveReason || undefined,
          };

          return studentUser;
        }

        const guardian = await prisma.guardians.findFirst({
          where: {
            OR: [
              { email: credentials.identifier },
              { mobileNumber: credentials.identifier },
            ],
          },
        });

        if (
          guardian?.password &&
          bcrypt.compareSync(credentials.password, guardian.password)
        ) {
          const linkedStudent = await prisma.students.findUnique({
            where: { id: guardian.studentId },
          });

          if (!linkedStudent) {
            throw new Error("No student linked to this guardian account");
          }

          if (!linkedStudent.active) {
            throw accountDisabledError("Student account disabled");
          }

          const guardianUser: AppUser = {
            id: guardian.id,
            firstName: guardian.firstName || "",
            lastName: guardian.lastName || "",
            email: guardian.email || "",
            userType: "Guardian",
            linkedStudentId: linkedStudent.id,
            studentName:
              `${linkedStudent.profile?.firstName || ""} ${linkedStudent.profile?.lastName || ""}`.trim(),
            viewingAs: "Guardian",
          };

          return guardianUser;
        }

        throw new Error("Invalid student number or password");
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 5 * 60 * 60,
    updateAge: 20 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const typedUser = user as AppUser;
        token.userId = typedUser.id;
        token.userType = typedUser.userType;
        token.firstName = typedUser.firstName;
        token.lastName = typedUser.lastName;
        token.email = typedUser.email;
        token.picture = typedUser.avatar;

        if (typedUser.userType === "Guardian") {
          token.linkedStudentId = typedUser.linkedStudentId;
          token.studentName = typedUser.studentName;
          token.viewingAs = typedUser.viewingAs;
        }

        if (typedUser.userType === "Student") {
          token.active = typedUser.active;
          token.inactiveReason = typedUser.inactiveReason;
          token.linkedStudentId = typedUser.id;
        }

        const payload: Record<string, unknown> = {
          id: typedUser.id,
          userType: typedUser.userType,
          firstName: typedUser.firstName,
          lastName: typedUser.lastName,
          email: typedUser.email,
        };

        if (typedUser.userType === "Guardian") {
          payload.linkedStudentId = typedUser.linkedStudentId;
          payload.studentName = typedUser.studentName;
          payload.viewingAs = typedUser.viewingAs;
        }

        if (typedUser.userType === "Student") {
          payload.active = typedUser.active;
          payload.inactiveReason = typedUser.inactiveReason;
        }

        if (process.env.JWT_SECRET) {
          token.customAccessToken = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "5h",
          });
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.userId as string) || "";
        session.user.userType = token.userType as UserType;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.email = token.email as string;
        session.user.image = token.picture as string;

        if (token.userType === "Guardian") {
          session.user.linkedStudentId = token.linkedStudentId as string;
          session.user.studentName = token.studentName as string;
          session.user.viewingAs = token.viewingAs as string;
        }

        if (token.userType === "Student") {
          session.user.active = token.active as boolean;
          session.user.inactiveReason = token.inactiveReason as string;
          session.user.linkedStudentId = token.linkedStudentId as string;
        }

        session.accessToken = token.customAccessToken as string;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
