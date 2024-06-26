// pages/ProductDetail.js

import ProductHighlights from "@/components/ProductDetails/ProductHighlights";
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import Reviews from "@/components/ProductDetails/Reviews";
import SimilarProducts from "@/components/ProductDetails/SimilarProducts";


const ProductDetail = () => {
  return (
    <div className="container mx-auto p-6">
      <ProductInfo />
      <ProductHighlights />
      <Reviews />
      <SimilarProducts />
    </div>
  );
};

export default ProductDetail;
