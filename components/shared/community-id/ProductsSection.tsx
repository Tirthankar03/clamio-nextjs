import React from "react";
import Card from "@/components/Reusable Components/Card";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface ProductsSectionProps {
    topSellingProducts: Product[];
    allProducts: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ topSellingProducts, allProducts }) => {
    return (
        <>
            <h2 className="text-2xl font-bold md:text-left text-center mt-4 md:mt-0">
                Top Selling Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {topSellingProducts.map((product, idx) => (
                    <Card key={idx} card={product} idx={idx} />
                ))}
            </div>

            <h2 className="text-2xl font-bold md:text-left text-center mt-8">
                All Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {allProducts.map((product, idx) => (
                    <Card key={idx} card={product} idx={idx} />
                ))}
            </div>
        </>
    );
};

export default ProductsSection;
