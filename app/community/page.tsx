'use client'
import React from 'react';
import Image from 'next/image';
import ImageCarousel from '@/components/ImageCarousel';
import useCommunitySearch from '@/components/shared/community-id/useCommunitySearch';
import { selectFilteredCommunities } from '@/utils/communitySlice';
import { useSelector } from 'react-redux';
import Link from 'next/link';

interface CommunityCardData {
  id: number;
  img_url: string;
  title: string;
  members: string;
}

const CommunityPage: React.FC = () => {
  const filteredCommunities = useSelector(selectFilteredCommunities);
  const { searchTerm, handleSearchChange } = useCommunitySearch();

  return (
    <div>
      <div className='w-full bg-secondary'>
        <header className="text-center mb-8 max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold py-7 text-yellow-500">CLAMIO COMMUNITY</h1>
          <p className="text-xl text-white mt-2">Collaborate and Interact with the creators community</p>
        </header>

        <div className="hidden sm:grid md:grid md:grid-cols-3 mt-10 text-white gap-8 mb-12 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <img src="/pana.png" alt="Reach Out" className="mx-auto mb-4 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover" />
            <h2 className="text-xl font-semibold">Reach Out</h2>
          </div>
          <div className="text-center">
            <img src="/cuate3.png" alt="Find Common Ground" className="mx-auto mb-4 object-cover" />
            <h2 className="text-xl font-semibold">Find Common Ground</h2>
          </div>
          <div className="text-center">
            <img src="/amico.png" alt="Go CLAMIO" className="mx-auto mb-4 object-cover" />
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
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {filteredCommunities.map((card: CommunityCardData, index: number) => (
          <div key={index} className="text-center p-4 border border-gray-200 rounded-lg shadow-lg bg-white transition transform hover:scale-105">
            <Link href={`/community/${card.id}`}>
              <div className="cursor-pointer">
                <div className="relative w-full h-32 sm:h-48 mb-4">
                  <Image
                    src={card.img_url}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <h2 className="font-semibold text-lg">{card.title}</h2>
                <p className="text-gray-500">{card.members}</p>
              </div>
            </Link>
            <Link href={`/community/${card.id}`}>
              <button className="mt-4 bg-secondary text-white py-2 px-4 rounded">Join Community</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
