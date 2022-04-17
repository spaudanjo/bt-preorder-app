import React from "react";
import {
  FormViewSubmitComponentProps,
  LocalizedProductDetails,
  Product,
  StockData,
} from "../../../Types";
import { GlobalContext } from "../../../GlobaContext";
import I18n from "../../I18n";

const NFIShop = ({
  onSubmitFormView,
  formViewId,
  stockData,
}: FormViewSubmitComponentProps & { stockData: StockData }) => {
  const { currentLanguage } = React.useContext(GlobalContext);

  const getLocalizedProductDetailsForCurrentLanguageOrForEnglish = (
    product: Product
  ) =>
    product.localizedProductDetailsByLanguageId[currentLanguage.id] ||
    product.localizedProductDetailsByLanguageId["en"];

  interface NormalisedAndLocalisedProductTypeTuple {
    normalised: string;
    localised: string;
  }
  const normalisedAndLocalisedProductTypeTuples = stockData.reduce<{
    [key: string]: NormalisedAndLocalisedProductTypeTuple;
  }>((acc, product) => {
    const localizedProductDetails =
      getLocalizedProductDetailsForCurrentLanguageOrForEnglish(product);
    return {
      ...acc,
      [product.productType]: {
        normalised: product.productType,
        localised: localizedProductDetails.productType,
      },
    };
  }, {});

  return (
    <div>
      <h1>
        <I18n k="nfiShop.title" />
      </h1>
      {/* <p>{JSON.stringify(productTypes)}</p> */}
      <ul>
        {Object.keys(normalisedAndLocalisedProductTypeTuples).map(productTypeKey => normalisedAndLocalisedProductTypeTuples[productTypeKey]).map(productType => (
          <li key={productType.normalised}>
            <button
              onClick={() =>
                alert(`SHOW PRODUCT DETAILS FOR ${productType.normalised}`)
              }
            >
              {productType.localised}
            </button>
          </li>
        ))}
      </ul>
      {/* <p>
        <label htmlFor="help-needed"></label>
        <input type="text" id="help-needed" />
      </p> */}
      <p></p>
      <button
        onClick={() =>
          onSubmitFormView({
            [`nfiShopForm_${formViewId}_.shoppingData`]: "SOME SHOPPING DATA",
          })
        }
      >
        Done with Shopping
      </button>
    </div>
  );
};

export default NFIShop;