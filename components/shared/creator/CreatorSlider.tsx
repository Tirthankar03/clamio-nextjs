// 'use client'
import React from 'react';
import Cards from '@/components/shared/creator/Cards';

const CreatorSlider = ({ type }: any) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl px-3  max-w-[1443px] mx-auto font-bold mb-4">{type}</h2>
      <Cards  />
    </div>
  );
};

export default CreatorSlider;
