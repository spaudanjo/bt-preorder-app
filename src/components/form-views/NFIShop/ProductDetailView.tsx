import React from "react"; 

interface ProductDetaiViewProps {
    productType: string;

}
const ProductDetailView = ({productType}: ProductDetaiViewProps) => {
    return (<div>PRODUCT DETAIL VIEW FOR PRODUCT TYPE {productType}</div>)
};

export default ProductDetailView;