// src/pages/wishlist.tsx
'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import ProductCard from '@/components/shared/cards/ProductCard';

const WishlistPage = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p>No items in your wishlist.</p>
      )}
    </div>
  );
};

export default WishlistPage;
