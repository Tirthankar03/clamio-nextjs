import React from 'react';
import { BOY_PNG, BRO_PNG } from '@/constants/data';
import CategoryCarousel from '@/components/shared/creator/CategoryCarousel';
import Category from '../creator/Category';


const RewardDetails = () => {
  return (
    <section className="text-center my-20 mb-8 overflow-hidden">
      <h2 className="md:text-4xl text-2xl font-bold my-10">Getting Reward is Easy</h2>
      <div className="overflow-x-hidden">
      <div className='hidden xl:block'>
           <Category  />
      </div>
    <div className='xl:hidden '>

      <CategoryCarousel />
    </div>
      </div>
      <div className="flex flex-col gap-10 my-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-xl py-3 md:py-0 font-bold">Refer to Creators</h3>
            <p className="md:my-3 py-7 md:py-0 md:text-lg mx-5 md:mx-0">On every successful referral you will earn 500 CLAMIO Reward Coins. Every 100 coin = Rs. 1</p>
          </div>
          <img src={BOY_PNG} alt="Refer Creators" className="max-w-xs md:max-w-sm h-auto" />
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-10">
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-xl py-6 md:py-0 font-bold">Sell 100 Products</h3>
            <p className="my-3 md:text-lg mx-5 md:mx-0">On every successful sale of 100 Product you will earn 10,000 CLAMIO Reward Coins. Every 100 coin = Rs. 1</p>
          </div>
          <img src={BRO_PNG} alt="Sell Products" className="max-w-xs md:max-w-sm h-auto" />
        </div>
      </div>
    </section>
  );
};

export default RewardDetails;
