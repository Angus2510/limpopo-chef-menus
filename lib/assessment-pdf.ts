import PDFDocument from "pdfkit";

import {
  calculateAssessmentScore,
  calculateItemScore,
  calculateSectionScore,
  getItemMaxMark,
} from "@/components/assessments/assessment-scoring";
import type {
  AssessmentBlueprint,
  AssessmentDraftState,
  AssessmentItem,
  CheckboxAssessmentDraft,
  NotesAssessmentDraft,
  PracticalDishAssessmentDraft,
  RecipeCardAssessmentDraft,
} from "@/types/assessment";

function addItemLines(
  lines: string[],
  item: AssessmentItem,
  draft: AssessmentDraftState,
  depth = 0,
) {
  const indent = "  ".repeat(depth);

  if (item.type === "group") {
    lines.push(`${indent}${item.title}`);
    item.items.forEach((childItem) =>
      addItemLines(lines, childItem, draft, depth + 1),
    );
    return;
  }

  const value = draft[item.id];
  const score = calculateItemScore(item, value);
  const maxMark = getItemMaxMark(item);

  if (item.type === "checkbox") {
    const checkboxValue = value as CheckboxAssessmentDraft | undefined;
    const checked = checkboxValue?.checked ?? true;
    lines.push(
      `${indent}[${checked ? "x" : " "}] ${item.description} - ${score} / ${maxMark}`,
    );
    if (!checked && checkboxValue?.reason) {
      lines.push(`${indent}  Reason mark not awarded: ${checkboxValue.reason}`);
    }
    return;
  }

  if (item.type === "recipe-card") {
    const recipeValue = value as RecipeCardAssessmentDraft | undefined;
    lines.push(`${indent}${item.recipeName} - ${score} / ${maxMark}`);
    lines.push(
      `${indent}  [${(recipeValue?.recipeCompleted ?? true) ? "x" : " "}] Recipe Completed   [${(recipeValue?.costingAppropriate ?? true) ? "x" : " "}] Costing Appropriate`,
    );
    if (!recipeValue?.recipeCompleted && recipeValue?.recipeCompletedReason) {
      lines.push(
        `${indent}  Recipe completion mark not awarded: ${recipeValue.recipeCompletedReason}`,
      );
    }
    if (
      !recipeValue?.costingAppropriate &&
      recipeValue?.costingAppropriateReason
    ) {
      lines.push(
        `${indent}  Costing mark not awarded: ${recipeValue.costingAppropriateReason}`,
      );
    }
    return;
  }

  if (item.type === "practical-dish") {
    const dishValue = value as PracticalDishAssessmentDraft | undefined;
    lines.push(`${indent}${item.dishName} - ${score} / ${maxMark}`);
    if (dishValue?.comments.length) {
      lines.push(`${indent}  Comments: ${dishValue.comments.join(", ")}`);
    }
    if (dishValue?.otherComment) {
      lines.push(`${indent}  Other: ${dishValue.otherComment}`);
    }
    if (dishValue?.notes) {
      lines.push(`${indent}  Notes: ${dishValue.notes}`);
    }
    if (score < maxMark && dishValue?.reason) {
      lines.push(`${indent}  Reason marks not awarded: ${dishValue.reason}`);
    }
    return;
  }

  const notesValue = value as NotesAssessmentDraft | undefined;
  lines.push(`${indent}${item.label}`);
  if (notesValue?.notes) {
    lines.push(`${indent}  Notes: ${notesValue.notes}`);
  }
}

export function createAssessmentPdf(params: {
  blueprint: AssessmentBlueprint;
  draft: AssessmentDraftState;
  student: {
    fullName: string;
    admissionNumber: string;
  };
  completed: boolean;
  generatedAt: string;
}): Promise<Buffer> {
  const { blueprint, draft, student, completed, generatedAt } = params;
  const assessmentScore = calculateAssessmentScore(blueprint, draft);
  const document = new PDFDocument({
    margin: 48,
    size: "A4",
    info: {
      Author: "Limpopo Chefs Academy",
      Title: `${student.fullName} - ${blueprint.title}`,
    },
  });
  const chunks: Buffer[] = [];

  return new Promise((resolve, reject) => {
    document.on("data", (chunk: Buffer) => chunks.push(chunk));
    document.on("end", () => resolve(Buffer.concat(chunks)));
    document.on("error", reject);

    document.font("Helvetica-Bold").fontSize(16).text("Limpopo Chefs Academy");
    document.moveDown(0.35);
    document.fontSize(14).text(blueprint.title);
    document.moveDown(0.25);
    document.font("Helvetica").fontSize(10);
    document.text(`Student: ${student.fullName}`);
    document.text(`Admission number: ${student.admissionNumber}`);
    document.text(`Assessment code: ${blueprint.code.toUpperCase()}`);
    document.text(`Status: ${completed ? "Completed" : "In progress"}`);
    document.text(
      `Overall score: ${assessmentScore.score} / ${assessmentScore.maxScore} (${assessmentScore.percentage}%)`,
    );
    document.text(`Generated: ${generatedAt}`);
    document.moveDown(0.8);

    blueprint.sections
      .slice()
      .sort((left, right) => left.order - right.order)
      .forEach((section) => {
        const sectionScore = calculateSectionScore(section, draft);
        document
          .font("Helvetica-Bold")
          .fontSize(11)
          .text(
            `${section.title} - ${sectionScore.score} / ${sectionScore.maxScore}`,
          );
        document.moveDown(0.15);

        const lines: string[] = [];
        section.items.forEach((item) => addItemLines(lines, item, draft));
        document.font("Helvetica").fontSize(9).text(lines.join("\n"), {
          lineGap: 2,
        });
        document.moveDown(0.6);
      });

    document.end();
  });
}
