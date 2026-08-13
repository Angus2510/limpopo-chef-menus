import type {
  AssessmentBlueprint,
  AssessmentTemplate,
} from "@/types/assessment";

export function createDefaultAssessmentBlueprint(
  template: AssessmentTemplate,
): AssessmentBlueprint {
  return {
    ...template,
    sections: [
      {
        id: `${template.id}-section-checklist`,
        title: "Checklist",
        order: 1,
        items: [
          {
            id: `${template.id}-check-1`,
            type: "checkbox",
            description: "Checklist item 1",
            maxMark: 1,
          },
          {
            id: `${template.id}-check-2`,
            type: "checkbox",
            description: "Checklist item 2",
            maxMark: 1,
          },
        ],
      },
      {
        id: `${template.id}-section-recipe-card`,
        title: "Recipe Card",
        order: 2,
        items: [
          {
            id: `${template.id}-recipe-card`,
            type: "recipe-card",
            recipeName: "Recipe Card",
            maxMark: 2,
          },
        ],
      },
      {
        id: `${template.id}-section-practical-dish`,
        title: "Practical Dish",
        order: 3,
        items: [
          {
            id: `${template.id}-practical-dish`,
            type: "practical-dish",
            dishName: "Practical Dish",
            maxMark: 5,
          },
        ],
      },
      {
        id: `${template.id}-section-notes`,
        title: "Notes",
        order: 4,
        items: [
          {
            id: `${template.id}-notes`,
            type: "notes",
            label: "Assessor notes",
          },
        ],
      },
    ],
  };
}
