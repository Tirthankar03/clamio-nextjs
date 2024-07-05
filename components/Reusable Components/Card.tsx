import React from 'react';
import { FaHeart, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';
import FavoriteButton from './FavoriteButton';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ card, idx }:any) => {
  return (
    <div key={card.id} className="bg-white p-4 shadow-lg rounded-lg relative">
      <Link href={`/product/${card.id}`}>
      
      <div className="relative  w-full rounded-t-lg overflow-hidden">
        <FavoriteButton key={idx} idx={idx} />
        <Image
          src="/assets/product-img/imgone.png" // Replace with your dummy image path
          alt="product card"
          layout="responsive"
          width={1000}
          height={600}
          objectFit="cover"
          className="cursor-pointer"
        />
      </div>
      </Link>
      
        
      <div className="mt-4">
        <p className="text-center font-semibold">{card.title}</p>
        <div className="flex justify-center items-center mt-2">
          <FaUserCircle className="text-yellow-500" />
          <Link href={`/creator/${card.id}`}>
          <div className="ml-2 text-blue-500 cursor-pointer">{card.author}</div>
          </Link>
          
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
  );
};

export default Card;
