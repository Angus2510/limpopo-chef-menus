import type {
  AssessmentBlueprint,
  AssessmentDraftState,
  AssessmentItem,
  AssessmentSection,
  CheckboxAssessmentDraft,
  NotesAssessmentDraft,
  PracticalDishAssessmentDraft,
  RecipeCardAssessmentDraft,
} from "@/types/assessment";
import {
  calculateItemScore,
  calculateSectionScore,
  getItemMaxMark,
} from "@/components/assessments/assessment-scoring";

function AssessmentItemRow({
  item,
  draft,
  depth,
}: {
  item: AssessmentItem;
  draft: AssessmentDraftState;
  depth: number;
}) {
  const indentClass = depth > 0 ? "ml-4 border-l pl-4" : "";

  if (item.type === "group") {
    return (
      <div className={`space-y-2 py-2 ${indentClass}`}>
        <p className="text-sm font-semibold">{item.title}</p>
        <div className="space-y-2">
          {item.items.map((childItem) => (
            <AssessmentItemRow
              key={childItem.id}
              item={childItem}
              draft={draft}
              depth={depth + 1}
            />
          ))}
        </div>
      </div>
    );
  }

  const value = draft[item.id];
  const score = calculateItemScore(item, value);
  const maxMark = getItemMaxMark(item);

  if (item.type === "checkbox") {
    const checked =
      (value as CheckboxAssessmentDraft | undefined)?.checked ?? true;
    return (
      <div
        className={`flex items-start justify-between gap-3 border-b py-1.5 text-sm ${indentClass}`}
      >
        <span>
          [{checked ? "x" : " "}] {item.description}
        </span>
        <span className="whitespace-nowrap font-medium">
          {score} / {maxMark}
        </span>
      </div>
    );
  }

  if (item.type === "recipe-card") {
    const recipeValue = value as RecipeCardAssessmentDraft | undefined;
    return (
      <div className={`border-b py-1.5 text-sm ${indentClass}`}>
        <div className="flex items-center justify-between gap-3">
          <span className="font-medium">{item.recipeName}</span>
          <span className="whitespace-nowrap font-medium">
            {score} / {maxMark}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          [{(recipeValue?.recipeCompleted ?? true) ? "x" : " "}] Recipe
          Completed &nbsp;&nbsp;[
          {(recipeValue?.costingAppropriate ?? true) ? "x" : " "}] Costing
          Appropriate
        </p>
      </div>
    );
  }

  if (item.type === "practical-dish") {
    const dishValue = value as PracticalDishAssessmentDraft | undefined;
    const comments = dishValue?.comments ?? [];
    return (
      <div className={`border-b py-1.5 text-sm ${indentClass}`}>
        <div className="flex items-center justify-between gap-3">
          <span className="font-medium">{item.dishName}</span>
          <span className="whitespace-nowrap font-medium">
            {score} / {maxMark}
          </span>
        </div>
        {comments.length ? (
          <p className="text-xs text-muted-foreground">
            Comments: {comments.join(", ")}
          </p>
        ) : null}
        {dishValue?.otherComment ? (
          <p className="text-xs text-muted-foreground">
            Other: {dishValue.otherComment}
          </p>
        ) : null}
        {dishValue?.notes ? (
          <p className="text-xs text-muted-foreground">
            Notes: {dishValue.notes}
          </p>
        ) : null}
      </div>
    );
  }

  const notesValue = value as NotesAssessmentDraft | undefined;
  return (
    <div className={`border-b py-1.5 text-sm ${indentClass}`}>
      <p className="font-medium">{item.label}</p>
      {notesValue?.notes ? (
        <p className="text-xs text-muted-foreground">{notesValue.notes}</p>
      ) : null}
    </div>
  );
}

function AssessmentSectionBlock({
  section,
  draft,
}: {
  section: AssessmentSection;
  draft: AssessmentDraftState;
}) {
  const sectionScore = calculateSectionScore(section, draft);

  return (
    <div className="print-avoid-break space-y-2 py-3">
      <div className="flex items-center justify-between gap-3 border-b-2 pb-1">
        <h3 className="text-sm font-bold uppercase tracking-wide">
          {section.title}
        </h3>
        <span className="text-sm font-bold">
          {sectionScore.score} / {sectionScore.maxScore}
        </span>
      </div>
      <div>
        {section.items.map((item) => (
          <AssessmentItemRow
            key={item.id}
            item={item}
            draft={draft}
            depth={0}
          />
        ))}
      </div>
    </div>
  );
}

type AssessmentPrintReportProps = {
  blueprint: AssessmentBlueprint;
  draft: AssessmentDraftState;
  student: {
    fullName: string;
    admissionNumber: string;
  };
  score: number;
  maxScore: number;
  percentage: number;
  completed: boolean;
  generatedAt: string;
};

export function AssessmentPrintReport({
  blueprint,
  draft,
  student,
  score,
  maxScore,
  percentage,
  completed,
  generatedAt,
}: AssessmentPrintReportProps) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6 text-foreground">
      <div className="space-y-1 border-b-2 pb-4">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          Limpopo Chefs Academy
        </p>
        <h1 className="text-xl font-bold">{blueprint.title}</h1>
        <p className="text-sm">
          Student: <span className="font-medium">{student.fullName}</span> (
          {student.admissionNumber})
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
          <span>Code: {blueprint.code.toUpperCase()}</span>
          <span>Status: {completed ? "Completed" : "In progress"}</span>
          <span>
            Score: {score} / {maxScore} ({percentage}%)
          </span>
          <span>Generated: {generatedAt}</span>
        </div>
      </div>

      <div className="space-y-1">
        {blueprint.sections
          .slice()
          .sort((left, right) => left.order - right.order)
          .map((section) => (
            <AssessmentSectionBlock
              key={section.id}
              section={section}
              draft={draft}
            />
          ))}
      </div>
    </div>
  );
}
