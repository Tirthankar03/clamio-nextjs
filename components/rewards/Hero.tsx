import React from 'react';
import { CUATE_PNG, GOLD_SACK } from '@/constants/index';

const Hero = () => {
  return (
    <section className="bg-secondary text-white p-4 sm:p-8 min-h-[60vh] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-auto max-w-6xl">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl my-8 md:mb-6"><span className="text-yellow-500 font-bold pr-4 leading-tight">CLAMIO</span>Reward Program</h2>
          <p className="my-7 md:text-lg">Refer CLAMIO to fellow creators or sell 100 Digital Products through CLAMIO, & </p>
          <p className='text-3xl font-bold mb-5 text-primary'>
            earn Rs. 50000*
          </p> 
          {/* Button visible on larger screens */}
          <button className="bg-gray-300 hidden sm:inline md:inline font-semibold text-black sm:py-3 sm:px-20 md:py-3 md:px-20 rounded text-lg my-8">VIEW DASHBOARD</button>
        </div>
        <div className="flex justify-center">
          <img className="sm:w-[25rem] sm:h-[25rem] md:w-[25rem] md:h-[25rem] lg:w-[35rem] lg:h-[35rem]" src={GOLD_SACK

          } alt="Hero" />
        </div>
        
        {/* Button visible on smaller screens */}
        {/* <button className="bg-gray-300 sm:hidden self-center md:hidden font-semibold text-black py-3 px-0 w-72 mx-8 rounded text-lg">VIEW DASHBOARD</button> */}
        <button className="bg-gray-300 block sm:hidden font-semibold text-black py-2 sm:py-3 sm:px-20 md:py-3 md:px-20 rounded text-lg my-8">VIEW DASHBOARD</button>

      </div>
    </section>
  );
}

export default Hero;
