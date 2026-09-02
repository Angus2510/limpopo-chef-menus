"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type RecentAssessmentSession = {
  id: string;
  studentId: string;
  studentName: string;
  studentAdmissionNumber: string;
  assessmentCode: string;
  assessmentTitle: string;
  intakeGroupId: string;
  openedAt: string;
};

const RECENT_SESSIONS_STORAGE_KEY = "assessment-workspace-recent-sessions";

const navItems = [
  {
    href: "/dashboard/assessments",
    label: "Assessments",
    description: "Select intake, student, and menu",
    badge: "Core",
  },
];

export function SidebarNav() {
  const pathname = usePathname();
  const [recentSessions, setRecentSessions] = useState<
    RecentAssessmentSession[]
  >([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    function refreshRecentSessions() {
      try {
        const stored = window.localStorage.getItem(RECENT_SESSIONS_STORAGE_KEY);
        if (!stored) {
          setRecentSessions([]);
          return;
        }

        const parsed = JSON.parse(stored) as RecentAssessmentSession[];
        if (!Array.isArray(parsed)) {
          setRecentSessions([]);
          return;
        }

        setRecentSessions(parsed.slice(0, 27));
      } catch {
        setRecentSessions([]);
      }
    }

    refreshRecentSessions();
    window.addEventListener(
      "assessment-recent-sessions-updated",
      refreshRecentSessions,
    );

    return () => {
      window.removeEventListener(
        "assessment-recent-sessions-updated",
        refreshRecentSessions,
      );
    };
  }, [pathname]);

  const recentLinks = useMemo(() => {
    return recentSessions.map((session) => {
      const params = new URLSearchParams({ studentId: session.studentId });
      if (session.intakeGroupId) {
        params.set("intakeGroupId", session.intakeGroupId);
      }

      return {
        key: session.id,
        href: `/dashboard/assessments/${session.assessmentCode}?${params.toString()}`,
        studentName: session.studentName,
        assessmentTitle: session.assessmentTitle,
      };
    });
  }, [recentSessions]);

  return (
    <ScrollArea className="h-full">
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Limpopo Chefs Academy
          </p>
          <h2 className="mt-1 text-base font-semibold">Menu Marking Portal</h2>
        </div>
        <Separator />
        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg border p-3 transition-colors",
                  active
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:bg-muted/40",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium">{item.label}</p>
                  <Badge variant="secondary">{item.badge}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </nav>

        <Separator />

        <div className="space-y-2">
          <div className="flex items-center gap-2 px-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <Clock3 className="size-3.5" />
            Recent Sessions
          </div>
          {recentLinks.length === 0 ? (
            <p className="px-1 text-xs text-muted-foreground">
              Open an assessment to pin it here.
            </p>
          ) : (
            recentLinks.map((entry) => (
              <Link
                key={entry.key}
                href={entry.href}
                className="block rounded-md border border-border bg-card px-3 py-2 transition-colors hover:bg-muted/40"
              >
                <p className="truncate text-sm font-medium">
                  {entry.studentName}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {entry.assessmentTitle}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
