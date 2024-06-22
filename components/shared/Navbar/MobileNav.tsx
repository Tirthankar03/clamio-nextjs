'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuStyles = {
        transition: 'transform 0.3s ease-in-out',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        zIndex: 50, // Ensures the menu is on top of everything else
    };

    return (
        <>
            <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
            >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
            <div
                style={menuStyles}
                className="fixed top-0 bottom-0 right-0 w-3/4 h-full bg-secondary text-white shadow-md"
            >
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="absolute top-4 right-4 p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <FaTimes className="w-6 h-6" />
                </button>
                <div className="pt-16">
                    <Link href="/sell" className="block px-4 py-2 hover:bg-gray-700 syne">
                        Sell Your Product
                    </Link>
                    <Link href="/favorites" className="block px-4 py-2 hover:bg-gray-700 syne">
                        Favorites
                    </Link>
                    <Link href="/cart" className="block px-4 py-2 hover:bg-gray-700 syne">
                        Cart
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
