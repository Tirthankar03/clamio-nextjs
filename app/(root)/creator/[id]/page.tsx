'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';

const ProfilePage = () => {
  const [favorites, setFavorites] = useState(Array(9).fill(false));
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Profile Section */}
        <div className="col-span-1 mt-4  md:text-center">
          <div className="bg-yellow-300 md:w-32 md:h-32 h-40 w-40 rounded-full mx-auto"></div>
          <h1 className="text-center mt-4 text-2xl font-bold">David Jackoff</h1>
          <p className="text-center md:w-3/4 mx-auto mt-2 px-4">
            {isExpanded ? (
              <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <button className="text-blue-500 ml-2" onClick={toggleText}>Less...</button>
              </>
            ) : (
              <>
                Lorem ipsum dolor sit amet, consectetur...
                <button className="text-blue-500 ml-2" onClick={toggleText}>More...</button>
              </>
            )}
          </p>
          <div className="flex flex-col md:flex-row md:justify-center mt-4">
            <span className="mr-4 text-center">Total Products: 230</span>
            <span className='text-center'>Followers: 1M</span>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-black text-white px-4 py-2 rounded">Follow</button>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <span className="bg-red-500 p-2 rounded-full">
              <i className="fab fa-youtube"></i>
            </span>
            <span className="bg-pink-500 p-2 rounded-full">
              <i className="fab fa-instagram"></i>
            </span>
            <span className="bg-blue-500 p-2 rounded-full">
              <i className="fab fa-linkedin"></i>
            </span>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-span-1 md:col-span-3 p-4">
          <h2 className="text-2xl font-bold md:text-left text-center mt-4 md:mt-0">Top Selling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="bg-white p-4 shadow-lg rounded-lg relative">
                <div className="bg-yellow-300 h-40 w-full rounded-t-lg relative">
                  <button
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
                    onClick={() => toggleFavorite(idx)}
                  >
                    <FaHeart className={`${favorites[idx] ? 'text-red-500' : 'text-gray-500'}`} />
                  </button>
                </div>
                <div className="mt-4">
                <Link href='/product/1'>
                  <p className="text-center font-semibold">Beverage Animation</p>
                </Link>
                  <div className="flex justify-center items-center mt-2">
                    <FaUserCircle className="text-yellow-500" />
                    <a href="#" className="ml-2 text-blue-500">David Jackoff</a>
                  </div>
                  <div className="flex justify-center items-center mt-2 text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-1">4.7 (1k)</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold">$25</span>
                    <button className="bg-gray-100 p-2 rounded-full shadow">
                      <FaShoppingCart className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold md:text-left text-center mt-8">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx + 3} className="bg-white p-4 shadow-lg rounded-lg relative">
                <div className="bg-yellow-300 h-40 w-full rounded-t-lg relative">
                  <button
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
                    onClick={() => toggleFavorite(idx + 3)}
                  >
                    <FaHeart className={`${favorites[idx + 3] ? 'text-red-500' : 'text-gray-500'}`} />
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-center font-semibold">Beverage Animation</p>
                  <div className="flex justify-center items-center mt-2">
                    <FaUserCircle className="text-yellow-500" />
                    <a href="#" className="ml-2 text-blue-500">David Jackoff</a>
                  </div>
                  <div className="flex justify-center items-center mt-2 text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span className="ml-1">4.7 (1k)</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold">$25</span>
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
