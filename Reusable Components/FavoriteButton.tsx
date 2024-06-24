"use client"
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ProdudctDetailData } from '@/constants/data';

function FavoriteButton({ idx }:any) { // Receive idx as a prop
  const [favorites, setFavorites] = useState(
    Array(ProdudctDetailData[0].similarProducts.length).fill(false)
  );

  const toggleFavorite = () => {
    const newFavorites = [...favorites];
    newFavorites[idx] = !newFavorites[idx];
    setFavorites(newFavorites);
  };

  return (
    <div>
      <button
        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
        onClick={toggleFavorite}
      >
        <FaHeart className={`${favorites[idx] ? 'text-red-500' : 'text-gray-500'} text-xl`} />
      </button>
    </div>
  );
}

export default FavoriteButton;
