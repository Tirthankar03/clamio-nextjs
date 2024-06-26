import React from 'react';
import { FaStar } from 'react-icons/fa';
import { ProductDetailsData } from '@/constants/data';

const ProductHighlights = () => {
  const highlights = ProductDetailsData[0].highlights;

  return (
    <>
      <h2 className="text-2xl text-center md:text-start font-bold mb-4">Product Highlights</h2>
      <div className="grid grid-cols-2 py-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <FaStar className="text-yellow-500 text-4xl mb-2" />
            <p>{highlight}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductHighlights;
