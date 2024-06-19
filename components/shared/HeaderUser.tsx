//BAD PRACTICE
'use client'
import React, { useState } from 'react'
import { FaHeart, FaSearch, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
// import './LibraryPage.css';
import Headroom from 'react-headroom';
import Link from 'next/link';


const HeaderUser = () => {
    const [favorites, setFavorites] = useState(Array(4).fill(false));
    const [showSearch, setShowSearch] = useState(false);
  
    const toggleFavorite = (index: any) => {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    };  
  return (
    <div>
            <Headroom>
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
                <Link href='/explore'>
              <button className="bg-black sm:px-[0.3rem] font-semibold sm:py-[0.9rem] md:px-5 md:py-3 text-white px-4 py-2 rounded">Sell Your Product</button>
                </Link>
              <button className="p-2 rounded-full shadow bg-white">
                <FaHeart className="text-gray-500 text-2xl sm:text-xl md:text-2xl" />
              </button>
              <button className="p-2 rounded-full shadow bg-white">
                <FaShoppingCart className="text-gray-500 text-2xl sm:text-xl md:text-2xl" />
              </button>
            </div>
          </header>
        </div>
      </Headroom>

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
    </div>
  )
}

export default HeaderUser