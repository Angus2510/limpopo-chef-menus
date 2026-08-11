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
import type {
  AssessmentBlueprint,
  AssessmentCommentOption,
  AssessmentDraftState,
  AssessmentItem,
  AssessmentSection,
  CheckboxAssessmentDraft,
  CheckboxAssessmentItem,
  GroupAssessmentItem,
  NotesAssessmentDraft,
  NotesAssessmentItem,
  PracticalDishAssessmentDraft,
  PracticalDishAssessmentItem,
  RecipeCardAssessmentDraft,
  RecipeCardAssessmentItem,
  AssessmentTemplate,
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

function createCheckboxItem(
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

function createNotesItem(
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

function createGroupItem(
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

export function createAssessmentBlueprint(
  template: AssessmentTemplate,
): AssessmentBlueprint {
  if (template.code === "menu-a1") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Student is Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Student has Arrived with a Fully Equiped & Clean Toolbox",
            ),
            createCheckboxItem(
              template.id,
              "personal-4",
              "Student show respect of Authority ",
            ),
            createCheckboxItem(
              template.id,
              "personal-5",
              "Student has Arrived on Time ",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "The student displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Correct chopping boards used & it is secure ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-5",
              "Student takes care to work safely",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Student selects suitable equipment for task ",
            ),
            createCheckboxItem(
              template.id,
              "operation-2",
              "Knives are used, cleaned, sharpened and stored correctly",
            ),
          ],
        },
        {
          id: `${template.id}-section-knife-skills`,
          title: "Knife Skills ",
          order: 4,
          items: [
            createGroupItem(template.id, "spinach", "Spinach Chiffonade ", [
              "Chiffonade - Correct knife used ",
              "Chiffonade - All unifrom shape ",
              "Chiffonade - Minimum of 2 Leaves ",
            ]),
            createGroupItem(
              template.id,
              "carrot-brunoise",
              "Burnoise Carrot ",
              [
                "Brunoise Carrot - Correct knife used ",
                "Brunoise Carrot - 3mm x 3mm x 3mm",
                "Brunoise Carrot - Minimum of 20 produced ",
              ],
            ),
            createGroupItem(template.id, "onion-brunoise", "Brunoise Onion ", [
              "Brunoise Onion - Correct knife used ",
              "Brunoise Onion - 3mm/5mm",
              "Brunoise Onion - Minimum of 250ml produced",
            ]),
            createGroupItem(template.id, "citrus", "Segmented Citrus Fruit ", [
              "Segment - Correct technique used / over a bowl ",
              "Segment - Correct knife used ",
              "Segment - Produce whole segments ",
              "Segment - Produce a seedless & pithless segment ",
              "Segments - Minimum of 6 Produced ",
            ]),
            createGroupItem(
              template.id,
              "carrot-battonette",
              "Battonette Carrot ",
              [
                "Battonette Carrot - Correct knife used ",
                "Battonette Carrot - 7mm x 7mm x 7cm ",
                "Battonette Carrot - Minimum of 6 produced ",
              ],
            ),
            createGroupItem(
              template.id,
              "potato-tournee",
              "Tournee Potatoes ",
              [
                "Tournee Potato - Carrect knife used ",
                "Tournee Potato - Has a minimum of 5 equal sides ",
                "Tournee Potato - 2 Produced ",
              ],
            ),
            createGroupItem(
              template.id,
              "carrot-julienne",
              "Julienne Carrots ",
              [
                "Julienne Carrot - Correct knife used ",
                "Julienne Carrot - 3mm x 3mm x 3mm x 3mm x 5mm",
                "Julienne Carrot - Minimum of 20 produced ",
              ],
            ),
            createGroupItem(
              template.id,
              "carrot-jardiniere",
              "Jardiniere Carrots ",
              [
                "Jardiniere Carrot - Correct Knife Used ",
                "Jardiniere Carrot - 7x7x7x7mm",
                "Jardiniere Carrot - Minimum of 20 Produced ",
              ],
            ),
            createGroupItem(
              template.id,
              "carrot-macedoine",
              "Macedoine Carrots ",
              [
                "Macedoine Carrot - Correct knife used ",
                "Macedoine Carrot - 10mm x 10mm x 10mm ",
                "Macedoine Carrot - Minimum of 20 produced ",
              ],
            ),
            createGroupItem(template.id, "garlic-minced", "Minced Garlic ", [
              "Minced Garlic - Salt use to aid technique ",
              "Minced Garlic - Correct knife used ",
              "Minced Garlic - Mince & Not roughly chopped ",
              "Minced Garlic - Minimum of 2 Produced ",
            ]),
            createGroupItem(
              template.id,
              "carrot-paysanne",
              "Paysanne Carrots ",
              [
                "Paysanne Carrot - Correct knife used ",
                "Paysanne Carrot - Thinly sliced in its natural shape ",
                "Paysanne Carrot - 1 Paysanne carrot produced ",
              ],
            ),
            createGroupItem(template.id, "general", "General ", [
              "Student control waste ",
              "Off Cuts kept for recycling ",
            ]),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the Skills Presented on time - 10:00 / 16:00",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 6,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a2") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Student is Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Student has Arrived with a Fully Clean Toolbox",
            ),
            createCheckboxItem(
              template.id,
              "personal-4",
              "Student show respect of authority ",
            ),
            createCheckboxItem(
              template.id,
              "personal-5",
              "Student arrive on time ",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "The student displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Correct chopping boards  used & it is secure",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-5",
              "Student shows no evidence of cross contamination.",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-6",
              "Sanitizer is applied between tasks",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-7",
              "Student takes care to work safely",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Student selects suitable equipment for task ",
            ),
            createCheckboxItem(
              template.id,
              "operation-2",
              "Student controls waste",
            ),
            createCheckboxItem(
              template.id,
              "operation-3",
              "Gas/Electricity was not used unnecessarily",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-poached-egg`,
              type: "recipe-card",
              recipeName: "Poached Egg ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-omelette`,
              type: "recipe-card",
              recipeName: "Omelette ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-fried-egg`,
              type: "recipe-card",
              recipeName: "Fried Egg",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-coddled-egg`,
              type: "recipe-card",
              recipeName: "Microwave Coddled Eggs ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-eggs`,
          title: "Eggs ",
          order: 5,
          items: [
            createGroupItem(template.id, "poached", "Poached Egg ", [
              "Poached Egg - Egg yolk and white intact/ looks visual appeal ",
              "Poached Egg - Serve with a runny yolk & egg white is cooked ",
            ]),
            createGroupItem(template.id, "omelette", "Omelette ", [
              "Omelette - Appropriate thickness",
              "Omelette - looks Visual Appeal ",
              "Omelette - Served whole and intact ",
              "Omelette Filling - Ratio is appropriate ",
              "Omelette Filling - Well seasoned ",
              "Omelette - Well seasoned ",
            ]),
            createGroupItem(
              template.id,
              "sunny-side",
              "Sunny Side Fried Egg ",
              [
                "Fried Egg - Sunny side up egg served ",
                "Fried Egg - Sunny side up egg served whole",
                "Fried Egg - Sunny side up eggs looks visual appeal  ",
              ],
            ),
            createGroupItem(template.id, "easy-over", "Easy Over Fried Egg ", [
              "Fried Egg - Easy over egg served",
              "Fried Egg - Easy over egg served whole ",
              "Fried Egg - Easy over egg Looks Visual appeal  ",
            ]),
            createGroupItem(template.id, "medium", "Medium Fried Egg ", [
              "Fried Egg - Medium egg served ",
              "Fried Egg - Medium egg served whole",
              "Fried Egg - Medium egg Looks visual Appeal ",
            ]),
            createGroupItem(template.id, "well-done", "Well Done Fried Egg ", [
              "Fried Egg - Well done egg served ",
              "Fried Egg - Well done eggs served whole",
              "Fried Egg - Well done egg Looks visual Appeal ",
            ]),
            createGroupItem(template.id, "coddled", "Coddled Egg ", [
              "Coddled Egg - Runny egg yolk ",
              "Coddled Egg - Looks visual appeal ",
            ]),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dish served on time - 10:00 / 16:00",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Appropriate plate selected for the dish?",
            ),
            createCheckboxItem(
              template.id,
              "service-3",
              "Clean Plate and food within the rim?",
            ),
            createCheckboxItem(
              template.id,
              "service-4",
              "Temperature (hot food hot plate, cold food cold plate)",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a3") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Student is Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Student has Arrived with a Fully Clean Toolbox",
            ),
            createCheckboxItem(
              template.id,
              "personal-4",
              "Student has Arrived on Time ",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "The student displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Correct chopping boards used & is secured ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-5",
              "Student shows no evidence of cross contamination.",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-6",
              "Student takes care to work safely",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Student controls waste",
            ),
            createCheckboxItem(
              template.id,
              "operation-2",
              "Knives are used, cleaned, sharpened and stored correctly",
            ),
            createCheckboxItem(
              template.id,
              "operation-3",
              "Gas/Electricity was not used unnecessarily",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-blonde-stock`,
              type: "recipe-card",
              recipeName: "Blonde Stock ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-brown-stock`,
              type: "recipe-card",
              recipeName: "Brown Stock ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-napoletana`,
              type: "recipe-card",
              recipeName: "Napoletana ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-stock-sauces`,
          title: "Stock & Sauces ",
          order: 5,
          items: [
            createGroupItem(template.id, "blond-stock", "Blond Stock ", [
              "Blond Stock - kept at a simmer ",
              "Blond Stock - Not cloudy ",
              "Blond Stock - Chicken Flavour ",
            ]),
            createGroupItem(template.id, "brown-stock", "Brown Stock ", [
              "Brown Stock - Kept at a simmer ",
              "Brown Stock - Not Cloudy ",
              "Brown Stock - Beef Flavour ",
            ]),
            createGroupItem(template.id, "napoletana", "Napoletana ", [
              "Napoletana - Tomato Concassed ",
              "Napoletana - Well balanced flavours ",
              "Napoletana - Well seasoned ",
              "Napoletana - Appropriate consistency ",
              "Napoletana - Looks visual appeal ",
            ]),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dish served on time - 10:30   /  16:30",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a4") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Dressed in Full Chef Uniform (Cleaned & Ironed)",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Arrived with a Fully Clean Toolbox",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "Displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced & sanitizer is applied ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Correct chopping boards used & it is secure ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-5",
              "Shows no evidence of cross contamination.",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-6",
              "Good tasting practices & tasting cup water changed on a regular basis ",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Selects suitable equipment for task ",
            ),
            createCheckboxItem(template.id, "operation-2", "Controls waste"),
            createCheckboxItem(
              template.id,
              "operation-3",
              "Knives are used, cleaned, sharpened and stored correctly",
            ),
            createCheckboxItem(
              template.id,
              "operation-4",
              "Takes care to work safely ( Gas not wasted etc.)",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-veloute`,
              type: "recipe-card",
              recipeName: "Velouté",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-espagnole`,
              type: "recipe-card",
              recipeName: "Espagnole",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-hollandaise`,
              type: "recipe-card",
              recipeName: "Hollandaise",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-sauces`,
          title: "Sauces ",
          order: 5,
          items: [
            createGroupItem(template.id, "veloute", "Velouté", [
              "Velouté - Smooth consistency ",
              "Velouté - Appropriate viscosity ",
              "Velouté - Well balanced flovours ",
              "Velouté - Well seasoned ",
              "Velouté - Colour looks visual appeal ",
            ]),
            createGroupItem(template.id, "espagnole", "Espagnole", [
              "Espagnole - Smooth consistency ",
              "Espagnole - Well balanced flavours ",
              "Espagnole - Well seasoned ",
              "Espagnole has a glossy fiinish ",
              "Espagnole - Appropriate ciscosity ",
              "Espagnole - Colour looks visual appeal ",
            ]),
            createGroupItem(template.id, "hollandaise", "Hollandaise", [
              "Hollandaise - Made over a double boiler ",
              "Hollandaise - Emulsion Sauce ",
              "Hollandaise - Well balanced flavours ",
              "Hollandaise - Appropriate viscosity ",
              "Hollandaise - Well seasoned ",
              "Hollandaise - Colour looks visual appeal ",
            ]),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dish served on time - 10:00 / 16:00",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Clean Plate and food within the rim?",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a5") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Dressed in Full Chef Uniform (Cleaned & Ironed)",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Arrived with a Fully Clean Toolbox",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "Displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Student selects suitable equipment for task ",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-dinner-rolls`,
              type: "recipe-card",
              recipeName: "Dinner Rolls ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-bread`,
          title: "Bread ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "bread-1",
              "Yeast has been activated ",
            ),
            createCheckboxItem(
              template.id,
              "bread-2",
              "Dough knead untils smooth & elastic ",
            ),
            createCheckboxItem(template.id, "bread-3", "Dough proved twice "),
            createCheckboxItem(
              template.id,
              "bread-4",
              "Dinner rolls shaped after 1st proof ",
            ),
            createCheckboxItem(
              template.id,
              "bread-5",
              "Dinner rolls appropriate size ",
            ),
            createCheckboxItem(
              template.id,
              "bread-6",
              "Dinner rolls looks visual appeal - golden brown ",
            ),
            createCheckboxItem(
              template.id,
              "bread-7",
              "Dinner rolls cooked - Not raw or burnt",
            ),
            createCheckboxItem(
              template.id,
              "bread-8",
              "Dinner rolls appropriate texture ",
            ),
            createCheckboxItem(
              template.id,
              "bread-9",
              "6 Dinner rolls served ",
            ),
            createCheckboxItem(
              template.id,
              "bread-10",
              "Dinner rolls all uniformed",
            ),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dinner rolls served on time - 10:00 or 15:30",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a7") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Dressed in Full Chef Uniform (Cleaned & Ironed)",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Arrived with a Fully Clean Toolbox",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "Displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced & sanitizer is applied ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Shows no evidence of cross contamination.",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Selects suitable equipment for task ",
            ),
            createCheckboxItem(template.id, "operation-2", "Controls waste"),
            createCheckboxItem(
              template.id,
              "operation-3",
              "Takes care to work safely ( Gas not wasted etc.)",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-creme-caramel`,
              type: "recipe-card",
              recipeName: "Crème Caramel ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-scones`,
              type: "recipe-card",
              recipeName: "Scones ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-chantilly-creme`,
              type: "recipe-card",
              recipeName: "Chantilly Crème ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-desserts`,
          title: "Desserts  ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "dessert-1",
              "Crème Caramel sauce appropriate colour ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-2",
              "Crème Caramel sauce doest have a bitter taste to it ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-3",
              "Crème Caramel has a smooth consistency ",
            ),
            createCheckboxItem(template.id, "dessert-4", "Crème Caramel Set"),
            createCheckboxItem(
              template.id,
              "dessert-5",
              "Crème Caramel doesn’t have an egg taste ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-6",
              "Ratio of Creme to Caramel sauce appropriate",
            ),
            createCheckboxItem(
              template.id,
              "dessert-7",
              "Crème Caramel uniform shape ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-8",
              "Butter rub in with finger tips ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-9",
              "Scones Cooked - Not over or under ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-10",
              "Scones has an appropriate texture ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-11",
              "Scones unifrom shape & size ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-12",
              "Scones has an appropraite colour to it ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-13",
              "Scones looks visual appeal ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-14",
              "Chantilly Crème appropriate consitency ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-15",
              "Chantilly Crème balanced flavour ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-16",
              "Chantilly Crème appropriately used on the plate ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-17",
              "Ratio of all elements on scones are balanced ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-18",
              "Convenience jam appropriately used on the plate ",
            ),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dish served on time -  10:00 & 16:00",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Clean Plate and food within the rim?",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a8") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Student is Dressed in Full Chef Uniform ",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Student Uniform is Clean & Ironed ",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Student is Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-4",
              "Student has Arrived with a Fully Clean Toolbox",
            ),
            createCheckboxItem(
              template.id,
              "personal-5",
              "Student has Arrived on Time ",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "The student displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Student shows no evidence of cross contamination.",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-5",
              "Sanitizer is applied between tasks",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-6",
              "Student takes care to work safely",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Student selects suitable equipment for task ",
            ),
            createCheckboxItem(
              template.id,
              "operation-2",
              "Student controls waste",
            ),
            createCheckboxItem(
              template.id,
              "operation-3",
              "Gas/Electricity was not used unnecessarily",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-apple-crumble-blondies`,
              type: "recipe-card",
              recipeName: "Apple Crumble Blondies ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-creme-anglaise`,
              type: "recipe-card",
              recipeName: "Crème Anglaise ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-french-meringue`,
              type: "recipe-card",
              recipeName: "French Meringue ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-italian-meringue`,
              type: "recipe-card",
              recipeName: "Italian Meringue ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-swiss-meringue`,
              type: "recipe-card",
              recipeName: "Swiss Meringue ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-desserts`,
          title: "Desserts ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "dessert-1",
              "Blondie - Ratio balanced  between the blondie & crumb ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-2",
              "Blondie Cooked - Not over or under cooked ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-3",
              "Blondie - Well balanced flavours ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-4",
              "Blondie - Apples appropriate size",
            ),
            createCheckboxItem(
              template.id,
              "dessert-5",
              "Blondie - Appropriate texture ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-6",
              "Blondie looks visual appeal ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-7",
              "Anglaise - Appropraite viscosity ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-8",
              "Anglaise - Well balanced flavour ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-9",
              "Anglaise - Smooth Consistency",
            ),
            createCheckboxItem(
              template.id,
              "dessert-10",
              "Meringue - Did not weep ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-11",
              "Meringue - Appropraite colour ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-12",
              "Meringue - Appropriate texture ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-13",
              "Meringue - Looks visual appeal ",
            ),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dish served on time -  11:30 & 17:00",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Clean Plate and food within the rim?",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a10") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Student is Dressed in Full Chef Uniform ",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Student Uniform is Clean & Ironed ",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Student is Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-4",
              "Student has Arrived with a Fully Clean Toolbox",
            ),
            createCheckboxItem(
              template.id,
              "personal-5",
              "Student has Arrived on Time ",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "The student displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Correct chopping boards used & it is secured",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-5",
              "Student shows no evidence of cross contamination.",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-6",
              "Sanitizer is applied between tasks",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-7",
              "Good tasting practices ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-8",
              "Student takes care to work safely",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Student selects suitable equipment for task ",
            ),
            createCheckboxItem(
              template.id,
              "operation-2",
              "Student controls the cooking process (time & temp)",
            ),
            createCheckboxItem(
              template.id,
              "operation-3",
              "Student controls waste",
            ),
            createCheckboxItem(
              template.id,
              "operation-4",
              "Gas/Electricity was not used unnecessarily",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-lasagne`,
              type: "recipe-card",
              recipeName: "Lasagne",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-bechamel-sauce`,
              type: "recipe-card",
              recipeName: "Béchamel Sauce",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-napoletana-sauce`,
              type: "recipe-card",
              recipeName: "Napoletana Sauce",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-pasta-sauces`,
          title: "Pasta & Sauces ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "pasta-1",
              "Lasagne - Pasta sheets cooked correctly",
            ),
            createCheckboxItem(
              template.id,
              "pasta-2",
              "Lasagne - Pasta sheets appropriate size & shape",
            ),
            createCheckboxItem(
              template.id,
              "pasta-3",
              "Lasagne - Napoletana sauce well seasoned",
            ),
            createCheckboxItem(
              template.id,
              "pasta-4",
              "Lasagne - Napoletana sauce appropriate consistency",
            ),
            createCheckboxItem(
              template.id,
              "pasta-5",
              "Lasagne - Béchamel sauce smooth consistency",
            ),
            createCheckboxItem(
              template.id,
              "pasta-6",
              "Lasagne - Béchamel sauce appropriate consistency",
            ),
            createCheckboxItem(
              template.id,
              "pasta-7",
              "Lasagne - Béchamel sauce well seasoned",
            ),
            createCheckboxItem(
              template.id,
              "pasta-8",
              "Lasagne - Appropriate ratio of pasta, sauce & filling",
            ),
            createCheckboxItem(
              template.id,
              "pasta-9",
              "Lasagne - Cooked correctly, not raw or burnt",
            ),
            createCheckboxItem(
              template.id,
              "pasta-10",
              "Lasagne - Appropriate texture",
            ),
            createCheckboxItem(
              template.id,
              "pasta-11",
              "Lasagne - Looks visual appeal",
            ),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dish served on time -  10:00 & 16:00",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Clean Plate and food within the rim?",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a11") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Student is Dressed in Full Chef Uniform ",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Student Uniform is Clean & Ironed ",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Student is Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-4",
              "Student has Arrived with a Fully Clean Toolbox",
            ),
            createCheckboxItem(
              template.id,
              "personal-5",
              "Student has Arrived on Time ",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "The student displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Student shows no evidence of cross contamination.",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-5",
              "Sanitizer is applied between tasks",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-6",
              "Good tasting practices ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-7",
              "Student takes care to work safely",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Student controls the cooking process (time & temp)",
            ),
            createCheckboxItem(
              template.id,
              "operation-2",
              "Student controls waste",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-french-onion-soup`,
              type: "recipe-card",
              recipeName: "French Onion Soup",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-baguette`,
              type: "recipe-card",
              recipeName: "Bageutte ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-hot-soup`,
          title: "Hot Soup ",
          order: 5,
          items: [
            createGroupItem(
              template.id,
              "french-onion-soup",
              "French Onion Soup",
              [
                "French Onion Soup - Soup appropriate colour ",
                "French Onion Soup - Onions appropriate thickness sliced ",
                "French Onion Soup - Sherry cooked out ",
                "French Onion Soup - Onion is al dente ",
                "French Onion Soup - Ratio between onions & liquid appropriate ",
                "French Onion Soup - Well balanced flavour ",
                "French Onion Soup - Well seasoned ",
                "French Onion Soup - Appropriately au gratin ",
              ],
            ),
            createGroupItem(template.id, "baguette", "Baguette", [
              "Baguette - Yeast mixture rested ",
              "Baguette - Bread appropraite texture ",
              "Baguette - Bread Cooked ",
              "Baguette - Looks visual appeal ",
              "Baguette  Slices - Appropriate thickness ",
            ]),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dish served on time -  10:00 & 16:00",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Clean Plate and food within the rim?",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a9") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Student is Dressed in Full Chef Uniform ",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Student Uniform is Clean & Ironed ",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Student is Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-4",
              "Student has Arrived with a Fully Clean Toolbox",
            ),
            createCheckboxItem(
              template.id,
              "personal-5",
              "Student has Arrived on Time ",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "The student displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Correct chopping boards used & it is secured",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-5",
              "Student shows no evidence of cross contamination.",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-6",
              "Sanitizer is applied between tasks",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-7",
              "Good tasting practices ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-8",
              "Student takes care to work safely",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Student selects suitable equipment for task ",
            ),
            createCheckboxItem(
              template.id,
              "operation-2",
              "Student controls the cooking process (time & temp)",
            ),
            createCheckboxItem(
              template.id,
              "operation-3",
              "Student controls waste",
            ),
            createCheckboxItem(
              template.id,
              "operation-4",
              "Gas/Electricity was not used unnecessarily",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-shortcrust-pastry`,
              type: "recipe-card",
              recipeName: "Shortcrust Pastry ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-quiche-florentine`,
              type: "recipe-card",
              recipeName: "Quiche Florentine",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-quiche`,
          title: "Quiche    ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "quiche-1",
              "Shortcrust pastry - Dough not over worked",
            ),
            createCheckboxItem(
              template.id,
              "quiche-2",
              "Shortcrust pastry - Dough rested for a at least 20 min",
            ),
            createCheckboxItem(
              template.id,
              "quiche-3",
              "Shortcrust pastry - Thinly rolled out ",
            ),
            createCheckboxItem(
              template.id,
              "quiche-4",
              "Shortcrust pastry - Cooked & not raw ",
            ),
            createCheckboxItem(
              template.id,
              "quiche-5",
              "Tart case neatly lined",
            ),
            createCheckboxItem(
              template.id,
              "quiche-6",
              "Tart case looks visual appeal - No cracks ",
            ),
            createCheckboxItem(
              template.id,
              "quiche-7",
              "Royal Custard mixed well",
            ),
            createCheckboxItem(
              template.id,
              "quiche-8",
              "Royal Custard cooked ",
            ),
            createCheckboxItem(
              template.id,
              "quiche-9",
              "Quiche filling well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "quiche-10",
              "Quiche ratio from filling to, custard & crust appropriate ",
            ),
            createCheckboxItem(
              template.id,
              "quiche-11",
              "Quiche filling set - Not runny consistency ",
            ),
            createCheckboxItem(
              template.id,
              "quiche-12",
              "Student dock the pastry ",
            ),
            createCheckboxItem(
              template.id,
              "quiche-13",
              "Shortcrust pastry appropirate texture ",
            ),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dish served on time -  10:00 & 16:00",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Clean Plate and food within the rim?",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-a7") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: [
            createCheckboxItem(
              template.id,
              "personal-1",
              "Dressed in Full Chef Uniform (Cleaned & Ironed)",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
              "Arrived with a Fully Clean Toolbox",
            ),
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: [
            createCheckboxItem(
              template.id,
              "hygiene-1",
              "Displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Clean as you go is practiced & sanitizer is applied ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Shows no evidence of cross contamination.",
            ),
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "operation-1",
              "Selects suitable equipment for task ",
            ),
            createCheckboxItem(template.id, "operation-2", "Controls waste"),
            createCheckboxItem(
              template.id,
              "operation-3",
              "Takes care to work safely ( Gas not wasted etc.)",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-creme-caramel`,
              type: "recipe-card",
              recipeName: "Crème Caramel ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-scones`,
              type: "recipe-card",
              recipeName: "Scones ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-chantilly-creme`,
              type: "recipe-card",
              recipeName: "Chantilly Crème ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-desserts`,
          title: "Desserts  ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "dessert-1",
              "Crème Caramel sauce appropriate colour ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-2",
              "Crème Caramel sauce doest have a bitter taste to it ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-3",
              "Crème Caramel has a smooth consistency ",
            ),
            createCheckboxItem(template.id, "dessert-4", "Crème Caramel Set"),
            createCheckboxItem(
              template.id,
              "dessert-5",
              "Crème Caramel doesn’t have an egg taste ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-6",
              "Ratio of Creme to Caramel sauce appropriate",
            ),
            createCheckboxItem(
              template.id,
              "dessert-7",
              "Crème Caramel uniform shape ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-8",
              "Butter rub in with finger tips ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-9",
              "Scones Cooked - Not over or under ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-10",
              "Scones has an appropriate texture ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-11",
              "Scones unifrom shape & size ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-12",
              "Scones has an appropraite colour to it ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-13",
              "Scones looks visual appeal ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-14",
              "Chantilly Crème appropriate consitency ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-15",
              "Chantilly Crème balanced flavour ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-16",
              "Chantilly Crème appropriately used on the plate ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-17",
              "Ratio of all elements on scones are balanced ",
            ),
            createCheckboxItem(
              template.id,
              "dessert-18",
              "Convenience jam appropriately used on the plate ",
            ),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            createCheckboxItem(
              template.id,
              "service-1",
              "Was the dish served on time -  10:00 & 16:00",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Clean Plate and food within the rim?",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            createNotesItem(
              template.id,
              "feedback",
              "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            ),
          ],
        },
      ],
    };
  }

  if (template.code === "menu-b7") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism for the duration of this Menu",
          order: 1,
          items: [
            {
              id: `${template.id}-personal-1`,
              type: "checkbox",
              description:
                "Student is Dressed in Full, Clean & Ironed Chef Uniform ",
              maxMark: 1,
            },
            {
              id: `${template.id}-personal-2`,
              type: "checkbox",
              description:
                "Student is Neatly Groomed (Facial hair, makeup ect.)",
              maxMark: 1,
            },
            {
              id: `${template.id}-personal-3`,
              type: "checkbox",
              description: "Student has Arrived with a Fully Clean Toolbox",
              maxMark: 1,
            },
            {
              id: `${template.id}-personal-4`,
              type: "checkbox",
              description: "Student has Arrived on Time ",
              maxMark: 1,
            },
            {
              id: `${template.id}-personal-5`,
              type: "checkbox",
              description: "Student shows respect for authority",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene for the duration of this Menu",
          order: 2,
          items: [
            {
              id: `${template.id}-hygiene-1`,
              type: "checkbox",
              description: "The student displays regular hand washing",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-2`,
              type: "checkbox",
              description: "Clean as you go is practiced",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-3`,
              type: "checkbox",
              description: "Scullary area is kept clean & correct sinks used",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-4`,
              type: "checkbox",
              description: "Correct chopping boards used & it is secured",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-5`,
              type: "checkbox",
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-6`,
              type: "checkbox",
              description: "Sanitizer Bucket present & changed frequently ",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-7`,
              type: "checkbox",
              description:
                "Did the candidate taste his/her food & made necessary adjustments",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-8`,
              type: "checkbox",
              description: "Student takes care to work safely",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation for the duration of this Menu ",
          order: 3,
          items: [
            {
              id: `${template.id}-operation-1`,
              type: "checkbox",
              description: "Student selects suitable equipment for task ",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-2`,
              type: "checkbox",
              description: "Student controls the cooking process (time & temp)",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-3`,
              type: "checkbox",
              description: "Student controls waste",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-4`,
              type: "checkbox",
              description:
                "Knives are used, cleaned, sharpened and stored correctly",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-5`,
              type: "checkbox",
              description: "Gas/Electricity was not used unnecessarily",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-venison-curry`,
              type: "recipe-card",
              recipeName: "Venison Curry ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-brioche-magwinya`,
              type: "recipe-card",
              recipeName: "Brioche Magwinya",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-cilantro-chutney`,
              type: "recipe-card",
              recipeName: "Cilantro Chutney ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-shallow-fried-fish`,
              type: "recipe-card",
              recipeName: "Shallow Fried Fish ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-soft-shell-taco`,
              type: "recipe-card",
              recipeName: "Soft Shell Taco",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-sumac-onions`,
              type: "recipe-card",
              recipeName: "Sumac Onions ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-aioli`,
              type: "recipe-card",
              recipeName: "Aioli",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-potato-beetroot-rosti`,
              type: "recipe-card",
              recipeName: "Potato & Beetroot Rosti",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-hummus`,
              type: "recipe-card",
              recipeName: "Hummus",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-marinated-peppers`,
              type: "recipe-card",
              recipeName: "Marinated Peppers ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-grilled-tofu`,
              type: "recipe-card",
              recipeName: "Grilled Tofu",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-thai-sweet-chilli-sauce`,
              type: "recipe-card",
              recipeName: "Thai Sweet Chilli Sauce",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-enriched-slider-buns`,
              type: "recipe-card",
              recipeName: "Enriched Slider Buns ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-red-onion-chutney`,
              type: "recipe-card",
              recipeName: "Red Onion Chutney ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-garlic-snail-au-gratin`,
              type: "recipe-card",
              recipeName: "Garlic Snail Au Gratin ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-costings`,
          title: "Overall Costings & Selling Prices Correctly Calculated",
          order: 5,
          items: [
            {
              id: `${template.id}-costings-overall`,
              type: "practical-dish",
              dishName:
                "Overall Costings & Selling Prices Correctly Calculated",
              maxMark: 4,
            },
          ],
        },
        {
          id: `${template.id}-section-canapes`,
          title: "Caneapé's",
          order: 6,
          items: [
            {
              id: `${template.id}-canape-mince-1`,
              type: "checkbox",
              description: "Mince - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-mince-2`,
              type: "checkbox",
              description: "Mince- Well balanced flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-mince-3`,
              type: "checkbox",
              description: "Mince appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-mince-4`,
              type: "checkbox",
              description: "Mince - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-mince-5`,
              type: "checkbox",
              description: "Mince garnished with coriander ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-magwinya-1`,
              type: "checkbox",
              description: "Magwinya - Dough not over worked ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-magwinya-2`,
              type: "checkbox",
              description: "Magwinya - Appropriate size",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-magwinya-3`,
              type: "checkbox",
              description: "Magwinya - Appropriate shape ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-magwinya-4`,
              type: "checkbox",
              description: "Magwinya - Appropriate texture",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-magwinya-5`,
              type: "checkbox",
              description: "Magwinya - Appropriate colour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-magwinya-6`,
              type: "checkbox",
              description: "Magwinya - Excess fat strained ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-magwinya-7`,
              type: "checkbox",
              description: "Magwinya - Appropriate taste ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-chutney-1`,
              type: "checkbox",
              description: "Chutney - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-chutney-2`,
              type: "checkbox",
              description: "Chutney - Balanced flavour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-chutney-3`,
              type: "checkbox",
              description: "Chutney - Look visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-venison-magwinya-1`,
              type: "checkbox",
              description: "Venison Magwinya looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-venison-magwinya-2`,
              type: "checkbox",
              description:
                "Venison Magwinya - Appropriate ratio of all elements ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-venison-magwinya-3`,
              type: "checkbox",
              description: "Venison Magwinya - Appropriate portion size",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-fish-1`,
              type: "checkbox",
              description: "Fish - Well Cooked ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-fish-2`,
              type: "checkbox",
              description: "Fish - Balanced Flavour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-fish-3`,
              type: "checkbox",
              description: "Fish - Well Seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-fish-4`,
              type: "checkbox",
              description: "Fish - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-fish-5`,
              type: "checkbox",
              description: "Fish - Appropriate taste",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-taco-1`,
              type: "checkbox",
              description: "Taco - Dough not over worked ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-taco-2`,
              type: "checkbox",
              description: "Taco - Appropriate texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-taco-3`,
              type: "checkbox",
              description: "Taco - Cooked ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-taco-4`,
              type: "checkbox",
              description: "Taco - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-taco-5`,
              type: "checkbox",
              description: "Taco - Appropriate size ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-taco-6`,
              type: "checkbox",
              description: "Taco - Appropriate thickness ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-sumac-1`,
              type: "checkbox",
              description: "Sumac Onions - Appropriate thickness ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-sumac-2`,
              type: "checkbox",
              description: "Sumac Onions - Balanced Flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-sumac-3`,
              type: "checkbox",
              description: "Sumac Onions - Well Seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-sumac-4`,
              type: "checkbox",
              description: "Sumac Onions - Looks Visual Appeal",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-sumac-5`,
              type: "checkbox",
              description: "Appropriate amount of sumac onions used",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-aioli-1`,
              type: "checkbox",
              description: "Aioli - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-aioli-2`,
              type: "checkbox",
              description: "Aioli - Balanced flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-aioli-3`,
              type: "checkbox",
              description: "Aioli - Well Seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-aioli-4`,
              type: "checkbox",
              description: "Aioli - Appropriate taste ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-aioli-5`,
              type: "checkbox",
              description: "Aioli did not split",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-aioli-6`,
              type: "checkbox",
              description: "Appropriate amount of Aioli used on the taco ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-aioli-7`,
              type: "checkbox",
              description: "Soft shell taco looks visual appeal over all",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-rosti-1`,
              type: "checkbox",
              description: "Rosti - Looks Visual Appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-rosti-2`,
              type: "checkbox",
              description: "Rosti - Ratio between beetroot & potato balanced",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-rosti-3`,
              type: "checkbox",
              description: "Rosti - Well Seasoned",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-rosti-4`,
              type: "checkbox",
              description: "Rosti Cooked - Not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-rosti-5`,
              type: "checkbox",
              description: "Rosti - Appropriate size",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-rosti-6`,
              type: "checkbox",
              description: "Rosti - Appropriate thickness",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-rosti-7`,
              type: "checkbox",
              description: "Rosti - Appropriate texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-hummus-1`,
              type: "checkbox",
              description: "Hummus - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-hummus-2`,
              type: "checkbox",
              description: "Hummus - Appropriate viscosisty",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-hummus-3`,
              type: "checkbox",
              description: "Hummus - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-hummus-4`,
              type: "checkbox",
              description: "Hummus - Balanced Flavour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-hummus-5`,
              type: "checkbox",
              description: "Appropriate amount of hummus used on rosti ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-peppers-1`,
              type: "checkbox",
              description: "Peppers - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-peppers-2`,
              type: "checkbox",
              description: "Peppers - Appropriate size & shape ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-peppers-3`,
              type: "checkbox",
              description: "Peppers - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-peppers-4`,
              type: "checkbox",
              description: "Peppers - Balanced flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-peppers-5`,
              type: "checkbox",
              description:
                "Peppers - Appropriate amount of peppers used on rosti",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-tofu-1`,
              type: "checkbox",
              description: "Grilled Tofu - Looks Visual appealing ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-tofu-2`,
              type: "checkbox",
              description: "Grilled Tofu - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-tofu-3`,
              type: "checkbox",
              description: "Grilled Tofu - Balanced Flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-tofu-4`,
              type: "checkbox",
              description: "Grilled Tofu - appropriate size ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-thai-1`,
              type: "checkbox",
              description: "Thai sauce - Balance flavour",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-thai-2`,
              type: "checkbox",
              description: "Thai sauce - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-thai-3`,
              type: "checkbox",
              description: "Grilled Tofu - Enough sauce was absorbed ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-thai-4`,
              type: "checkbox",
              description:
                "Appropriate amount of spring onion & sesame seeds on seitan ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-red-onion-1`,
              type: "checkbox",
              description: "Red Onion Chutney - Balanced Flavour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-red-onion-2`,
              type: "checkbox",
              description: "Red Onion Chutney - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-red-onion-3`,
              type: "checkbox",
              description: "Red Onion Chutney - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-red-onion-4`,
              type: "checkbox",
              description: "Red Onion Cutney - Looks visual appeal",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-red-onion-5`,
              type: "checkbox",
              description:
                "Red Onion Cutney - Appropriate amount used on the plate",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-bouchees-1`,
              type: "checkbox",
              description: "Bouchees - Uniform shape & size ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-bouchees-2`,
              type: "checkbox",
              description: "Bouchees- Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-bouchees-3`,
              type: "checkbox",
              description: "Bouchees - Appropriate height ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-bouchees-4`,
              type: "checkbox",
              description: "Bouchees - Appropriate size & shape",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-garlic-snails-1`,
              type: "checkbox",
              description: "Garlic Snails - Sauce appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-garlic-snails-2`,
              type: "checkbox",
              description: "Garlic Snails - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-garlic-snails-3`,
              type: "checkbox",
              description: "Garlic Snails - Balanced flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-garlic-snails-4`,
              type: "checkbox",
              description: "Garlic Snails Sauce - Appropriate viscosity ",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-garlic-snails-5`,
              type: "checkbox",
              description:
                "Garlic Snails Sauce - Ratio between bouchee & filling appropriate",
              maxMark: 1,
            },
            {
              id: `${template.id}-canape-garlic-snails-6`,
              type: "checkbox",
              description: "Garlic Snails Au Gratin - golden brown ",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 7,
          items: [
            {
              id: `${template.id}-service-1`,
              type: "checkbox",
              description: "Was the dish served on time - 15:00",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-2`,
              type: "checkbox",
              description: "Appropriate plate selected for the dish?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-3`,
              type: "checkbox",
              description: "Ratio of all elements on the plate is balanced?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-4`,
              type: "checkbox",
              description: "Candidate served at least 2 of each Canapé?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-5`,
              type: "checkbox",
              description: "Clean plate & food within the rim?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-6`,
              type: "checkbox",
              description:
                "Temperature (Hot foof hot plate, Cold food cold plate)",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 8,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label:
                "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            },
          ],
        },
      ],
    };
  }

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

function getRecipeCardScore(
  item: RecipeCardAssessmentItem,
  state: RecipeCardAssessmentDraft | undefined,
): number {
  const completedScore = (state?.recipeCompleted ?? true) ? 1 : 0;
  const costingScore = (state?.costingAppropriate ?? true) ? 1 : 0;
  return clampScore(completedScore + costingScore, item.maxMark);
}

function getPracticalDishScore(
  item: PracticalDishAssessmentItem,
  state: PracticalDishAssessmentDraft | undefined,
): number {
  return clampScore(state?.score ?? 0, item.maxMark);
}

function getItemMaxMark(item: AssessmentItem): number {
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
  onChange: (nextValue: {
    value: AssessmentCommentOption[];
    otherComment: string;
  }) => void;
};

export function CommentSelector({
  value,
  otherComment,
  readOnly,
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
            {COMMENT_OPTIONS.map((option) => (
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
