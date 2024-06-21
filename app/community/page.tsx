import React from 'react';
import ImageCarousel from '@/components/ImageCarousel';
import { communityCardsData } from '@/app/utils/constants';

function CommunityPage() {
  return (
    <div>
      <div className='w-full bg-secondary'>
        <header className="text-center mb-8 max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold py-4 text-yellow-500">CLAMIO COMMUNITY</h1>
          <p className="text-xl text-white mt-2">Collaborate and Interact with the creators community</p>
        </header>
        
        <div className="hidden sm:grid md:grid md:grid-cols-3 text-white gap-8 mb-12 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <img src="/pana.png" alt="Reach Out" className="mx-auto mb-4 sm:w-52 sm:h-52  object-cover" />
            <h2 className="text-xl font-semibold">Reach Out</h2>
          </div>
          <div className="text-center">
            <img src="/cuate.png" alt="Find Common Ground" className="mx-auto mb-4 object-cover" />
            <h2 className="text-xl font-semibold">Find Common Ground</h2>
          </div>
          <div className="text-center">
            <img src="/amico.png" alt="Go CLAMIO" className="mx-auto mb-4  object-cover" />
            <h2 className="text-xl font-semibold">Go CLAMIO</h2>
          </div>
        </div>

        <div className="block sm:hidden max-w-6xl mx-auto px-4">
          <ImageCarousel />
        </div>

        <div className="text-center mb-12 max-w-6xl mx-auto px-4">
          <button className="bg-yellow-500 my-10 px-8 sm:px-20 text-white py-3 font-semibold rounded">Learn More</button>
        </div>
      </div>
   
      <div className="mb-8 max-w-6xl mx-auto px-4">
  <input
    type="text"
    placeholder="Search Community"
    className="w-full  p-3 sm:p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500"
  />
</div>


      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {communityCardsData.map((card, index) => (
          <div key={index} className="text-center p-4 border border-gray-200 rounded-lg shadow-lg bg-white transition transform hover:scale-105">
            <div className="bg-yellow-300 h-48 mb-4 rounded-t-lg"></div>
            <h3 className="font-semibold text-lg">{card.title}</h3>
            <p className="text-gray-500 mb-2">{card.members}</p>
            <button className="bg-gray-800 text-white px-4 py-2 mt-3 rounded-lg hover:bg-gray-700">Join Community</button>
          </div>
        ))}
      </div>

      <footer className="bg-gradient-to-r mx-5 from-gray-100 to-gray-200 p-10 mt-12 text-center max-w-6xl md:mx-20 lg:mx-auto rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-gray-800">Setup a Community</h2>
  <p className="mt-4 text-lg text-gray-600">
    Reach out to like-minded Creators and Followers, expand your audience, find your common interest and GROW with CLAMIO.
  </p>
  <button className="bg-pink-500 text-white px-8 py-3 mt-6 rounded-full hover:bg-pink-600 shadow-md transition transform hover:scale-105">
    Go CLAMIO Now!!
  </button>
</footer>

    </div>
  );
}

export default CommunityPage;
