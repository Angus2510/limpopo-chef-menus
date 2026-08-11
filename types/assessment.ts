export type AssessmentCategory =
  | "menu"
  | "menu-a"
  | "menu-b"
  | "menu-c"
  | "menu-p";

export type AssessmentTemplate = {
  id: string;
  code: string;
  title: string;
  category: AssessmentCategory;
};

export type AssessmentItemType =
  | "checkbox"
  | "recipe-card"
  | "practical-dish"
  | "notes";

export type AssessmentCommentOption =
  | "Well cooked"
  | "Raw / Undercooked"
  | "Burnt / Overcooked"
  | "Ratios balanced on plate"
  | "Well seasoned"
  | "Under seasoned"
  | "Incorrect portion (too big)"
  | "Incorrect portion (too small)"
  | "Hot plate"
  | "Cold plate"
  | "Served late"
  | "Served on time"
  | "Other";

export type CheckboxAssessmentItem = {
  id: string;
  type: "checkbox";
  description: string;
  maxMark: number;
};

export type RecipeCardAssessmentItem = {
  id: string;
  type: "recipe-card";
  recipeName: string;
  maxMark: number;
};

export type PracticalDishAssessmentItem = {
  id: string;
  type: "practical-dish";
  dishName: string;
  maxMark: number;
};

export type NotesAssessmentItem = {
  id: string;
  type: "notes";
  label: string;
};

export type GroupAssessmentItem = {
  id: string;
  type: "group";
  title: string;
  items: AssessmentItem[];
};

export type AssessmentItem =
  | CheckboxAssessmentItem
  | RecipeCardAssessmentItem
  | PracticalDishAssessmentItem
  | NotesAssessmentItem
  | GroupAssessmentItem;

export type AssessmentSection = {
  id: string;
  title: string;
  order: number;
  items: AssessmentItem[];
};

export type AssessmentBlueprint = AssessmentTemplate & {
  sections: AssessmentSection[];
};

export type CheckboxAssessmentDraft = {
  checked: boolean;
};

export type RecipeCardAssessmentDraft = {
  recipeCompleted: boolean;
  costingAppropriate: boolean;
};

export type PracticalDishAssessmentDraft = {
  score: number;
  comments: AssessmentCommentOption[];
  otherComment: string;
  notes: string;
};

export type NotesAssessmentDraft = {
  notes: string;
};

export type AssessmentItemDraft =
  | CheckboxAssessmentDraft
  | RecipeCardAssessmentDraft
  | PracticalDishAssessmentDraft
  | NotesAssessmentDraft;

export type AssessmentDraftState = Record<string, AssessmentItemDraft>;

export type IntakeGroupOption = {
  id: string;
  title: string;
};

export type StudentOption = {
  id: string;
  admissionNumber: string;
  fullName: string;
};

export type StudentAssessmentRecord = {
  id: string;
  studentId: string;
  assessorId: string;
  assessmentCode: string;
  assessmentTitle: string;
  assessmentCategory: AssessmentCategory;
  score: number | null;
  comments: string | null;
  completed: boolean;
  locked: boolean;
  createdAt: string;
  updatedAt: string;
};
