'use client'
import React from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import DropDown from '@/components/Reusable Components/DropDownMenu';
import { Button } from '@/components/ui/button';
import { RootState } from '@/Store/store';

const NavigationLinks = () => {
    const cartItemCount = useSelector((state: RootState) => state.cart.items.length);
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    return (
        <>
            <Link href="/explore" className="text-lg hover:text-primary text-syne hidden md:block">
                <button type='button' className='bg-black text-white rounded-lg px-4 py-2'>Sell Your Product</button>
            </Link>
            <Link href="/wishlist">
                <button type='button'><FaHeart className="w-6 h-6" /></button>
            </Link>
            <Link href="/cart">
                <button type='button' className="relative">
                    <FaShoppingCart className="w-6 h-6 hover:cursor" />
                    {cartItemCount > 0 && (
                        <span className="absolute left-4 bottom-3 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                    )}
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
        </>
    );
}

export default NavigationLinks;
