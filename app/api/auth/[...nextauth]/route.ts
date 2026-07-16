import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { NextAuthOptions, User as NextAuthUser } from "next-auth";

import prisma from "@/lib/db";
import type { UserType } from "@/types/auth";

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

        const userModels = [
          { type: "Staff", prismaModel: prisma.staffs },
          { type: "Student", prismaModel: prisma.students },
          { type: "Guardian", prismaModel: prisma.guardians },
        ] as const;

        for (const { type, prismaModel } of userModels) {
          let userQueryResult: any = null;

          if (type === "Guardian") {
            userQueryResult = await prisma.guardians.findFirst({
              where: {
                OR: [
                  { email: credentials.identifier },
                  { mobileNumber: credentials.identifier },
                ],
              },
            });

            if (
              userQueryResult?.password &&
              bcrypt.compareSync(credentials.password, userQueryResult.password)
            ) {
              const student = await prisma.students.findUnique({
                where: { id: userQueryResult.studentId },
              });

              if (!student) {
                throw new Error("No student linked to this guardian account");
              }

              if (!student.active) {
                const error = new Error("Student account disabled");
                (error as any).code = "ACCOUNT_DISABLED";
                throw error;
              }

              return {
                id: userQueryResult.id.toString(),
                firstName: userQueryResult.firstName || "",
                lastName: userQueryResult.lastName || "",
                email: userQueryResult.email || "",
                avatar: userQueryResult.avatarUrl || undefined,
                userType: "Guardian" as UserType,
                linkedStudentId: student.id.toString(),
                studentName: `${student?.profile?.firstName || ""} ${student?.profile?.lastName || ""}`,
                viewingAs: "Guardian",
              } as NextAuthUser;
            }
          } else {
            userQueryResult = await (prismaModel as any).findFirst({
              where: {
                OR: [
                  { email: credentials.identifier },
                  { username: credentials.identifier },
                ],
              },
            });

            if (
              userQueryResult?.password &&
              bcrypt.compareSync(credentials.password, userQueryResult.password)
            ) {
              if (type === "Student" && userQueryResult.active === false) {
                const error = new Error(
                  userQueryResult.inactiveReason ||
                    "Your account has been disabled",
                );
                (error as any).code = "ACCOUNT_DISABLED";
                throw error;
              }

              return {
                id: userQueryResult.id.toString(),
                firstName: userQueryResult.firstName || "",
                lastName: userQueryResult.lastName || "",
                email: userQueryResult.email || "",
                avatar: userQueryResult.avatarUrl || undefined,
                userType: type as UserType,
                ...(type === "Student" && {
                  active: userQueryResult.active as boolean,
                  inactiveReason: userQueryResult.inactiveReason as string,
                }),
              } as NextAuthUser;
            }
          }
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
        const typedUser = user as any;
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
