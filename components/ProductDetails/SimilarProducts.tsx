import React from 'react';
import Link from 'next/link';
import FavoriteButton from '@/Reusable Components/FavoriteButton'; // Assuming correct path
import { FaUserCircle, FaStar, FaShoppingCart } from 'react-icons/fa';
import { ProductDetailsData } from '@/constants/data';

const SimilarProducts = () => {
  const similarProducts = ProductDetailsData[0].similarProducts;

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Explore Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {similarProducts.map((product, idx) => (
          <div key={idx} className="bg-white p-4 shadow-lg rounded-lg relative">
            <div className="bg-yellow-300 h-40 w-full rounded-t-lg relative">
              <FavoriteButton idx={idx} />
            </div>
            <div className="mt-4">
              <p className="text-center font-semibold">{product.title}</p>
              <div className="flex justify-center items-center mt-2">
                <FaUserCircle className="text-yellow-500" />
                <Link href={product.creator.link}>
                  <p className="ml-2 text-blue-500">{product.creator.name}</p>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-2 text-gray-600">
                <FaStar className="text-yellow-500" />
                <span className="ml-1">{product.rating} ({product.reviewsCount})</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold">${product.price}</span>
                <button className="bg-gray-100 p-2 rounded-full shadow">
                  <FaShoppingCart className="text-gray-600 text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SimilarProducts;
