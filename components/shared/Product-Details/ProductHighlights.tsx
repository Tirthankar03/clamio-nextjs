// components/ProductHighlights.tsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductHighlights = () => (
    <>
        <h2 className="text-2xl text-center md:text-start font-bold mb-4">Product Highlights</h2>
        <div className="grid grid-cols-2 py-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {['Easy to use', 'Easy Returns', 'Result in 10 days', 'Google certified'].map((highlight, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <FaStar className="text-yellow-500  text-4xl mb-2" />
                    <p>{highlight}</p>
                </div>
            ))}
        </div>
    </>
);

export default ProductHighlights;
