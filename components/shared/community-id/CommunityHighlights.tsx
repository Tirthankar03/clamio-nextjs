import React from 'react';

const CommunityHighlights: React.FC = () => (
    <>
        <h2 className="text-2xl font-bold mb-4 mt-8">Community Highlights</h2>
        <div className="grid grid-cols-2 py-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {['Engaging Content', 'Active Members', 'Frequent Events', 'Supportive Environment'].map((highlight, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <span className="text-yellow-500 text-4xl mb-2">★</span>
                    <p>{highlight}</p>
                </div>
            ))}
        </div>
    </>
);

export default CommunityHighlights;
