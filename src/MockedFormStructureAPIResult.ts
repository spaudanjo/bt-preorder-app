import { FormStructureAPIDataEntry } from "./Types";

const mockedFormStructureFromAPI: Array<FormStructureAPIDataEntry> = [
  {
    id: "languageChooser1",
    type: "language-chooser",
  },
  {
    id: "willAskQuestionInfo",
    type: "info-message",
    localizedContent: {
      en: {
        title: "Welcome",
        description:
          "We will ask you now some questions about your situation and what your currently need.",
      },
      de: {
        title: "Willkommen",
        description:
          "Wir werden Dir im Folgenden einige Fragen bezüglich Deiner aktuellen Situation und Wünsche stellen. ",
      },
    },
  },
  {
    id: "nfiShop1",
    type: "nfi-shop",
    stockData: [
      {
        availableItems: 123,
        product: {
          name: "Winter Jackets",
        },
        size: "S",
      },
      {
        availableItems: 975293939,
        product: {
          name: "Winter Jackets",
        },
        size: "XL",
      },
      {
        availableItems: 123,
        product: {
          name: "Winter Jackets",
        },
        size: "S",
      },
      {
        availableItems: 975293939,
        product: {
          name: "Winter Jackets",
        },
        size: "XL",
      },
      {
        availableItems: 123,
        product: {
          name: "Winter Jackets",
        },
        size: "S",
      },
      {
        availableItems: 975293939,
        product: {
          name: "Winter Jackets",
        },
        size: "XL",
      },
      {
        availableItems: 123,
        product: {
          name: "Winter Jackets",
        },
        size: "S",
      },
      {
        availableItems: 975293939,
        product: {
          name: "Winter Jackets",
        },
        size: "XL",
      },
      {
        availableItems: 123,
        product: {
          name: "Winter Jackets",
        },
        size: "S",
      },
      {
        availableItems: 975293939,
        product: {
          name: "Winter Jackets",
        },
        size: "XL",
      },
    ],
    //   {
    //     id: "1",
    //     productType: "long_sleve_t-shirt",
    //     size: "xl",
    //     gender: "male",
    //     localizedProductDetailsByLanguageId: {
    //       en: {
    //         productType: "Long Sleeve T-shirt",
    //         gender: "male",
    //         size: "XL",
    //       },
    //       de: {
    //         productType: "Langarm T-shirt",
    //         gender: "Herren",
    //         size: "XL",
    //       },
    //     },
    //     stock: 4,
    //   },
    //   {
    //     id: "11",
    //     productType: "long_sleve_t-shirt",
    //     size: "l",
    //     gender: "female",
    //     localizedProductDetailsByLanguageId: {
    //       en: {
    //         productType: "Long Sleeve T-shirt",
    //         gender: "female",
    //         size: "S",
    //       },
    //       de: {
    //         productType: "Langarm T-shirt",
    //         gender: "Damen",
    //         size: "S",
    //       },
    //     },
    //     stock: 14,
    //   },
    //   {
    //     id: "11",
    //     productType: "long_sleve_t-shirt",
    //     size: "l",
    //     gender: "male",
    //     localizedProductDetailsByLanguageId: {
    //       en: {
    //         productType: "Long Sleeve T-shirt",
    //         gender: "male",
    //         size: "L",
    //       },
    //       de: {
    //         productType: "Langarm T-shirt",
    //         gender: "Herren",
    //         size: "L",
    //       },
    //     },
    //     stock: 14,
    //   },
    //   {
    //     id: "15",
    //     productType: "jeans",
    //     size: "s",
    //     gender: "female",
    //     localizedProductDetailsByLanguageId: {
    //       en: {
    //         productType: "Jeans",
    //         gender: "female",
    //         size: "S",
    //       },
    //     },
    //     stock: 2,
    //   },
    // ],
  },
  {
    id: "somethingElseNeeded",
    type: "text-input",
    localizedContent: {
      en: {
        title: "That's all?",
        description: "Do you need something else?",
      },
      de: {
        title: "Das ist alles?",
        description: "Brauchst Du noch etwas anderes?",
      },
    },
  },
  {
    id: "medicHelpk",
    type: "medical-help",
  },
];

export default mockedFormStructureFromAPI;
