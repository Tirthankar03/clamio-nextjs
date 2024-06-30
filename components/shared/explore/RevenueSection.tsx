// components/RevenueSection.js

import Image from 'next/image';

const RevenueSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Take home <span className="text-yellow-500">100%</span> of your Revenue
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Share Personalised Link on Instagram</li>
            <li>Sell digital products and services</li>
            <li>Get Payments securely by UPI, Card & Net Banking</li>
            <li>Pay Rs.0 per month and Keep up to 100% of revenue*</li>
            <li>Get 24/7 support to sell</li>
          </ul>
          <p className="text-sm text-gray-500">
            *We charge 12.5% on each successful transaction
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Clamio Premium</h3>
          <p className="text-4xl font-bold text-yellow-900 mb-4">Rs 0/-</p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-yellow-900">
            <li>Product Listing</li>
            <li>Personalised Dashboard</li>
            <li>24/7 Support</li>
            <li>5 GB Storage</li>
          </ul>
          <button className="px-6 py-3 bg-yellow-700 text-white rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
