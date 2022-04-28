import { FormDataWithLocalizedContent, InfoMessageFormData, Product } from "../../../Types";


// TODO: merge these getLocalized...() functions into one via TS generics
// export const getLocalizedProductDetailsForCurrentLanguageOrForEnglish = (
//   product: Product,
//   languageId: string
// ) => product.localizedProductDetailsByLanguageId[languageId] ||
//   product.localizedProductDetailsByLanguageId["en"];

export const getLocalizedContentForCurrentLanguageOrForEnglish = (
  infoMessageFormData: FormDataWithLocalizedContent,
  languageId: string
) => infoMessageFormData.localizedContent[languageId] ||
  infoMessageFormData.localizedContent["en"];