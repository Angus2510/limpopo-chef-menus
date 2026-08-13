import { AssessmentCategory, AssessmentTemplate } from "@/types/assessment";

type MenuDefinition = {
  category: AssessmentCategory;
  prefix: string;
  count: number;
  finalLabel?: Record<number, string>;
};

const definitions: MenuDefinition[] = [
  {
    category: "menu",
    prefix: "",
    count: 15,
  },
  {
    category: "menu-a",
    prefix: "A",
    count: 18,
    finalLabel: {
      18: "Final Summative Practical Exam",
    },
  },
  {
    category: "menu-b",
    prefix: "B",
    count: 9,
    finalLabel: {
      9: "Final Summative Practical Exam",
    },
  },
  {
    category: "menu-c",
    prefix: "C",
    count: 6,
  },
  {
    category: "menu-p",
    prefix: "P",
    count: 17,
    finalLabel: {
      17: "Final Summative Practical Exam",
    },
  },
];

function buildTemplateCode(prefix: string, index: number): string {
  const segment = prefix ? `${prefix.toLowerCase()}${index}` : String(index);
  return `menu-${segment}`;
}

function buildTemplateTitle(
  prefix: string,
  index: number,
  label?: string,
): string {
  const menuLabel = prefix ? `Menu ${prefix}${index}` : `Menu ${index}`;
  return label ? `${menuLabel} ${label}` : menuLabel;
}

function buildTemplates(): AssessmentTemplate[] {
  const templates: AssessmentTemplate[] = [];

  for (const definition of definitions) {
    for (let index = 1; index <= definition.count; index += 1) {
      templates.push({
        id: `${definition.category}-${index}`,
        code: buildTemplateCode(definition.prefix, index),
        title: buildTemplateTitle(
          definition.prefix,
          index,
          definition.finalLabel?.[index],
        ),
        category: definition.category,
      });
    }
  }

  return templates;
}

const EXTRA_ASSESSMENT_TEMPLATES: AssessmentTemplate[] = [
  {
    id: "menu-b-1-cathsseta",
    code: "menu-b1-cathsseta",
    title: "Menu B1 CATHSSETA",
    category: "menu-b",
  },
  {
    id: "menu-b-2-cathsseta",
    code: "menu-b2-cathsseta",
    title: "Menu B2 CATHSSETA",
    category: "menu-b",
  },
  {
    id: "menu-b-3-cathsseta",
    code: "menu-b3-cathsseta",
    title: "Menu B3 CATHSSETA",
    category: "menu-b",
  },
  {
    id: "menu-b-5-cathsseta",
    code: "menu-b5-cathsseta",
    title: "Menu B5 CATHSSETA",
    category: "menu-b",
  },
  {
    id: "menu-b-6-cathsseta",
    code: "menu-b6-cathsseta",
    title: "Menu B6 CATHSSETA",
    category: "menu-b",
  },
  {
    id: "menu-b-7-ocg",
    code: "menu-b7-ocg",
    title: "Menu B7 OCG",
    category: "menu-b",
  },
  {
    id: "menu-b-7-diploma",
    code: "menu-b7-diploma",
    title: "Menu B7 DIPLOMA",
    category: "menu-b",
  },
  {
    id: "menu-b-7-cathsseta",
    code: "menu-b7-cathsseta",
    title: "Menu B7 CATHSSETA",
    category: "menu-b",
  },
];

export const ASSESSMENT_TEMPLATES: AssessmentTemplate[] = [
  ...buildTemplates(),
  ...EXTRA_ASSESSMENT_TEMPLATES,
];

export const ASSESSMENT_COMPETENCY_THRESHOLDS: Record<string, number> = {
  "menu-b6": 70,
  "menu-b6-cathsseta": 70,
  "menu-b7-diploma": 70,
  "menu-b7-cathsseta": 70,
  "menu-b8": 70,
  "menu-b9": 70,
  "menu-c1": 70,
  "menu-c2": 70,
};

export const ASSESSMENT_CATEGORY_LABELS: Record<AssessmentCategory, string> = {
  menu: "Menu",
  "menu-a": "Menu A",
  "menu-b": "Menu B",
  "menu-c": "Menu C",
  "menu-p": "Menu P",
};
