import React from "react";
import { ProductOrder } from "../../../Types";

interface ProductDetaiViewProps {
  productType: string;
  onAddToCart: (productOrders: ProductOrder[]) => void;
}
const ProductDetailView = ({ productType, onAddToCart }: ProductDetaiViewProps) => {
  return (<div>
      PRODUCT DETAIL VIEW FOR PRODUCT TYPE {productType}
      <button onClick={() => onAddToCart([])} >Add to cart</button>
      </div>);
};

export default ProductDetailView;
