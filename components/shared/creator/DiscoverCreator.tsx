import React from 'react';
import CreatorSlider from '@/components/shared/creator/CreatorSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Category from '@/components/shared/creator/Category';
import CategoryCarousel from '@/components/shared/creator/CategoryCarousel';

const DiscoverCreator = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-secondary text-white">
      <div className="hidden xl:block">
        <Category />
      </div>
      <div className="xl:hidden">
        <CategoryCarousel />
      </div>
      <div className="p-4">
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search Creator"
            className="px-5 border-4 border-black rounded-lg py-3 w-80 md:w-1/2 text-black"
          />
        </div>
      </div>
      <div className="p-4">
        <CreatorSlider type="Gaming" />
        <CreatorSlider type="YouTube" />
        <CreatorSlider type="Art" />
      </div>
    </div>
  );
};

export default DiscoverCreator;
