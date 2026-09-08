import type {
  AssessmentBlueprint,
  AssessmentDraftState,
  AssessmentItem,
  AssessmentSection,
  CheckboxAssessmentDraft,
  CheckboxAssessmentItem,
  PracticalDishAssessmentDraft,
  PracticalDishAssessmentItem,
  RecipeCardAssessmentDraft,
  RecipeCardAssessmentItem,
} from "@/types/assessment";

function populateDraftForItem(
  item: AssessmentItem,
  draft: AssessmentDraftState,
) {
  if (item.type === "checkbox") {
    draft[item.id] = { checked: true };
    return;
  }

  if (item.type === "recipe-card") {
    draft[item.id] = {
      recipeCompleted: true,
      costingAppropriate: true,
    };
    return;
  }

  if (item.type === "practical-dish") {
    draft[item.id] = {
      score: 0,
      comments: [],
      otherComment: "",
      notes: "",
    };
    return;
  }

  if (item.type === "notes") {
    draft[item.id] = { notes: "" };
    return;
  }

  if (item.type === "group") {
    item.items.forEach((childItem) => populateDraftForItem(childItem, draft));
  }
}

export function createEmptyAssessmentDraft(
  blueprint: AssessmentBlueprint,
): AssessmentDraftState {
  const draft: AssessmentDraftState = {};

  for (const section of blueprint.sections) {
    for (const item of section.items) {
      populateDraftForItem(item, draft);
    }
  }

  return draft;
}

export function serializeAssessmentDraft(draft: AssessmentDraftState): string {
  return JSON.stringify({ version: 1, draft });
}

export function parseAssessmentDraft(
  raw: string | null,
): AssessmentDraftState | null {
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as unknown;

    if (typeof parsed !== "object" || parsed === null) {
      return null;
    }

    const payload = parsed as {
      draft?: unknown;
    };

    if (!payload.draft || typeof payload.draft !== "object") {
      return null;
    }

    return payload.draft as AssessmentDraftState;
  } catch {
    return null;
  }
}

function clampScore(value: number, maxMark: number): number {
  return Math.max(0, Math.min(maxMark, value));
}

function getCheckboxScore(
  item: CheckboxAssessmentItem,
  state: CheckboxAssessmentDraft | undefined,
): number {
  return (state?.checked ?? true) ? item.maxMark : 0;
}

export function getRecipeCardScore(
  item: RecipeCardAssessmentItem,
  state: RecipeCardAssessmentDraft | undefined,
): number {
  const completedScore = (state?.recipeCompleted ?? true) ? 1 : 0;
  const costingScore = (state?.costingAppropriate ?? true) ? 1 : 0;
  return clampScore(completedScore + costingScore, item.maxMark);
}

export function getPracticalDishScore(
  item: PracticalDishAssessmentItem,
  state: PracticalDishAssessmentDraft | undefined,
): number {
  return clampScore(state?.score ?? 0, item.maxMark);
}

export function getItemMaxMark(item: AssessmentItem): number {
  if (
    item.type === "checkbox" ||
    item.type === "recipe-card" ||
    item.type === "practical-dish"
  ) {
    return item.maxMark;
  }

  if (item.type === "group") {
    return item.items.reduce(
      (runningTotal, childItem) => runningTotal + getItemMaxMark(childItem),
      0,
    );
  }

  return 0;
}

function calculateItemScoreForDraft(
  item: AssessmentItem,
  draft: AssessmentDraftState,
): number {
  if (item.type === "checkbox") {
    return getCheckboxScore(
      item,
      draft[item.id] as CheckboxAssessmentDraft | undefined,
    );
  }

  if (item.type === "recipe-card") {
    return getRecipeCardScore(
      item,
      draft[item.id] as RecipeCardAssessmentDraft | undefined,
    );
  }

  if (item.type === "practical-dish") {
    return getPracticalDishScore(
      item,
      draft[item.id] as PracticalDishAssessmentDraft | undefined,
    );
  }

  if (item.type === "group") {
    return item.items.reduce(
      (runningTotal, childItem) =>
        runningTotal + calculateItemScoreForDraft(childItem, draft),
      0,
    );
  }

  return 0;
}

export function calculateItemScore(
  item: AssessmentItem,
  state: AssessmentDraftState[string] | undefined,
): number {
  if (item.type === "checkbox") {
    return getCheckboxScore(item, state as CheckboxAssessmentDraft | undefined);
  }

  if (item.type === "recipe-card") {
    return getRecipeCardScore(
      item,
      state as RecipeCardAssessmentDraft | undefined,
    );
  }

  if (item.type === "practical-dish") {
    return getPracticalDishScore(
      item,
      state as PracticalDishAssessmentDraft | undefined,
    );
  }

  if (item.type === "group") {
    return item.items.reduce(
      (runningTotal, childItem) =>
        runningTotal + calculateItemScore(childItem, undefined),
      0,
    );
  }

  return 0;
}

export function calculateSectionScore(
  section: AssessmentSection,
  draft: AssessmentDraftState,
): { score: number; maxScore: number } {
  const score = section.items.reduce(
    (runningTotal, item) =>
      runningTotal + calculateItemScoreForDraft(item, draft),
    0,
  );

  const maxScore = section.items.reduce(
    (runningTotal, item) => runningTotal + getItemMaxMark(item),
    0,
  );

  return { score, maxScore };
}

export function calculateAssessmentScore(
  blueprint: AssessmentBlueprint,
  draft: AssessmentDraftState,
): { score: number; maxScore: number; percentage: number } {
  const summary = blueprint.sections.reduce(
    (running, section) => {
      const sectionScore = calculateSectionScore(section, draft);
      return {
        score: running.score + sectionScore.score,
        maxScore: running.maxScore + sectionScore.maxScore,
      };
    },
    { score: 0, maxScore: 0 },
  );

  return {
    ...summary,
    percentage:
      summary.maxScore === 0
        ? 0
        : Math.round((summary.score / summary.maxScore) * 100),
  };
}
