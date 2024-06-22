import React from 'react';

function Hero() {
  return (
    <section className="bg-secondary text-white p-4 sm:p-8 min-h-[60vh] md:min-h-[50vh] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto max-w-6xl">
        <div className="flex justify-center">
          <img className="w-full h-full md:mt-5 md:w-full md:h-full" src="\Blogging-bro.png" alt="Reward program" />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-7">
            Discover the <span className="text-yellow-500">CLAMIO</span> Wonderland
          </h2>
          <h3 className="text-xl md:text-2xl mb-4">
            Create and Sell Your Digital Products
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gray-300 font-semibold text-black w-full sm:w-44 py-2 md:py-3 md:px-6 rounded text-lg">
              JOIN NOW
            </button>
            <button className="bg-gray-300 font-semibold text-black w-full sm:w-60 py-2 md:py-3 md:px-6 rounded text-lg mt-4 sm:mt-0">
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
