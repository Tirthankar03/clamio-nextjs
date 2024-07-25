"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { HotNewproductData, TopDiscountProduct, TopSellingproductData } from '@/constants/data';
import { FaStar } from 'react-icons/fa';

const allProducts = [...TopSellingproductData, ...HotNewproductData, ...TopDiscountProduct];

const ReviewsPage = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const product = allProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Reviews for {product.productName}</h1>
            <div className=" grid grid-cols-4  gap-8 mt-4">
                {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div key={index} className="mb-4 p-4 border rounded">
                            <h2 className="font-bold">{review.title}</h2>
                            <p>{review.content}</p>
                            <div className="flex items-center mt-2">
                                <FaStar className="text-yellow-500 text-xl" />
                                <span className="ml-2 text-xl">{review.stars}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No reviews available for this product.</p>
                )}
            </div>
        </div>
    );
};

export default ReviewsPage;
