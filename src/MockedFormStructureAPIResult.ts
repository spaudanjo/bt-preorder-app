import { FormStructureAPIDataEntry } from "./Types";

const mockedFormStructureFromAPI: Array<FormStructureAPIDataEntry> = [
  {
    id: "languageChooser1",
    type: "language-chooser",
  },
  {
    id: "nfiShop1",
    type: "nfi-shop",
    stockData: [
      {
        id: "1",
        productType: "long_sleve_t-shirt",
        size: "xl",
        gender: "male",
        localizedProductDetailsByLanguageId: {
          en: {
            productType: "Long Sleeve T-shirt",
            gender: "male",
            size: "XL",
          },
          de: {
            productType: "Langarm T-shirt",
            gender: "Herren",
            size: "XL",
          },
        },
        stock: 4,
      },
      {
        id: "11",
        productType: "long_sleve_t-shirt",
        size: "l",
        gender: "female",
        localizedProductDetailsByLanguageId: {
          en: {
            productType: "Long Sleeve T-shirt",
            gender: "female",
            size: "S",
          },
          de: {
            productType: "Langarm T-shirt",
            gender: "Damen",
            size: "S",
          },
        },
        stock: 14,
      },
      {
        id: "11",
        productType: "long_sleve_t-shirt",
        size: "l",
        gender: "male",
        localizedProductDetailsByLanguageId: {
          en: {
            productType: "Long Sleeve T-shirt",
            gender: "male",
            size: "L",
          },
          de: {
            productType: "Langarm T-shirt",
            gender: "Herren",
            size: "L",
          },
        },
        stock: 14,
      },
      {
        id: "15",
        productType: "jeans",
        size: "s",
        gender: "female",
        localizedProductDetailsByLanguageId: {
          en: {
            productType: "Jeans",
            gender: "female",
            size: "S",
          },
        },
        stock: 2,
      },
    ],
  },
  {
    id: "willAskQuestionInfo",
    type: "info-message",
    title: "That's all?", 
    description: "Do you need something else?"
  },
  {
    id: "medicHelpk",
    type: "medical-help",
  },
];

export default mockedFormStructureFromAPI;
