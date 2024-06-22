'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const MenuToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleMenu}
                type="button"
                className="md:hidden inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-secondary text-white shadow-md">
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
            )}
        </>
    );
};

export default MenuToggle;
