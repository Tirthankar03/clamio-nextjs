import FeaturesSection from '@/Reusable Components/FeaturesSection';
import ProductsPage from '@/components/explore/ProductsPage';
import React from 'react';

const CreateProductPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Create something new</h1>
      
      <div className="space-y-8">
        {/* Product Image/Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 flex items-center justify-center h-64 rounded-md shadow-sm cursor-pointer">
            <span className="text-2xl font-bold text-gray-400">+</span>
          </div>
          <div className="grid grid-cols-3 gap-2 lg:col-span-3">
            {Array(3).fill(null).map((_, idx) => (
              <div key={idx} className="bg-gray-100 flex items-center justify-center h-24 rounded-md shadow-sm cursor-pointer">
                <span className="text-2xl font-bold text-gray-400">+</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Name and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <input 
            type="text" 
            placeholder="Input Product Name" 
            className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            placeholder="Input Product Description" 
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-40 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Category */}
        <div>
          {/* <h2 className="text-xl font-semibold mb-4 text-gray-700">Input Product Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(null).map((_, idx) => (
              <div key={idx} className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-gray-100 h-24 rounded-md mb-4"></div>
                <h3 className="font-semibold text-gray-800 mb-2">Category Name</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            ))}
          </div> */}
            <ProductsPage/>
        </div>

        {/* Product Highlights */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Product Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(8).fill(null).map((_, idx) => (
              <input 
                key={idx} 
                type="text" 
                placeholder={`Feature ${idx + 1}`} 
                className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
        
        </div>

        {/* Set Price */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Set Price</h2>
          <div className="relative">
            <span className="absolute left-4 top-3 text-gray-500">₹</span>
            <input 
              type="text" 
              placeholder="Price" 
              className="w-full pl-10 border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-8">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600 transition-colors duration-200">
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 transition-colors duration-200">
            Launch Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProductPage;
