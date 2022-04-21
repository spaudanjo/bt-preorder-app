import { Product } from "../../../Types";

export const getLocalizedProductDetailsForCurrentLanguageOrForEnglish = (
  product: Product,
  languageId: string
) =>
{
  console.log(product.localizedProductDetailsByLanguageId);
  return product.localizedProductDetailsByLanguageId[languageId] ||
  product.localizedProductDetailsByLanguageId["en"];

}