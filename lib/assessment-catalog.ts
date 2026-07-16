import { AssessmentCategory, AssessmentTemplate } from "@/types/assessment"

type MenuDefinition = {
  category: AssessmentCategory
  prefix: string
  count: number
  finalLabel?: Record<number, string>
}

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
]

function buildTemplateCode(prefix: string, index: number): string {
  const segment = prefix ? `${prefix.toLowerCase()}${index}` : String(index)
  return `menu-${segment}`
}

function buildTemplateTitle(prefix: string, index: number, label?: string): string {
  const menuLabel = prefix ? `Menu ${prefix}${index}` : `Menu ${index}`
  return label ? `${menuLabel} ${label}` : menuLabel
}

function buildTemplates(): AssessmentTemplate[] {
  const templates: AssessmentTemplate[] = []

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
      })
    }
  }

  return templates
}

export const ASSESSMENT_TEMPLATES: AssessmentTemplate[] = buildTemplates()

export const ASSESSMENT_CATEGORY_LABELS: Record<AssessmentCategory, string> = {
  menu: "Menu",
  "menu-a": "Menu A",
  "menu-b": "Menu B",
  "menu-c": "Menu C",
  "menu-p": "Menu P",
}
