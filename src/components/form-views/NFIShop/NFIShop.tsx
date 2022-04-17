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

  const normalisedAndLocalisedProductTypeTuples = Array.from(
    new Set(
      stockData.map((product) => ({
        normalised: product.productType,
        localised:
          getLocalizedProductDetailsForCurrentLanguageOrForEnglish(product)
            .productType,
      }))
    )
  );

  // const productsByName = stockData.reduce((acc, product) => {
  //   acc[product.name] = product;
  //   return acc;
  // // }, {} as { [name: string]:  });
  // }, {});

  return (
    <div>
      <h1>
        <I18n k="nfiShop.title" />
      </h1>
      {/* <p>{JSON.stringify(productTypes)}</p> */}
      <ul>
        {normalisedAndLocalisedProductTypeTuples.map((productType, i) => (
          <li key={i}>
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
