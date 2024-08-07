"use client";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import { ProductDetailsData } from "@/constants/data";
import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";

function FavoriteButton({ idx }: any) {
  const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);
  const isCreatorLogin = useSelector((store: RootState) => store.creator.isCreatorLoggedIn);
  // Receive idx as a prop
  const [favorites, setFavorites] = useState(
    Array(ProductDetailsData[0].similarProducts.length).fill(false)
  );

  const toggleFavorite = () => {
    const newFavorites = [...favorites];
    newFavorites[idx] = !newFavorites[idx];
    setFavorites(newFavorites);
    if(isLoggedIn || isCreatorLogin){
      if(newFavorites[idx]){
        toast.success("Added to wishlist");
      }
      else{
        toast.error("Removed from wishlist");
      }
      
    }
    else{
      toast.warning("You need to login first");
    }
    
  };

  return (
    <div>
      <button
        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
        onClick={toggleFavorite}
      >
        <FaHeart
          className={`${favorites[idx] ? "text-red-500" : "text-gray-500"} text-xl`}
        />
      </button>
    </div>
  );
}

export default FavoriteButton;
