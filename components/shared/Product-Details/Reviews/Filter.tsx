"use client"
import React from 'react';

const FilterComponent: React.FC = () => {
    return (
        <div className="p-4 bg-white border border-gray-200  shadow-lg max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sort by</h3>
            <select className="w-full bg-gray-100 text-gray-800 text-sm mb-4 py-2 px-3 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500">
                <option value="custom">Custom</option>
                <option value="newest-oldest">Price: Newest to Oldest</option>
                <option value="price-high-low">Price: Oldest to Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
            </select>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Minimum price</h3>
            <input type="number" name="minPrice" placeholder="$0" className="w-full bg-gray-100 text-gray-800 text-sm mb-4 py-2 px-3 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500" />

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Maximum price</h3>
            <input type="number" name="maxPrice" placeholder="∞" className="w-full bg-gray-100 text-gray-800 text-sm mb-4 py-2 px-3 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500" />

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Rating</h3>
            <div className="mb-4 text-sm text-gray-600">
                <label className="block mb-2">
                    <input type="radio" name="rating" value="5" className="mr-2 text-yellow-500" />
                    5 stars and up
                </label>
                <label className="block mb-2">
                    <input type="radio" name="rating" value="4" className="mr-2 text-yellow-500" />
                    4 stars and up
                </label>
                <label className="block mb-2">
                    <input type="radio" name="rating" value="3" className="mr-2 text-yellow-500" />
                    3 stars and up
                </label>
                <label className="block mb-2">
                    <input type="radio" name="rating" value="2" className="mr-2 text-yellow-500" />
                    2 stars and up
                </label>
                <label className="block mb-2">
                    <input type="radio" name="rating" value="1" className="mr-2 text-yellow-500" />
                    1 star and up
                </label>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Showing</h3>
            <div className="mb-4 text-sm text-gray-600">
                <label className="block mb-2">
                    <input type="checkbox" value="3d model" className="mr-2 text-yellow-500" />
                    3d model (2740)
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="vrchat" className="mr-2 text-yellow-500" />
                    vrchat (2630)
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="pbr" className="mr-2 text-yellow-500" />
                    pbr (1497)
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="game assets" className="mr-2 text-yellow-500" />
                    game assets (1142)
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="vrchat avatar" className="mr-2 text-yellow-500" />
                    vrchat avatar (1029)
                </label>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Category</h3>
            <div className="mb-4 text-sm text-gray-600">
                <label className="block mb-2">
                    <input type="checkbox" value="education" className="mr-2 text-yellow-500" />
                    Education
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="entertainment" className="mr-2 text-yellow-500" />
                    Entertainment
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="technology" className="mr-2 text-yellow-500" />
                    Technology
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="lifestyle" className="mr-2 text-yellow-500" />
                    Lifestyle
                </label>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">File Type</h3>
            <div className="mb-4 text-sm text-gray-600">
                <label className="block mb-2">
                    <input type="checkbox" value="pdf" className="mr-2 text-yellow-500" />
                    PDF
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="zip" className="mr-2 text-yellow-500" />
                    ZIP
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="image" className="mr-2 text-yellow-500" />
                    Image
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="video" className="mr-2 text-yellow-500" />
                    Video
                </label>
            </div>
        </div>
    );
};

export default FilterComponent;
