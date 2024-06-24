import React from "react";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaStar, FaUserCircle } from "react-icons/fa";
import { PRODUCTS } from "@/constants/index"; 
import ToggleText from "@/Reusable Components/ToggleText"; 
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Profile Section */}
        <div className="col-span-1 mt-4  md:text-center">
          <div className="bg-yellow-300 md:w-32 md:h-32 h-40 w-40 rounded-full mx-auto"></div>
          <h1 className="text-center mt-4 text-2xl font-bold">David Jackoff</h1>

          <ToggleText />

          <div className="flex flex-col md:flex-row md:justify-center mt-4">
            <span className="mr-4 text-center">Total Products: 230</span>
            <span className="text-center">Followers: 1M</span>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-black text-white px-4 py-2 rounded">
              Follow
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <span className="bg-red-500 p-2 rounded-full">
              <FaYoutube size={20} color="white" />
            </span>
            <span className="bg-pink-500 p-2 rounded-full">
              <FaInstagram size={20} color="white" />
            </span>
            <span className="bg-blue-500 p-2 rounded-full">
              <FaLinkedin size={20} color="white" />
            </span>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-span-1 md:col-span-3 p-4">
          <h2 className="text-2xl font-bold md:text-left text-center mt-4 md:mt-0">
            Top Selling Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg relative">
                <div className="bg-yellow-300 h-40 w-full rounded-t-lg relative">
                  {/* FavoriteButton component */}
                </div>
                <div className="mt-4">
                  <Link href={`/product/${product.id}`}>
                    <p className="text-center font-semibold">{product.title}</p>
                  </Link>
                  <div className="flex justify-center items-center mt-2">
                    <FaUserCircle className="text-yellow-500" />
                    <a href="#" className="ml-2 text-blue-500">
                      {product.seller}
                    </a>
                  </div>
                  <div className="flex justify-center items-center mt-2 text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-1">
                      {product.rating} ({product.numRatings})
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold">${product.price}</span>
                    <button className="bg-gray-100 p-2 rounded-full shadow">
                      <FaShoppingCart className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold md:text-left text-center mt-8">
            All Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg relative">
                <div className="bg-yellow-300 h-40 w-full rounded-t-lg relative">
                  {/* FavoriteButton component */}
                </div>
                <div className="mt-4">
                  <p className="text-center font-semibold">{product.title}</p>
                  <div className="flex justify-center items-center mt-2">
                    <FaUserCircle className="text-yellow-500" />
                    <a href="#" className="ml-2 text-blue-500">
                      {product.seller}
                    </a>
                  </div>
                  <div className="flex justify-center items-center mt-2 text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-1">
                      {product.rating} ({product.numRatings})
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold">${product.price}</span>
                    <button className="bg-gray-100 p-2 rounded-full shadow">
                      <FaShoppingCart className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
