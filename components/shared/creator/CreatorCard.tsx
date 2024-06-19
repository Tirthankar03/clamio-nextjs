'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const CreatorCard = ({ type }:any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative w-full md:w-full lg:w-full xl:w-full h-96">
          <Link href='/creator/1'>
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
          <span className="text-2xl text-black font-semibold">DJ</span>
        </div>
        <div className="ml-4 text-center md:text-left mt-4 md:mt-0">
          <h2 className="font-bold text-xl md:text-xl xl:text-2xl lg:text-2xl text-gray-900">David Jackoff</h2>
          <p className="text-gray-600">12k followers • 3k Products</p>
        </div>
      </div>
      <p className="mt-4 text-center md:text-center text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        consectetur adipiscing elit.
        consectetur adipiscing elit.
      </p>
  
      </Link>
      <button
        className="absolute top-2 right-2 bg-transparent border-none outline-none"
        onClick={toggleFavorite}
      >
        <FaHeart className={`${isFavorite ? 'text-red-500' : 'text-gray-500'} text-2xl`} />
      </button>
      <button
        className=" mt-10 sm:mt-10 md:mt-28 lg:mt-20 xl:mt-20 2xl:mt-28 w-full bg-yellow-500 text-black py-3 rounded-md font-semibold hover:bg-yellow-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
      >
        Follow
      </button>
    </div>
  );
};

export default CreatorCard;
