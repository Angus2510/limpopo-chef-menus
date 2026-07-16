import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

type AccessTokenPayload = {
  id?: string;
  userType?: string;
};

const OBJECT_ID_REGEX = /^[0-9a-fA-F]{24}$/;

export function isObjectId(value: string): boolean {
  return OBJECT_ID_REGEX.test(value);
}

export function getStaffIdFromRequest(
  req: NextRequest,
): { staffId: string } | { error: string; status: number } {
  const token = req.cookies.get("accessToken")?.value;

  if (!token) {
    return { error: "Unauthorized - No access token", status: 401 };
  }

  if (!process.env.JWT_SECRET) {
    return { error: "JWT_SECRET is not configured", status: 500 };
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
    ) as AccessTokenPayload;

    if (decoded.userType !== "Staff" || !decoded.id) {
      return { error: "Unauthorized - Staff access required", status: 403 };
    }

    if (!isObjectId(decoded.id)) {
      return { error: "Invalid staff token payload", status: 401 };
    }

    return { staffId: decoded.id };
  } catch {
    return { error: "Unauthorized - Invalid token", status: 401 };
  }
}
