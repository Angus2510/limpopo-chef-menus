import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken";

import prisma from "@/lib/db";
import { Permission } from "@/types/auth";

function normalizePermissionLabel(value: string): string {
  return value
    .toLowerCase()
    .replace(/[\\/]+/g, " ")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isDeleteTestsTasksLabel(value: string): boolean {
  const normalized = normalizePermissionLabel(value);
  return (
    normalized === "delete tests tasks" ||
    (normalized.includes("delete") &&
      normalized.includes("test") &&
      normalized.includes("task"))
  );
}

function isModerationLabel(value: string): boolean {
  const normalized = normalizePermissionLabel(value);
  return (
    normalized === "moderation" ||
    normalized === "moderate" ||
    normalized.includes("moderate")
  );
}

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    let userType = token?.userType as string | undefined;
    let userId =
      (token?.userId as string | undefined) ||
      (token?.id as string | undefined) ||
      (token?.sub as string | undefined);

    if (!userId || !userType) {
      const accessToken = req.cookies.get("accessToken")?.value;
      if (accessToken && process.env.JWT_SECRET) {
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET) as {
          id?: string;
          userType?: string;
        };
        userId = decoded.id;
        userType = decoded.userType;
      }
    }

    if (!userId || !userType) {
      return NextResponse.json(
        { error: "Unauthorized - No token provided" },
        { status: 401 },
      );
    }

    if (userType !== "Staff") {
      return NextResponse.json(
        { error: "Unauthorized - Only staff can access permissions" },
        { status: 403 },
      );
    }

    const staff = await prisma.staffs.findUnique({
      where: { id: userId },
      select: { roles: true, userPermissions: true },
    });

    if (!staff) {
      return NextResponse.json({ error: "Staff not found" }, { status: 404 });
    }

    let permissions: Permission[] = [
      "admin_access",
      "view_dashboard",
      "view_students",
      "view_results",
      "view_assignments",
      "mark_tests_tasks",
      "view_mark_tests_tasks",
      "view_tests_tasks",
      "edit_tests_tasks",
      "create_tests_tasks",
    ];

    if (staff.roles?.length) {
      const validRoleIds = staff.roles.filter((id) =>
        /^[0-9a-fA-F]{24}$/.test(id),
      );
      const legacyRoleNames = staff.roles.filter(
        (id) => !/^[0-9a-fA-F]{24}$/.test(id),
      );

      for (const name of legacyRoleNames) {
        if (isDeleteTestsTasksLabel(name)) {
          permissions.push("delete_tests_tasks");
        }
        if (isModerationLabel(name)) {
          permissions.push("moderate_tests_tasks");
        }
      }

      if (validRoleIds.length) {
        const roles = await prisma.roles.findMany({
          where: { id: { in: validRoleIds } },
          select: { permissions: true, roleName: true },
        });

        const rolePermissions = roles
          .flatMap((role) =>
            role.permissions
              .filter(
                (p) => p.actions.view || p.actions.edit || p.actions.upload,
              )
              .map((p) => {
                const perms: Permission[] = [];
                const pageLower = p.page.toLowerCase();

                if (p.actions.view) {
                  perms.push(`view_${pageLower}` as Permission);
                }

                if (p.actions.edit) {
                  perms.push(`edit_${pageLower}` as Permission);

                  if (isModerationLabel(pageLower)) {
                    perms.push("moderate_tests_tasks");
                  }

                  if (isDeleteTestsTasksLabel(pageLower)) {
                    perms.push("delete_tests_tasks");
                  }
                }

                if (p.actions.upload) {
                  perms.push(`upload_${pageLower}` as Permission);
                }

                return perms;
              }),
          )
          .flat();

        for (const role of roles) {
          if (isDeleteTestsTasksLabel(role.roleName)) {
            permissions.push("delete_tests_tasks");
          }
          if (isModerationLabel(role.roleName)) {
            permissions.push("moderate_tests_tasks");
          }
        }

        permissions = [...permissions, ...rolePermissions];
      }
    }

    if (staff.userPermissions?.length) {
      const userPermissions = staff.userPermissions
        .filter(
          (p) =>
            p.permissions.view || p.permissions.edit || p.permissions.upload,
        )
        .flatMap((p) => {
          const perms: Permission[] = [];
          const pageLower = p.page.toLowerCase();

          if (p.permissions.view) {
            perms.push(`view_${pageLower}` as Permission);
          }

          if (p.permissions.edit) {
            perms.push(`edit_${pageLower}` as Permission);

            if (isModerationLabel(pageLower)) {
              perms.push("moderate_tests_tasks");
            }

            if (isDeleteTestsTasksLabel(pageLower)) {
              perms.push("delete_tests_tasks");
            }
          }

          if (p.permissions.upload) {
            perms.push(`upload_${pageLower}` as Permission);
          }

          return perms;
        });

      permissions = [...permissions, ...userPermissions];
    }

    const uniquePermissions = [...new Set(permissions)];

    return NextResponse.json({ permissions: uniquePermissions });
  } catch (error) {
    console.error("Error fetching permissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch permissions" },
      { status: 500 },
    );
  }
}
