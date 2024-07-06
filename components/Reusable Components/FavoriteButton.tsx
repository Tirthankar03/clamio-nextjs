"use client"
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Toaster, toast } from 'sonner'
import { ProductDetailsData } from '@/constants/data';

function FavoriteButton({ idx }:any) { // Receive idx as a prop
  const [favorites, setFavorites] = useState(
    Array(ProductDetailsData[0].similarProducts.length).fill(false)
  );

  const toggleFavorite = () => {
    const newFavorites = [...favorites];
    newFavorites[idx] = !newFavorites[idx];
    setFavorites(newFavorites);
    toast.success("added to wishlist")
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
