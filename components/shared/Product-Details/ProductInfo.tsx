// components/ProductInfo.tsx
import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { productsInfo } from '@/constants/data';

// Select the product you want to display
const product = productsInfo[0]; // Replace 0 with the index of the desired product

const ProductInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <Image
                src={product.image}
                alt="product card"
                layout="fill"
                objectFit="cover"
                className="cursor-pointer"
            />
        </div>
        <div className="flex flex-col justify-between">
            <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <div className="flex items-center mb-4">
                    <FaUserCircle className="text-yellow-500 text-2xl" />
                    <Link href={`/creator/1`} className="ml-2 text-blue-500 text-xl">{product.author.name}</Link>
                </div>
                <div className="flex items-center mb-4">
                    <FaStar className="text-yellow-500 text-xl" />
                    <span className="ml-2 text-xl">{product.rating} ({product.reviews})</span>
                </div>
                <p className="mb-8">
                    {product.description}
                </p>
                <span className="text-2xl font-bold mb-4">${product.price}</span>
            </div>
            <div className="flex my-5 md:my-0 lg:my-0 2xl:my-0 space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded">Add To Cart</button>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded">Buy Now</button>
            </div>
        </div>
    </div>
);

export default ProductInfo;
