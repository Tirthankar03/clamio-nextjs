import React from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const NavigationLinks = () => {
    return (
        <>
            <Link href="/sell" className="text-lg hover:text-primary text-syne hidden md:block">
                Sell Your Product
            </Link>
            <FaHeart className="w-6 h-6 hover:text-primary" />
            <FaShoppingCart className="w-6 h-6 hover:text-primary" />
        </>
    );
};

export default NavigationLinks;
