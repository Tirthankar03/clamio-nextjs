import React from 'react';
import Link from 'next/link';
import FavoriteButton from '../../../../Reusable Components/FavoriteButton'; // Assuming correct path
import { FaHeart, FaSearch, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import Headroom from 'react-headroom';
import { ProductDetailsData } from '@/constants/data'; // Corrected import name

const ProductDetail = () => {
  return (
    <>
      {/* <CSSTransition
        in={showSearch}
        timeout={200}
        classNames="search"
        unmountOnExit
      >
        <div className="sm:hidden relative mx-3 mb-4 mt-4">
          <input
            type="text"
            className="w-full p-4 pl-10 bg-gray-100 rounded-full"
            placeholder="Search"
          />
          <FaSearch className="absolute left-4 top-5 text-gray-500" />
        </div>
      </CSSTransition> */}

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-yellow-300 h-96 w-full rounded-lg"></div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">{ProductDetailsData[0].productDetails.title}</h1>
              <div className="flex items-center mb-4">
                <FaUserCircle className="text-yellow-500 text-2xl" />
                <Link href={ProductDetailsData[0].productDetails.creator.link}>
                  <div className="ml-2 text-blue-500 text-xl">{ProductDetailsData[0].productDetails.creator.name}</div>
                </Link>
              </div>
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 text-xl" />
                <span className="ml-2 text-xl">{ProductDetailsData[0].productDetails.rating} ({ProductDetailsData[0].productDetails.reviewsCount})</span>
                <span className="ml-2 text-xl">{ProductDetailsData[0].productDetails.rating} ({ProductDetailsData[0].productDetails.reviewsCount})</span>
              </div>
              <p className="mb-8">{ProductDetailsData[0].productDetails.description}</p>
              <span className="text-2xl font-bold mb-4">${ProductDetailsData[0].productDetails.price}</span>
            </div>
            <div className="flex my-5 md:my-0 lg:my-0 2xl:my-0 space-x-4">
              {ProductDetailsData[0].productDetails.buttons.map((button, idx) => (
                <button key={idx} className={button.className}>{button.text}</button>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-2xl text-center md:text-start font-bold mb-4">Product Highlights</h2>
        <div className="grid grid-cols-2 py-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ProductDetailsData[0].highlights.map((highlight, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <FaStar className="text-yellow-500 text-4xl mb-2" />
              <p>{highlight}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ProductDetailsData[0].reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-4 shadow-lg rounded-lg">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <div className="flex items-center mb-2">
                    <div className="bg-yellow-300 h-14 w-14 rounded-full mr-3"></div>
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p>{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Explore Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ProductDetailsData[0].similarProducts.map((product, idx) => (
            <div key={idx} className="bg-white p-4 shadow-lg rounded-lg relative">
              <div className="bg-yellow-300 h-40 w-full rounded-t-lg relative">
                <FavoriteButton product={product} />
              </div>
              <div className="mt-4">
                <p className="text-center font-semibold">{product.title}</p>
                <div className="flex justify-center items-center mt-2">
                  <FaUserCircle className="text-yellow-500" />
                  <Link href={product.creator.link}>
                    <a className="ml-2 text-blue-500">{product.creator.name}</a>
                  </Link>
                </div>
                <div className="flex justify-center items-center mt-2 text-gray-600">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-1">{product.rating} ({product.reviewsCount})</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="bg-gray-100 p-2 rounded-full shadow">
                    <FaShoppingCart className="text-gray-600 text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

{/* // pages/ProductDetail.tsx
import React from 'react';
import ProductInfo from '@/components/shared/Product-Details/ProductInfo';
import ProductHighlights from '@/components/shared/Product-Details/ProductHighlights';
import Reviews from '@/components/shared/Product-Details/Reviews';
import SimilarProducts from '@/components/shared/Product-Details/SimilarProducts';

const ProductDetail = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <ProductInfo />
        <ProductHighlights />
        <Reviews />
        <SimilarProducts />
      </div>
    </>
  );
}; */}


