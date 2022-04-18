import React from "react";
import { GlobalContext } from "../../../GlobaContext";
import { Product, ProductOrder } from "../../../Types";
import I18n from "../../I18n";
import { getLocalizedProductDetailsForCurrentLanguageOrForEnglish } from "./helpers";

interface ProductDetaiViewProps {
  //   productType: string;
  productsForType: Product[];
  onAddToCart: (productOrders: ProductOrder[]) => void;
}
const ProductDetailView = ({
  productsForType,
  onAddToCart,
}: ProductDetaiViewProps) => {
  const { currentLanguage } = React.useContext(GlobalContext);
  const productsForTypeGroupedByGender = productsForType.reduce((acc, product) => {
      const FOO = {
          ...acc,
          [product.gender]: [...(acc[product.gender] || []), product]
      }

    //   FOO[product.gender] = [product]

      return FOO;
    //   return acc
  }, {} as {[key: string]: Array<Product>});
  return (
    <div>
        <p>
            {JSON.stringify(productsForTypeGroupedByGender)}
        </p>
      PRODUCT DETAIL VIEW FOR PRODUCT TYPE {productsForType[0]?.productType}
      {Object.keys(productsForTypeGroupedByGender).map(genderId => {
        const productsForTypeAndGender = productsForTypeGroupedByGender[genderId];
          return (
            <div>
              <h3>
                <I18n k={`basics.${genderId}`} />
              </h3>
              {productsForTypeAndGender.map((product) => {
                const localizedProductDetails =
                  getLocalizedProductDetailsForCurrentLanguageOrForEnglish(
                    product,
                    currentLanguage.id
                  );
                return (
                  <p>
                    <div>{localizedProductDetails.size}</div>
                  </p>
                );
              })}
            </div>
          );
      })}
      <button onClick={() => onAddToCart([])}>Add to cart</button>
    </div>
  );
};

export default ProductDetailView;
