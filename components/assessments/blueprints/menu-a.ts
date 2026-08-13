import type { AssessmentBlueprint, AssessmentTemplate } from "@/types/assessment";
import {
  createCheckboxItem,
  createGroupItem,
  createNotesItem,
} from "./helpers";

export function createMenuABlueprint(
  template: AssessmentTemplate,
): AssessmentBlueprint | null {if (template.code === "menu-a1") {
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

  if (template.code === "menu-a6") {
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
              "Correct chopping boards used & it is secured",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Shows no evidence of cross contamination.",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-5",
              "Good tasting practices ",
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
              id: `${template.id}-recipe-panzanella-salad`,
              type: "recipe-card",
              recipeName: "Panzanella Salad ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-concasse-tomato`,
              type: "recipe-card",
              recipeName: "Concasse Tomato ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-balsamic-vinaigerette`,
              type: "recipe-card",
              recipeName: "Balsamic Vinaigerette ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-croutons`,
              type: "recipe-card",
              recipeName: "Croutons ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-salad`,
          title: "Salad ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "salad-1",
              "Tomatoes concassed correctly ",
            ),
            createCheckboxItem(
              template.id,
              "salad-2",
              "Tomatoes appropriately sliced ",
            ),
            createCheckboxItem(
              template.id,
              "salad-3",
              "Cucumber appropriately sliced ",
            ),
            createCheckboxItem(
              template.id,
              "salad-4",
              "Cucumber de-seeded ",
            ),
            createCheckboxItem(
              template.id,
              "salad-5",
              "Red onions cut into appropriate size ",
            ),
            createCheckboxItem(
              template.id,
              "salad-6",
              "Mozzarella cut into appropriate cube size ",
            ),
            createCheckboxItem(
              template.id,
              "salad-7",
              "Mozzarella cubes uniformed ",
            ),
            createCheckboxItem(
              template.id,
              "salad-8",
              "Croutons cut into appropriate size ",
            ),
            createCheckboxItem(
              template.id,
              "salad-9",
              "Croutons uniformed shape & size ",
            ),
            createCheckboxItem(
              template.id,
              "salad-10",
              "Croutons appropriate colour ",
            ),
            createCheckboxItem(
              template.id,
              "salad-11",
              "Croutons appropriate texture",
            ),
            createCheckboxItem(
              template.id,
              "salad-12",
              "Croutons appropraite seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "salad-13",
              "Vinaigrette temporary emulsion ",
            ),
            createCheckboxItem(
              template.id,
              "salad-14",
              "Vinaigrette well balanced flavours ",
            ),
            createCheckboxItem(
              template.id,
              "salad-15",
              "Vinaigrette well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "salad-16",
              "Salad ratio well balanced ",
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
              "Was the dish served on time -  09:30 & 15:00",
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

  if (template.code === "menu-a12") {
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
              "Student is Dressed in Full Clean & Ironed Chefs Uniform",
            ),
            createCheckboxItem(
              template.id,
              "personal-2",
              "Student is Neatly Groomed (Facial hair, makeup ect.)",
            ),
            createCheckboxItem(
              template.id,
              "personal-3",
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
              "Clean as you go is practiced",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-2",
              "Scullary area is kept clean & correct sinks used",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-3",
              "Correct chopping boards used & it is secured",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-4",
              "Student shows no evidence of cross contamination.",
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
              "Student controls the cooking process (time & temp)",
            ),
            createCheckboxItem(
              template.id,
              "operation-2",
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
              id: `${template.id}-recipe-vegetable-stock`,
              type: "recipe-card",
              recipeName: "Vegetable Stock ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-vichyssoise`,
              type: "recipe-card",
              recipeName: "Vichyssoise ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-cold-soup`,
          title: "Cold Soup ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "cold-soup-1",
              "Stock has been skimmed ",
            ),
            createCheckboxItem(
              template.id,
              "cold-soup-2",
              "Stock is clear - Not cloudy ",
            ),
            createCheckboxItem(
              template.id,
              "cold-soup-3",
              "Stock - Appropriate colour ",
            ),
            createCheckboxItem(
              template.id,
              "cold-soup-4",
              "Stock flavour - Well enhanced ",
            ),
            createCheckboxItem(
              template.id,
              "cold-soup-5",
              "Soup - Well balanced flavour ",
            ),
            createCheckboxItem(
              template.id,
              "cold-soup-6",
              "Soup - Well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "cold-soup-7",
              "Soup - Approrpaite viscosisty ",
            ),
            createCheckboxItem(
              template.id,
              "cold-soup-8",
              "Soup - Smooth consistency ",
            ),
            createCheckboxItem(
              template.id,
              "cold-soup-9",
              "Soup - Appropriate colour ",
            ),
            createCheckboxItem(
              template.id,
              "cold-soup-10",
              "Soup - Served at appropriate temperature ",
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
              "Was the dish served on time - 09:30 & 15:30",
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

  if (template.code === "menu-a13") {
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
              "Did the candidate taste his/her food ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-8",
              "Did the candidate adjust the seasoning ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-9",
              "Did the candidate adjust the flavouring",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-10",
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
              id: `${template.id}-recipe-white-chocolate-panna-cotta`,
              type: "recipe-card",
              recipeName: "White Chocolate Panna Cotta ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-berry-coulis`,
              type: "recipe-card",
              recipeName: "Berry Coulis ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-tuile`,
              type: "recipe-card",
              recipeName: "Tuile ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-dessert`,
          title: "DESSERT",
          order: 5,
          items: [
            createGroupItem(template.id, "panna-cotta", "Panna Cotta", [
              "Panna Cotta - Smooth consistency ",
              "Panna Cotta - Appropriately Set ",
              "Panna Cotta - Balanced flavour ",
              "Panna Cotta - Looks Visual appeal ",
              "Panna Cotta - Gelatine Bloomed correctly ",
            ]),
            createGroupItem(template.id, "berry-coulis", "Berry Coulis", [
              "Berry Coulis - Appropriate consistency(Not to thick)",
              "Berry Coulis - Not to chunky/ More smooth ",
              "Berry Coulis - Balanced Flavour ",
            ]),
            createGroupItem(template.id, "tuile", "Tuile", [
              "Tuile - Smooth Batter ",
              "Tuile - Appropriate thickness ",
              "Tuile - Crunchy texture ",
              "Tuile - Appropriate size ",
              "Tuile - Looks visual Appeal ",
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
              "Was the dish served on time - 10:00 & 16:00",
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

  if (template.code === "menu-a14") {
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
              "Student is Dressed in Full Chef Uniform - Ironed",
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
              "Good tasting practices ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-6",
              "Did the candidate taste his/her food & made necessary adjustments",
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
              id: `${template.id}-recipe-pate-sable`,
              type: "recipe-card",
              recipeName: "Pâte Sable ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-creme-patessiere`,
              type: "recipe-card",
              recipeName: "Crème Pâtessière ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-glazed-seasonal-fruits`,
              type: "recipe-card",
              recipeName: "Glazed Seasonal Fruits ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-fruit-tart`,
          title: "Fruit Tart ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "fruit-tart-1",
              "Sable - Dough not over worked ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-2",
              "Sable - Dough rested long enough ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-3",
              "Sable - Thinly rolled out ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-4",
              "Sable - Cooked & Not raw ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-5",
              "Tart Case neatly lined ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-6",
              "Tart Case looks visual appeal - No cracks ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-7",
              "Crème Pâtissière - Smooth consistency ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-8",
              "Crème Pâtissière - Appropriate thickness ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-9",
              "Crème Pâtissière - Appropriate Flavour ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-10",
              "Crème Pâtissière - Appropriate Taste ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-11",
              "Fruit Glazed - Not to much or to little ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-12",
              "Fruit Appropriately cut ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-13",
              "Fruit neatly arranged ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-14",
              "Fruit Tart looks visual appeal ",
            ),
            createCheckboxItem(
              template.id,
              "fruit-tart-15",
              "Seasonal Fruit - Cut into appropriate Size ",
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

  if (template.code === "menu-a15") {
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
              "Student is Dressed in Full Chef Uniform  & it is Ironed ",
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
              "Did the candidate taste his/her food & made necessary adjustments",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-9",
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
              id: `${template.id}-recipe-chicken-korma-curry`,
              type: "recipe-card",
              recipeName: "Chicken Korma Curry ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-couscous`,
              type: "recipe-card",
              recipeName: "Couscous ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-carrot-sambal`,
              type: "recipe-card",
              recipeName: "Carrot Sambal",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-pappadum`,
              type: "recipe-card",
              recipeName: "Pappadum ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "MAIN ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "main-1",
              " Chicken Thighs - Deboned ",
            ),
            createCheckboxItem(
              template.id,
              "main-2",
              "Chicken Thighs - Flesh still intact/ Kept as a whole thigh ",
            ),
            createCheckboxItem(
              template.id,
              "main-3",
              "Chicken Thighs - Looks visual Appeal after deboneding  ",
            ),
            createCheckboxItem(
              template.id,
              "main-4",
              "Chicken Thighs - Marinated  ",
            ),
            createCheckboxItem(
              template.id,
              "main-5",
              "Chicken Korma Curry looks visual appeal ",
            ),
            createCheckboxItem(
              template.id,
              "main-6",
              "Chicken Korma Curry - Balanced flavour ",
            ),
            createCheckboxItem(
              template.id,
              "main-7",
              "Chicken Korma Curry - Well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "main-8",
              "Whole spices removed from curry",
            ),
            createCheckboxItem(
              template.id,
              "main-9",
              "Chicken Korma Curry - Ratio to chicken and sauce appropriate",
            ),
            createCheckboxItem(
              template.id,
              "main-10",
              "Chicken Korma Curry - Sauce appropriate consistency ",
            ),
            createCheckboxItem(
              template.id,
              "main-11",
              "Couscous - Cooked, not over or under",
            ),
            createCheckboxItem(
              template.id,
              "main-12",
              "Couscous - Well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "main-13",
              "Couscous - Veggies cut into appropriate size ",
            ),
            createCheckboxItem(
              template.id,
              "main-14",
              "Couscous - Appropriate texture",
            ),
            createCheckboxItem(
              template.id,
              "main-15",
              "Carrot Sambal - Veggies appropriate size ",
            ),
            createCheckboxItem(
              template.id,
              "main-16",
              "Carrot Sambal - Ratio of onion to carrot appropriate ",
            ),
            createCheckboxItem(
              template.id,
              "main-17",
              "Carrot Sambal - Well balanced Flavours ",
            ),
            createCheckboxItem(
              template.id,
              "main-18",
              "Pappadum - Looks Visual appeal ",
            ),
            createCheckboxItem(
              template.id,
              "main-19",
              "Pappadum - Appropriate Texture ",
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
              "Was the dish served on time -  11:00",
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

  if (template.code === "menu-a16") {
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
              "Student is Dressed in Full, Clean & Ironed Chef Uniform ",
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
              "Sanitizer Bucket present & changed frequently ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-7",
              "Did the candidate taste his/her food & made necessary adjustments",
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
              "Knives are used, cleaned, sharpened and stored correctly",
            ),
            createCheckboxItem(
              template.id,
              "operation-5",
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
              id: `${template.id}-recipe-beet-batter-fish`,
              type: "recipe-card",
              recipeName: "Beet Batter Fish ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-baton-pomme-frites`,
              type: "recipe-card",
              recipeName: "Baton Pomme Frites ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-traditional-tartar-sauce`,
              type: "recipe-card",
              recipeName: "Traditional Tartar Sauce ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "Main ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "main-1",
              "Batter Fish - Batter smooth consistency ",
            ),
            createCheckboxItem(
              template.id,
              "main-2",
              "Batter Fish - Batter appropriate viscosity ",
            ),
            createCheckboxItem(
              template.id,
              "main-3",
              "Batter Fish - Balanced flavours ",
            ),
            createCheckboxItem(
              template.id,
              "main-4",
              "Batter Fish - Well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "main-5",
              "Batter Fish - Cooked/ not over or under cooked ",
            ),
            createCheckboxItem(
              template.id,
              "main-6",
              "Batter Fish - Batter appropriate thickness ",
            ),
            createCheckboxItem(
              template.id,
              "main-7",
              "Batter Fish - Looks Visual appeal ",
            ),
            createCheckboxItem(
              template.id,
              "main-8",
              "Batter Fish - Excess oil drained ",
            ),
            createCheckboxItem(
              template.id,
              "main-9",
              "Frites - Appropriate thickness ",
            ),
            createCheckboxItem(
              template.id,
              "main-10",
              "Frites - Appropriate length ",
            ),
            createCheckboxItem(
              template.id,
              "main-11",
              "Frites - Appropraite colour ",
            ),
            createCheckboxItem(
              template.id,
              "main-12",
              "Frites - Well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "main-13",
              "Frites - Excess oil drained ",
            ),
            createCheckboxItem(
              template.id,
              "main-14",
              "Mayonnaise - Appropriate consistency ",
            ),
            createCheckboxItem(
              template.id,
              "main-15",
              "Mayonnaise - Emulsion Sauce ",
            ),
            createCheckboxItem(
              template.id,
              "main-16",
              "Tartar Sauce - All veggies cut into appropriate size ",
            ),
            createCheckboxItem(
              template.id,
              "main-17",
              "Tartar Sauce - Well balanced flavours ",
            ),
            createCheckboxItem(
              template.id,
              "main-18",
              "Tartar Sauce - Well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "main-19",
              "Tartar Sauce -Appropriate consistency",
            ),
            createCheckboxItem(
              template.id,
              "main-20",
              "Tartar Sauce - Ratio of all elements appropriate",
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
              "Was the dish served on time -  10:30",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Appropriate plate selected for the dish?",
            ),
            createCheckboxItem(
              template.id,
              "service-3",
              "Ratio of all elements on the plate is balanced?",
            ),
            createCheckboxItem(
              template.id,
              "service-4",
              "Clean Plate and food within the rim?",
            ),
            createCheckboxItem(
              template.id,
              "service-5",
              "Temperature (hot food hot plate, cold food cold plate)",
            ),
          ],
        },
        {
          id: `${template.id}-section-table-service`,
          title: "Setting up of The Table & Serving Guest ",
          order: 7,
          items: [
            createCheckboxItem(
              template.id,
              "table-service-1",
              "Table set up correctly for 1 course that will be served ",
            ),
            createCheckboxItem(
              template.id,
              "table-service-2",
              "Table was decorated accordling to a theme ",
            ),
            createCheckboxItem(
              template.id,
              "table-service-3",
              "Candidate contibuted well to Team Work",
            ),
            createCheckboxItem(
              template.id,
              "table-service-4",
              "Candidate serve & clear plate form the correct side ",
            ),
            createCheckboxItem(
              template.id,
              "table-service-5",
              "Candidate is friendly & welcominng towards the guest ",
            ),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 8,
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

  if (template.code === "menu-a17") {
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
              "Student is Dressed in Full, Clean & Ironed Chef Uniform ",
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
              "Sanitizer Bucket present & changed frequently ",
            ),
            createCheckboxItem(
              template.id,
              "hygiene-6",
              "Student takes care to work safely - Chopping board secure",
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
              "Knives are used, cleaned, sharpened and stored correctly",
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
              id: `${template.id}-recipe-chicken-cordon-bleu`,
              type: "recipe-card",
              recipeName: "Chicken Cordon Bleu ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-pomme-fondant`,
              type: "recipe-card",
              recipeName: "Pomme Fondant ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-pea-puree`,
              type: "recipe-card",
              recipeName: "Pea Puree ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-turned-carrots`,
              type: "recipe-card",
              recipeName: "Turned Carrots ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-sauce-mornay`,
              type: "recipe-card",
              recipeName: "Sauce Mornay ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "Main ",
          order: 5,
          items: [
            createCheckboxItem(
              template.id,
              "main-1",
              "Chicken Breast - Appropriate thickness ",
            ),
            createCheckboxItem(
              template.id,
              "main-2",
              "Cordon Bleu - Evenly rolled",
            ),
            createCheckboxItem(
              template.id,
              "main-3",
              "Cordon Bleu - Filling evently distribute",
            ),
            createCheckboxItem(
              template.id,
              "main-4",
              "Cordon Bleu Cooked - Not over or under ",
            ),
            createCheckboxItem(
              template.id,
              "main-5",
              "Cordon Bleu - Looks Visual appeal ",
            ),
            createCheckboxItem(
              template.id,
              "main-6",
              "Cordon Bleu - Crumb appropriate thickness",
            ),
            createCheckboxItem(
              template.id,
              "main-7",
              "Cordon Bleu - Well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "main-8",
              "Cordon Bleu - Cheese melted in the middle. ",
            ),
            createCheckboxItem(
              template.id,
              "main-9",
              "Cordon Bleu - Balanced Flavours ",
            ),
            createCheckboxItem(
              template.id,
              "main-10",
              "Pomme Fondant - Unifrom shape & size ",
            ),
            createCheckboxItem(
              template.id,
              "main-11",
              "Pomme Fondant - Looks visual appeal ",
            ),
            createCheckboxItem(
              template.id,
              "main-12",
              "Pomme fondant Cooked - Not over or under ",
            ),
            createCheckboxItem(
              template.id,
              "main-13",
              "Pomme Fondant - Seasoned well",
            ),
            createCheckboxItem(
              template.id,
              "main-14",
              "Pomme Fondant -  Balanced flavour of herb & garlic present",
            ),
            createCheckboxItem(
              template.id,
              "main-15",
              "Pea Puree - Smooth consistency ",
            ),
            createCheckboxItem(
              template.id,
              "main-16",
              "Pea Puree - Well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "main-17",
              "Pea Puree - Appropriate Colour ",
            ),
            createCheckboxItem(
              template.id,
              "main-18",
              "Pea Puree - Balanced Flavours",
            ),
            createCheckboxItem(
              template.id,
              "main-19",
              "Tourné Carrot - Unifrom Shape ",
            ),
            createCheckboxItem(
              template.id,
              "main-20",
              "Tourné Carrot - Appropriate Size",
            ),
            createCheckboxItem(
              template.id,
              "main-21",
              "Tourné Carrot Cooked - Not over or under cooked ",
            ),
            createCheckboxItem(
              template.id,
              "main-22",
              "Tourné Carrot - Well Seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "main-23",
              "Tourné Carrot - Well Balanced Flavours (Garlic & Thyme)",
            ),
            createCheckboxItem(
              template.id,
              "main-24",
              "Sauce Mornay - Appropriate Viscosity ",
            ),
            createCheckboxItem(
              template.id,
              "main-25",
              "Sauce Mornay - Appropriate Taste ",
            ),
            createCheckboxItem(
              template.id,
              "main-26",
              "Sauce Mornay - Balanced Flavours ",
            ),
            createCheckboxItem(
              template.id,
              "main-27",
              "Sauce Mornay - Well seasoned ",
            ),
            createCheckboxItem(
              template.id,
              "main-28",
              "Sauce Mornay - Smooth Consistency ",
            ),
            createCheckboxItem(
              template.id,
              "main-29",
              "Sauce Mornay - Appropriate Colour ",
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
              "Was the dish served on time - 11:00",
            ),
            createCheckboxItem(
              template.id,
              "service-2",
              "Appropriate plate selected for the dish?",
            ),
            createCheckboxItem(
              template.id,
              "service-3",
              "Ratio of all elements on the plate is balanced?",
            ),
            createCheckboxItem(
              template.id,
              "service-4",
              "Clean plate & food within the rim?",
            ),
            createCheckboxItem(
              template.id,
              "service-5",
              "Temperature (Hot foof hot plate, Cold food cold plate)",
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

  if (template.code === "menu-a18") {
    return {
      ...template,
      title: "1st Year Final Summative Assessment 2024",
      sections: [
        {
          id: `${template.id}-section-inspection-uniform`,
          title: "Inspection & Uniform",
          order: 1,
          items: [
            createCheckboxItem(template.id, "inspection-1", "Candidate dressed well "),
            createCheckboxItem(template.id, "inspection-2", "Fully equiped Toolbox"),
            createCheckboxItem(template.id, "inspection-3", "Candidate Well Groomed "),
            createCheckboxItem(template.id, "inspection-4", "Candidate arrive on time "),
            createCheckboxItem(
              template.id,
              "inspection-5",
              "Student shows respect for authority",
            ),
          ],
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: [
            {
              id: `${template.id}-recipe-powdered-banana-fritters`,
              type: "recipe-card",
              recipeName: "Powdered Banana Fritters",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-seasonal-fruit-salad`,
              type: "recipe-card",
              recipeName: "Seasonal Fruit Salad",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-hollandaise`,
              type: "recipe-card",
              recipeName: "Hollandaise",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-poached-eggs`,
              type: "recipe-card",
              recipeName: "Poached Eggs ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-asparagus`,
              type: "recipe-card",
              recipeName: "Asparagus",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-english-muffin`,
              type: "recipe-card",
              recipeName: "English Muffin ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-cafe-latte-creme-brulee`,
              type: "recipe-card",
              recipeName: "Café Latte Crème Brûlée",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-personal-food-safety`,
          title: "Personal Safety &  Food Safety",
          order: 3,
          items: [
            createCheckboxItem(
              template.id,
              "safety-1",
              "The student displays regular hand washing",
            ),
            createCheckboxItem(
              template.id,
              "safety-2",
              "Communal table kept neat and tidy - during day",
            ),
            createCheckboxItem(
              template.id,
              "safety-3",
              "Sinks kept clean & water changed regularly",
            ),
            createCheckboxItem(
              template.id,
              "safety-4",
              "Correct chopping boards used & is stable",
            ),
            createCheckboxItem(
              template.id,
              "safety-5",
              "Student handles food in a safe and hygienic manner",
            ),
            createCheckboxItem(
              template.id,
              "safety-6",
              "Student shows no evidence of cross contamination.",
            ),
            createCheckboxItem(
              template.id,
              "safety-7",
              "Sanitizer is applied between tasks",
            ),
            createCheckboxItem(template.id, "safety-8", "Student takes care to work safely"),
          ],
        },
        {
          id: `${template.id}-section-monitoring-equipment-ingredients`,
          title: "Monitoring, Equipment and Ingredient Selection",
          order: 4,
          items: [
            createCheckboxItem(
              template.id,
              "monitor-1",
              "Student selects appropriate equipment and utensils",
            ),
            createCheckboxItem(
              template.id,
              "monitor-2",
              "Student selects ingredients that are in good condition",
            ),
            createCheckboxItem(
              template.id,
              "monitor-3",
              "Student controls the cooking process (time & temp)",
            ),
            createCheckboxItem(
              template.id,
              "monitor-4",
              "Student works from prep lists/sheets (check time)",
            ),
            createCheckboxItem(
              template.id,
              "monitor-5",
              "Student works in a methodical manner, check waste",
            ),
            createCheckboxItem(
              template.id,
              "monitor-6",
              "Knives are used, cleaned, sharpened and stored correctly",
            ),
            createCheckboxItem(
              template.id,
              "monitor-7",
              "Gas/Electricity was not used unnecessarily",
            ),
          ],
        },
        {
          id: `${template.id}-section-starter`,
          title: "STARTER",
          order: 5,
          items: [
            createGroupItem(template.id, "starter-plating", "Starter Plating", [
              "Appropriate plate selected for the dish?",
              "Clean Plate and food within the rim?",
              "Temperature (hot food hot plate, cold food cold plate)",
              "Appropriate portion size for dish served?",
              "Dish garnished appropriately?",
              "Correct ratio of elements on the plate?",
            ]),
            createGroupItem(template.id, "fruit-salad", "Fruit Salad ", [
              "Fruits has been washed ",
              "Minimal wastage during peeling ",
              "Fruits uniformed size ",
              "Attractive salad ",
              "Has the fruit oxidized ",
            ]),
            createGroupItem(template.id, "banana-fritters", "Banana Fritters ", [
              "Batter smooth - Not lumpy ",
              "All ingredietns well incorporated ",
              "Fried at the correct temperature ",
              "Cooked through ",
              "Golden brown colour ",
              "No oily taste",
              "Appropriate texture ",
              "Excess cinnamon & icing sugar removed",
              "Well balance flavour ",
            ]),
            createGroupItem(template.id, "starter-plate", "STARTER PLATE ", [
              "Overall impression of the plate?",
              "All flavours well balanced?",
            ]),
          ],
        },
        {
          id: `${template.id}-section-main`,
          title: "MAIN",
          order: 6,
          items: [
            createGroupItem(template.id, "main-plating", "Main Plating", [
              "Appropriate plate selected for the dish?",
              "Clean Plate and food within the rim?",
              "Temperature (hot food hot plate, cold food cold plate)",
              "Appropriate portion size for dish served?",
              "Dish garnished appropriately?",
              "Correct ratio of elements on the plate?",
            ]),
            createGroupItem(template.id, "english-muffin", "English Muffin ", [
              "Yeast respected ",
              "Well kneaded ",
              "Coated with polenta ",
              "Muffen well risen ",
              "Good texture ",
              "Good colour    ",
              "Cooked through ",
            ]),
            createGroupItem(template.id, "hollandaise", "Hollandaise", [
              "Made over a double boiler ",
              "Appropriate consistency ",
              "Well balance flavour ",
              "Appropriate portion served ",
            ]),
            createGroupItem(template.id, "poached-eggs", "Poached Eggs", [
              "Egg neat & served as a whole ",
              "Served soft ",
              "2 whole Eggs served ",
              "Seasoned",
            ]),
            createGroupItem(template.id, "asparagus", "Asparagus ", [
              "Trimmed & Cleaned ",
              "Cook - Al dente ",
              "Well seasoned ",
            ]),
            createGroupItem(template.id, "main-plate", "MAIN PLATE ", [
              "Overall impression of the plate?",
              "All flavours well balanced?",
            ]),
          ],
        },
        {
          id: `${template.id}-section-dessert`,
          title: "DESSERT",
          order: 7,
          items: [
            createGroupItem(template.id, "dessert-plating", "Dessert Plating", [
              "Appropriate plate selected for the dish?",
              "Clean Plate and food within the rim?",
              "Temperature (hot food hot plate, cold food cold plate)",
              "Correct ratio of elements on the plate?",
            ]),
            createGroupItem(
              template.id,
              "cafe-latte-creme-brulee",
              "Café Latte Crème Brûlée",
              [
                "Waterbath baked",
                "Smooth texture ",
                "Well set ",
                "Served cold ",
                "Castor sugar used to Brûlée",
                "Well caramelized - Not burnt ",
                "Café Flavour ",
                "Appropriate taste ",
              ],
            ),
            createGroupItem(template.id, "dessert-plate", "DESSERT PLATE ", [
              "Overall impression of the plate?",
              "All flavours well balanced?",
              "Was the Menu served on time 10:30",
            ]),
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
  return null;
}
