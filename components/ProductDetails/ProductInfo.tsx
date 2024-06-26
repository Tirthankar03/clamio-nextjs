import React from 'react';
import Link from 'next/link';
import { FaUserCircle, FaStar } from 'react-icons/fa';
import { ProductDetailsData } from '@/constants/data';

const ProductInfo = () => {
  const productDetails = ProductDetailsData[0].productDetails;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-yellow-300 h-96 w-full rounded-lg"></div>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{productDetails.title}</h1>
          <div className="flex items-center mb-4">
            <FaUserCircle className="text-yellow-500 text-2xl" />
            <Link href={productDetails.creator.link}>
              <div className="ml-2 text-blue-500 text-xl">{productDetails.creator.name}</div>
            </Link>
          </div>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-500 text-xl" />
            <span className="ml-2 text-xl">{productDetails.rating} ({productDetails.reviewsCount})</span>
          </div>
          <p className="mb-8">{productDetails.description}</p>
          <span className="text-2xl font-bold mb-4">${productDetails.price}</span>
        </div>
        <div className="flex my-5 md:my-0 lg:my-0 2xl:my-0 space-x-4">
          {productDetails.buttons.map((button, idx) => (
            <button key={idx} className={button.className}>{button.text}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
