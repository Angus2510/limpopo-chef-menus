import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export async function GET(_request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return NextResponse.json({
        authenticated: false,
        reason: "No access token found",
      });
    }

    const decoded = jwtDecode<{ id: string }>(token);

    if (!decoded?.id) {
      return NextResponse.json({
        authenticated: false,
        reason: "Invalid token - missing user ID",
      });
    }

    return NextResponse.json({
      authenticated: true,
      userId: decoded.id,
      tokenValid: true,
    });
  } catch (error) {
    return NextResponse.json({
      authenticated: false,
      reason: "Token validation failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
