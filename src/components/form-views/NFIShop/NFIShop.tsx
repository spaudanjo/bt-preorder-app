import React, { useState } from "react";
import {
  FormViewSubmitComponentProps,
  Product,
  ProductOrder,
  StockData,
} from "../../../Types";
import { GlobalContext } from "../../../GlobaContext";
import I18n from "../../I18n";
import ProductDetailView from "./ProductDetailView";
import { getLocalizedProductDetailsForCurrentLanguageOrForEnglish } from "./helpers";
import { useDisclosure } from "@chakra-ui/react";

interface NormalisedAndLocalisedProductTypeTuple {
  normalised: string;
  localised: string;
}

const NFIShop = ({
  onSubmitFormView,
  formViewId,
  stockData,
}: FormViewSubmitComponentProps & { stockData: StockData }) => {
  const { currentLanguage } = React.useContext(GlobalContext);
  const [productTypeForDetailView, setProductTypeForDetailView] =
    useState<string>();
  const { isOpen, onClose } = useDisclosure();

  const getProductsByProductType = (productType: string) => {
    return stockData.filter((product) => product.productType === productType);
  };

  const normalisedAndLocalisedProductTypeTuples = stockData.reduce<{
    [key: string]: NormalisedAndLocalisedProductTypeTuple;
  }>((acc, product) => {
    const localizedProductDetails =
      getLocalizedProductDetailsForCurrentLanguageOrForEnglish(
        product,
        currentLanguage.id
      );
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
      {productTypeForDetailView && (
        <ProductDetailView
          // isOpen={productTypeForDetailView != null}
          onClose={() => setProductTypeForDetailView(undefined)}
          // productType={productTypeForDetailView}
          productsForType={getProductsByProductType(productTypeForDetailView)}
          // onAddToCart={}
        />
      )}
      <h1>
        <I18n k="nfiShop.title" />
      </h1>
      <ul>
        {Object.keys(normalisedAndLocalisedProductTypeTuples)
          .map(
            (productTypeKey) =>
              normalisedAndLocalisedProductTypeTuples[productTypeKey]
          )
          .map((productType) => (
            <li key={productType.normalised}>
              <button
                onClick={() =>
                  // alert(`SHOW PRODUCT DETAILS FOR ${productType.normalised}`)
                  setProductTypeForDetailView(productType.normalised)
                }
              >
                {productType.localised}
              </button>
            </li>
          ))}
      </ul>
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
