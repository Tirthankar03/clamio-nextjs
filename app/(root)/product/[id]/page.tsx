'use client'
import React, { useState } from 'react'
import { FaHeart, FaSearch, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
// import './LibraryPage.css';
import Headroom from 'react-headroom';
import Link from 'next/link';

const ProductDetail = () => {
  const [favorites, setFavorites] = useState(Array(4).fill(false));
  const [showSearch, setShowSearch] = useState(false);

  const toggleFavorite = (index: any) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  return (
    <>
    {/* <Headroom>
        <div className='w-full h-28 bg-white sticky mb-7 z-10 top-0 py-1 shadow-md'>
          <header className="flex md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-auto mx-5 max-w-7xl md:my-4 my-4 sm:my-4 flex-col sm:flex-row justify-between items-center mb-8">
            <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="bg-yellow-300 h-16 w-16 rounded-full"></div>
              <div className="flex sm:hidden space-x-4">
                <button
                  className="p-2 rounded-full shadow bg-white"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <FaSearch className="text-gray-500 text-2xl" />
                </button>
                <button className="p-2 rounded-full shadow bg-white">
                  <FaHeart className="text-gray-500 text-2xl" />
                </button>
                <button className="p-2 rounded-full shadow bg-white">
                  <FaShoppingCart className="text-gray-500 text-2xl" />
                </button>
              </div>
            </div>
            <div className="hidden w-full sm:w-1/2 lg:w-1/2 mb-4 sm:mb-0 sm:flex sm:justify-center my-4 sm:my-0">
              <div className="relative w-full md:w-4/5 sm:mx-6">
                <input
                  type="text"
                  className="w-full p-4 pl-10 bg-gray-200 rounded-full"
                  placeholder="Search"
                />
                <FaSearch className="absolute left-4 top-5 text-gray-500" />
              </div>
            </div>
            <div className="hidden sm:flex space-x-4">
              <button className="bg-black sm:px-[0.3rem] font-semibold sm:py-[0.9rem] md:px-5 md:py-3 text-white px-4 py-2 rounded">Sell Your Product</button>
              <button className="p-2 rounded-full shadow bg-white">
                <FaHeart className="text-gray-500 text-2xl sm:text-xl md:text-2xl" />
              </button>
              <button className="p-2 rounded-full shadow bg-white">
                <FaShoppingCart className="text-gray-500 text-2xl sm:text-xl md:text-2xl" />
              </button>
            </div>
          </header>
        </div>
      </Headroom> */}

      <CSSTransition
        in={showSearch}
        timeout={200}
        classNames="search"
        unmountOnExit
      >
        <div className="sm:hidden relative mx-3 mb-4 mt-4">
          <input
            type="text"
            className="w-full p-4 pl-10 bg-gray-100 rounded-full"
            placeholder="Search"
          />
          <FaSearch className="absolute left-4 top-5 text-gray-500" />
        </div>
      </CSSTransition>

     <div className="container mx-auto p-6">


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-yellow-300 h-96 w-full rounded-lg"></div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">Beverage Animation</h1>
            <div className="flex items-center mb-4">
              <FaUserCircle className="text-yellow-500 text-2xl" />
              <Link href="/creator/1" className="ml-2 text-blue-500 text-xl">David Jackoff</Link>
            </div>
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-500 text-xl" />
              <span className="ml-2 text-xl">4.7 (1k)</span>
            </div>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <span className="text-2xl font-bold mb-4">$25</span>
          </div>
          <div className="flex my-5 md:my-0 lg:my-0 2xl:my-0 space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded">Add To Cart</button>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl text-center md:text-start font-bold mb-4">Product Highlights</h2>
      <div className="grid grid-cols-2 py-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {['Easy to use', 'Easy Returns', 'Result in 10 days', 'Google certified'].map((highlight, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <FaStar className="text-yellow-500  text-4xl mb-2" />
            <p>{highlight}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="bg-white p-4 shadow-lg rounded-lg">
            <div className="flex items-center mb-4">
            
              <div className="ml-4">
                <div className="flex items-center  mb-2">
                <div className="bg-yellow-300 h-14 w-14 rounded-full mr-3"></div>
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Sed do eiusmod tempor.
                    </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Explore Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="bg-white p-4 shadow-lg rounded-lg relative">
            <div className="bg-yellow-300 h-40 w-full rounded-t-lg relative">
              <button
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
                onClick={() => toggleFavorite(idx)}
              >
                <FaHeart className={`${favorites[idx] ? 'text-red-500' : 'text-gray-500'} text-xl`} />
              </button>
            </div>
            <div className="mt-4">
              <p className="text-center font-semibold">Beverage Animation</p>
              <div className="flex justify-center items-center mt-2">
                <FaUserCircle className="text-yellow-500" />
                <Link href="/creator/1" className="ml-2 text-blue-500">David Jackoff</Link>
              </div>
              <div className="flex justify-center items-center mt-2 text-gray-600">
                <FaStar className="text-yellow-500" />
                <span className="ml-1">4.7 (1k)</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold">$25</span>
                <button className="bg-gray-100 p-2 rounded-full shadow">
                  <FaShoppingCart className="text-gray-600 text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
   
  );
};

export default ProductDetail;
