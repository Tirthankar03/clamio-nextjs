'use client';
import React from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import DropDown from '@/components/Reusable Components/DropDownMenu';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { Button } from '@/components/ui/button';

const NavigationLinks = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <div className="flex items-center space-x-4">
      <Link href="/explore" className="hidden md:block">
        <button className="bg-black text-white rounded-lg md:text-sm lg:text-md md:px-6 md:py-2 lg:px-4 lg:py-2 hover:bg-gray-800 transition duration-300">
          Sell Your Product
        </button>
      </Link>
      <Link href="/wishlist">
        <button className="p-2 hover:text-yellow-500 transition duration-300">
          <FaHeart className="w-6 h-6" />
        </button>
      </Link>
      <Link href="/cart">
        <button className="p-2 hover:text-yellow-500 transition duration-300">
          <FaShoppingCart className="w-6 h-6" />
        </button>
      </Link>
      {isLoggedIn ? (
        <DropDown />
      ) : (
        <div className="flex gap-2">
          <Button className="font-semibold bg-yellow-400 text-black px-4 py-2 rounded-md shadow-md hover:bg-yellow-500 transition duration-300">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="font-semibold bg-yellow-400 text-black px-4 py-2 rounded-md shadow-md hover:bg-yellow-500 transition duration-300">
            <Link href="/signup">Signup</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavigationLinks;
