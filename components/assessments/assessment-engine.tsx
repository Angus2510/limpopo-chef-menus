"use client";

import { useMemo } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
export { createAssessmentBlueprint } from "@/components/assessments/blueprints";
import {
  createEmptyAssessmentDraft,
  serializeAssessmentDraft,
  parseAssessmentDraft,
  calculateItemScore,
  calculateSectionScore,
  calculateAssessmentScore,
  getRecipeCardScore,
  getPracticalDishScore,
} from "@/components/assessments/assessment-scoring";
import type {
  AssessmentBlueprint,
  AssessmentCommentOption,
  AssessmentDraftState,
  AssessmentItem,
  AssessmentSection,
  CheckboxAssessmentDraft,
  CheckboxAssessmentItem,
  NotesAssessmentDraft,
  NotesAssessmentItem,
  PracticalDishAssessmentDraft,
  PracticalDishAssessmentItem,
  RecipeCardAssessmentDraft,
  RecipeCardAssessmentItem,
  COSTING_COMMENT_OPTIONS,
} from "@/types/assessment";

export const COMMENT_OPTIONS: AssessmentCommentOption[] = [
  "Well cooked",
  "Raw / Undercooked",
  "Burnt / Overcooked",
  "Ratios balanced on plate",
  "Well seasoned",
  "Under seasoned",
  "Incorrect portion (too big)",
  "Incorrect portion (too small)",
  "Hot plate",
  "Cold plate",
  "Served late",
  "Served on time",
  "Other",
];

// Re-exported for existing client consumers; pure helpers live in
// assessment-scoring.ts so server components can call them directly.
export {
  createEmptyAssessmentDraft,
  serializeAssessmentDraft,
  parseAssessmentDraft,
  calculateItemScore,
  calculateSectionScore,
  calculateAssessmentScore,
};

type AssessmentProgressProps = {
  score: number;
  maxScore: number;
  percentage: number;
  completed: boolean;
  readOnly: boolean;
};

export function AssessmentProgress({
  score,
  maxScore,
  percentage,
  completed,
  readOnly,
}: AssessmentProgressProps) {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle className="text-base">Assessment progress</CardTitle>
            <p className="text-sm text-muted-foreground">
              Progress updates automatically as marks are entered.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant={completed ? "secondary" : "default"}>
              {completed ? "Completed" : readOnly ? "Read-only" : "In progress"}
            </Badge>
            <Badge variant="outline">
              {score} / {maxScore}
            </Badge>
          </div>
        </div>
        <Progress value={percentage} aria-label="assessment progress" />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{percentage}% complete</span>
          <span>{score} marks awarded</span>
        </div>
      </CardHeader>
    </Card>
  );
}

type ChecklistItemProps = {
  item: CheckboxAssessmentItem;
  value: CheckboxAssessmentDraft;
  readOnly: boolean;
  onChange: (nextValue: CheckboxAssessmentDraft) => void;
};

export function ChecklistItem({
  item,
  value,
  readOnly,
  onChange,
}: ChecklistItemProps) {
  const score = value.checked ? item.maxMark : 0;

  return (
    <Card>
      <CardContent className="flex items-start gap-3 p-4">
        <Checkbox
          checked={value.checked}
          disabled={readOnly}
          onCheckedChange={(checked) => onChange({ checked: checked === true })}
        />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium">{item.description}</p>
            <Badge variant="outline">
              {score} / {item.maxMark}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Checking this awards full marks.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

type RecipeCardProps = {
  item: RecipeCardAssessmentItem;
  value: RecipeCardAssessmentDraft;
  readOnly: boolean;
  onChange: (nextValue: RecipeCardAssessmentDraft) => void;
};

export function RecipeCard({
  item,
  value,
  readOnly,
  onChange,
}: RecipeCardProps) {
  const score = getRecipeCardScore(item, value);

  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-base">{item.recipeName}</CardTitle>
          <Badge variant="outline">
            {score} / {item.maxMark}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Each completed checkbox awards one mark.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <label className="flex items-center gap-3 text-sm">
          <Checkbox
            checked={value.recipeCompleted}
            disabled={readOnly}
            onCheckedChange={(checked) =>
              onChange({ ...value, recipeCompleted: checked === true })
            }
          />
          <span>Recipe Completed</span>
        </label>
        <label className="flex items-center gap-3 text-sm">
          <Checkbox
            checked={value.costingAppropriate}
            disabled={readOnly}
            onCheckedChange={(checked) =>
              onChange({ ...value, costingAppropriate: checked === true })
            }
          />
          <span>Costing Appropriate</span>
        </label>
      </CardContent>
    </Card>
  );
}

type CommentSelectorProps = {
  value: AssessmentCommentOption[];
  otherComment: string;
  readOnly: boolean;
  options?: AssessmentCommentOption[];
  onChange: (nextValue: {
    value: AssessmentCommentOption[];
    otherComment: string;
  }) => void;
};

export function CommentSelector({
  value,
  otherComment,
  readOnly,
  options = COMMENT_OPTIONS,
  onChange,
}: CommentSelectorProps) {
  const selected = useMemo(() => new Set(value), [value]);
  const showOther = selected.has("Other");

  function toggle(option: AssessmentCommentOption, checked: boolean) {
    const next = new Set(selected);

    if (checked) {
      next.add(option);
    } else {
      next.delete(option);
    }

    if (!next.has("Other")) {
      onChange({ value: Array.from(next), otherComment: "" });
      return;
    }

    onChange({ value: Array.from(next), otherComment });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Comments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <ScrollArea className="h-52 rounded-lg border p-3">
          <div className="space-y-2">
            {options.map((option) => (
              <label key={option} className="flex items-center gap-3 text-sm">
                <Checkbox
                  checked={selected.has(option)}
                  disabled={readOnly}
                  onCheckedChange={(checked) =>
                    toggle(option, checked === true)
                  }
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </ScrollArea>

        {showOther ? (
          <Textarea
            value={otherComment}
            disabled={readOnly}
            placeholder="Add an additional comment"
            onChange={(event) =>
              onChange({ value, otherComment: event.target.value })
            }
          />
        ) : null}
      </CardContent>
    </Card>
  );
}

type PracticalDishCardProps = {
  item: PracticalDishAssessmentItem;
  value: PracticalDishAssessmentDraft;
  readOnly: boolean;
  onChange: (nextValue: PracticalDishAssessmentDraft) => void;
};

export function PracticalDishCard({
  item,
  value,
  readOnly,
  onChange,
}: PracticalDishCardProps) {
  const score = getPracticalDishScore(item, value);

  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-base">{item.dishName}</CardTitle>
          <Badge variant="outline">
            {score} / {item.maxMark}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Select a score and add comments as needed.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <CommentSelector
          value={value.comments}
          otherComment={value.otherComment}
          readOnly={readOnly}
          options={item.commentOptions}
          onChange={({ value: comments, otherComment }) =>
            onChange({ ...value, comments, otherComment })
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-medium">Score</p>
            <Select
              value={String(value.score)}
              disabled={readOnly}
              onValueChange={(nextValue) =>
                onChange({ ...value, score: Number(nextValue) })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select score" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  { length: item.maxMark + 1 },
                  (_, index) => index,
                ).map((scoreValue) => (
                  <SelectItem key={scoreValue} value={String(scoreValue)}>
                    {scoreValue}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Optional Notes</p>
            <Textarea
              value={value.notes}
              disabled={readOnly}
              placeholder="Add optional notes"
              onChange={(event) =>
                onChange({ ...value, notes: event.target.value })
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

type NotesCardProps = {
  item: NotesAssessmentItem;
  value: NotesAssessmentDraft;
  readOnly: boolean;
  onChange: (nextValue: NotesAssessmentDraft) => void;
};

export function NotesCard({ item, value, readOnly, onChange }: NotesCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{item.label}</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={value.notes}
          disabled={readOnly}
          placeholder="Add notes"
          onChange={(event) => onChange({ notes: event.target.value })}
        />
      </CardContent>
    </Card>
  );
}

type AssessmentSectionProps = {
  section: AssessmentSection;
  draft: AssessmentDraftState;
  readOnly: boolean;
  onChange: (
    itemId: string,
    nextValue:
      | CheckboxAssessmentDraft
      | RecipeCardAssessmentDraft
      | PracticalDishAssessmentDraft
      | NotesAssessmentDraft,
  ) => void;
};

export function AssessmentSection({
  section,
  draft,
  readOnly,
  onChange,
}: AssessmentSectionProps) {
  const sectionScore = calculateSectionScore(section, draft);

  function renderAssessmentItem(item: AssessmentItem) {
    const itemValue = draft[item.id];

    if (item.type === "checkbox") {
      return (
        <ChecklistItem
          key={item.id}
          item={item}
          value={(itemValue as CheckboxAssessmentDraft) ?? { checked: true }}
          readOnly={readOnly}
          onChange={(nextValue) => onChange(item.id, nextValue)}
        />
      );
    }

    if (item.type === "recipe-card") {
      return (
        <RecipeCard
          key={item.id}
          item={item}
          value={
            (itemValue as RecipeCardAssessmentDraft) ?? {
              recipeCompleted: true,
              costingAppropriate: true,
            }
          }
          readOnly={readOnly}
          onChange={(nextValue) => onChange(item.id, nextValue)}
        />
      );
    }

    if (item.type === "practical-dish") {
      return (
        <PracticalDishCard
          key={item.id}
          item={item}
          value={
            (itemValue as PracticalDishAssessmentDraft) ?? {
              score: 0,
              comments: [],
              otherComment: "",
              notes: "",
            }
          }
          readOnly={readOnly}
          onChange={(nextValue) => onChange(item.id, nextValue)}
        />
      );
    }

    if (item.type === "group") {
      return (
        <div key={item.id} className="rounded-lg border bg-muted/20 p-4">
          <p className="mb-3 text-sm font-semibold">{item.title}</p>
          <div className="space-y-3">
            {item.items.map((childItem) => renderAssessmentItem(childItem))}
          </div>
        </div>
      );
    }

    return (
      <NotesCard
        key={item.id}
        item={item}
        value={(itemValue as NotesAssessmentDraft) ?? { notes: "" }}
        readOnly={readOnly}
        onChange={(nextValue) => onChange(item.id, nextValue)}
      />
    );
  }

  return (
    <AccordionItem value={section.id}>
      <AccordionTrigger>
        <div className="flex w-full items-center justify-between gap-3 pr-3">
          <span>{section.title}</span>
          <Badge variant="secondary">
            {sectionScore.score} / {sectionScore.maxScore}
          </Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4 pt-3">
          {section.items.map((item) => renderAssessmentItem(item))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

type AssessmentEngineProps = {
  blueprint: AssessmentBlueprint;
  draft: AssessmentDraftState;
  readOnly: boolean;
  completed: boolean;
  score: number;
  maxScore: number;
  percentage: number;
  onChange: (
    itemId: string,
    nextValue:
      | CheckboxAssessmentDraft
      | RecipeCardAssessmentDraft
      | PracticalDishAssessmentDraft
      | NotesAssessmentDraft,
  ) => void;
};

export function AssessmentEngine({
  blueprint,
  draft,
  readOnly,
  completed,
  score,
  maxScore,
  percentage,
  onChange,
}: AssessmentEngineProps) {
  if (!blueprint.sections.length) {
    return (
      <Card>
        <CardContent className="p-6 text-sm text-muted-foreground">
          No assessment sections have been configured yet.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <AssessmentProgress
        score={score}
        maxScore={maxScore}
        percentage={percentage}
        completed={completed}
        readOnly={readOnly}
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Assessment sections</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion className="w-full">
            {blueprint.sections
              .slice()
              .sort((left, right) => left.order - right.order)
              .map((section, sectionIndex, sections) => (
                <div key={section.id} className="space-y-4">
                  <AssessmentSection
                    section={section}
                    draft={draft}
                    readOnly={readOnly}
                    onChange={onChange}
                  />
                  {sectionIndex < sections.length - 1 ? <Separator /> : null}
                </div>
              ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
