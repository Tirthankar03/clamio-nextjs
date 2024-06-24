
import { cardData } from '@/constants/data';
import React, { useState } from 'react'
import { FaHeart, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';
import FavoriteButton from './FavoriteButton';
import { Link } from 'lucide-react';


const Card = () => {
   
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {cardData.map((card,idx) => (
        
      <div key={card.id} className="bg-white p-4 shadow-lg rounded-lg relative">
        <div className="bg-yellow-300 h-[300px] w-full rounded-t-lg relative">
        <FavoriteButton key={idx} idx={idx} />
        </div>
       
        <div className="mt-4">
          <p className="text-center font-semibold">{card.title}</p>
          <div className="flex justify-center items-center mt-2">
            <FaUserCircle className="text-yellow-500" />
            
            <div  className="ml-2 text-blue-500">{card.author}</div>
          </div>
          <div className="flex justify-center items-center mt-2 text-gray-600">
            <FaStar className="text-yellow-500" />
            <span className="ml-1">{card.rating} ({card.numReviews})</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold">${card.price}</span>
            <button className="bg-gray-100 p-2 rounded-full shadow">
              <FaShoppingCart className="text-gray-600 text-xl" />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Card;