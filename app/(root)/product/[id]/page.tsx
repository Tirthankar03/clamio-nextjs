// pages/ProductDetail.js

import ProductHighlights from "@/components/shared/Product-Details/ProductHighlights";
import ProductInfo from "@/components/shared/Product-Details/ProductInfo";
import Reviews from "@/components/shared/Product-Details/Reviews";
import SimilarProducts from "@/components/shared/Product-Details/SimilarProducts";


const ProductDetail = () => {
  return (
    <div className="container mx-auto p-6">
      <ProductInfo   />
      <ProductHighlights />
      <Reviews />
      <SimilarProducts />
    </div>
  );
};

export default ProductDetail;
