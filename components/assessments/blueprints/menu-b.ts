import type {
  AssessmentBlueprint,
  AssessmentTemplate,
} from "@/types/assessment";
import { COSTING_COMMENT_OPTIONS } from "@/types/assessment";

export function createMenuBBlueprint(
  template: AssessmentTemplate,
): AssessmentBlueprint | null {
  if (template.code === "menu-b1") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
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
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
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
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-5`,
              type: "checkbox",
              description: "Good Tasting practices ",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-6`,
              type: "checkbox",
              description:
                "Student takes care to work safely - Chopping board secure",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
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
              description: "Student controls waste",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-3`,
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
              id: `${template.id}-recipe-sole-vegetable-paupiette-papillote`,
              type: "recipe-card",
              recipeName: "Sole & Vegetable en Paupiette en Papillote ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-grilled-garlic-chilli`,
              type: "recipe-card",
              recipeName: "Grilled Garlic & Chilli ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-lemongrass-sushi-rice-patty`,
              type: "recipe-card",
              recipeName: "Lemon Grass Sushi Rice Patty ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-creamy-smoked-orange-sauce`,
              type: "recipe-card",
              recipeName: "Creamy Smoked Orange Sauce ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-coriander-oil`,
              type: "recipe-card",
              recipeName: "Coriander Oil ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-rice-paper-souffle`,
              type: "recipe-card",
              recipeName: "Rice Paper Soufflé",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "Main ",
          order: 5,
          items: [
            {
              id: `${template.id}-main-1`,
              type: "checkbox",
              description: "Sole - 4 Whole Fillets Present without the skin",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-2`,
              type: "checkbox",
              description: "Sole - Neatly tied up with kitchen twine ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-3`,
              type: "checkbox",
              description: "Sole - Cooked not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-4`,
              type: "checkbox",
              description: "Sole - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-5`,
              type: "checkbox",
              description: "Sole - Well balance flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-6`,
              type: "checkbox",
              description: "Sole - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-7`,
              type: "checkbox",
              description: "Sole -Ratio to filling and dish appropriate",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-8`,
              type: "checkbox",
              description: "Brussel sprouts cooked - Not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-9`,
              type: "checkbox",
              description: "Brussel sprouts - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-10`,
              type: "checkbox",
              description: "Baby carrot cooked- Not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-11`,
              type: "checkbox",
              description: "Baby carrots - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-12`,
              type: "checkbox",
              description: "Redish - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-13`,
              type: "checkbox",
              description: "Prawns - Deveined ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-14`,
              type: "checkbox",
              description: "Prawn - Shell kept on ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-15`,
              type: "checkbox",
              description: "Prawn Cooked - Not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-16`,
              type: "checkbox",
              description: "Prawn - Well balanced flavour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-17`,
              type: "checkbox",
              description: "Prawn - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-18`,
              type: "checkbox",
              description: "Rice Cooked - Not over or under cooked ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-19`,
              type: "checkbox",
              description: "Rice Patty - Balanced flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-20`,
              type: "checkbox",
              description: "Rice Patty - Unifrom shape ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-21`,
              type: "checkbox",
              description: "Rice Patty - Appropriate texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-22`,
              type: "checkbox",
              description: "Rice Patty - Not to much sesame seeds present",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-23`,
              type: "checkbox",
              description: "Sauce - Balance flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-24`,
              type: "checkbox",
              description: "Sauce - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-25`,
              type: "checkbox",
              description: "Sauce - Appropriate viscosity ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-26`,
              type: "checkbox",
              description: "Sauce - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-27`,
              type: "checkbox",
              description: "Coriander oil - Appropriately used on the plate ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-28`,
              type: "checkbox",
              description: "Soufflé - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-29`,
              type: "checkbox",
              description: "Soufflé - Appropriately Puffed/ Good Texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-30`,
              type: "checkbox",
              description:
                "Soufflé - Appropriate shape & size used on the plate",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            {
              id: `${template.id}-service-1`,
              type: "checkbox",
              description: "Was the dish served on time -",
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
              description: "Clean plate & food within the rim?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-5`,
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
          order: 7,
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

  if (template.code === "menu-b2") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
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
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
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
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-5`,
              type: "checkbox",
              description: "Good Tasting practices ",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-6`,
              type: "checkbox",
              description:
                "Student takes care to work safely - Chopping board secure",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
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
              description: "Student controls waste",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-3`,
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
              id: `${template.id}-recipe-guinness-ale-steak-kidney-pie`,
              type: "recipe-card",
              recipeName: "Guinness Ale Steak & Kidney Pie ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-cauliflower-au-gratin`,
              type: "recipe-card",
              recipeName: "Cauliflower Au Gratin ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-roasted-leeks`,
              type: "recipe-card",
              recipeName: "Roasted Leeks ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "Main ",
          order: 5,
          items: [
            {
              id: `${template.id}-main-1`,
              type: "checkbox",
              description: "Pastry Cooked - Not Raw ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-2`,
              type: "checkbox",
              description: "Pastry Golden Brown - Not Burnt ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-3`,
              type: "checkbox",
              description: "Pastry Appropriate texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-4`,
              type: "checkbox",
              description: "Pastry Appropriate tickness",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-5`,
              type: "checkbox",
              description: "Fillet appropriate size cut ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-6`,
              type: "checkbox",
              description: "Kidneys appropriate size cut ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-7`,
              type: "checkbox",
              description: "Kidneys cleaned properly ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-8`,
              type: "checkbox",
              description: "Pie Filling well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-9`,
              type: "checkbox",
              description: "Pie Filling well balanced flavour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-10`,
              type: "checkbox",
              description: "Pie Sauce appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-11`,
              type: "checkbox",
              description: "Ratio between pastry & filling appropriate ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-12`,
              type: "checkbox",
              description: "Cauliflower - Seasoned well ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-13`,
              type: "checkbox",
              description: "Cauliflower - Well balanced flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-14`,
              type: "checkbox",
              description: "Béchamel - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-15`,
              type: "checkbox",
              description: "Béchamel - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-16`,
              type: "checkbox",
              description: "Béchamel - Appropriate viscosity ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-17`,
              type: "checkbox",
              description: "Cauliflower Steak look visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-18`,
              type: "checkbox",
              description: "Cauliflower - Al dente ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-19`,
              type: "checkbox",
              description: "Cauliflower Steak Au Gratin ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-20`,
              type: "checkbox",
              description: "Cauliflower appropriately used on the plate",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-21`,
              type: "checkbox",
              description: "Leeks - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-22`,
              type: "checkbox",
              description: "Leeks looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-23`,
              type: "checkbox",
              description: "Leeks - Not over or under cooked ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-24`,
              type: "checkbox",
              description: "Leeks appropriately used on the plate",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            {
              id: `${template.id}-service-1`,
              type: "checkbox",
              description: "Was the dish served on time -12:30",
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
              description: "Clean plate & food within the rim?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-5`,
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
          order: 7,
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

  if (template.code === "menu-b3") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
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
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
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
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-4`,
              type: "checkbox",
              description:
                "Did the candidate taste his/her food & made necessary adjustments",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-5`,
              type: "checkbox",
              description:
                "Student takes care to work safely - Chopping board secure",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            {
              id: `${template.id}-operation-1`,
              type: "checkbox",
              description: "Student controls the cooking process (time & temp)",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-2`,
              type: "checkbox",
              description: "Student controls waste",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-3`,
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
              id: `${template.id}-recipe-cold-cucumber-soup`,
              type: "recipe-card",
              recipeName: "Cold Cucumber Soup ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-salsa-verde`,
              type: "recipe-card",
              recipeName: "Salsa Verde ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-mixed-seeded-grissini`,
              type: "recipe-card",
              recipeName: "Mixed Seeded Grissini",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "Main ",
          order: 5,
          items: [
            {
              id: `${template.id}-main-1`,
              type: "checkbox",
              description: "Soup - Well Balance Flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-2`,
              type: "checkbox",
              description: "Soup - Well Seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-3`,
              type: "checkbox",
              description: "Soup - Appropriate Consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-4`,
              type: "checkbox",
              description: "Soup - Appropriate Viscosity",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-5`,
              type: "checkbox",
              description: "Salsa Verde - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-6`,
              type: "checkbox",
              description: "Salsa Verde - Well Balanced Flovour",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-7`,
              type: "checkbox",
              description: "Salsa Verde - Viscosity",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-8`,
              type: "checkbox",
              description:
                "Salsa Verde - Appropriate amount used on the plate ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-9`,
              type: "checkbox",
              description: "Salsa Verder - Well Seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-10`,
              type: "checkbox",
              description: "Grissini - Yeast respeced ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-11`,
              type: "checkbox",
              description: "Grissini - Dough smooth & elastic ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-12`,
              type: "checkbox",
              description: "Grissini - Appropriate size ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-13`,
              type: "checkbox",
              description: "Grissini - Appropriate shape ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-14`,
              type: "checkbox",
              description: "Grissini - Crunshy texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-15`,
              type: "checkbox",
              description: "Grissini - Golden brown colour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-16`,
              type: "checkbox",
              description: "Grissini - Appropriate amount of seeds used ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-17`,
              type: "checkbox",
              description:
                "Dish appropriately garnished with cream, red onion & chives",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            {
              id: `${template.id}-service-1`,
              type: "checkbox",
              description: "Was the dish served on time - 10:30",
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
              description: "Clean plate & food within the rim?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-5`,
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
          order: 7,
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

  if (template.code === "menu-b4") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
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
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
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
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-5`,
              type: "checkbox",
              description:
                "Student takes care to work safely - Chopping board secure",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
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
              description: "Student controls waste",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-3`,
              type: "checkbox",
              description:
                "Knives are used, cleaned, sharpened and stored correctly",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-4`,
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
              id: `${template.id}-recipe-sweet-sour-pork-chow-mein`,
              type: "recipe-card",
              recipeName: "Sweet & Sour Pork Chow Mein ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-traditional-shorbread-biscuit`,
              type: "recipe-card",
              recipeName: "Traditional Shorbread Biscuit ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-main-biscuits`,
          title: "Main  & Biscuits ",
          order: 5,
          items: [
            {
              id: `${template.id}-main-1`,
              type: "checkbox",
              description: "Prok Tenderloin - Cooked not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-2`,
              type: "checkbox",
              description: "Prok Tenderloin - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-3`,
              type: "checkbox",
              description: "Prok Tenderloin - Approrpaite Size cut ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-4`,
              type: "checkbox",
              description: "Prok Tenderloin - Appropriate layer of batter on ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-5`,
              type: "checkbox",
              description: "Prok Tenderloin - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-6`,
              type: "checkbox",
              description: "Sauce - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-7`,
              type: "checkbox",
              description: "Sauce - Appropriate viscosity ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-8`,
              type: "checkbox",
              description: "Sauce - Well balanced flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-9`,
              type: "checkbox",
              description: "Sauce - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-10`,
              type: "checkbox",
              description: "Noodles - Pepper appropriate size ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-11`,
              type: "checkbox",
              description: "Noodles - Onions Appropriate size ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-12`,
              type: "checkbox",
              description: "Noodles Al dente - Not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-13`,
              type: "checkbox",
              description: "Mixed Peppers not over cooked ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-14`,
              type: "checkbox",
              description: "Ratio of meat, noodle & sauce appropriate ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-15`,
              type: "checkbox",
              description:
                "Ratio of peppers & onions used on plate appropriate ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-16`,
              type: "checkbox",
              description: "Main - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-17`,
              type: "checkbox",
              description: "Main - Well balanced flavours",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-18`,
              type: "checkbox",
              description: "Main - Appropriate portion size served ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-19`,
              type: "checkbox",
              description:
                "Main - Spring onions, sesame seeds & soy appropriatly used on the plate ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-20`,
              type: "checkbox",
              description: "Biscuit - Appropriate texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-21`,
              type: "checkbox",
              description: "Biscuit - Uniform shape",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-22`,
              type: "checkbox",
              description: "Biscuit - Uniform size ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-23`,
              type: "checkbox",
              description: "Biscuit - Appropriate colour",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-24`,
              type: "checkbox",
              description: "Biscuit - Appropriate taste ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-25`,
              type: "checkbox",
              description: "Biscuit - Visual appeal",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: [
            {
              id: `${template.id}-service-1`,
              type: "checkbox",
              description: "Was the main served on time -11:00",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-2`,
              type: "checkbox",
              description: "Was the biscuits served on time -11:30",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-3`,
              type: "checkbox",
              description: "Appropriate plate selected for Main ?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-4`,
              type: "checkbox",
              description: "Appropriate plate selected for the Biscuits?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-5`,
              type: "checkbox",
              description: "Clean plate & food within the rim- Main?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-6`,
              type: "checkbox",
              description: "Clean plate & food within the rim - Biscuits?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-7`,
              type: "checkbox",
              description:
                "Temperature (Hot foof hot plate, Cold food cold plate)Main",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-8`,
              type: "checkbox",
              description:
                "Temperature (Hot foof hot plate, Cold food cold plate)Biscuits",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
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

  if (template.code === "menu-b5") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-day-1-personal-professionalism`,
          title: "Day 1: Personal Professionalism",
          order: 1,
          items: [
            {
              id: `${template.id}-day1-personal-1`,
              type: "checkbox",
              description:
                "Student is Dressed in Full, Clean & Ironed Chef Uniform",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-personal-2`,
              type: "checkbox",
              description:
                "Student is Neatly Groomed (Facial hair, makeup ect.)",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-personal-3`,
              type: "checkbox",
              description: "Student has Arrived with a Fully Clean Toolbox",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-personal-4`,
              type: "checkbox",
              description: "Student has Arrived on Time",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-day-2-personal-professionalism`,
          title: "Day 2: Personal Professionalism",
          order: 2,
          items: [
            {
              id: `${template.id}-day2-personal-1`,
              type: "checkbox",
              description:
                "Student is Dressed in Full, Clean & Ironed Chef Uniform",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-personal-2`,
              type: "checkbox",
              description:
                "Student is Neatly Groomed (Facial hair, makeup ect.)",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-personal-3`,
              type: "checkbox",
              description: "Student has Arrived with a Fully Clean Toolbox",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-personal-4`,
              type: "checkbox",
              description: "Student has Arrived on Time",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-day-1-kitchen-hygiene`,
          title: "Day 1: Kitchen & Hygiene",
          order: 3,
          items: [
            {
              id: `${template.id}-day1-hygiene-1`,
              type: "checkbox",
              description: "The student displays regular hand washing",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-hygiene-2`,
              type: "checkbox",
              description: "Clean as you go is practiced",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-hygiene-3`,
              type: "checkbox",
              description: "Scullary area is kept clean & correct sinks used",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-hygiene-4`,
              type: "checkbox",
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-hygiene-5`,
              type: "checkbox",
              description: "Sanitizer Bucket present & changed frequently",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-hygiene-6`,
              type: "checkbox",
              description:
                "Did the candidate taste his/her food & made necessary adjustments",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-hygiene-7`,
              type: "checkbox",
              description:
                "Student takes care to work safely - Chopping board secure",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-day-2-kitchen-hygiene`,
          title: "Day 2: Kitchen & Hygiene",
          order: 4,
          items: [
            {
              id: `${template.id}-day2-hygiene-1`,
              type: "checkbox",
              description: "The student displays regular hand washing",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-hygiene-2`,
              type: "checkbox",
              description: "Clean as you go is practiced",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-hygiene-3`,
              type: "checkbox",
              description: "Scullary area is kept clean & correct sinks used",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-hygiene-4`,
              type: "checkbox",
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-hygiene-5`,
              type: "checkbox",
              description: "Sanitizer Bucket present & changed frequently",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-hygiene-6`,
              type: "checkbox",
              description:
                "Student takes care to work safely - Chopping board secure",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-day-1-professional-operation`,
          title: "Day 1: Professional Operation",
          order: 5,
          items: [
            {
              id: `${template.id}-day1-operation-1`,
              type: "checkbox",
              description: "Student selects suitable equipment for task",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-operation-2`,
              type: "checkbox",
              description: "Student controls the cooking process (time & temp)",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-operation-3`,
              type: "checkbox",
              description: "Student controls waste",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-operation-4`,
              type: "checkbox",
              description:
                "Knives are used, cleaned, sharpened and stored correctly",
              maxMark: 1,
            },
            {
              id: `${template.id}-day1-operation-5`,
              type: "checkbox",
              description: "Gas/Electricity was not used unnecessarily",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-day-2-professional-operation`,
          title: "Day 2: Professional Operation",
          order: 6,
          items: [
            {
              id: `${template.id}-day2-operation-1`,
              type: "checkbox",
              description: "Student controls the cooking process (time & temp)",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-operation-2`,
              type: "checkbox",
              description:
                "Knives are used, cleaned, sharpened and stored correctly",
              maxMark: 1,
            },
            {
              id: `${template.id}-day2-operation-3`,
              type: "checkbox",
              description: "Gas/Electricity was not used unnecessarily",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 7,
          items: [
            {
              id: `${template.id}-recipe-sourdough-panini`,
              type: "recipe-card",
              recipeName: "Sourdough Panini",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-shallow-fried-chicken`,
              type: "recipe-card",
              recipeName: "Shallow Fried Chicken",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-asian-soy-chilli-glaze`,
              type: "recipe-card",
              recipeName: "Asian Soy Chilli Glaze",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-kimchi`,
              type: "recipe-card",
              recipeName: "Kimchi",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-asian-slaw`,
              type: "recipe-card",
              recipeName: "Asian Slaw",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-pickled-cucumber`,
              type: "recipe-card",
              recipeName: "Pickled Cucumber",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-sauce-mornay`,
              type: "recipe-card",
              recipeName: "Sauce Mornay",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-gourmet-sandwich`,
          title: "Gourmet Sandwich",
          order: 8,
          items: [
            {
              id: `${template.id}-sandwich-1`,
              type: "checkbox",
              description: "Panini - Appropriate texture",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-2`,
              type: "checkbox",
              description: "Panini - Appropriate flavour",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-3`,
              type: "checkbox",
              description: "Panini - Looks Visual Appeal",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-4`,
              type: "checkbox",
              description: "Panini - Appropriate Size",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-5`,
              type: "checkbox",
              description: "Panini - Appropriate Shape",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-6`,
              type: "checkbox",
              description: "Chicken appropriate thickness",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-7`,
              type: "checkbox",
              description: "Chicken - Well balanced flavours",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-8`,
              type: "checkbox",
              description: "Chicken - Well seasoned",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-9`,
              type: "checkbox",
              description: "Chicken - Well cooked not over or under",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-10`,
              type: "checkbox",
              description: "Chicken - Looks visual appeal",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-11`,
              type: "checkbox",
              description: "Chicken - Appropriate layer of batter on",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-12`,
              type: "checkbox",
              description: "Chicken - Batter cooked",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-13`,
              type: "checkbox",
              description: "Chicken - Batter well seasoned",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-14`,
              type: "checkbox",
              description: "Glaze - Appropriate viscosity",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-15`,
              type: "checkbox",
              description: "Glaze - Well balanced flavour",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-16`,
              type: "checkbox",
              description: "Ratio of glaze to chicken appropriate",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-17`,
              type: "checkbox",
              description: "Kimchi - Cabbage appropriate thickness",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-18`,
              type: "checkbox",
              description:
                "Kimchi - Carrots appropriate size, shape & thickness",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-19`,
              type: "checkbox",
              description: "Kimchi - Well balanced flavours",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-20`,
              type: "checkbox",
              description: "Kimchi - Well Seasoned",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-21`,
              type: "checkbox",
              description: "Kimchi - Appropriate amount used on the plate",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-22`,
              type: "checkbox",
              description: "Slaw - Cabbage appropriate size, shape & thickness",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-23`,
              type: "checkbox",
              description: "Slaw - Carrots appropriate size, shape & thickness",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-24`,
              type: "checkbox",
              description: "Slaw - Herb chopped appropriately",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-25`,
              type: "checkbox",
              description: "Slaw - Well balanced flavour",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-26`,
              type: "checkbox",
              description: "Slaw - Well seasoned",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-27`,
              type: "checkbox",
              description: "Slaw - Flavour has intensified",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-28`,
              type: "checkbox",
              description: "Slaw - Appropriate amount used on the plate",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-29`,
              type: "checkbox",
              description: "Cucumber - Well balanced flavour",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-30`,
              type: "checkbox",
              description: "Cucumber - Appropriate size, shape & thickness",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-31`,
              type: "checkbox",
              description: "Cucumber - Well seasoned",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-32`,
              type: "checkbox",
              description: "Cucumber - Flavour intensified",
              maxMark: 1,
            },
            {
              id: `${template.id}-sandwich-33`,
              type: "checkbox",
              description: "Cucumber - Appropriate amount used on the plate",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service",
          order: 9,
          items: [
            {
              id: `${template.id}-service-1`,
              type: "checkbox",
              description: "Done with prep on Day 1? 11:30",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-2`,
              type: "checkbox",
              description: "Was the dish served on time - 12:30",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-3`,
              type: "checkbox",
              description: "Appropriate plate selected for the dish?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-4`,
              type: "checkbox",
              description: "Ratio of all elements on the plate is balanced?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-5`,
              type: "checkbox",
              description: "Open Face sandwich served",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-6`,
              type: "checkbox",
              description: "Elements on the plate complement each other?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-7`,
              type: "checkbox",
              description: "Clean plate & food within the rim?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-8`,
              type: "checkbox",
              description:
                "Temperature (Hot food hot plate, Cold food cold plate)",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 10,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label:
                "Please write a Review on your performance of today's cooking lesson. Where may you improve if you would have to redo this menu?",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-b6") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
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
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Correct chopping boards used & it is secured",
            "Student shows no evidence of cross contamination.",
            "Did the candidate taste his/her food & made necessary adjustments",
            "Student takes care to work safely - Chopping board secure",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task",
            "Student controls the cooking process (time & temp)",
            "Student controls waste",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-ricotta-demo`,
              type: "recipe-card",
              recipeName: "Ricotta Demo",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-pasta-dough`,
              type: "recipe-card",
              recipeName: "Pasta Dough",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-ricotta-egg-yolk-ravioli`,
              type: "recipe-card",
              recipeName: "Ricotta & Egg Yolk Ravioli",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-chicken-broth`,
              type: "recipe-card",
              recipeName: "Chicken Broth",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-starter`,
          title: "Starter",
          order: 5,
          items: checkboxItems("starter", [
            "Pasta Cooked - Not over or under cooked",
            "Pasta - Appropriate thickness",
            "Pasta - Appropriate texture",
            "Ricotta cheese - Well seasoned",
            "Ricotta Cheese - Balanced flavours",
            "Ratio of ricotta to egg yolk appropriate",
            "Ratio of filling to Pasta dough appropriate",
            "Ravioli looks visually appealing",
            "Ravioli uniform shapes",
            "Ravioli uniform size",
            "Ratio of ravioli to broth appropriate",
            "Broth looks visually appealing",
            "Broth - Balanced flavour",
            "Broth - Well seasoned",
            "Broth - Strong chicken flavour present",
            "Microgreens & watercress appropriately used on the plate",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service",
          order: 6,
          items: checkboxItems("service", [
            "Was the dish served on time - 11:30",
            "Appropriate plate selected for the dish?",
            "Ratio of all elements on the plate is balanced?",
            "Clean plate & food within the rim?",
            "Temperature (Hot food hot plate, Cold food cold plate)",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
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

  if (template.code === "menu-b6-cathsseta") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    return {
      ...template,
      title: "Menu B6 - CATHSSETA",
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
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Student shows no evidence of cross contamination.",
            "Did the candidate taste his/her food & made necessary adjustments",
            "Student takes care to work safely - Chopping board secure",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task",
            "Student controls waste",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-starter`,
          title: "Starter",
          order: 4,
          items: checkboxItems("starter", [
            "Pasta Cooked - Not over or under cooked",
            "Pasta - Appropriate thickness",
            "Pasta - Appropriate texture",
            "Ricotta cheese - Well seasoned",
            "Ricotta Cheese - Balanced flavours",
            "Ratio of ricotta to egg yolk appropriate",
            "Ratio of filling to Pasta dough appropriate",
            "Ravioli looks visual appeal",
            "Ravioli uniform shapes",
            "Ravioli uniform size",
            "Ratio of ravioli to broth appropriate",
            "Broth looks visual appeal",
            "Broth - Balanced flavour",
            "Broth - Well seasoned",
            "Broth - Strong Chicken flavour Present",
            "Micros & Watercress appropriately used on the plate",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service",
          order: 5,
          items: checkboxItems("service", [
            "Was the dish served on time - 11:30",
            "Appropriate plate selected for the dish?",
            "Ratio of all elements on the plate is balanced?",
            "Clean plate & food within the rim?",
            "Temperature (Hot food hot plate, Cold food cold plate)",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 6,
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

  if (template.code === "menu-b5-cathsseta") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    return {
      ...template,
      title: "Menu B5 - CATHSSETA",
      sections: [
        {
          id: `${template.id}-section-day-1-personal-professionalism`,
          title: "Day 1: Personal Professionalism",
          order: 1,
          items: checkboxItems("day1-personal", [
            "Student is Dressed in Full, Clean & Ironed Chef Uniform",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student has Arrived with a Fully Clean Toolbox",
          ]),
        },
        {
          id: `${template.id}-section-day-2-personal-professionalism`,
          title: "Day 2: Personal Professionalism",
          order: 2,
          items: checkboxItems("day2-personal", [
            "Student is Dressed in Full, Clean & Ironed Chef Uniform",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student has Arrived with a Fully Clean Toolbox",
          ]),
        },
        {
          id: `${template.id}-section-day-1-kitchen-hygiene`,
          title: "Day 1: Kitchen & Hygiene",
          order: 3,
          items: checkboxItems("day1-hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
            "Student shows no evidence of cross contamination.",
            "Good Tasting practices",
            "Student takes care to work safely - Chopping board secure",
          ]),
        },
        {
          id: `${template.id}-section-day-2-kitchen-hygiene`,
          title: "Day 2: Kitchen & Hygiene",
          order: 4,
          items: checkboxItems("day2-hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
            "Student shows no evidence of cross contamination.",
            "Student takes care to work safely - Chopping board secure",
          ]),
        },
        {
          id: `${template.id}-section-day-1-professional-operation`,
          title: "Day 1: Professional Operation",
          order: 5,
          items: checkboxItems("day1-operation", [
            "Student selects suitable equipment for task",
            "Student controls waste",
            "Knives are used, cleaned, sharpened and stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-day-2-professional-operation`,
          title: "Day 2: Professional Operation",
          order: 6,
          items: checkboxItems("day2-operation", [
            "Knives are used, cleaned, sharpened and stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-gourmet-sandwich`,
          title: "Gourmet Sandwich",
          order: 7,
          items: checkboxItems("sandwich", [
            "Panini - Appropriate texture",
            "Panini - Appropriate flavour",
            "Panini - Visual appeal",
            "Panini - Appropriate size",
            "Panini - Appropriate shape",
            "Chicken - Appropriate thickness",
            "Chicken - Well balanced flavours",
            "Chicken - Well seasoned",
            "Chicken - Well cooked, not over or under",
            "Chicken - Visual appeal",
            "Chicken - Appropriate layer of batter",
            "Chicken - Batter cooked",
            "Chicken - Batter well seasoned",
            "Glaze - Appropriate viscosity",
            "Glaze - Well balanced flavour",
            "Ratio of glaze to chicken appropriate",
            "Kimchi - Cabbage appropriate thickness",
            "Kimchi - Carrots appropriate size, shape & thickness",
            "Kimchi - Well balanced flavours",
            "Kimchi - Well seasoned",
            "Kimchi - Appropriate amount used on the plate",
            "Slaw - Cabbage appropriate size, shape & thickness",
            "Slaw - Carrots appropriate size, shape & thickness",
            "Slaw - Herb chopped appropriately",
            "Slaw - Well balanced flavour",
            "Slaw - Well seasoned",
            "Slaw - Flavour has intensified",
            "Slaw - Appropriate amount used on the plate",
            "Cucumber - Well balanced flavour",
            "Cucumber - Appropriate size, shape & thickness",
            "Cucumber - Well seasoned",
            "Cucumber - Flavour intensified",
            "Cucumber - Appropriate amount used on the plate",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service",
          order: 8,
          items: checkboxItems("service", [
            "Was the dish served on time - 12:30",
            "Appropriate plate selected for the dish?",
            "Ratio of all elements on the plate is balanced?",
            "Open Face sandwich served",
            "Elements on the plate complement each other?",
            "Clean plate & food within the rim?",
            "Temperature (Hot food hot plate, Cold food cold plate)",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 9,
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

  if (template.code === "menu-b3-cathsseta") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
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
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
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
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-4`,
              type: "checkbox",
              description:
                "Student takes care to work safely - Chopping board secure ",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: [
            {
              id: `${template.id}-operation-1`,
              type: "checkbox",
              description: "Student controls the cooking process (time & temp)",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-2`,
              type: "checkbox",
              description: "Student controls waste",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "Main ",
          order: 4,
          items: [
            {
              id: `${template.id}-main-1`,
              type: "checkbox",
              description: "Soup - Well Balance Flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-2`,
              type: "checkbox",
              description: "Soup - Well Seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-3`,
              type: "checkbox",
              description: "Soup - Appropriate Consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-4`,
              type: "checkbox",
              description: "Soup - Appropriate Viscosity",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-5`,
              type: "checkbox",
              description: "Salsa Verde - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-6`,
              type: "checkbox",
              description: "Salsa Verde - Well Balanced Flovour",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-7`,
              type: "checkbox",
              description: "Salsa Verde - Viscosity",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-8`,
              type: "checkbox",
              description:
                "Salsa Verde - Appropriate amount used on the plate ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-9`,
              type: "checkbox",
              description: "Salsa Verder - Well Seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-10`,
              type: "checkbox",
              description: "Grissini - Yeast respeced ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-11`,
              type: "checkbox",
              description: "Grissini - Dough smooth & elastic ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-12`,
              type: "checkbox",
              description: "Grissini - Appropriate size ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-13`,
              type: "checkbox",
              description: "Grissini - Appropriate shape ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-14`,
              type: "checkbox",
              description: "Grissini - Crunshy texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-15`,
              type: "checkbox",
              description: "Grissini - Golden brown colour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-16`,
              type: "checkbox",
              description: "Grissini - Appropriate amount of seeds used ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-17`,
              type: "checkbox",
              description:
                "Dish appropriately garnished with cream, red onion & chives",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 5,
          items: [
            {
              id: `${template.id}-service-1`,
              type: "checkbox",
              description: "Was the dish served on time - 10:30 & 16:30",
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
              description: "Clean plate & food within the rim?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-5`,
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
          order: 6,
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

  if (template.code === "menu-b2-cathsseta") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
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
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
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
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-5`,
              type: "checkbox",
              description: "Good Tasting practices ",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-6`,
              type: "checkbox",
              description:
                "Student takes care to work safely - Chopping board secure",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
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
              description: "Student controls waste",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-3`,
              type: "checkbox",
              description: "Gas/Electricity was not used unnecessarily",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "Main ",
          order: 4,
          items: [
            {
              id: `${template.id}-main-1`,
              type: "checkbox",
              description: "Pastry Cooked - Not Raw ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-2`,
              type: "checkbox",
              description: "Pastry Golden Brown - Not Burnt ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-3`,
              type: "checkbox",
              description: "Pastry Appropriate texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-4`,
              type: "checkbox",
              description: "Pastry Appropriate tickness",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-5`,
              type: "checkbox",
              description: "Fillet appropriate size cut ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-6`,
              type: "checkbox",
              description: "Kidneys appropriate size cut ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-7`,
              type: "checkbox",
              description: "Kidneys cleaned properly ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-8`,
              type: "checkbox",
              description: "Pie Filling well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-9`,
              type: "checkbox",
              description: "Pie Filling well balanced flavour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-10`,
              type: "checkbox",
              description: "Pie Sauce appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-11`,
              type: "checkbox",
              description: "Ratio between pastry & filling appropriate ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-12`,
              type: "checkbox",
              description: "Cauliflower - Seasoned well ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-13`,
              type: "checkbox",
              description: "Cauliflower - Well balanced flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-14`,
              type: "checkbox",
              description: "Béchamel - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-15`,
              type: "checkbox",
              description: "Béchamel - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-16`,
              type: "checkbox",
              description: "Béchamel - Appropriate viscosity ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-17`,
              type: "checkbox",
              description: "Cauliflower Steak look visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-18`,
              type: "checkbox",
              description: "Cauliflower - Al dente ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-19`,
              type: "checkbox",
              description: "Cauliflower Steak Au Gratin ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-20`,
              type: "checkbox",
              description: "Cauliflower appropriately used on the plate",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-21`,
              type: "checkbox",
              description: "Leeks - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-22`,
              type: "checkbox",
              description: "Leeks looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-23`,
              type: "checkbox",
              description: "Leeks - Not over or under cooked ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-24`,
              type: "checkbox",
              description: "Leeks appropriately used on the plate",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 5,
          items: [
            {
              id: `${template.id}-service-1`,
              type: "checkbox",
              description: "Was the dish served on time -12:30",
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
              description: "Clean plate & food within the rim?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-5`,
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
          order: 6,
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

  if (template.code === "menu-b1-cathsseta") {
    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
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
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
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
              description: "Student shows no evidence of cross contamination.",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-5`,
              type: "checkbox",
              description: "Good Tasting practices ",
              maxMark: 1,
            },
            {
              id: `${template.id}-hygiene-6`,
              type: "checkbox",
              description:
                "Student takes care to work safely - Chopping board secure",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
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
              description: "Student controls waste",
              maxMark: 1,
            },
            {
              id: `${template.id}-operation-3`,
              type: "checkbox",
              description: "Gas/Electricity was not used unnecessarily",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "Main ",
          order: 4,
          items: [
            {
              id: `${template.id}-main-1`,
              type: "checkbox",
              description: "Sole - 4 Whole Fillets Present without the skin",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-2`,
              type: "checkbox",
              description: "Sole - Neatly tied up with kitchen twine ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-3`,
              type: "checkbox",
              description: "Sole - Cooked not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-4`,
              type: "checkbox",
              description: "Sole - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-5`,
              type: "checkbox",
              description: "Sole - Well balance flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-6`,
              type: "checkbox",
              description: "Sole - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-7`,
              type: "checkbox",
              description: "Sole -Ratio to filling and dish appropriate",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-8`,
              type: "checkbox",
              description: "Brussel sprouts cooked - Not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-9`,
              type: "checkbox",
              description: "Brussel sprouts - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-10`,
              type: "checkbox",
              description: "Baby carrot cooked- Not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-11`,
              type: "checkbox",
              description: "Baby carrots - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-12`,
              type: "checkbox",
              description: "Redish - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-13`,
              type: "checkbox",
              description: "Prawns - Deveined ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-14`,
              type: "checkbox",
              description: "Prawn - Shell kept on ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-15`,
              type: "checkbox",
              description: "Prawn Cooked - Not over or under ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-16`,
              type: "checkbox",
              description: "Prawn - Well balanced flavour ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-17`,
              type: "checkbox",
              description: "Prawn - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-18`,
              type: "checkbox",
              description: "Rice Cooked - Not over or under cooked ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-19`,
              type: "checkbox",
              description: "Rice Patty - Balanced flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-20`,
              type: "checkbox",
              description: "Rice Patty - Unifrom shape ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-21`,
              type: "checkbox",
              description: "Rice Patty - Appropriate texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-22`,
              type: "checkbox",
              description: "Rice Patty - Not to much sesame seeds present",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-23`,
              type: "checkbox",
              description: "Sauce - Balance flavours ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-24`,
              type: "checkbox",
              description: "Sauce - Appropriate consistency ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-25`,
              type: "checkbox",
              description: "Sauce - Appropriate viscosity ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-26`,
              type: "checkbox",
              description: "Sauce - Well seasoned ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-27`,
              type: "checkbox",
              description: "Coriander oil - Appropriately used on the plate ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-28`,
              type: "checkbox",
              description: "Soufflé - Looks visual appeal ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-29`,
              type: "checkbox",
              description: "Soufflé - Appropriately Puffed/ Good Texture ",
              maxMark: 1,
            },
            {
              id: `${template.id}-main-30`,
              type: "checkbox",
              description:
                "Soufflé - Appropriate shape & size used on the plate",
              maxMark: 1,
            },
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 5,
          items: [
            {
              id: `${template.id}-service-1`,
              type: "checkbox",
              description: "Was the dish served on time -",
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
              description: "Clean plate & food within the rim?",
              maxMark: 1,
            },
            {
              id: `${template.id}-service-5`,
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
          order: 6,
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
              commentOptions: COSTING_COMMENT_OPTIONS,
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

  if (template.code === "menu-b7-ocg") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    const recipeCards = [
      "Venison Curry",
      "Magwinya",
      "Shallow Fried Fish",
      "Soft Shell Taco",
      "Sumac Onions",
      "Aioli",
      "Potato Rosti",
      "Hummus",
      "Marinated Peppers",
      "Grilled Tofu",
      "Thai Sweet Chilli Sauce",
      "Enriched Slider Buns",
      "Red Onion Chutney",
      "Garlic Snail Au Gratin",
    ].map((recipeName, index) => ({
      id: `${template.id}-recipe-${index + 1}`,
      type: "recipe-card" as const,
      recipeName,
      maxMark: 2,
    }));

    return {
      ...template,
      title: "Menu B7 - OCG",
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
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
            "Student shows no evidence of cross contamination.",
            "Sanitizer Bucket present & changed frequently",
            "Did the candidate taste his/her food & made necessary adjustments",
            "Student takes care to work safely - Chopping board secure",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task",
            "Student controls the cooking process (time & temp)",
            "Student controls waste",
            "Knives are used, cleaned, sharpened and stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 4,
          items: recipeCards,
        },
        {
          id: `${template.id}-section-canapes`,
          title: "Canapés",
          order: 5,
          items: checkboxItems("canapes", [
            "Mince - Well seasoned",
            "Mince - Well balanced flavours",
            "Mince - Appropriate consistency - Not too dry or too wet",
            "Mince garnished with coriander appropriately",
            "Magwinya - Appropriate size",
            "Magwinya - Appropriate shape",
            "Magwinya - Appropriate texture",
            "Magwinya - Appropriate colour",
            "Magwinya - Appropriate taste",
            "Chutney - Appropriately used",
            "Chutney - Sufficient amount used",
            "Venison Magwinya - Visual appeal",
            "Venison Magwinya - Appropriate ratio of all elements",
            "Fish - Well cooked",
            "Fish - Balanced flavour",
            "Fish - Well seasoned",
            "Fish - Visual appeal",
            "Fish - Appropriate taste",
            "Taco - Dough not overworked",
            "Taco - Appropriate texture",
            "Taco - Cooked",
            "Taco - Visual appeal",
            "Taco - Appropriate size",
            "Taco - Appropriate thickness",
            "Sumac Onions - Appropriate thickness",
            "Sumac Onions - Balanced flavours",
            "Sumac Onions - Well seasoned",
            "Sumac Onions - Visual appeal",
            "Appropriate amount of sumac onions used",
            "Aioli - Appropriate consistency",
            "Aioli - Balanced flavours",
            "Aioli - Well seasoned",
            "Aioli - Appropriate taste",
            "Aioli did not split",
            "Appropriate amount of Aioli used on the taco",
            "Soft shell taco looks visually appealing overall",
            "Rosti - Visual appeal",
            "Rosti - Ratio between beetroot & potato balanced",
            "Rosti - Well seasoned",
            "Rosti cooked - Not over or under",
            "Rosti - Appropriate size",
            "Rosti - Appropriate thickness",
            "Rosti - Appropriate texture",
            "Hummus - Appropriate consistency",
            "Hummus - Appropriate viscosity",
            "Hummus - Well seasoned",
            "Hummus - Balanced flavour",
            "Appropriate amount of hummus used on rosti",
            "Peppers - Visual appeal",
            "Peppers - Appropriate size & shape",
            "Peppers - Well seasoned",
            "Peppers - Balanced flavours",
            "Peppers - Appropriate amount used on rosti",
            "Grilled Tofu - Visual appeal",
            "Grilled Tofu - Well seasoned",
            "Grilled Tofu - Balanced flavours",
            "Grilled Tofu - Appropriate size",
            "Thai sauce - Balanced flavour",
            "Thai sauce - Appropriate consistency",
            "Grilled Tofu - Enough sauce was absorbed",
            "Appropriate amount of spring onion & sesame seeds on seitan",
            "Slider Bun - Uniform in shape & size",
            "Slider Bun - Appropriate size",
            "Slider Bun - Golden brown colour",
            "Slider Bun - Appropriate texture",
            "Slider Bun - Appropriate taste",
            "Red Onion Chutney - Balanced flavour",
            "Red Onion Chutney - Well seasoned",
            "Red Onion Chutney - Appropriate consistency",
            "Red Onion Chutney - Visual appeal",
            "Red Onion Chutney - Appropriate amount used on the plate",
            "Bouchées - Uniform shape & size",
            "Bouchées - Visual appeal",
            "Bouchées - Appropriate height",
            "Bouchées - Appropriate size & shape",
            "Garlic Snails - Sauce appropriate consistency",
            "Garlic Snails - Well seasoned",
            "Garlic Snails - Balanced flavours",
            "Garlic Snails Sauce - Appropriate viscosity",
            "Garlic Snails Sauce - Ratio between bouchée & filling appropriate",
            "Garlic Snails Au Gratin - Golden brown",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service",
          order: 6,
          items: checkboxItems("service", [
            "Was the dish served on time - 13:00",
            "Appropriate plate selected for the dish?",
            "Ratio of all elements on the plate is balanced?",
            "Candidate served at least 2 of each Canapé?",
            "Clean plate & food within the rim?",
            "Temperature (Hot food hot plate, Cold food cold plate)",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
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

  if (template.code === "menu-b7-diploma") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    const recipeCards = [
      "Venison Curry",
      "Magwinya",
      "Shallow Fried Fish",
      "Soft Shell Taco",
      "Sumac Onions",
      "Aioli",
      "Potato Rosti",
      "Hummus",
      "Marinated Peppers",
      "Grilled Tofu",
      "Thai Sweet Chilli Sauce",
      "Enriched Slider Buns",
      "Red Onion Chutney",
      "Garlic Snail Au Gougères",
    ].map((recipeName, index) => ({
      id: `${template.id}-recipe-${index + 1}`,
      type: "recipe-card" as const,
      recipeName,
      maxMark: 2,
    }));

    return {
      ...template,
      title: "Menu B7 - DIPLOMA",
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: checkboxItems("personal", [
            "Student is Dressed in Full, Clean & Ironed Chef Uniform",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student has Arrived with a Fully Clean Toolbox",
            "Student has Arrived on Time",
            "Student shows respect for authority",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
            "Correct chopping boards used & it is secured",
            "Student shows no evidence of cross contamination.",
            "Sanitizer Bucket present & changed frequently",
            "Did the candidate taste his/her food & made necessary adjustments",
            "Student takes care to work safely",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task",
            "Student controls the cooking process (time & temp)",
            "Student controls waste",
            "Knives are used, cleaned, sharpened and stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 4,
          items: recipeCards,
        },
        {
          id: `${template.id}-section-overall-costings`,
          title: "Overall Costings & Selling Prices",
          order: 5,
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
          id: `${template.id}-section-canapes`,
          title: "Canapés",
          order: 6,
          items: checkboxItems("canapes", [
            "Mince - Well seasoned",
            "Mince - Well balanced flavours",
            "Mince - Appropriate consistency",
            "Mince - Visual appeal",
            "Mince garnished with coriander",
            "Magwinya - Dough not overworked",
            "Magwinya - Appropriate size",
            "Magwinya - Appropriate shape",
            "Magwinya - Appropriate texture",
            "Magwinya - Appropriate colour",
            "Magwinya - Excess fat strained",
            "Magwinya - Appropriate taste",
            "Chutney - Appropriately used",
            "Chutney - Sufficient amount used",
            "Venison Magwinya - Visual appeal",
            "Venison Magwinya - Appropriate ratio of all elements",
            "Venison Magwinya - Appropriate portion size",
            "Fish - Well cooked",
            "Fish - Balanced flavour",
            "Fish - Well seasoned",
            "Fish - Visual appeal",
            "Fish - Appropriate taste",
            "Taco - Dough not overworked",
            "Taco - Appropriate texture",
            "Taco - Cooked",
            "Taco - Visual appeal",
            "Taco - Appropriate size",
            "Taco - Appropriate thickness",
            "Sumac Onions - Appropriate thickness",
            "Sumac Onions - Balanced flavours",
            "Sumac Onions - Well seasoned",
            "Sumac Onions - Visual appeal",
            "Appropriate amount of sumac onions used",
            "Aioli - Appropriate consistency",
            "Aioli - Balanced flavours",
            "Aioli - Well seasoned",
            "Aioli - Appropriate taste",
            "Aioli did not split",
            "Appropriate amount of Aioli used on the taco",
            "Soft shell taco looks visually appealing overall",
            "Rosti - Visual appeal",
            "Rosti - Ratio between beetroot & potato balanced",
            "Rosti - Well seasoned",
            "Rosti cooked - Not over or under",
            "Rosti - Appropriate size",
            "Rosti - Appropriate thickness",
            "Rosti - Appropriate texture",
            "Hummus - Appropriate consistency",
            "Hummus - Appropriate viscosity",
            "Hummus - Well seasoned",
            "Hummus - Balanced flavour",
            "Appropriate amount of hummus used on rosti",
            "Peppers - Visual appeal",
            "Peppers - Appropriate size & shape",
            "Peppers - Well seasoned",
            "Peppers - Balanced flavours",
            "Peppers - Appropriate amount of peppers used on rosti",
            "Grilled Tofu - Visual appeal",
            "Grilled Tofu - Well seasoned",
            "Grilled Tofu - Balanced flavours",
            "Grilled Tofu - Appropriate size",
            "Thai sauce - Balanced flavour",
            "Thai sauce - Appropriate consistency",
            "Grilled Tofu - Enough sauce was absorbed",
            "Appropriate amount of spring onion & sesame seeds on seitan",
            "Slider Bun - Uniform in shape & size",
            "Slider Bun - Appropriate size",
            "Slider Bun - Golden brown colour",
            "Slider Bun - Appropriate texture",
            "Slider Bun - Appropriate taste",
            "Red Onion Chutney - Balanced flavour",
            "Red Onion Chutney - Well seasoned",
            "Red Onion Chutney - Appropriate consistency",
            "Red Onion Chutney - Visual appeal",
            "Red Onion Chutney - Appropriate amount used on the plate",
            "Gougères - Appropriate size & shape",
            "Gougères - Visual appeal",
            "Gougères - Hollow inside",
            "Gougères - Golden brown",
            "Garlic Snails - Sauce appropriate consistency",
            "Garlic Snails - Well seasoned",
            "Garlic Snails - Balanced flavours",
            "Garlic Snails Sauce - Appropriate viscosity",
            "Garlic Snails Sauce - Ratio between bouchée & filling appropriate",
            "Garlic Snails Au Gratin - Golden brown",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service",
          order: 7,
          items: checkboxItems("service", [
            "Was the dish served on time - 13:00",
            "Appropriate plate selected for the dish?",
            "Ratio of all elements on the plate is balanced?",
            "Candidate served at least 2 of each Canapé?",
            "Clean plate & food within the rim?",
            "Temperature (Hot food hot plate, Cold food cold plate)",
          ]),
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
                "Please write a Review on your performance of today's cooking lesson. Where may you improve if you would have to redo this Menu.",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-b7-cathsseta") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    return {
      ...template,
      title: "Menu B7 - CATHSSETA",
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
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
            "Student shows no evidence of cross contamination.",
            "Sanitizer Bucket present & changed frequently",
            "Did the candidate taste his/her food & made necessary adjustments",
            "Student takes care to work safely - Chopping board secure",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task",
            "Student controls waste",
            "Knives are used, cleaned, sharpened and stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-canapes`,
          title: "Canapés",
          order: 4,
          items: checkboxItems("canapes", [
            "Mince - Well seasoned",
            "Mince - Well balanced flavours",
            "Mince - Appropriate consistency - Not too dry or too wet",
            "Mince garnished with coriander appropriately",
            "Magwinya - Appropriate size",
            "Magwinya - Appropriate shape",
            "Magwinya - Appropriate texture",
            "Magwinya - Appropriate colour",
            "Magwinya - Appropriate taste",
            "Chutney - Appropriately used",
            "Chutney - Sufficient amount used",
            "Venison Magwinya - Visual appeal",
            "Venison Magwinya - Appropriate ratio of all elements",
            "Fish - Well cooked",
            "Fish - Balanced flavour",
            "Fish - Well seasoned",
            "Fish - Visual appeal",
            "Fish - Appropriate taste",
            "Taco - Dough not overworked",
            "Taco - Appropriate texture",
            "Taco - Cooked",
            "Taco - Visual appeal",
            "Taco - Appropriate size",
            "Taco - Appropriate thickness",
            "Sumac Onions - Appropriate thickness",
            "Sumac Onions - Balanced flavours",
            "Sumac Onions - Well seasoned",
            "Sumac Onions - Visual appeal",
            "Appropriate amount of sumac onions used",
            "Aioli - Appropriate consistency",
            "Aioli - Balanced flavours",
            "Aioli - Well seasoned",
            "Aioli - Appropriate taste",
            "Aioli did not split",
            "Appropriate amount of Aioli used on the taco",
            "Soft shell taco looks visually appealing overall",
            "Rosti - Visual appeal",
            "Rosti - Ratio between beetroot & potato balanced",
            "Rosti - Well seasoned",
            "Rosti cooked - Not over or under",
            "Rosti - Appropriate size",
            "Rosti - Appropriate thickness",
            "Rosti - Appropriate texture",
            "Hummus - Appropriate consistency",
            "Hummus - Appropriate viscosity",
            "Hummus - Well seasoned",
            "Hummus - Balanced flavour",
            "Appropriate amount of hummus used on rosti",
            "Peppers - Visual appeal",
            "Peppers - Appropriate size & shape",
            "Peppers - Well seasoned",
            "Peppers - Balanced flavours",
            "Peppers - Appropriate amount of peppers used on rosti",
            "Grilled Tofu - Visual appeal",
            "Grilled Tofu - Well seasoned",
            "Grilled Tofu - Balanced flavours",
            "Grilled Tofu - Appropriate size",
            "Thai sauce - Balanced flavour",
            "Thai sauce - Appropriate consistency",
            "Grilled Tofu - Enough sauce was absorbed",
            "Appropriate amount of spring onion & sesame seeds on seitan",
            "Slider Bun - Uniform in shape & size",
            "Slider Bun - Appropriate size",
            "Slider Bun - Golden brown colour",
            "Slider Bun - Appropriate texture",
            "Slider Bun - Appropriate taste",
            "Red Onion Chutney - Balanced flavour",
            "Red Onion Chutney - Well seasoned",
            "Red Onion Chutney - Appropriate consistency",
            "Red Onion Chutney - Visual appeal",
            "Red Onion Chutney - Appropriate amount used on the plate",
            "Bouchées - Uniform shape & size",
            "Bouchées - Visual appeal",
            "Bouchées - Appropriate height",
            "Bouchées - Appropriate size & shape",
            "Garlic Snails - Sauce appropriate consistency",
            "Garlic Snails - Well seasoned",
            "Garlic Snails - Balanced flavours",
            "Garlic Snails Sauce - Appropriate viscosity",
            "Garlic Snails Sauce - Ratio between bouchée & filling appropriate",
            "Garlic Snails Au Gratin - Golden brown",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service",
          order: 5,
          items: checkboxItems("service", [
            "Was the dish served on time - 13:00",
            "Appropriate plate selected for the dish?",
            "Ratio of all elements on the plate is balanced?",
            "Candidate served at least 2 of each Canapé?",
            "Clean plate & food within the rim?",
            "Temperature (Hot food hot plate, Cold food cold plate)",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 6,
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

  if (template.code === "menu-b8") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    const recipeCards = [
      "Vanilla Sponge",
      "Poached Apple Compote",
      "Caramel Sauce",
      "Ermine Frosting",
      "Grilled Cinnamon Apple Chips",
      "Brûlée Rice Pudding",
      "Braised Winter Fruit",
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
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
            "Student shows no evidence of cross contamination.",
            "Sanitizer Bucket present & changed frequently",
            "Did the candidate taste his/her food & made necessary adjustments",
            "Student takes care to work safely - Chopping board secure",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task",
            "Student controls the cooking process (time & temp)",
            "Student controls waste",
            "Knives are used, cleaned, sharpened and stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 4,
          items: recipeCards,
        },
        {
          id: `${template.id}-section-overall-costings`,
          title: "Overall Costings & Selling Prices",
          order: 5,
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
          id: `${template.id}-section-cake`,
          title: "Cake",
          order: 6,
          items: checkboxItems("cake", [
            "Sponge - Appropriate thickness",
            "Sponge - Appropriate texture",
            "Sponge - Appropriate taste",
            "Compote - Apples appropriate size",
            "Compote - Appropriate consistency",
            "Compote - Balanced flavours",
            "Compote sauce - Appropriate viscosity",
            "Frosting - Caramel flavour",
            "Frosting - Appropriate consistency",
            "Frosting - Appropriate taste",
            "Appropriate amount of frosting used on the cake",
            "Appropriate amount of compote used inside the cake",
            "Cake looks visually appealing",
            "Cake appropriate size & shape",
            "Ratio of sponge / compote & frosting appropriate",
            "Cake evenly layered",
            "Apple Chips - Looks visually appealing",
            "Apple Chips - Appropriate size used for garnish",
            "Apple Chips - Cinnamon flavour balanced",
            "Apple Chips - Appropriate thickness",
            "Apple Chips - Appropriate texture",
          ]),
        },
        {
          id: `${template.id}-section-dessert`,
          title: "Dessert",
          order: 7,
          items: checkboxItems("dessert", [
            "Rice cooked - Not over or under",
            "Pudding appropriate consistency",
            "Pudding balanced flavours",
            "Pudding appropriate taste",
            "Pudding appropriate viscosity",
            "Ratio between rice & custard appropriate",
            "Braised Fruit - Appropriate viscosity",
            "Braised Fruit - Appropriate consistency",
            "Braised Fruit is tender - Not over or under",
            "Appropriate amount of castor sugar used on dessert",
            "Brûlée Rice Pudding evenly caramelized",
            "Brûlée Rice Pudding looks visually appealing",
          ]),
        },
        {
          id: `${template.id}-section-service-cake`,
          title: "Service - Cake",
          order: 8,
          items: checkboxItems("service-cake", [
            "Was the dish served on time - 14:30",
            "Appropriate plate selected for the dish?",
            "Ratio of all elements on the plate is balanced?",
            "Clean plate & food within the rim?",
            "Temperature (Hot food hot plate, Cold food cold plate)",
          ]),
        },
        {
          id: `${template.id}-section-service-dessert`,
          title: "Service - Dessert",
          order: 9,
          items: checkboxItems("service-dessert", [
            "Was the dish served on time - 15:00",
            "Appropriate plate selected for the dish?",
            "Ratio of all elements on the plate is balanced?",
            "Clean plate & food within the rim?",
            "Temperature (Hot food hot plate, Cold food cold plate)",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 10,
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

  if (template.code === "menu-b9") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    const recipeCards = [
      "Pea & Parmesan Arancini",
      "Marinara Sauce",
      "Grilled Eggplant",
      "Spinach & Feta Stuffed Chicken Supreme",
      "Butternut Gnocchi",
      "Basil Pesto",
      "Orange Blossom Churros",
      "Chocolate Pot De Crème",
      "Candied Orange Chips",
      "Uniform Dinner Rolls",
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
            "Student has Arrived on Time",
            "Student shows respect for authority",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
            "Correct chopping boards used & it is secured",
            "Student shows no evidence of cross contamination.",
            "Sanitizer Bucket present & changed frequently",
            "Did the candidate taste his/her food & made necessary adjustments",
            "Student takes care to work safely",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task",
            "Student controls the cooking process (time & temp)",
            "Student controls waste",
            "Knives are used, cleaned, sharpened and stored correctly",
            "Gas/Electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 4,
          items: recipeCards,
        },
        {
          id: `${template.id}-section-overall-costings`,
          title: "Overall Costings & Selling Prices",
          order: 5,
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
          id: `${template.id}-section-starter`,
          title: "Starter",
          order: 6,
          items: checkboxItems("starter", [
            "Arancini - Rice cooked",
            "Arancini - Appropriate consistency",
            "Arancini - Appropriate inner texture",
            "Arancini - Appropriate outer texture",
            "Arancini - Well balanced flavours",
            "Arancini - Well seasoned",
            "Arancini - Ratio of peas & rice appropriate",
            "Arancini - Appropriate size",
            "Arancini - Visual appeal",
            "Arancini - Appropriate layer of crumb coating",
            "Arancini - Appropriate taste",
            "Marinara - Appropriate consistency",
            "Marinara - Appropriate viscosity",
            "Marinara - Balanced flavours",
            "Marinara - Well seasoned",
            "Marinara - Basil appropriate size",
            "Eggplant - Visual appeal",
            "Eggplant - Well seasoned",
            "Eggplant - Balanced flavours",
            "Eggplant - Most moisture pulled out",
            "Appropriate amount of rocket used on the plate",
            "Rocket appropriately used on the plate?",
            "Appropriate plate selected for the dish?",
            "Clean plate & food within the rim?",
            "Starter - All flavours well balanced",
            "Starter - Dish well seasoned",
            "Starter - Visual appeal",
            "Ratio of all elements well balanced",
            "Starter - Plate appropriate temperature",
            "Starter - Appropriate portion size",
            "Starter served on time - 10:30",
          ]),
        },
        {
          id: `${template.id}-section-main`,
          title: "Main",
          order: 7,
          items: checkboxItems("main", [
            "Supreme Stuffing - Appropriate consistency (Smooth)",
            "Supreme Stuffing - Balanced in flavours",
            "Ratio between stuffing & chicken appropriate",
            "Chicken well seasoned",
            "Chicken visual appeal",
            "Chicken not over or under cooked",
            "Appropriate incision made for the stuffing",
            "Chicken Supreme well presented on the plate",
            "Butternut Gnocchi - Smooth consistency",
            "Butternut Gnocchi - Appropriate texture",
            "Butternut Gnocchi - Appropriate colour",
            "Gnocchi visual appeal",
            "Gnocchi uniform shape & size",
            "Gnocchi cooked - Doesn't have a chewy texture",
            "Gnocchi - Well seasoned",
            "Pesto - Balanced flavours",
            "Pesto - Appropriate consistency",
            "Ratio of Gnocchi & pesto balanced",
            "Appropriate plate selected for the dish?",
            "Clean plate & food within the rim?",
            "Main - All flavours well balanced",
            "Main - Dish well seasoned",
            "Main - Visual appeal",
            "Ratio of all elements well balanced",
            "Main - Plate appropriate temperature",
            "Main - Appropriate portion size",
            "Main served on time - 11:30",
          ]),
        },
        {
          id: `${template.id}-section-dessert`,
          title: "Dessert",
          order: 8,
          items: checkboxItems("dessert", [
            "Churros - Appropriate shape & size",
            "Churros - Uniform shape & size",
            "Churros - Visual appeal - Appropriate colour",
            "Churros - Cooked - Not raw",
            "Churros - Hollow on the inside",
            "Churros - Balanced orange flavour",
            "Churros - Appropriate amount of cinnamon sugar used",
            "Pot de Crème - Appropriate consistency",
            "Pot de Crème - Appropriate viscosity",
            "Pot de Crème - Balanced flavours",
            "Pot de Crème - Appropriate amount served",
            "Orange Chips - Crispy",
            "Orange Chips - Visual appeal",
            "Orange Chips - Appropriate colour",
            "Orange Chips - Appropriate thickness",
            "Orange Chips - Appropriately used on the plate",
            "Appropriate plate selected for the dish?",
            "Clean plate & food within the rim?",
            "Dessert - All flavours well balanced",
            "Dessert - Dish well seasoned",
            "Dessert - Visual appeal",
            "Ratio of all elements well balanced",
            "Dessert - Plate appropriate temperature",
            "Dessert - Appropriate portion size",
            "Dessert served on time - 12:30",
          ]),
        },
        {
          id: `${template.id}-section-dinner-rolls`,
          title: "Dinner Rolls",
          order: 9,
          items: checkboxItems("dinner-rolls", [
            "Uniform shape",
            "Appropriate size - Dinner rolls",
            "Appropriate texture",
            "6 Uniform rolls served",
            "Visual appeal",
            "Taste appropriate",
            "Dinner Rolls served on time - 12:30",
            "Dinner Rolls served appropriately",
          ]),
        },
        {
          id: `${template.id}-section-prep-day`,
          title: "Prep Day",
          order: 10,
          items: checkboxItems("prep-day", [
            "Was prep done in time on day 1 - 12:30",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 11,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label:
                "Please write a Review on your performance of today's cooking lesson. Where may you improve if you would have to redo this Menu.",
            },
          ],
        },
      ],
    };
  }

  return null;
}
