"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AssessmentBlueprint,
  AssessmentItemDraft,
  AssessmentDraftState,
  AssessmentTemplate,
  StudentAssessmentRecord,
} from "@/types/assessment";
import {
  AssessmentEngine,
  calculateAssessmentScore,
  createAssessmentBlueprint,
  createEmptyAssessmentDraft,
  parseAssessmentDraft,
  serializeAssessmentDraft,
} from "@/components/assessments/assessment-engine";

type AssessmentPageProps = {
  template: AssessmentTemplate;
  student: {
    id: string;
    fullName: string;
    admissionNumber: string;
  };
};

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

function dedupeRecentSessionsByStudent(
  sessions: RecentAssessmentSession[],
): RecentAssessmentSession[] {
  const seen = new Set<string>();
  const unique: RecentAssessmentSession[] = [];

  for (const session of sessions) {
    if (seen.has(session.studentId)) {
      continue;
    }

    seen.add(session.studentId);
    unique.push(session);
  }

  return unique;
}

export function AssessmentPage({ template, student }: AssessmentPageProps) {
  const searchParams = useSearchParams();
  const [record, setRecord] = useState<StudentAssessmentRecord | null>(null);
  const [draft, setDraft] = useState<AssessmentDraftState>(() =>
    createEmptyAssessmentDraft(createAssessmentBlueprint(template)),
  );
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  const blueprint = useMemo<AssessmentBlueprint>(
    () => createAssessmentBlueprint(template),
    [template],
  );

  const readOnly = useMemo(() => {
    if (!record) {
      return false;
    }

    return record.completed || record.locked;
  }, [record]);

  const assessmentScore = useMemo(
    () => calculateAssessmentScore(blueprint, draft),
    [blueprint, draft],
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const intakeGroupId = searchParams.get("intakeGroupId") ?? "";
    const sessionId = `${student.id}-${template.code}-${Date.now()}`;

    const nextEntry: RecentAssessmentSession = {
      id: sessionId,
      studentId: student.id,
      studentName: student.fullName,
      studentAdmissionNumber: student.admissionNumber,
      assessmentCode: template.code,
      assessmentTitle: template.title,
      intakeGroupId,
      openedAt: new Date().toISOString(),
    };

    try {
      const stored = window.localStorage.getItem(RECENT_SESSIONS_STORAGE_KEY);
      const parsed = stored
        ? (JSON.parse(stored) as RecentAssessmentSession[])
        : [];
      const current = Array.isArray(parsed) ? parsed : [];
      const nextSessions = dedupeRecentSessionsByStudent([
        nextEntry,
        ...current,
      ]).slice(0, 20);

      window.localStorage.setItem(
        RECENT_SESSIONS_STORAGE_KEY,
        JSON.stringify(nextSessions),
      );
      window.dispatchEvent(new Event("assessment-recent-sessions-updated"));
    } catch {
      // If localStorage is unavailable, skip recent-session write.
    }
  }, [
    searchParams,
    student.admissionNumber,
    student.fullName,
    student.id,
    template.code,
    template.title,
  ]);

  useEffect(() => {
    let cancelled = false;

    async function loadAssessment() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `/api/student-assessments?studentId=${student.id}&assessmentCode=${template.code}`,
          {
            cache: "no-store",
          },
        );

        const payload = (await response.json()) as {
          assessment?: StudentAssessmentRecord | null;
          error?: string;
        };

        if (!response.ok) {
          throw new Error(payload.error || "Unable to load assessment draft");
        }

        if (!cancelled) {
          const loadedRecord = payload.assessment ?? null;
          setRecord(loadedRecord);

          const parsedDraft = parseAssessmentDraft(
            loadedRecord?.comments ?? null,
          );
          setDraft(parsedDraft ?? createEmptyAssessmentDraft(blueprint));
          setHydrated(true);
        }
      } catch (requestError) {
        if (!cancelled) {
          const message =
            requestError instanceof Error
              ? requestError.message
              : "Unable to load assessment draft";
          setError(message);
          toast.error(message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadAssessment();

    return () => {
      cancelled = true;
    };
  }, [blueprint, student.id, template.code]);

  useEffect(() => {
    if (!hydrated || loading || readOnly || error) {
      return;
    }

    const timeout = window.setTimeout(() => {
      void (async () => {
        try {
          const response = await fetch("/api/student-assessments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              studentId: student.id,
              assessmentCode: template.code,
              score: assessmentScore.score,
              comments: serializeAssessmentDraft(draft),
            }),
          });

          const payload = (await response.json()) as {
            assessment?: StudentAssessmentRecord;
            error?: string;
          };

          if (!response.ok || !payload.assessment) {
            throw new Error(payload.error || "Unable to autosave assessment");
          }

          setRecord(payload.assessment);
        } catch (requestError) {
          const message =
            requestError instanceof Error
              ? requestError.message
              : "Unable to autosave assessment";
          toast.error(message);
        }
      })();
    }, 700);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [
    assessmentScore.score,
    draft,
    error,
    hydrated,
    loading,
    readOnly,
    student.id,
    template.code,
  ]);

  function updateDraft(itemId: string, nextValue: AssessmentItemDraft) {
    setDraft((currentDraft) => ({
      ...currentDraft,
      [itemId]: nextValue,
    }));
  }

  async function markComplete() {
    setUpdating(true);

    try {
      const response = await fetch("/api/student-assessments", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: student.id,
          assessmentCode: template.code,
          completed: true,
          score: assessmentScore.score,
          comments: serializeAssessmentDraft(draft),
        }),
      });

      const payload = (await response.json()) as {
        assessment?: StudentAssessmentRecord;
        error?: string;
      };

      if (!response.ok || !payload.assessment) {
        throw new Error(payload.error || "Unable to complete assessment");
      }

      setRecord(payload.assessment);
      toast.success("Assessment marked complete and locked");
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Unable to complete assessment";
      toast.error(message);
    } finally {
      setUpdating(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <CardTitle className="text-lg">{template.title}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Student: {student.fullName} ({student.admissionNumber})
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{template.code.toUpperCase()}</Badge>
              <Badge variant={readOnly ? "secondary" : "default"}>
                {readOnly ? "Read-only" : "Editable draft"}
              </Badge>
              <Badge variant="outline">
                {assessmentScore.score} / {assessmentScore.maxScore}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/dashboard/assessments"
              className={buttonVariants({ variant: "outline" })}
            >
              Back to Selection
            </Link>

            {!readOnly ? (
              <Button disabled={updating} onClick={markComplete}>
                {updating ? "Saving..." : "Mark Complete"}
              </Button>
            ) : null}
          </div>

          <Separator />

          {loading ? (
            <p className="text-sm text-muted-foreground">
              Preparing assessment draft...
            </p>
          ) : null}

          {error ? (
            <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
              {error}
            </div>
          ) : null}

          {!loading && !error ? (
            <AssessmentEngine
              blueprint={blueprint}
              draft={draft}
              readOnly={readOnly}
              completed={Boolean(record?.completed)}
              score={assessmentScore.score}
              maxScore={assessmentScore.maxScore}
              percentage={assessmentScore.percentage}
              onChange={updateDraft}
            />
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
