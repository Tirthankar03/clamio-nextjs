import React from 'react';

const FilterComponent: React.FC = () => {
    return (
        <div className="filter-component p-4 bg-secondary border max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
            <h3 className="text-lg font-semibold mb-2">Sort by</h3>
            <select className="filter-select w-full text-black text-sm mb-4 py-4 border rounded focus:w-full focus:max-w-full">
                <option value="custom">Custom</option>
                <option value="newest-oldest">Price: Newest to Oldest</option>
                <option value="price-high-low">Price: Oldest to Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
            </select>

            <h3 className="text-lg font-semibold mb-2">Minimum price</h3>
            <input type="number" name="minPrice" placeholder="$0" className="filter-input w-full p-2 mb-4 border border-gray-300 rounded text-black text-sm p-4" />

            <h3 className="text-lg font-semibold mb-2">Maximum price</h3>
            <input type="number" name="maxPrice" placeholder="∞" className="filter-input w-full p-2 mb-4 border border-gray-300 rounded text-black text-sm p-4" />

            <h3 className="text-lg font-semibold mb-2">Rating</h3>
            <div className="filter-rating mb-4 text-lg">
                <label className="block mb-2">
                    <input type="radio" name="rating" value="5" className="mr-2" />
                    5 stars and up
                </label>
                <label className="block mb-2">
                    <input type="radio" name="rating" value="4" className="mr-2" />
                    4 stars and up
                </label>
                <label className="block mb-2">
                    <input type="radio" name="rating" value="3" className="mr-2" />
                    3 stars and up
                </label>
                <label className="block mb-2">
                    <input type="radio" name="rating" value="2" className="mr-2" />
                    2 stars and up
                </label>
                <label className="block mb-2">
                    <input type="radio" name="rating" value="1" className="mr-2" />
                    1 star and up
                </label>
            </div>

            <h3 className="text-lg font-semibold mb-2">Showing</h3>
            <div className="filter-showing mb-4 text-lg">
                <label className="block mb-2">
                    <input type="checkbox" value="3d model" className="mr-2" />
                    3d model (2740)
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="vrchat" className="mr-2" />
                    vrchat (2630)
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="pbr" className="mr-2" />
                    pbr (1497)
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="game assets" className="mr-2" />
                    game assets (1142)
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="vrchat avatar" className="mr-2" />
                    vrchat avatar (1029)
                </label>
            </div>

            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <div className="filter-category mb-4 text-lg">
                <label className="block mb-2">
                    <input type="checkbox" value="education" className="mr-2" />
                    Education
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="entertainment" className="mr-2" />
                    Entertainment
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="technology" className="mr-2" />
                    Technology
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="lifestyle" className="mr-2" />
                    Lifestyle
                </label>
            </div>

            <h3 className="text-lg font-semibold mb-2">File Type</h3>
            <div className="filter-file-type mb-4 text-lg">
                <label className="block mb-2">
                    <input type="checkbox" value="pdf" className="mr-2" />
                    PDF
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="zip" className="mr-2" />
                    ZIP
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="image" className="mr-2" />
                    Image
                </label>
                <label className="block mb-2">
                    <input type="checkbox" value="video" className="mr-2" />
                    Video
                </label>
            </div>
        </div>
    );
};

export default FilterComponent;
