// components/SimilarProducts.tsx
'use client';
import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

const SimilarProducts = () => {
    const [favorites, setFavorites] = useState(Array(4).fill(false));

    const toggleFavorite = (index: number) => {
        const newFavorites = [...favorites];
        newFavorites[index] = !newFavorites[index];
        setFavorites(newFavorites);
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Explore Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <div key={idx} className="bg-white p-4 shadow-lg rounded-lg relative">
                        <div className="bg-yellow-300 h-40 w-full rounded-t-lg relative">
                            <button
                                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
                                onClick={() => toggleFavorite(idx)}
                            >
                                <FaHeart className={`${favorites[idx] ? 'text-red-500' : 'text-gray-500'} text-xl`} />
                            </button>
                        </div>
                        <div className="mt-4">
                            <p className="text-center font-semibold">Beverage Animation</p>
                            <div className="flex justify-center items-center mt-2">
                                <FaUserCircle className="text-yellow-500" />
                                <Link href="/creator/1" className="ml-2 text-blue-500">David Jackoff</Link>
                            </div>
                            <div className="flex justify-center items-center mt-2 text-gray-600">
                                <FaStar className="text-yellow-500" />
                                <span className="ml-1">4.7 (1k)</span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold">$25</span>
                                <button className="bg-gray-100 p-2 rounded-full shadow">
                                    <FaShoppingCart className="text-gray-600 text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SimilarProducts;
