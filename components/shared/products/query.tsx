// src/pages/query.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import ProductList from '@/components/shared/products/ProductList';
import { TopSellingproductData, HotNewproductData, TopDiscountProduct } from '@/constants/data';

const QueryPage = () => {
    const router = useRouter();
    const { query } = router.query;
    const searchQuery = query ? query.toString() : '';

    const filterProducts = (products: any) => {
        if (!searchQuery) return products;
        return products.filter((product: any) =>
            product.productName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const filteredTopSellingProducts = filterProducts(TopSellingproductData);
    const filteredHotNewProducts = filterProducts(HotNewproductData);
    const filteredTopDiscountProduct = filterProducts(TopDiscountProduct);

    return (
        <div className="grid gap-4 px-4 w-11/12 md:w-5/6 mx-auto pb-10">
            {filteredTopSellingProducts.length > 0 && (
                <ProductList products={filteredTopSellingProducts} title="Top Selling Products" />
            )}
            {filteredHotNewProducts.length > 0 && (
                <ProductList products={filteredHotNewProducts} title="Hot and New Products" />
            )}
            {filteredTopDiscountProduct.length > 0 && (
                <ProductList products={filteredTopDiscountProduct} title="Top Discount Products" />
            )}
            {filteredTopSellingProducts.length === 0 && filteredHotNewProducts.length === 0 && filteredTopDiscountProduct.length === 0 && (
                <div>No products found</div>
            )}
        </div>
    );
};

export default QueryPage;
