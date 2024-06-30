import React from 'react';
import { cardData } from '@/constants/data';
import Card from '@/components/Reusable Components/Card';


function LibraryPage() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Your Library</h2>
        <button className="mb-4 px-4 py-2 border rounded">View All</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cardData.map((card, idx) => (
            <Card key={card.id} card={card} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LibraryPage;
