import React from "react";
import { GlobalContext } from "../../../GlobaContext";
import { Product, ProductOrder } from "../../../Types";
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
  const productsGroupedByGender = productsForType.reduce((acc, product) => {
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
            {JSON.stringify(productsGroupedByGender)}
        </p>
      PRODUCT DETAIL VIEW FOR PRODUCT TYPE {productsForType[0]?.productType}
      {productsForType.map((product) => {
        const localizedProductDetails =
          getLocalizedProductDetailsForCurrentLanguageOrForEnglish(
            product,
            currentLanguage.id
          );
        return (
          <p>
            <div>{localizedProductDetails.gender}</div>
            <div>{localizedProductDetails.size}</div>
          </p>
        );
      })}
      <button onClick={() => onAddToCart([])}>Add to cart</button>
    </div>
  );
};

export default ProductDetailView;
