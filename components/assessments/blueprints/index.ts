import type {
  AssessmentBlueprint,
  AssessmentTemplate,
} from "@/types/assessment";
import { createDefaultAssessmentBlueprint } from "./default";
import { createMenuABlueprint } from "./menu-a";
import { createMenuBBlueprint } from "./menu-b";
import { createMenuCBlueprint } from "./menu-c";
import { createMenuPBlueprint } from "./menu-p";

export function createAssessmentBlueprint(
  template: AssessmentTemplate,
): AssessmentBlueprint {
  const menuABlueprint = createMenuABlueprint(template);
  if (menuABlueprint) {
    return menuABlueprint;
  }

  const menuBBlueprint = createMenuBBlueprint(template);
  if (menuBBlueprint) {
    return menuBBlueprint;
  }

  const menuCBlueprint = createMenuCBlueprint(template);
  if (menuCBlueprint) {
    return menuCBlueprint;
  }

  const menuPBlueprint = createMenuPBlueprint(template);
  if (menuPBlueprint) {
    return menuPBlueprint;
  }

  return createDefaultAssessmentBlueprint(template);
}
