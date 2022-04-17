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
  return (
    <div>
      PRODUCT DETAIL VIEW FOR PRODUCT TYPE {productsForType[0]?.productType}
      {productsForType.map((product) => {
        const localizedProductDetails =
          getLocalizedProductDetailsForCurrentLanguageOrForEnglish(
            product,
            currentLanguage.id
          );
        return (
          <div>
            <div>{localizedProductDetails.productType}</div>
            <div>{localizedProductDetails.gender}</div>
            <div>{localizedProductDetails.size}</div>
          </div>
        );
      })}
      <button onClick={() => onAddToCart([])}>Add to cart</button>
    </div>
  );
};

export default ProductDetailView;
