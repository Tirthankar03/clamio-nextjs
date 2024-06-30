
import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';

import { cardData } from '@/constants/data';
import Card from '@/components/Reusable Components/Card';

const SimilarProducts = () => {


    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Explore Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cardData.slice(0, 4).map((product, idx) => (
              <Card key={idx} card={product} id={product.id} idx={idx} />
            ))}
            </div>
        </>
    );
};

export default SimilarProducts;
