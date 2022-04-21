import React, { useState } from "react";
import {
  FormViewSubmitComponentProps,
  StockData,
} from "../../../Types";
import { GlobalContext } from "../../../GlobaContext";
import I18n from "../../I18n";
import ProductDetailView from "./ProductDetailView";
import { getLocalizedProductDetailsForCurrentLanguageOrForEnglish } from "./helpers";
import { Button, Center, Grid, Heading } from "@chakra-ui/react";

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
    <Center>
      {productTypeForDetailView && (
        <ProductDetailView
          // isOpen={productTypeForDetailView != null}
          onClose={() => setProductTypeForDetailView(undefined)}
          // productType={productTypeForDetailView}
          productsForType={getProductsByProductType(productTypeForDetailView)}
          // onAddToCart={}
        />
      )}
      <Heading>
        <I18n k="nfiShop.title" />
      </Heading>
      <Grid>
        {Object.keys(normalisedAndLocalisedProductTypeTuples)
          .map(
            (productTypeKey) =>
            {
              
              const FOO = normalisedAndLocalisedProductTypeTuples[productTypeKey]
              console.log(currentLanguage.id)
              console.log(FOO)

              return FOO;
            }
          )
          .map((productType) => (
              <Button
              key={productType.normalised}
                onClick={() =>
                  // alert(`SHOW PRODUCT DETAILS FOR ${productType.normalised}`)
                  setProductTypeForDetailView(productType.normalised)
                }
              >
                FOO-{productType.localised}
              </Button>
          ))}
      </Grid>
      <Button
        onClick={() =>
          onSubmitFormView({
            [`nfiShopForm_${formViewId}_.shoppingData`]: "SOME SHOPPING DATA",
          })
        }
      >
        Done with Shopping
      </Button>
    </Center>
  );
};

export default NFIShop;
