import React from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const NavigationLinks = () => {
    return (
        <>
            <Link href="/explore" className="text-lg hover:text-primary text-syne hidden md:block"><button type='button' className='bg-black text-white rounded-lg px-4 py-2'>Sell Your Product</button>
            </Link>
            <Link href="/wishlist"><button type='button'><FaHeart className="w-6 h-6" /></button></Link>
            <Link href="/cart"> <button type='button'><FaShoppingCart className="w-6 h-6 hover:cursor" /></button></Link>
        </>
    );
};

export default NavigationLinks;
