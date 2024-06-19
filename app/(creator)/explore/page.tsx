import React from "react";
import vecone from "../../../public/assets/svg/vec-one.png";
import vectwo from "/assets/svg/vec-two.png";
import vecthree from "/assets/svg/vec-three.png";
import ProductsCategory from "@/components/shared/ProductsCategory";
// import vecfour from "/assets/svg/vec-four.png";
// import vecfive from "/assets/svg/vec-five.png";
// import vecsix from "/assets/svg/vec-six.png";

const Explore = () => {
  return (
    <div className="min-h-screen bg-secondary text-white">
      {/* Section 1 */}
      <div className="explore-container mx-auto w-11/12 max-w-7xl py-20">
        <div className="one-image w-5/6 px-10 py-0">
          <img
            src="/assets/svg/vec-one.png"
            alt="Reward program"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <div className="left-content p-6 md:p-12">
          <h1 className="py-10 text-3xl font-bold sm:text-4xl md:text-6xl xl:text-7xl">
            Discover the <span className="text-yellow-500">CLAMIO</span>{" "}
            Wonderland
          </h1>
          <h2 className="py-4 text-2xl md:text-4xl lg:py-2 xl:py-2 2xl:py-4">
            Create and Sell Your Digital Products
          </h2>
          <div className="grid grid-cols-1 justify-items-start gap-4 py-10 md:grid-cols-2 md:py-12 lg:w-fit xl:py-20">
            <button
              // onClick={() => {}}
              className="md:w-200 mt-6 w-full bg-white px-8 py-4 font-bold text-black"
            >
              JOIN NOW
            </button>
            <button className="md:w-200 mt-6 w-full bg-white px-8 py-4 font-bold text-black">
              Browse Products
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center bg-white px-10 py-20 text-black">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center p-6 text-center">
              <img
                src="/assets/svg/vec-two.png"
                alt="Effortless Upload and Sell"
                className=""
                style={{ width: "400px", height: "400px" }}
              />
            </div>
            <div className="flex flex-col items-start p-6 text-center">
              <h1 className="py-5 text-2xl font-bold md:text-4xl">
                Effortless Upload and Sell
              </h1>
              <h2 className="py-8 text-left text-xl md:text-2xl">
                Upload your digital products effortlessly with CLAMIO’s
                easy-to-use Platform built exclusively for Digital Creators
              </h2>
              <button className="w-full bg-primary px-8 py-2 py-4 font-bold text-black lg:w-min lg:px-20">
                Explore
              </button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:px-20">
            <div className="flex flex-col items-start p-6 text-center">
              <h1 className="py-5 text-2xl font-bold md:text-4xl">
                Secure Payments and Same Day Payout
              </h1>
              <h2 className="py-8 text-left text-xl md:text-2xl">
                Get your Payments within 24 hours on a successful transaction by
                consumer through CLAMIO’s secured payment Gateway
              </h2>
              <button className="w-full bg-primary px-8 py-2 py-4 font-bold text-black shadow-lg shadow-yellow-500 lg:w-min lg:px-20">
                Explore
              </button>
            </div>
            <div className="flex flex-col items-center p-6 text-center">
              <img
                src="/assets/svg/vec-three.png"
                alt="Effortless Upload and Sell"
                className=""
                style={{ width: "400px", height: "400px" }}
              />
            </div>
          </div>
          <br></br>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center p-6 text-center">
              <img
                src="/assets/svg/vec-four.png"
                alt="Effortless Upload and Sell"
                className=""
                style={{ width: "550px", height: "400px" }}
              />
            </div>
            <div className="flex flex-col items-start p-6 text-center">
              <h1 className="py-5 text-2xl font-bold md:text-4xl">
                Personalized Dashboard
              </h1>
              <h2 className="py-8 text-left text-xl md:text-2xl">
                Get your CLAMIO Personalized Dashboard to get curated insights
                about your products, customers, and peers.
              </h2>
              <button className="w-full bg-primary px-8 py-2 py-4 font-bold text-black lg:w-min lg:px-20">
                Explore
              </button>
            </div>
          </div>
          <img
            src="/assets/svg/vec-five.png"
            className="icon-container mx-auto w-full max-w-sm"
          />
          <ProductsCategory />
          <div className="flex justify-center py-10">
            <button className="bg-primary px-16 py-6 font-bold text-black sm:w-full">
              Browse products
            </button>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="creator-container mx-auto w-11/12 max-w-7xl px-10 py-20">
        <div className="py-10 text-3xl font-bold md:text-6xl lg:text-8xl">
          Meet the <span className="text-yellow-500">CLAMIO</span> Creator{" "}
        </div>
        <br />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="row-span-2 flex flex-col items-start text-xl md:text-2xl">
            <p className="text-justify">
              Welcome to the creators’ stage, where the magic happens! Say hello
              to an eclectic mix of artists, experts, and storytellers, all
              ready to enchant you with their digital masterpieces.
            </p>
            <br />
            <p className="text-justify">
              Discover the minds behind your favorite digital products and
              follow them to stay updated with their latest works. Whether
              you're an e-sports enthusiast, a health-conscious individual, a
              spiritual seeker, a travel aficionado, or a food lover, you're
              bound to discover a creator who speaks to your interests.
            </p>
            <br />
            <p className="md:hidden lg:hidden xl:block">
              Join a community that’s teeming with talent and be the first to
              know about fresh releases, upcoming events, and exclusive goodies
              from these maestros of the digital realm!
            </p>
            <br />
          </div>
          <div className="flex flex-col items-start md:mt-12 lg:mt-0">
            <img
              src="/assets/svg/vec-six.png"
              style={{ width: "550px", height: "350px" }}
            />
          </div>
        </div>
        <div className="row-span-2 flex hidden flex-col items-start text-xl md:block md:text-2xl xl:hidden">
          <p>
            Join a community that’s teeming with talent and be the first to know
            about fresh releases, upcoming events, and exclusive goodies from
            these maestros of the digital realm!
          </p>
          <br />
        </div>
        <br />
        <div className="justify-left flex">
          <button className="mt-4 w-full bg-white p-4 px-8 text-xl font-bold text-black lg:w-1/5">
            Browse products
          </button>
        </div>
      </div>


            {/* Section 4 */}
            <div className="w-full bg-white">
        <div className="inspired-container mx-auto max-w-7xl bg-white px-20 py-20 text-black 2xl:px-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="row-span-2 flex flex-col items-start text-xl md:text-2xl">
              <div className="py-10 text-3xl font-bold md:text-6xl">
                Take home<span className="text-yellow-500">100% </span> of your
                Revenue
              </div>
              <ul className="list-disc pl-4 text-xl">
                <li className="mb-2 text-lg font-medium">
                  Share Personalised Link on Instagram
                </li>
                <li className="mb-2 text-lg font-medium">
                  Sell digital products and services
                </li>
                <li className="mb-2 text-lg font-medium">
                  Get Payments securely by UPI, Card & Net Banking
                </li>
                <li className="mb-2 text-lg font-medium">
                  Pay Rs.0 per month and Keep up to 100% of revenue*
                </li>
                <li className="mb-2 text-lg font-medium">
                  Get 24/7 support to sell.
                </li>
              </ul>
              <br />
              <h6 className="text-sm">
                *We charge 12.5% on each successful transaction
              </h6>
            </div>
            <div className="row-span-2 flex flex-col items-start text-xl md:text-2xl">
              <h6 className="py-16 text-sm">Claimo premium</h6>
              <p className="text-2xl md:text-4xl">Rs 0/-</p>
              <br />
              <ul className="list-disc py-8 pl-4 text-xl">
                <li className="mb-2 text-lg font-medium">
                  Share Personalised Link on Instagram
                </li>
                <li className="mb-2 text-lg font-medium">
                  Sell digital products and services
                </li>
                <li className="mb-2 text-lg font-medium">
                  Get Payments securely by UPI, Card & Net Banking
                </li>
                <li className="mb-2 text-lg font-medium">
                  Pay Rs.0 per month and Keep up to 100% of revenue*
                </li>
                <li className="mb-2 text-lg font-medium">
                  Get 24/7 support to sell.
                </li>
              </ul>
              <button className="rounded bg-primary px-10 py-4 text-black sm:w-full lg:w-fit">
                Get Started
              </button>
              <br />
            </div>
          </div>
          <br />
          {/* <div className="py-6 text-2xl font-bold md:text-4xl">FAQs</div> */}
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="row-span-2 flex flex-col items-start text-xl md:text-2xl">
              <h2 className="py-6 text-xl text-blue-800 md:text-2xl lg:text-3xl">
                Can I add a wide range of products?
              </h2>
              <br />
              <p>
                Absolutely! Our platform allows you to easily add a wide range
                of products from your catalog.
              </p>
            </div>
            <div className="row-span-2 flex flex-col items-start text-xl text-blue-800 md:text-2xl">
              <h2 className="py-6 text-xl md:text-2xl lg:text-3xl">
                What kind of digital products can I sell?
              </h2>
              <br />
              <p className="text-black">
                You can sell a wide range of digital products like ebooks,
                software, videos, music, and more.
              </p>
            </div>
          </div> */}

          {/* import FAQ yourself */}
          {/* <FAQ/> */}
          <br />
        </div>
      </div>

      <div className="w-full bg-white">
         <div className="mx-auto flex max-w-7xl flex-col items-center bg-white text-black">
        <img
          src="/assets/svg/vec-five.png"
          className="icon-container"
          style={{ width: "450px", height: "350px" }}
        />
        <h1 className="w-5/6 py-2 text-center text-2xl font-bold md:text-4xl">
          Get Inspired
        </h1>
        <p className="w-5/6 text-center text-xl">
          Don’t miss out on fresh content and follow your favorite creators
          today!
          <br /> Stay in the loop and never miss their newest creations.
        </p>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
          <button className="bg-primary px-10 py-4 font-bold text-black sm:w-full lg:w-fit">
            Browse Products
          </button>
          <button className="bg-primary px-10 py-4 font-bold text-black sm:w-full lg:w-fit">
            Discover Creators
          </button>
        </div>
        <br />
      </div>
      </div>
    </div>
  );
};

export default Explore;
