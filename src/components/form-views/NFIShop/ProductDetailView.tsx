import React from "react";

interface ProductOrder {
    productType: string;
    // si
}

interface ProductDetaiViewProps {
  productType: string;
  onAddToCart: (productOrders: ProductOrder[]) => void;
}
const ProductDetailView = ({ productType }: ProductDetaiViewProps) => {
  return (<div>
      PRODUCT DETAIL VIEW FOR PRODUCT TYPE {productType}
      <button onClick={() => onAddToCart([])} >Add to cart</button>
      </div>);
};

export default ProductDetailView;
