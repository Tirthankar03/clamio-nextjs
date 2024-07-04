import React from 'react';
import { STAR1_PNG, STAR2_PNG, STAR3_PNG } from '@/constants/data';

const LevelUp = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">How to Level up and Earn Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Level 1 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="flex justify-center mb-4">
            <img src={STAR1_PNG} alt="CLAMIO Debut" className="w-32 h-32 md:w-40 md:h-40" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2"><span className="text-primary">CLAMIO</span> Debut</h3>
          <ul className="text-sm md:text-base text-left list-disc list-inside mb-2 md:mb-4">
            <li>1 Sale / 1 Referral</li>
          </ul>
        </div>
        {/* Level 2 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="flex justify-center mb-4">
            <img src={STAR2_PNG} alt="CLAMIO Star" className="w-40 h-40 md:w-48 md:h-48" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2"><span className="text-primary">CLAMIO</span> Star</h3>
          <ul className="text-sm md:text-base text-left list-disc list-inside mb-2 md:mb-4">
            <li>100 Sales / 25 Referrals</li>
            <li>Redeem your CLAMIO Coins</li>
          </ul>
        </div>
        {/* Level 3 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="flex justify-center mb-4">
            <img src={STAR3_PNG} alt="CLAMIO Boss" className="w-40 h-40 md:w-48 md:h-48" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2"><span className="text-primary">CLAMIO</span> Boss</h3>
          <ul className="text-sm md:text-base text-left list-disc list-inside mb-2 md:mb-4">
            <li>5000 Sales</li>
            <li>Redeem your CLAMIO Coins</li>
            <li>45% Discount on Transactional Charges</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LevelUp;
