import { Product } from "../../../Types";

export const getLocalizedProductDetailsForCurrentLanguageOrForEnglish = (
  product: Product,
  languageId: string
) => product.localizedProductDetailsByLanguageId[languageId] ||
  product.localizedProductDetailsByLanguageId["en"];