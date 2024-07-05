import React from 'react';
import { EARN_POINT_PNG, REWARD_PNG, signInImage } from '@/constants/data';

const Steps = () => {
  return (
    <section className="flex justify-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center place-content-center mx-4 md:mx-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <img src={signInImage} alt="Sign In" className="mx-auto w-48 md:w-64 h-auto" />
          <h2 className="text-xl font-bold mt-4">Sign in</h2>
          <p className="mt-2 mx-4 md:mx-2 lg:mx-4 text-gray-600">Get Registered through CLAMIO with ZERO Registration Charges</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={REWARD_PNG} alt="View Rewards" className="mx-auto w-48 md:w-64 h-auto" />
          <h2 className="text-xl font-bold mt-4">View Rewards</h2>
          <p className="mt-2 mx-4 md:mx-2 lg:mx-4 text-gray-600">Get access to your personalized rewards dashboard</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={EARN_POINT_PNG} alt="Earn Points" className="mx-auto w-48 md:w-64 h-auto" />
          <h2 className="text-xl font-bold mt-4">Earn Points</h2>
          <p className="mt-2 mx-4 md:mx-2 lg:mx-4 text-gray-600">Earn CLAMIO reward points on every referral and product sale</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
