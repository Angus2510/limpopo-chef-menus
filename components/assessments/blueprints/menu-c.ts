import type {
  AssessmentBlueprint,
  AssessmentTemplate,
} from "@/types/assessment";
import { COSTING_COMMENT_OPTIONS } from "@/types/assessment";

export function createMenuCBlueprint(
  template: AssessmentTemplate,
): AssessmentBlueprint | null {
  const checkboxItems = (prefix: string, descriptions: string[]) =>
    descriptions.map((description, index) => ({
      id: `${template.id}-${prefix}-${index + 1}`,
      type: "checkbox" as const,
      description,
      maxMark: 1,
    }));

  if (template.code === "menu-c6") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-inspection-uniform`,
          title: "Inspection & Uniform",
          order: 1,
          items: checkboxItems("inspection", [
            "Candidate Dressed Correctly & Well Groomed",
            "Fully Equipped Toolbox",
            "Candidate Arrived on Time",
            "Candidate shows respect for authority",
          ]),
        },
        {
          id: `${template.id}-section-personal-food-safety`,
          title: "Personal Safety & Food Safety",
          order: 2,
          items: checkboxItems("food-safety", [
            "The student displays regular hand washing",
            "Student adheres to clean as you go",
            "Correct sinks used for specific tasks & kept clean",
            "Correct chopping boards used & it is secure",
            "Student shows no evidence of cross contamination.",
            "Student takes care to work safely",
          ]),
        },
        {
          id: `${template.id}-section-monitoring-equipment-ingredients`,
          title: "Monitoring, Equipment and Ingredient Selection",
          order: 3,
          items: checkboxItems("monitoring", [
            "Student controls the cooking process (time & temp)",
            "Student works in a methodical manner, check waste",
          ]),
        },
        {
          id: `${template.id}-section-outdoor-cooking`,
          title: "Outdoor Cooking",
          order: 4,
          items: checkboxItems("outdoor", [
            "Buffet table set up appropriately",
            "Cutlery & Crockery available",
            "Food appropriately presented",
            "Appropriate Team NAME picked",
            "Each member of the team contributes to the success of the day",
            "The team didn’t prep or attempt to prep any food inside the kitchen",
          ]),
        },
        {
          id: `${template.id}-section-boerewors-roosterkoek`,
          title:
            "Boerewors Roosterkoek with Roasted Red Pepper & Smoked Garlic Mayonnaise & Grilled Vegetable Kebabs",
          order: 5,
          items: checkboxItems("roosterkoek", [
            "Cooked - Not raw or burnt",
            "Wors is juicy & not dry",
            "Roosterkoek Cooked - Not over baked or raw",
            "Roosterkoek - Appropriate texture",
            "Roosterkoek - Appropriate taste",
            "Roosterkoek - Appropriate size",
            "Roosterkoek - Appropriate colour",
            "Mayo - Pepper roasted on the fire",
            "Mayo - Garlic smoked on the fire",
            "Mayo - Balanced flavour",
            "Mayo - Appropriate consistency",
            "Mayo - Sufficient amount of garlic & pepper used",
            "Mayo - Sufficient amount used",
            "Veggie Kebabs Cooked - Not over or under",
            "Veggie Kebabs - Seasoned",
            "Veggie Kebabs - Taste appropriately",
            "Veggie Kebabs - Looks visually appealing",
            "Veggie Kebabs - Ratio of veggies balanced",
            "Veggie cut into appropriate size",
          ]),
        },
        {
          id: `${template.id}-section-plate`,
          title: "Plate",
          order: 6,
          items: checkboxItems("plate", ["Overall impression of the Dish?"]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label: "Lecturer feedback on the student's performance.",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-c5") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-inspection-uniform`,
          title: "Inspection & Uniform",
          order: 1,
          items: checkboxItems("inspection", [
            "Candidate Dressed Correctly & Well Groomed",
            "Fully Equipped Toolbox",
            "Candidate Arrived on Time",
            "Candidate shows respect for authority",
          ]),
        },
        {
          id: `${template.id}-section-personal-food-safety`,
          title: "Personal Safety & Food Safety",
          order: 2,
          items: checkboxItems("food-safety", [
            "The student displays regular hand washing",
            "Student adheres to clean as you go",
            "Correct sinks used for specific tasks & kept clean",
            "Correct chopping boards used & it is secure",
            "Student shows no evidence of cross contamination.",
            "Student takes care to work safely",
          ]),
        },
        {
          id: `${template.id}-section-monitoring-equipment-ingredients`,
          title: "Monitoring, Equipment and Ingredient Selection",
          order: 3,
          items: checkboxItems("monitoring", [
            "Student selects appropriate equipment and utensils",
            "Student controls the cooking process (time & temp)",
            "Student displays good tasting skills",
            "Student works from prep lists/sheets (check time)",
            "Student works in a methodical manner, check waste",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-main-service`,
          title: "Main - Service",
          order: 4,
          items: checkboxItems("main-service", [
            "Was the dish served on time - 10:00 - 10:20",
            "Appropriate plate selected for the dish?",
            "Clean plate and food within the rim?",
            "Temperature (hot food hot plate, cold food cold plate)",
            "Appropriate portion size for dish served?",
            "Dish garnished appropriately?",
            "Correct ratio of elements on the plate?",
          ]),
        },
        {
          id: `${template.id}-section-grilled-lemon-butter-fish`,
          title: "Grilled Lemon Butter Fish",
          order: 5,
          items: checkboxItems("fish", [
            "2 whole fillets presented",
            "Skin removed from fish fillets",
            "All bones removed from the fish",
            "Griddled pan used for cooking the fish",
            "Fish cooked - not over or under",
            "Balanced flavours - Garlic, herb & lemon",
            "Well seasoned",
            "Fish colour looks visually appealing",
            "Sufficient amount of fish served",
          ]),
        },
        {
          id: `${template.id}-section-mediterranean-pilaf`,
          title: "Mediterranean Pilaf",
          order: 6,
          items: checkboxItems("pilaf", [
            "Vegetable cut uniformly",
            "Rice is airy & light",
            "Rice cooked - not over or under",
            "Well balanced flavours",
            "No large herbs or spices served",
            "Peas - looks visually appealing in colour",
            "Pilaf well seasoned",
            "Appropriate amount of shavings used on plate",
            "Ratio between rice, vegetables & peas balanced",
          ]),
        },
        {
          id: `${template.id}-section-main-plate`,
          title: "Main Plate",
          order: 7,
          items: checkboxItems("main-plate", [
            "Overall impression of the plate?",
          ]),
        },
        {
          id: `${template.id}-section-dessert-service`,
          title: "Dessert - Service",
          order: 8,
          items: checkboxItems("dessert-service", [
            "Was the dish served on time - 11:00 - 12:00",
            "Appropriate plate selected for the dish?",
            "Clean plate and food within the rim?",
            "Temperature (hot food hot plate, cold food cold plate)",
            "Appropriate portion size for dish served?",
            "Dish garnished appropriately?",
            "Correct ratio of elements on the plate?",
          ]),
        },
        {
          id: `${template.id}-section-swiss-meringue`,
          title: "Swiss Meringue",
          order: 9,
          items: checkboxItems("swiss-meringue", [
            "No sugar crystals present",
            "Made over a double boiler",
            "Meringue did not weep",
            "Meringue did not crack",
            "White in colour",
            "Appropriate size Vacherin served",
            "Crunchy outside texture & soft on the inside",
          ]),
        },
        {
          id: `${template.id}-section-creme-chantilly`,
          title: "Crème Chantilly",
          order: 10,
          items: checkboxItems("chantilly", [
            "Stiff peak",
            "Sweet taste",
            "Vanilla flavour not too weak or too strong",
            "Sufficient amount served",
            "Looks visually appealing on the plate",
          ]),
        },
        {
          id: `${template.id}-section-berry-compote`,
          title: "Berry Compote",
          order: 11,
          items: checkboxItems("berry-compote", [
            "Appropriate consistency",
            "Appropriate viscosity",
            "Sufficient amount used on the plate",
            "Colour of berry compote looks visually appealing",
            "Dessert garnished with mint",
          ]),
        },
        {
          id: `${template.id}-section-dessert-plate`,
          title: "Dessert Plate",
          order: 12,
          items: checkboxItems("dessert-plate", [
            "Overall impression of the plate?",
          ]),
        },
        {
          id: `${template.id}-section-uniform-dinner-rolls`,
          title: "Uniform Dinner Rolls",
          order: 13,
          items: checkboxItems("dinner-rolls", [
            "All dinner rolls uniform shape",
            "Appropriate size - Not too big or too small",
            "6 dinner rolls served",
            "Taste appropriate",
            "Good texture",
            "Golden brown colour",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 14,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label:
                "Please write a review on your performance of today's cooking lesson. Where may you improve if you would have to redo this Menu?",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-c4") {
    const recipeCards = [
      "Beef Wellington",
      "Chicken Liver Pâté",
      "Braised Vegetables",
      "Demi-Glace",
    ].map((recipeName, index) => ({
      id: `${template.id}-recipe-${index + 1}`,
      type: "recipe-card" as const,
      recipeName,
      maxMark: 2,
    }));

    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-inspection-uniform`,
          title: "Inspection & Uniform",
          order: 1,
          items: checkboxItems("inspection", [
            "Candidate Dressed Correctly",
            "Fully Equipped Toolbox",
            "Candidate Well Groomed",
            "Candidate Arrived on Time",
            "Candidate shows respect for authority",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: recipeCards,
        },
        {
          id: `${template.id}-section-overall-costings`,
          title: "Overall Costings & Selling Prices",
          order: 3,
          items: [
            {
              id: `${template.id}-overall-costings`,
              type: "practical-dish",
              dishName: "Overall Costings & Selling Prices",
              maxMark: 4,
              commentOptions: COSTING_COMMENT_OPTIONS,
            },
          ],
        },
        {
          id: `${template.id}-section-personal-food-safety`,
          title: "Personal Safety & Food Safety",
          order: 4,
          items: checkboxItems("food-safety", [
            "The student displays regular hand washing",
            "Communal table kept neat and tidy - during day",
            "Correct sinks used for specific tasks & kept clean",
            "Correct chopping boards used & it is secure",
            "Student shows no evidence of cross contamination",
            "Sanitizer is applied between tasks",
            "Student takes care to work safely",
          ]),
        },
        {
          id: `${template.id}-section-monitoring-equipment-ingredients`,
          title: "Monitoring, Equipment and Ingredient Selection",
          order: 5,
          items: checkboxItems("monitoring", [
            "Student selects appropriate equipment and utensils",
            "Student displays good tasting skills",
            "Student works from prep lists/sheets (check time)",
            "Student works in a methodical manner, check waste",
            "Knives are used, cleaned, sharpened & stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-main-service`,
          title: "Main - Service",
          order: 6,
          items: checkboxItems("main-service", [
            "Was the dish served on time - 13:30",
            "Appropriate plate selected for the dish?",
            "Clean plate and food within the rim?",
            "Temperature (hot food hot plate, cold food cold plate)",
            "Appropriate portion size for dish served?",
            "Dish garnished appropriately?",
            "Correct ratio of elements on the plate?",
          ]),
        },
        {
          id: `${template.id}-section-beef-wellington`,
          title: "Beef Wellington",
          order: 7,
          items: checkboxItems("wellington", [
            "Fillet well seasoned - not over or under",
            "Fillet has a visually appealing colour",
            "Fillet - balanced flavours",
            "Ham & pâté evenly layered and visually appealing",
            "Fillet completely covered with puff pastry",
            "Looks visually appealing",
            "Wellington golden brown in colour and not burnt",
            "Fillet not overcooked",
            "Pastry cooked - not raw",
            "Wellington well seasoned",
            "Own initiative used for decorating the Wellington",
          ]),
        },
        {
          id: `${template.id}-section-chicken-liver-pate`,
          title: "Chicken Liver Pâté",
          order: 8,
          items: checkboxItems("liver-pate", [
            "Smooth consistency",
            "Doesn't have a runny viscosity",
            "Well seasoned",
            "Balanced flavours",
            "Appropriate amount used on the Wellington",
          ]),
        },
        {
          id: `${template.id}-section-braised-vegetables`,
          title: "Braised Vegetables",
          order: 9,
          items: checkboxItems("vegetables", [
            "Carrot - barrel shape - looks visually appealing",
            "Potato - barrel shape - looks visually appealing",
            "Vegetables well seasoned",
            "Balanced flavours - herb & garlic",
            "Vegetables golden brown in colour",
            "Vegetables appropriate size",
            "Sufficient amount of vegetables used on the plate",
          ]),
        },
        {
          id: `${template.id}-section-demi-glace`,
          title: "Demi-Glace",
          order: 10,
          items: checkboxItems("demi-glace", [
            "Well balanced flavours",
            "Well seasoned",
            "Smooth consistency",
            "Appropriate viscosity",
            "Sufficient amount of sauce used on the plate",
            "Has a glossy appearance",
          ]),
        },
        {
          id: `${template.id}-section-main-plate`,
          title: "Main Plate",
          order: 11,
          items: checkboxItems("main-plate", [
            "Overall impression of the plate?",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 12,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label:
                "Please write a review on your performance of today's cooking lesson. Where may you improve if you would have to redo this Menu?",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-c3") {
    const recipeCards = [
      "Pâté Grand-Mère",
      "Aspic",
      "Beetroot Gel",
      "Apple Pave",
      "Tapioca Crackers",
      "Marble Egg",
    ].map((recipeName, index) => ({
      id: `${template.id}-recipe-${index + 1}`,
      type: "recipe-card" as const,
      recipeName,
      maxMark: 2,
    }));

    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-inspection-uniform`,
          title: "Inspection & Uniform",
          order: 1,
          items: checkboxItems("inspection", [
            "Candidate Dressed Correctly",
            "Fully Equipped Toolbox",
            "Candidate Well Groomed",
            "Candidate Arrived on Time",
            "Candidate shows respect for authority",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: recipeCards,
        },
        {
          id: `${template.id}-section-overall-costings`,
          title: "Overall Costings & Selling Prices",
          order: 3,
          items: [
            {
              id: `${template.id}-overall-costings`,
              type: "practical-dish",
              dishName: "Overall Costings & Selling Prices",
              maxMark: 4,
              commentOptions: COSTING_COMMENT_OPTIONS,
            },
          ],
        },
        {
          id: `${template.id}-section-personal-food-safety`,
          title: "Personal Safety & Food Safety",
          order: 4,
          items: checkboxItems("food-safety", [
            "The student displays regular hand washing",
            "Communal table kept neat and tidy - during day",
            "Correct sinks used for specific tasks & kept clean",
            "Correct chopping boards used & it is secure",
            "Student shows no evidence of cross contamination",
            "Sanitizer is applied between tasks",
            "Student takes care to work safely",
          ]),
        },
        {
          id: `${template.id}-section-monitoring-equipment-ingredients`,
          title: "Monitoring, Equipment and Ingredient Selection",
          order: 5,
          items: checkboxItems("monitoring", [
            "Student selects appropriate equipment and utensils",
            "Student selects ingredients that are in good condition",
            "Student controls the cooking process (time & temp)",
            "Student displays good tasting skills",
            "Student works from prep lists/sheets (check time)",
            "Student works in a methodical manner, check waste",
            "Knives are used, cleaned, sharpened & stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-main-service`,
          title: "Main - Service",
          order: 6,
          items: checkboxItems("main-service", [
            "Was the dish served on time - 15:00",
            "Appropriate plate selected for the dish?",
            "Clean Plate and food within the rim?",
            "Temperature (hot food hot plate, cold food cold plate)",
            "Appropriate portion size for dish served?",
            "Dish garnished appropriately?",
            "Correct ratio of elements on the plate?",
          ]),
        },
        {
          id: `${template.id}-section-pate-grand-mere`,
          title: "Pâté Grand-Mère",
          order: 7,
          items: checkboxItems("pate", [
            "Meat grinded coarsely enough",
            "Chicken liver cleaned properly",
            "Balanced flavours",
            "Well Seasoned",
            "Set Consistency - Holds its shape",
            "Spinach leaves neatly layered & visually appealing",
            "Appropriate size Pâté Grand-Mère served",
            "Cooked - not over or under",
            "All ingredients well incorporated",
          ]),
        },
        {
          id: `${template.id}-section-aspic`,
          title: "Aspic",
          order: 8,
          items: checkboxItems("aspic", [
            "Balanced flavours",
            "Well Seasoned",
            "Clear & not cloudy",
            "Set - No rubbery texture",
            "Appropriate amount used on the Pâté",
            "No gelatine lumps",
          ]),
        },
        {
          id: `${template.id}-section-beetroot-gel`,
          title: "Beetroot Gel",
          order: 9,
          items: checkboxItems("beetroot-gel", [
            "Smooth consistency",
            "Appropriate viscosity",
            "Sufficient amount used on the plate",
            "Looks visually appealing on the plate",
            "Taste appropriate",
          ]),
        },
        {
          id: `${template.id}-section-apple-pave`,
          title: "Apple Pave",
          order: 10,
          items: checkboxItems("apple-pave", [
            "Apples thinly sliced - Not thick",
            "Flavour balanced - Not over or under",
            "Sweet taste to it",
            "Pave evenly layered",
            "Pave gives height to the plate",
            "Cooked - not over or under",
            "Looks visually appealing on the plate",
          ]),
        },
        {
          id: `${template.id}-section-tapioca-crackers`,
          title: "Tapioca Crackers",
          order: 11,
          items: checkboxItems("tapioca-crackers", [
            "Crunchy texture",
            "Sufficient amount used on the plate",
            "Appropriate thickness",
            "Colour contributes to the look of the plate",
            "Looks visually appealing",
          ]),
        },
        {
          id: `${template.id}-section-marble-egg`,
          title: "Marble Egg",
          order: 12,
          items: checkboxItems("marble-egg", [
            "Marbling is visible",
            "Looks visually appealing",
            "Appropriately used on the plate",
          ]),
        },
        {
          id: `${template.id}-section-additional-requirements`,
          title: "Additional Menu Requirements",
          order: 13,
          items: checkboxItems("additional", [
            "Own personal unique element used on the plate",
            "Personal element contributes to the visual look of the plate",
            "3 high quality pictures submitted",
            "Photos taken at different angles & look visually appealing",
            "Mincer cleaned thoroughly & re-assembled",
          ]),
        },
        {
          id: `${template.id}-section-main-plate`,
          title: "Main Plate",
          order: 14,
          items: checkboxItems("main-plate", [
            "Overall impression of the plate?",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 15,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label:
                "Please write a review on your performance of today's cooking lesson. Where may you improve if you would have to redo this Menu?",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-c2") {
    const recipeCards = [
      "Octopus Carpaccio",
      "Deep Fried Rice Paper",
      "Parmesan Foam",
      "Pâte Sucrée",
      "Lemon Curd",
      "Swiss Meringue",
    ].map((recipeName, index) => ({
      id: `${template.id}-recipe-${index + 1}`,
      type: "recipe-card" as const,
      recipeName,
      maxMark: 2,
    }));

    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-inspection-uniform`,
          title: "Inspection & Uniform",
          order: 1,
          items: checkboxItems("inspection", [
            "Candidate Dressed Correctly",
            "Fully Equipped Toolbox",
            "Candidate Well Groomed",
            "Candidate Arrived on Time",
            "Candidate shows respect for authority",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: recipeCards,
        },
        {
          id: `${template.id}-section-overall-costings`,
          title: "Overall Costings & Selling Prices",
          order: 3,
          items: [
            {
              id: `${template.id}-overall-costings`,
              type: "practical-dish",
              dishName: "Overall Costings & Selling Prices",
              maxMark: 4,
              commentOptions: COSTING_COMMENT_OPTIONS,
            },
          ],
        },
        {
          id: `${template.id}-section-personal-food-safety`,
          title: "Personal Safety & Food Safety",
          order: 4,
          items: checkboxItems("food-safety", [
            "The student displays regular hand washing",
            "Communal table kept neat and tidy - during day",
            "Correct sinks used for specific tasks & kept clean",
            "Correct chopping boards used & it is secure",
            "Student shows no evidence of cross contamination.",
            "Sanitizer is applied between tasks",
            "Student takes care to work safely",
          ]),
        },
        {
          id: `${template.id}-section-monitoring-equipment-ingredients`,
          title: "Monitoring, Equipment and Ingredient Selection",
          order: 5,
          items: checkboxItems("monitoring", [
            "Student selects appropriate equipment and utensils",
            "Student selects ingredients that are in good condition",
            "Student controls the cooking process (time & temp)",
            "Student displays good tasting skills",
            "Student works from prep lists/sheets (check time)",
            "Student works in a methodical manner, check waste",
            "Knives are used, cleaned, sharpened & stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-starter-service`,
          title: "Starter - Service",
          order: 6,
          items: checkboxItems("starter-service", [
            "Was the dish served on time - 14:00",
            "Appropriate plate selected for the dish?",
            "Clean Plate and food within the rim?",
            "Temperature (hot food hot plate, cold food cold plate)",
            "Appropriate portion size for dish served?",
            "Dish garnished appropriately?",
            "Correct ratio of elements on the plate?",
          ]),
        },
        {
          id: `${template.id}-section-octopus-carpaccio`,
          title: "Octopus Carpaccio",
          order: 7,
          items: checkboxItems("carpaccio", [
            "Carpaccio appropriate texture",
            "Gelatine dissolved properly",
            "Serve as a whole - Set - not in pieces",
            "Balanced flavours",
            "Looks visually appealing",
            "Appropriate shape & size",
            "No whole spices/herbs present",
          ]),
        },
        {
          id: `${template.id}-section-deep-fried-rice-paper`,
          title: "Deep Fried Rice Paper",
          order: 8,
          items: checkboxItems("rice-paper", [
            "Colour complements the dish overall",
            "Crunchy texture",
            "Appropriately used on the plate",
            "Sufficient amount used on the plate",
            "Looks visually appealing",
          ]),
        },
        {
          id: `${template.id}-section-parmesan-foam-assembly`,
          title: "Parmesan Foam & Assembly",
          order: 9,
          items: checkboxItems("parmesan-foam", [
            "Foam used in a manner to complement the plate",
            "Sufficient amount used on the plate",
            "Foam looks visually appealing",
            "Sufficient amount of capers used on the plate",
            "Appropriate amount of greens used on the plate",
            "Appropriate amount of oil used to finish off the dish",
            "Parmesan shavings complement the dish",
            "Sufficient amount of shavings used",
          ]),
        },
        {
          id: `${template.id}-section-starter-plate`,
          title: "Starter Plate",
          order: 10,
          items: checkboxItems("starter-plate", [
            "Overall impression of the plate?",
          ]),
        },
        {
          id: `${template.id}-section-dessert-service`,
          title: "Dessert - Service",
          order: 11,
          items: checkboxItems("dessert-service", [
            "Was the dish served on time - 14:30",
            "Appropriate plate selected for the dish?",
            "Clean Plate and food within the rim?",
            "Temperature (hot food hot plate, cold food cold plate)",
            "Appropriate portion size for dish served?",
            "Dish garnished appropriately?",
            "Correct ratio of elements on the plate?",
          ]),
        },
        {
          id: `${template.id}-section-pate-sucree`,
          title: "Pâte Sucrée",
          order: 12,
          items: checkboxItems("pate-sucree", [
            "Appropriate texture",
            "Colour looks visually appealing",
            "Final product on the plate complements the dish",
            "Appropriate taste",
          ]),
        },
        {
          id: `${template.id}-section-lemon-curd`,
          title: "Lemon Curd",
          order: 13,
          items: checkboxItems("lemon-curd", [
            "Set consistency - Not runny",
            "Balanced flavours",
            "Colour looks visually appealing",
            "Sufficient amount used on the plate",
            "Smooth - Not lumpy",
          ]),
        },
        {
          id: `${template.id}-section-swiss-meringue`,
          title: "Swiss Meringue",
          order: 14,
          items: checkboxItems("swiss-meringue", [
            "Appealing colour",
            "Appropriate stiff peak",
            "Sufficient amount used on the plate",
            "No sugar crystals",
            "End result complements the plate",
          ]),
        },
        {
          id: `${template.id}-section-dessert-plate`,
          title: "Dessert Plate",
          order: 15,
          items: checkboxItems("dessert-plate", [
            "Overall impression of the plate?",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 16,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label:
                "Please write a Review on your performance of today's cooking lesson. Where may you improve if you would have to redo this Menu?",
            },
          ],
        },
      ],
    };
  }

  if (template.code !== "menu-c1") {
    return null;
  }

  const recipeCards = [
    "Thin Cornmeal Tortillas",
    "Black Bean Paste",
    "Pickled Shrimp",
    "Mexican Shrimp Tostadas",
    "Moroccan Style Lamb with Apricot",
    "Arabic Rice",
    "Tabbouleh",
  ].map((recipeName, index) => ({
    id: `${template.id}-recipe-${index + 1}`,
    type: "recipe-card" as const,
    recipeName,
    maxMark: 2,
  }));

  return {
    ...template,
    sections: [
      {
        id: `${template.id}-section-personal-professionalism`,
        title: "Personal Professionalism",
        order: 1,
        items: checkboxItems("personal", [
          "Student is Dressed in Full, Clean & Ironed Chef Uniform",
          "Student is Neatly Groomed (Facial hair, makeup ect.)",
          "Student has Arrived with a Fully Clean Toolbox",
        ]),
      },
      {
        id: `${template.id}-section-recipe-planning`,
        title: "Recipe Planning Forms",
        order: 2,
        items: recipeCards,
      },
      {
        id: `${template.id}-section-kitchen-hygiene`,
        title: "Kitchen & Hygiene",
        order: 3,
        items: checkboxItems("hygiene", [
          "The student displays regular hand washing",
          "Clean as you go is practiced",
          "Scullary area is kept clean & correct sinks used",
          "Student shows no evidence of cross contamination.",
          "Good Tasting practices",
          "Student takes care to work safely - Chopping board secure",
        ]),
      },
      {
        id: `${template.id}-section-professional-operation`,
        title: "Professional Operation",
        order: 4,
        items: checkboxItems("operation", [
          "Student selects suitable equipment for task",
          "Student controls waste",
          "Gas/Electricity was not used unnecessarily",
        ]),
      },
      {
        id: `${template.id}-section-starter-service`,
        title: "Starter - Service",
        order: 5,
        items: checkboxItems("starter-service", [
          "Was the dish served on time - 14:00",
          "Appropriate plate selected for the dish?",
          "Clean Plate and food within the rim?",
          "Temperature (hot food hot plate, cold food cold plate)",
          "Appropriate portion size for dish served?",
          "Dish garnished appropriately?",
          "Correct ratio of elements on the plate?",
        ]),
      },
      {
        id: `${template.id}-section-thin-cornmeal-tortillas`,
        title: "Thin Cornmeal Tortillas",
        order: 6,
        items: checkboxItems("tortillas", [
          "Crunchy texture",
          "Appropriate size",
          "Thickness appropriate",
          "Good taste",
          "Golden Brown Colour",
        ]),
      },
      {
        id: `${template.id}-section-black-bean-paste`,
        title: "Black Bean Paste",
        order: 7,
        items: checkboxItems("black-bean-paste", [
          "Balance flavours",
          "Well Seasoned",
          "Appropriate Consistency & viscosity",
          "Thin layer of paste used - not to little or to much",
        ]),
      },
      {
        id: `${template.id}-section-pickled-shrimp`,
        title: "Pickled Shrimp",
        order: 8,
        items: checkboxItems("pickled-shrimp", [
          "Balance flavours",
          "Well Seasoned",
          "Pickled long enough - Well enhanced flavours",
          "Looks visual appeal - Colour & shape",
          "Appropriate amount of shrimp used on plate",
          "Pickled long enough - Shrimp is cooked",
        ]),
      },
      {
        id: `${template.id}-section-mexican-shrimp-tostadas`,
        title: "Mexican Shrimp Tostadas",
        order: 9,
        items: checkboxItems("tostadas", [
          "All vegetables uniform",
          "Salsa balanced flavours",
          "Salsa well seasoned",
          "Well balanced flavours",
          "Avo didn't turn brown",
          "Tomato concassed",
          "Cucumber deseeded",
          "Well balanced flavours between all elements",
        ]),
      },
      {
        id: `${template.id}-section-starter-plate`,
        title: "Starter Plate",
        order: 10,
        items: checkboxItems("starter-plate", [
          "Overall impression of the plate?",
        ]),
      },
      {
        id: `${template.id}-section-main-service`,
        title: "Main - Service",
        order: 11,
        items: checkboxItems("main-service", [
          "Was the dish served on time - 14:30",
          "Appropriate plate selected for the dish?",
          "Clean Plate and food within the rim?",
          "Temperature (hot food hot plate, cold food cold plate)",
          "Appropriate portion size for dish served?",
          "Dish garnished appropriately?",
          "Correct ratio of elements on the plate?",
        ]),
      },
      {
        id: `${template.id}-section-moroccan-lamb`,
        title: "Moroccan Style Lamb with Apricot",
        order: 12,
        items: checkboxItems("moroccan-lamb", [
          "Well Seasoned",
          "Balanced flavours",
          "Meat is tender",
          "Looks visual appeal - Colour of the meat & sauce",
          "Sufficient amount of sauce served",
          "Sauce appropriate consistency",
          "Peaches soft - not cooked away",
          "Appropriate amount of pressure cooked lamb served",
          "Taste appropriate",
        ]),
      },
      {
        id: `${template.id}-section-arabic-rice`,
        title: "Arabic Rice",
        order: 13,
        items: checkboxItems("arabic-rice", [
          "Flavours balanced",
          "Cooked - Rice is airy & light",
          "Appropriate portion rice served",
          "Parsley & almond shavings balanced - Not too little or too much",
        ]),
      },
      {
        id: `${template.id}-section-tabbouleh`,
        title: "Tabbouleh",
        order: 14,
        items: checkboxItems("tabbouleh", [
          "Bulgur cooked - not over or under",
          "Balanced flavours",
          "Well Seasoned",
          "Cucumber deseeded & brunoise",
          "Ratio of all elements balanced",
          "Spring onion - Diagonally chopped",
          "Tomato Brunoise",
          "Appropriate amount served with main",
          "Well balanced flavours between all elements",
        ]),
      },
      {
        id: `${template.id}-section-main-plate`,
        title: "Main Plate",
        order: 15,
        items: checkboxItems("main-plate", [
          "Overall impression of the plate?",
        ]),
      },
      {
        id: `${template.id}-section-feedback`,
        title: "Lecturer Feedback",
        order: 16,
        items: [
          {
            id: `${template.id}-feedback`,
            type: "notes",
            label:
              "Please write a review on your performance of today's cooking lesson. Where may you improve if you would have to redo this Menu?",
          },
        ],
      },
    ],
  };
}
