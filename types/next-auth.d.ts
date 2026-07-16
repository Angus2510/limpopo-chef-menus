import { DefaultSession } from "next-auth";
import { JWT as BaseJWT } from "next-auth/jwt";
import { UserType } from "@/types/auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      userType: UserType;
      firstName?: string;
      lastName?: string;
      linkedStudentId?: string;
      studentName?: string;
      viewingAs?: string;
      active?: boolean;
      inactiveReason?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    userType: UserType;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    linkedStudentId?: string;
    studentName?: string;
    viewingAs?: string;
    active?: boolean;
    inactiveReason?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends BaseJWT {
    userId?: string;
    userType?: UserType;
    firstName?: string;
    lastName?: string;
    picture?: string;
    linkedStudentId?: string;
    studentName?: string;
    viewingAs?: string;
    active?: boolean;
    inactiveReason?: string;
    customAccessToken?: string;
  }
}
