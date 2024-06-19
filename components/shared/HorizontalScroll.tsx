import React from 'react';

const categories = [
    'Tarot Card Reading',
    'Travel Guide',
    'Food Recipes',
    'Diet Plan',
    'Digital Art',
    'E-Sports Guide',
    'More'
];

const HorizontalScrollfirst = () => {
    return (
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4 py-2 px-4 bg-secondary w-5/6 mx-auto ">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 bg-white text-gray-800 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap hover:bg-gray-200 transition-colors duration-200 my-10"
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default HorizontalScrollfirst;
