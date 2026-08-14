import type {
  AssessmentBlueprint,
  AssessmentTemplate,
} from "@/types/assessment";

export function createMenuPBlueprint(
  template: AssessmentTemplate,
): AssessmentBlueprint | null {
  if (template.code === "menu-p17") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    const recipeCards = [
      "Choux Pastry",
      "Crème Diplomate",
      "Rose Macarons",
      "Soft Rose Ganache",
      "Candied Rose Petals",
      "Vanilla Cupcakes",
      "Vanilla Buttercream",
      "Fondant Décor",
      "Baklava Fingers",
      "Koeksisters",
      "Baba Au Rhum",
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
          title: "Personal Professionalism for Both Days",
          order: 1,
          items: checkboxItems("personal", [
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene for Both Days",
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
          title: "Professional Operation for Both Days",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task",
            "Student controls the cooking process (time & temp)",
            "Student controls waste",
            "Knives are used, cleaned, sharpened and stored correctly",
            "Gas/electricity was not used unnecessarily",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 4,
          items: recipeCards,
        },
        {
          id: `${template.id}-section-high-tea`,
          title: "High Tea",
          order: 5,
          items: checkboxItems("high-tea", [
            "Was Prep done on time on the 1st day? 14:00",
            "Was the snacks served on time? 13:00",
            "Overall impression of the High Tea snacks",
            "High tea stand clean",
            "Snack neatly arrange on the high tea stand",
            "High tea stand looks visually appealing",
          ]),
        },
        {
          id: `${template.id}-section-eclairs`,
          title: "Éclairs",
          order: 6,
          items: checkboxItems("eclairs", [
            "A panade was formed",
            "Eggs added 1 by 1",
            "Smooth drop consistency has been achieved",
            "Éclair shaped piped",
            "Éclairs uniform in shape & size",
            "Éclairs look visually appealing",
            "Éclairs are hollow on the inside",
            "Éclairs are cooked",
            "Éclairs cooked - Golden brown & not burnt",
            "Sufficient amount of chocolate left after éclair was dipped",
            "Éclairs with chocolate on look visually appealing",
            "Diplomat - No floury taste",
            "Diplomat - Appropriate consistency",
            "Diplomat - Appropriate viscosity",
            "Diplomat Taste - Appropriate",
            "Sufficient amount of diplomat used in Éclairs",
            "Overall impression of the Éclairs",
          ]),
        },
        {
          id: `${template.id}-section-rose-macarons`,
          title: "Rose Macarons",
          order: 7,
          items: checkboxItems("rose-macarons", [
            "Macaron - Batter was lava consistency",
            "Macarons appropriate size",
            "Macarons has a soft inner texture",
            "Macarons feet appropriate height",
            "Macarons did not crack",
            "Macarons - Uniform shape & size",
            "Macarons appropriate colour",
            "Ganache appropriate consistency",
            "Ganache - Taste of rose water not overpowering",
            "Sufficient amount of ganache used on the macaron",
            "Ganache didn't split",
            "Sufficient amount of sugar used on the candied rose petals",
            "Candied rose petals looks visually appealing",
            "Candied rose petals has enough time to dry out",
            "Candied rose petals appropriately used on macaron",
            "Overall impression of the Rose Macarons",
          ]),
        },
        {
          id: `${template.id}-section-mini-vanilla-cupcakes`,
          title: "Mini Vanilla Cupcakes with Fondant Décor",
          order: 8,
          items: checkboxItems("cupcakes", [
            "Cupcakes - Appropriate texture",
            "Cupcakes - Appropriate size",
            "Cupcakes - Appropriate taste",
            "Batter didn't overflow over the cupcake holder",
            "Buttercream appropriate consistency",
            "Buttercream - Doesn't look split",
            "Buttercream - Creamy texture",
            "Buttercream - Appropriate taste",
            "Sufficient amount of buttercream used on the cupcake",
            "Piping skills neatly done on cupcakes",
            "Appropriate piping technique used for the cupcake",
            "Piping technique complements the flower used on the cupcake",
            "Appropriate flower chosen for the cupcake",
            "Flower appropriate size & shape",
            "Fondant work finished off neatly",
            "The flower overall looks visually appealing",
            "Flower appropriately used on the cupcake",
            "Overall impression of the Mini Vanilla Cupcakes with décor",
          ]),
        },
        {
          id: `${template.id}-section-baklava-fingers`,
          title: "Baklava Fingers",
          order: 9,
          items: checkboxItems("baklava", [
            "Nuts appropriate size chopped or crushed",
            "Sugar syrup appropriate consistency",
            "Ratio of nuts to filo pastry appropriate",
            "Sufficient amount of spice used - not overpowering",
            "Baklava fingers appropriate shape & size",
            "Baklava appropriate colour - Golden brown",
            "Baklava fingers absorbed a sufficient amount of syrup",
            "Baklava fingers appropriate texture",
            "Nuts evenly distributed",
            "Sugar syrup taste appropriate",
            "Overall impression of the Baklava Fingers",
          ]),
        },
        {
          id: `${template.id}-section-koeksisters`,
          title: "Koeksisters",
          order: 10,
          items: checkboxItems("koeksisters", [
            "Appropriate shape",
            "Appropriate size",
            "Koeksister in tacks - didn't go loose at the ends",
            "Koeksisters neatly folded",
            "Koeksisters all uniform in shape & size",
            "Golden brown colour - Not too light or too dark",
            "Absorbed sufficient amount of syrup",
            "Excess sugar syrup removed before serving",
            "Texture appropriate",
            "Overall impression of the Koeksisters",
          ]),
        },
        {
          id: `${template.id}-section-baba-au-rhum`,
          title: "Baba Au Rhum",
          order: 11,
          items: checkboxItems("baba-au-rhum", [
            "Yeast activated & not killed",
            "Baba au Rhum appropriate texture",
            "Baba au Rhum appropriate shape & size",
            "Uniform in shape",
            "Baba Au Rhum - Appropriate colour",
            "Glaze appropriate consistency",
            "Sufficient amount of glaze used",
            "Excess glaze shaken off before plating",
            "Glaze - Lemon flavour balanced",
            "Chantilly - Stiff peak",
            "Sufficient amount of Chantilly used",
            "Chantilly appropriately used on Baba Au Rhum",
            "Overall impression of the Baba Au Rhum",
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
                "Please write a Review on your performance of today's cooking lesson. Where you may improve if you would have to Redo this Menu.",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p16") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene",
          order: 2,
          items: checkboxItems("hygiene", [
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects appropriate equipment and utensils",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-royal-icing`,
              type: "recipe-card",
              recipeName: "Royal Icing",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-sugar-cookies`,
              type: "recipe-card",
              recipeName: "Sugar Cookies",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-royal-icing-gingerbread-house`,
              type: "recipe-card",
              recipeName: "Royal Icing for Gingerbread House",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-gingerbread-biscuit`,
              type: "recipe-card",
              recipeName: "Gingerbread Biscuit",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-themed-sugar-cookies`,
          title: "Themed Decorated Sugar Cookies",
          order: 5,
          items: checkboxItems("cookies", [
            "Biscuits appropriate texture",
            "Biscuits appropriate colour - Not too burnt or too pale in colour",
            "Biscuit uniform thickness",
            "Biscuit kept its shape - Did not spread",
            "Biscuits decorated accordingly to a theme",
            "Border of royal icing appropriate consistency",
            "Inner royal icing appropriate consistency",
            "Border royal icing appropriate viscosity",
            "Inner royal icing appropriate viscosity",
            "Biscuits not cracked",
            "Biscuits have a piped border",
            "Royal icing décor finished off neatly",
            "Biscuit looks visually appealing",
            "Icing on the biscuits doesn't have any pointy peaks on it",
            "Icing dried enough",
            "Appropriate colour used",
            "Icing neatly piped",
            "Overall impression of the biscuits",
            "Biscuits served on time 13:00",
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
                "Please write a review on your performance of today's cooking lesson. Where may you improve if you would have to redo this Menu?",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p15") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    const groupItem = (id: string, title: string, descriptions: string[]) => ({
      id: `${template.id}-${id}`,
      type: "group" as const,
      title,
      items: checkboxItems(id, descriptions),
    });

    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: checkboxItems("personal", [
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: checkboxItems("hygiene", [
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects appropriate equipment and utensils",
          ]),
        },
        {
          id: `${template.id}-section-fondant-work`,
          title: "Fondant Work \nChef Figurine & Roses ",
          order: 4,
          items: [
            groupItem("elephant-figurine", "Elephant Figurine ", [
              "Legs & Arms are in proportion with the body ",
              "Legs & Arms - No visable cracks ",
              "Legs & Arms - Colour complement the end result ",
              "Legs & Arms - Connection points hidden",
              "Head in proportion with the body ",
              "Head - no visable cracks ",
              "Head shaped appropriately ",
              "Facial Features complements the Face ",
              "Facial Features all in proportion ",
              "Facial hair appropriate colour ",
              "Upper body in proportion with the lower body ",
              "Elephant Ears unifrom shape, size & thickness ",
              "Elephant Trunk unifrom shape, size & thickness ",
              "Overall impression of candidates figurine ",
              "Ears & Trunk in proportion of the body ",
              "Appropriate colour chosen for figurine ",
              "Is the figurine secure as a whole ",
              "Final product/ Fondant looks clean - No particals picked up ",
              "Did the student incorportate CMC powder into the fondant",
            ]),
            groupItem("roses", "Roses ", [
              "Rose bud securely attached to the floral wire ",
              "Rose bud appropraite size ",
              "Rose bud neatly covered with the 1st set of petals ",
              "Rose petals has a thin outer edge ",
              "Rose petals are bigger on the outside then on the inside of the rose",
              "Rose bottom looks visual appealing after petals has been attached ",
              "Rose appropriate colour ",
              "Does the flower resemble a rose ",
              "Is the rose petals flowy & open",
              "Fondant word submitted on time ",
            ]),
          ],
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 5,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label: "Lecturer Feedback",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p13") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    const groupItem = (id: string, title: string, descriptions: string[]) => ({
      id: `${template.id}-${id}`,
      type: "group" as const,
      title,
      items: checkboxItems(id, descriptions),
    });

    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: checkboxItems("personal", [
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: [
            {
              id: `${template.id}-recipe-chocolate-macarons`,
              type: "recipe-card",
              recipeName: "Chocolate Macarons ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-chocolate-ganache`,
              type: "recipe-card",
              recipeName: "Chocolate Ganache",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-caramel`,
              type: "recipe-card",
              recipeName: "Caramel",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 3,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 4,
          items: checkboxItems("operation", [
            "Student selects appropriate equipment and utensils",
            "Student controls the cooking process (time & temp)",
            "Student works from prep lists/sheets (check time)",
            "Student works in a methodical manner, check waste",
          ]),
        },
        {
          id: `${template.id}-section-dessert`,
          title: "Dessert   ",
          order: 5,
          items: [
            groupItem("chocolate-macarons", "Chocolate Macarons ", [
              "Macaron Batter was lava consisntecy ",
              "Appropraite size ",
              "Soft Texture inside",
              "Macarons feet appropriate hight ",
              "Macarons not cracked ",
              "Macarons uniform shape & size ",
            ]),
            groupItem("chocolate-ganache", "Chocolate Ganache", [
              "Appropriate consistency ",
              "Colour of the ganache complements the macaron ",
              "Sufficient amount of ganache used in the macarons",
              "Ganache doesn’t look split",
              "Ratio between the ganache & caramel is balanced ",
            ]),
            groupItem("caramel", "Caramel", [
              "Colour of the caramel is golden - Not burnt ",
              "Taste appropriate ",
              "Caramel appropriate consistency ",
              "Caramel appropriate viscosity ",
              "Caramel did'nt split ",
              "Caramel taste appropriate",
              "Sufficient amount of caramel used ",
            ]),
            ...checkboxItems("dessert", ["Overall impression of the macarons"]),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: checkboxItems("service", ["Macarons served in time 12:00"]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 7,
          items: [
            {
              id: `${template.id}-feedback`,
              type: "notes",
              label: "Lecturer Feedback",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p12") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: [
            {
              id: `${template.id}-recipe-brioche-a-tete`,
              type: "recipe-card",
              recipeName: "Brioche à Tête ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-babka`,
              type: "recipe-card",
              recipeName: "Babka",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 3,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 4,
          items: checkboxItems("operation", [
            "Student selects appropriate equipment and utensils",
            "Student controls the cooking process (time & temp)",
            "Student works in a methodical manner, check waste",
          ]),
        },
        {
          id: `${template.id}-section-brioche-a-tete`,
          title: "Brioche à Tête ",
          order: 5,
          items: checkboxItems("brioche", [
            "Yeast respected ",
            "Dough is smooth & elastic ",
            "Proofed twice ",
            "Shape looks like a broiche ",
            "Uniform shape & size ",
            "Appropriate texture ",
            "Taste appropriate ",
            "Appropriate size ",
            "looks visual appealing     ",
          ]),
        },
        {
          id: `${template.id}-section-babka`,
          title: "Babka",
          order: 6,
          items: checkboxItems("babka", [
            "Hazelnuts lightly toasted & not burnt",
            "Chocolate mixture blended until smooth & slighly chunky",
            "Chocolate mixture set & is a spreadable consistency",
            "Dough rolled out htin enough ",
            "Ratio of chocolate spread & dough appropriate ",
            "Babka shape is unique ",
            "Uniform shape & size ",
            "looks visual appealing     ",
            "Appropraite texture ",
            "Taste of the babka is appropriate ",
            "Sufficient amount of syrup used on Babka ",
            "Sugar syrup didn’t crystallized ",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 7,
          items: checkboxItems("service", [
            "Brioche à Téte & Babka served on time 13:00",
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
              label: "Lecturer Feedback",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p11") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    const groupItem = (id: string, title: string, descriptions: string[]) => ({
      id: `${template.id}-${id}`,
      type: "group" as const,
      title,
      items: checkboxItems(id, descriptions),
    });

    return {
      ...template,
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: checkboxItems("personal", [
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: [
            {
              id: `${template.id}-recipe-paratha-bread`,
              type: "recipe-card",
              recipeName: "Paratha Bread",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-roti`,
              type: "recipe-card",
              recipeName: "Roti",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-potato-pea-samosa`,
              type: "recipe-card",
              recipeName: "Potato & Pea Samosa ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 3,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 4,
          items: checkboxItems("operation", [
            "Student selects appropriate equipment and utensils",
            "Student controls the cooking process (time & temp)",
            "Student works from prep lists/sheets (check time)",
            "Student works in a methodical manner, check waste",
          ]),
        },
        {
          id: `${template.id}-section-unleavened-phyllo`,
          title: "Unleavened & Phyllo ",
          order: 5,
          items: [
            groupItem("paratha-bread", "Paratha Bread", [
              "Appropriate texture ",
              "Taste appropriate ",
              "Cooked - Not raw or burnt ",
              "Looks visual appealing ",
              "Appropriate texture ",
              "Shape & size appropriate ",
              "Sufficient amount of layers ",
            ]),
            groupItem("roti", "Roti", [
              "Appropriate texture ",
              "Taste appropriate ",
              "Cooked - Not raw or burnt ",
              "Looks visual appealing ",
              "Shape & size appropriate ",
            ]),
            groupItem("potato-pea-samosa", "Potato & Pea Samosa ", [
              "Potatoes cut into appropriate size ",
              "Filling - Well Seasoned ",
              "Filling - Balanced flavours ",
              "Peas not over cooked ",
              "Samosa unifrom shape & size ",
              "Looks visual appealing - Kept it shape & did pop open ",
              "Golden brown colour ",
              "Pastry Crispy texture ",
            ]),
          ],
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: checkboxItems("service", [
            "Was the menu served on time - 12:00",
            "Served on a clean plate",
            "All elements on this menu served on time ",
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
              label: "Lecturer Feedback",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p10") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: [
            {
              id: `${template.id}-recipe-short-crust`,
              type: "recipe-card",
              recipeName: "Short Crust ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-quiche-florentine`,
              type: "recipe-card",
              recipeName: "Quiche Florentine ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-pate-sable`,
              type: "recipe-card",
              recipeName: "Pate Sable ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-lemon-curd`,
              type: "recipe-card",
              recipeName: "Lemon Curd ",
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
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 3,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 4,
          items: checkboxItems("operation", [
            "Student selects appropriate equipment and utensils",
            "Student controls the cooking process (time & temp)",
            "Student works from prep lists/sheets (check time)",
            "Student works in a methodical manner, check waste",
          ]),
        },
        {
          id: `${template.id}-section-quiche-florentine`,
          title: "Quiche Florentine ",
          order: 5,
          items: checkboxItems("quiche", [
            "Was the quiche & Lmeon Meringue Pie served on time -\n13:00",
            "Clean/appropraite plate used ",
            "Hot food-Hot Plate/ Cold Food-Cold Plate ",
            "Dish garnished ",
            "Crust - All ingredients well incorporated ",
            "Dough rested long enough ",
            "Tart case neatly lined ",
            "Tart case docked ",
            "Crust appropriate thickness",
            "No excess shrinkage ",
            "Crust Appropriate texture ",
            "Ratio between filling & custard appropriate ",
            "Crust golden brown ",
            "Crust cooked - Not raw",
            "Quiche cooked - Custard set ",
            "Veggies cut appropriately ",
            "Well seasoned ",
            "Balanced Flavours ",
            "Overall impression of the quiche?",
          ]),
        },
        {
          id: `${template.id}-section-lemon-merigue-pie`,
          title: "Lemon Merigue Pie ",
          order: 6,
          items: checkboxItems("lemon-pie", [
            "Clean/appropraite plate used ",
            "Hot food-Hot Plate/ Cold Food-Cold Plate ",
            "Dish garnished ",
            "Crust - All ingredients well incorporated ",
            "Crust neatly lined ",
            "Crust docked ",
            "Crust appropriate thickness",
            "Crust folden brown ",
            "Crust cooked - Not raw",
            "Appropriate texture ",
            "Curd set - Doesn’t have a runny viscosity ",
            "Curd - Smooth consistency ",
            "Curd - Blanced Flavour ",
            "Curd - No egg taste ",
            "Curd - No Bitter taste ",
            "Meringue - No sugar crystal's ",
            "Meringue - Stiff peak ",
            "Meringue - Did not weap ",
            "Meringue - Taste appropriate ",
            "Meringue looks visual appealing ",
            "Ratio between the crust, curd & mernigue is appropriate ",
            "Overall impression of the lemon merigue pie ",
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
                "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p9") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: [
            {
              id: `${template.id}-recipe-chocolate-cake`,
              type: "recipe-card",
              recipeName: "Chocolate Cake ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-chocolate-buttercream`,
              type: "recipe-card",
              recipeName: "Chocolate Buttercream ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-chocolate-mirror-glaze`,
              type: "recipe-card",
              recipeName: "Chocolate Mirror Glaze ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-chocolate-filigree`,
              type: "recipe-card",
              recipeName: "Chocolate Filigree",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 3,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 4,
          items: checkboxItems("operation", [
            "Student selects appropriate equipment and utensils",
            "Student controls the cooking process (time & temp)",
            "Student works from prep lists/sheets (check time)",
            "Student works in a methodical manner, check waste",
          ]),
        },
        {
          id: `${template.id}-section-death-by-chocolate-cake`,
          title: "DEATH BY CHOCOLATE MIRROR GLAZE CAKE",
          order: 5,
          items: checkboxItems("cake-service", [
            "Was the cake served on time - 15:00",
            "Clean Cake Board? ",
            "Cake placed in the center of the cake board",
          ]),
        },
        {
          id: `${template.id}-section-chocolate-cake`,
          title: "Chocolate Cake ",
          order: 6,
          items: checkboxItems("chocolate-cake", [
            "All ingredients well incorporated ",
            "Cooked - Not raw or burnt ",
            "Appropriate texture ",
            "Cake didn’t cave in",
            "Cake appropriate thickness ",
            "Cake evenly layered ",
          ]),
        },
        {
          id: `${template.id}-section-chocolate-buttercream`,
          title: "Chocolate Buttercream ",
          order: 7,
          items: checkboxItems("buttercream", [
            "Smooth & Silky ",
            "Buttercream doesn’t look split",
            "Cocoa flavour ",
            "Appropriate colour ",
            "Doesn’t have a marge taste ",
            "Appropriate consistency ",
          ]),
        },
        {
          id: `${template.id}-section-chocolate-mirror-glaze`,
          title: "Chocolate Mirror Glaze ",
          order: 8,
          items: checkboxItems("mirror-glaze", [
            "Smoot & silky ",
            "Looks visual appeal ",
            "Appropriate layer of  glaze used ",
            "Whole cake cover in glaze ",
            "Whole cake cover in glaze ",
          ]),
        },
        {
          id: `${template.id}-section-chocolate-filigree`,
          title: "Chocolate Filigree",
          order: 9,
          items: checkboxItems("filigree", [
            "Appropriate thickness ",
            "Unique patterns used ",
            "Appropriately used on the cake ",
          ]),
        },
        {
          id: `${template.id}-section-cake`,
          title: "CAKE   ",
          order: 10,
          items: checkboxItems("cake", [
            "Overall impression of the ckae?",
            "All flavours well balanced?",
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
                "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p8") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: [
            {
              id: `${template.id}-recipe-puff-pastry`,
              type: "recipe-card",
              recipeName: "Puff Pastry ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-bavarian-slice`,
              type: "recipe-card",
              recipeName: "Bavarian Slice    ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-garlic-snails-vol-au-vents`,
              type: "recipe-card",
              recipeName: "Garlic Snails Vol au Vents ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 3,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 4,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task ",
            "Student control waste ",
            "Gas/electrisity was not used unnecassarily ",
          ]),
        },
        {
          id: `${template.id}-section-puff-pastry`,
          title: "Puff Pastry ",
          order: 5,
          items: checkboxItems("puff-pastry", [
            "Puff pastry dough kept chilled at all time - Not left outside ",
            "Minimum of 4 fold done ",
            "Bavarian - Puff rolled out thinly ",
            "Bavarian - Cut into uniform shape & size ",
            "Bavarian - Puff baked until golden brown ",
            "Custard cooked - No flour taste ",
            "Custard set - Doesn’t have a runny viscosity",
            "Custard has a smooth consistency ",
            "Castard has a sweet taste to it & no strong vanilla taste ",
            "Bavarian evenly layered ",
            "Bavarian looks visual appealing ",
            "Ratio between pastry & custard appropriate ",
            "Bavarian icing appropriate thickness ",
            "Bavarian icing - Smooth consistency ",
            "Icing finish off looks visually attractive ",
            "Sufficient amount of cocoa icing used ",
            "Vol au Vents - Uniform shape & size ",
            "Vol au Vents - Has its layers ",
            "Vol au Vents - Sufficient amount of hight to it ",
            "Vol au vents - golden brown colour ",
            "Vol au Vents - appropriate size ",
            "Garlic snails - well seasoned ",
            "Garlic Snails - Balanced flavours ",
            "Snails not over cooked ",
            "Garlic snails - Sauce appropriate viscosity ",
            "Ratio between pastry & garlic snail sufficient ",
            "Sufficient amount of sauce in vol au vent ",
            "Vol au vent looks visual appealing ",
            "Appropriate plate picked for Bavarian slice & it is clean ",
            "Appropriate plate picked for Vol au Vents & it is clean",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: checkboxItems("service", [
            "Was the Dish Served on time - 14:00",
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
                "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p7") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms",
          order: 2,
          items: [
            {
              id: `${template.id}-recipe-swiss-roll`,
              type: "recipe-card",
              recipeName: "Swiss Roll",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-berry-compote`,
              type: "recipe-card",
              recipeName: "Berry Compote ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-banana-loaf`,
              type: "recipe-card",
              recipeName: "Banana Loaf ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 3,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 4,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task ",
            "Student control waste ",
            "Gas/electrisity was not used unnecassarily ",
          ]),
        },
        {
          id: `${template.id}-section-sponge-products`,
          title: "SPONGE PRODUCTS",
          order: 5,
          items: checkboxItems("sponge-products", [
            "Swiss roll - Appropriate texture ",
            "Swiss roll - Sponge light golden brown ",
            "Swiss roll - Appropriate thickness ",
            "Berry compote - Good consistecy ",
            "Berry compote - Good viscosity ",
            "sufficient amount of compote used in swiss roll ",
            "Over all look of swiss roll looks visual appealing ",
            "Sufficient amount served ",
            "Swiss roll served on a clean & appropriate plate",
            "Banana Loaf - Good texture ",
            "Banana Loaf - Taste appropriate ",
            "Loaf - Good colour ",
            "Banana Loaf  cooked - Not over or under baked ",
            "Loaf - good crumb ",
            "Loaf - uniform shape & size. ",
            "Overall impression of the Banana loaf ",
            "Served on a clean & appropriate plate/platter ",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: checkboxItems("service", [
            "Was the Dish Served on time - 12:00 ",
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
                "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p6") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task ",
            "Student control waste ",
            "Gas/electrisity was not used unnecassarily ",
          ]),
        },
        {
          id: `${template.id}-section-dessert`,
          title: "Dessert ",
          order: 4,
          items: checkboxItems("dessert", [
            "Praline - Outer layer appropriate thickness ",
            "Praline - Outer layer looks visual appeal ",
            "Praline - Salted caramel filling ratio appropriate ",
            "Praline - Salted caramel balanced flavours ",
            "Praline - Caramel appropriate colour ",
            "Praline - Salted Caramel no bitter taste ",
            "Praline - Uniform shape & size ",
            "Praline - Hozelnut in the centre ",
            "Sufficient amount of praline served ",
            "Soufflé - All ingredients well incorporated ",
            "Soufflé - Appropriate texture ",
            "Soufflé cooked - Not under baked ",
            "Soufflé - Airy texture ",
            "Soufflé has hight to it - didn’t deflate immediately ",
            "Soufflé - Taste appropriate ",
            "Chocolate flavour present ",
            "Chocolate garnish used on the plate ",
            "Chocolate garnish looks visual appel & contributes to the plate ",
            "Portion size sufficient ",
            "Appropriate plate used & temperature appropriate ",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 5,
          items: checkboxItems("service", [
            "Was the Dish Served on time - 15:00 ",
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
                "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p5") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task ",
            "Student control waste ",
            "Gas/electrisity was not used unnecassarily ",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-paris-breast`,
              type: "recipe-card",
              recipeName: "Paris Breast",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-mousseline`,
              type: "recipe-card",
              recipeName: "Mousseline ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-crullers`,
              type: "recipe-card",
              recipeName: "Crullers ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-smoked-salmon-gougere`,
              type: "recipe-card",
              recipeName: "Smoked Salmon Gougére",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-paris-breast`,
          title: "Paris Breast ",
          order: 5,
          items: checkboxItems("paris-breast", [
            "Batter smooth shiny drop consistency ",
            "Piping looks visual appealing ",
            "Paris breast appropriate size & shape ",
            "Appropriate amount of almond flakes used",
            "Paris breast cooked - Not raw ",
            "Paris Breast colour looks visual appeal",
            "Hollow inside",
            "Sufficient amount of icing sugar used on the paris breast",
            "Paris breast evenly horizontally cut ",
            "Paris Breast evenly filled ",
            "Looks visual appealing with the filing inside ",
            "Mousseline cooked - no flour taste ",
            "Mousseline Set - Not runny ",
            "Mousseline appropriate consistnecy ",
            "Vanilla flavour present - not to strong",
            "Piping off moussiline looks attractive ",
            "Sufficient amount used ",
            "Mousseline didn’t split ",
            "Appropriate size plate use for plating ",
            "Clean plate & appropriate temperature ",
          ]),
        },
        {
          id: `${template.id}-section-crullers`,
          title: "Crullers ",
          order: 6,
          items: checkboxItems("crullers", [
            "Batter smooth shiny drop consistency ",
            "Looks visual appealing   ",
            "Golden Brown - Not burnt ",
            "Excess oil drained ",
            "Appropriate texture inside ",
            "Unifrom shape & size ",
            "Sufficient amount of icing sugar used  ",
            "Pesented on a clean plate & appropriate temperature ",
          ]),
        },
        {
          id: `${template.id}-section-smoked-salmon-gougere`,
          title: "Smoked Salmon Gougére",
          order: 7,
          items: checkboxItems("gougere", [
            "Batter smooth shiny drop consistency ",
            "Unifrom shape & size ",
            "Looks visual appealing ",
            "Hollow inside",
            "Cooked - Not raw ",
            "Appropriate colour ",
            "Sufficient amount of filling used. ",
            "Filling balanced flavours ",
            "Filling well seasoned ",
            "Filling - Appropriate taste",
            "Filling - Appropriate consistency ",
            "Appropriate plate used ",
            "Presented on a clean plate & appropriate temperature ",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 8,
          items: checkboxItems("service", [
            "Was the Dish Served on time - 15:00 ",
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
                "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p3" || template.code === "menu-p4") {
    const checkboxItems = (prefix: string, descriptions: string[]) =>
      descriptions.map((description, index) => ({
        id: `${template.id}-${prefix}-${index + 1}`,
        type: "checkbox" as const,
        description,
        maxMark: 1,
      }));

    return {
      ...template,
      title: "Menu P3 & P4",
      sections: [
        {
          id: `${template.id}-section-personal-professionalism`,
          title: "Personal Professionalism",
          order: 1,
          items: checkboxItems("personal", [
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task ",
            "Student control waste ",
            "Gas/electrisity was not used unnecassarily ",
          ]),
        },
        {
          id: `${template.id}-section-operation-lady-fingers`,
          title: "Professional Operation - Lady Fingers",
          order: 4,
          items: checkboxItems("operation-lady-fingers", [
            "Student selects suitable equipment for task ",
            "Student control waste ",
          ]),
        },
        {
          id: `${template.id}-section-operation-health-seed-rusks`,
          title: "Professional Operation - Health Seed Rusks ",
          order: 5,
          items: checkboxItems("operation-rusks", [
            "Student control waste ",
            "Student control waste ",
          ]),
        },
        {
          id: `${template.id}-section-operation-tiramisu`,
          title: "Professional Operation - Tiramisu",
          order: 6,
          items: checkboxItems("operation-tiramisu", [
            "Student control waste ",
            "Student control waste ",
          ]),
        },
        {
          id: `${template.id}-section-operation-creme-brulee`,
          title: "Professional Operation - Crème Brûleé ",
          order: 7,
          items: checkboxItems("operation-creme-brulee", [
            "Student selects suitable equipment for task ",
            "Student control waste ",
          ]),
        },
        {
          id: `${template.id}-section-lady-fingers`,
          title: "Lady Fingers ",
          order: 8,
          items: checkboxItems("lady-fingers", [
            "Egg white folded in ",
            "Batter looks airy & fluffy ",
            "Appropriate size & Shape ",
            "Looks light golden brown colour ",
            "Biscuits dusted with icing sugar before baking ",
            "Appropriate amount of icing sugar used on biscuits ",
            "Crunchy texture ",
            "Biscuits looks visual appeal after baking ",
            "Biscuits hold it shape ",
            "Taste appropriate ",
          ]),
        },
        {
          id: `${template.id}-section-health-seed-rusks`,
          title: "Health Seed Rusks ",
          order: 9,
          items: checkboxItems("rusks", [
            "All ingredient well incorporated ",
            "Seeds & Nuts evenly distributed ",
            "Appropriate colour - Not to dark ",
            "Rusk uniform shape & size ",
            "Appropriate size   ",
            "Crunchy Texture - Not soft ",
            "Rusk holds it shape ",
          ]),
        },
        {
          id: `${template.id}-section-tiramisu`,
          title: "Tiramisu",
          order: 10,
          items: checkboxItems("tiramisu", [
            "Crème has a cheesy/rum flavour",
            "no eggy taste ",
            "Crème smooth consistency ",
            "Biscuit sufficient amount off coffee absorbed ",
            "Tiramisu looks visual appeal ",
            "Ratio of crème to lady finger appropriate",
            "Sufficient amount of cocoa powder use for dusting ",
            "Balanced flavours ",
            "Crème did not split ",
            "Appropriate/ clean plate used for the Dessert ",
          ]),
        },
        {
          id: `${template.id}-section-creme-brulee`,
          title: "Crème Brûleé ",
          order: 11,
          items: checkboxItems("creme-brulee", [
            "Smooth texture ",
            "Well set ",
            "Served cold ",
            "Castor sugar used to Brûleé ",
            "Well caramelized - Not burnt ",
            "No eggy taste ",
            "Appropriate/ clean plate used for the Dessert ",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 12,
          items: checkboxItems("service", [
            "Was the lady fingers presented within the time frame 10:00",
            "Was the Dish Served on time - 11:00 ",
          ]),
        },
        {
          id: `${template.id}-section-feedback`,
          title: "Lecturer Feedback",
          order: 13,
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

  if (template.code === "menu-p2") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Good tasting practices & sanitizer bucket kept clean ",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task ",
            "Student control waste ",
            "Gas/electrisity was not used unnecassarily ",
          ]),
        },
        {
          id: `${template.id}-section-recipe-planning`,
          title: "Recipe Planning Forms ",
          order: 4,
          items: [
            {
              id: `${template.id}-recipe-bread-butter-pudding`,
              type: "recipe-card",
              recipeName: "Bread & Butter Pudding ",
              maxMark: 2,
            },
            {
              id: `${template.id}-recipe-anglaise`,
              type: "recipe-card",
              recipeName: "Anglaise ",
              maxMark: 2,
            },
          ],
        },
        {
          id: `${template.id}-section-bread-butter-pudding`,
          title: "Bread & Butter Pudding served with Anglaise ",
          order: 5,
          items: checkboxItems("pudding", [
            "Bread cut into appropriate size cubes ",
            "Light golden brown colour ",
            "Bread mixture rested sufficiently ",
            "All ingredients mixed well together ",
            "Baked - Not over or under baked ",
            "Pudding set ",
            "Balanced flavours ",
            "Raisins well distributited in dessert ",
            "Pudding looks visual appeal - Golden Brown ",
            "Anglaise appropriate consistency ",
            "Anglaise appropriate viscosity ",
            "Anglaise - Taste appropriate ",
            "Sufficient amount served with dessert ",
            "Appropriate plate used ",
            "Clean plate & plated within the rim ",
            "Temperature (Hot Food/Hot Plate - Cold Food/Cold Plate)",
            "Ratio of all elements is balanced ",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 6,
          items: checkboxItems("service", [
            "Was the Dish Served on time - 10:00 ",
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
                "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            },
          ],
        },
      ],
    };
  }

  if (template.code === "menu-p1") {
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
            "Student is Dressed in Full Chef Uniform - Cleaned & Ironed ",
            "Student is Neatly Groomed (Facial hair, makeup ect.)",
            "Student show respect of Authority ",
          ]),
        },
        {
          id: `${template.id}-section-kitchen-hygiene`,
          title: "Kitchen & Hygiene ",
          order: 2,
          items: checkboxItems("hygiene", [
            "The student displays regular hand washing",
            "Clean as you go is practiced",
            "Scullary area is kept clean & correct sinks used",
          ]),
        },
        {
          id: `${template.id}-section-professional-operation`,
          title: "Professional Operation ",
          order: 3,
          items: checkboxItems("operation", [
            "Student selects suitable equipment for task ",
          ]),
        },
        {
          id: `${template.id}-section-bread`,
          title: "BREAD",
          order: 4,
          items: checkboxItems("bread", [
            "Loaf looks visual appeal",
            "Golden Brown colour",
            "Appropriate taste ",
            "Appropriate crumb ",
            "A Texure appropriate ",
            "Loaf cooked - Not over or under baked ",
            "Loaf unifrom ",
          ]),
        },
        {
          id: `${template.id}-section-service`,
          title: "Service ",
          order: 5,
          items: checkboxItems("service", [
            "Was the Loaf Presented on time - 10:00 ",
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
                "Please write a Review on your performans of todays cooking lesson. Where you may improve if you would have to Redo this Menu. ",
            },
          ],
        },
      ],
    };
  }

  return null;
}
