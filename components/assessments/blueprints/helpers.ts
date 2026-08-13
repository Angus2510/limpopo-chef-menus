import type {
  CheckboxAssessmentItem,
  GroupAssessmentItem,
  NotesAssessmentItem,
} from "@/types/assessment";

export function createCheckboxItem(
  templateId: string,
  suffix: string,
  description: string,
): CheckboxAssessmentItem {
  return {
    id: `${templateId}-${suffix}`,
    type: "checkbox",
    description,
    maxMark: 1,
  };
}

export function createNotesItem(
  templateId: string,
  suffix: string,
  label: string,
): NotesAssessmentItem {
  return {
    id: `${templateId}-${suffix}`,
    type: "notes",
    label,
  };
}

export function createGroupItem(
  templateId: string,
  suffix: string,
  title: string,
  descriptions: string[],
): GroupAssessmentItem {
  return {
    id: `${templateId}-group-${suffix}`,
    type: "group",
    title,
    items: descriptions.map((description, index) =>
      createCheckboxItem(templateId, `${suffix}-${index + 1}`, description),
    ),
  };
}
