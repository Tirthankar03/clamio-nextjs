import React from 'react';
import { FaStar } from 'react-icons/fa';

const CommunityReviews: React.FC = () => (
    <>
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="bg-white p-4 shadow-lg rounded-lg">
                    <div className="flex items-center mb-4">
                        <div className="ml-4">
                            <div className="flex items-center mb-2">
                                <div className="bg-yellow-300 h-14 w-14 rounded-full mr-3"></div>
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
);

export default CommunityReviews;
