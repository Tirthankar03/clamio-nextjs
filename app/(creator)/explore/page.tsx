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
     <section className="bg-secondary text-white p-4 sm:p-8 min-h-[60vh] md:min-h-[50vh] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto max-w-6xl">
        <div className="flex justify-center">
          <img className="w-64 h-64 mt-5 md:w-full md:h-full" src="\Blogging-bro.png" alt="Reward program" />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-7">
            Discover the <span className="text-yellow-500">CLAMIO</span> Wonderland
          </h2>
          <h3 className="text-2xl mb-4">
            Create and Sell Your Digital Products
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gray-300 font-semibold text-black py-2 px-4 md:py-3 md:px-6 rounded text-lg">
              JOIN NOW
            </button>
            <button className="bg-gray-300 font-semibold text-black py-2 px-4 md:py-3 md:px-6 rounded text-lg">
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </section>

      {/* Section 2 */}
      <div className="w-full bg-white text-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 md:px-10 py-10 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="flex flex-col items-center text-center">
              <img
                src="\13858475_5370051.jpg"
                alt="Effortless Upload and Sell"
                className="w-3/4 h-auto md:w-3/4"
              />
            </div>
            <div className="flex flex-col items-start p-4 md:p-6 text-left">
              <h1 className="py-3 md:py-5 text-xl font-bold md:text-3xl">
                Effortless Upload and Sell
              </h1>
              <h2 className="py-4 md:py-8 text-lg md:text-xl">
                Upload your digital products effortlessly with CLAMIO’s
                easy-to-use Platform built exclusively for Digital Creators
              </h2>
              <button className="w-full bg-primary px-6 py-2 md:py-2 font-bold text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out lg:w-min lg:px-16">
                Explore
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:px-10 gap-6 md:gap-10 mt-10 md:mt-20">
            <div className="flex flex-col items-start p-4 md:p-6 text-left">
              <h1 className="py-3 md:py-5 text-xl font-bold md:text-3xl">
                Secure Payments and Same Day Payout
              </h1>
              <h2 className="py-4 md:py-8 text-lg md:text-xl">
                Get your Payments within 24 hours on a successful transaction by
                consumer through CLAMIO’s secured payment Gateway
              </h2>
              <button className="w-full bg-primary px-6 py-2 md:py-2 font-bold text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out lg:w-min lg:px-16">
                Explore
              </button>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="\Secure data-bro.png"
                alt="Secure Payments and Same Day Payout"
                className="w-60 h-auto md:w-3/4"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10 md:mt-20">
            <div className="flex flex-col items-center text-center">
              <img
                src="\Social Dashboard-cuate.png"
                alt="Personalized Dashboard"
                className="w-3/4 h-auto md:w-3/4"
              />
            </div>
            <div className="flex flex-col items-start p-4 md:p-6 text-left">
              <h1 className="py-3 md:py-5 text-xl font-bold md:text-3xl">
                Personalized Dashboard
              </h1>
              <h2 className="py-4 md:py-8 text-lg md:text-xl">
                Get your CLAMIO Personalized Dashboard to get curated insights
                about your products, customers, and peers.
              </h2>
              <button className="w-full bg-primary px-6 py-2 md:py-2 font-bold text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out lg:w-min lg:px-16">
                Explore
              </button>
            </div>
          </div>
          
          <img
            src="/assets/svg/vec-five.png"
            className="icon-container mx-auto w-full max-w-xs mt-10 md:mt-20"
          />
          <ProductsCategory />
          <div className="flex justify-center py-10">
            <button className="bg-primary px-12 md:px-16 py-4 md:py-6 font-bold text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out sm:w-full">
              Browse products
            </button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="creator-container mx-auto w-11/12 max-w-7xl px-4 md:px-10 py-20">
        <div className="py-10 text-3xl font-bold md:text-5xl lg:text-6xl">
          Meet the <span className="text-yellow-500">CLAMIO</span> Creator{" "}
        </div>
        <br />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="row-span-2 flex flex-col items-start text-lg md:text-xl">
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
            <p className="hidden xl:block">
              Join a community that’s teeming with talent and be the first to
              know about fresh releases, upcoming events, and exclusive goodies
              from these maestros of the digital realm!
            </p>
            <br />
          </div>
          <div className="flex flex-col items-start md:mt-12 lg:mt-0">
            <img
              src="\Creative thinking-cuate.png"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="row-span-2 flex hidden flex-col items-start text-lg md:block md:text-xl xl:hidden">
          <p>
            Join a community that’s teeming with talent and be the first to know
            about fresh releases, upcoming events, and exclusive goodies from
            these maestros of the digital realm!
          </p>
          <br />
        </div>
        <br />
        <div className="justify-left flex">
          <button className="mt-4 w-full bg-white p-4 px-8 text-lg font-bold text-black lg:w-1/5">
            Browse products
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full bg-white">
        <div className="inspired-container mx-auto max-w-7xl bg-white px-4 md:px-20 py-20 text-black">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="row-span-2 flex flex-col items-start text-lg md:text-xl">
              <div className="py-10 text-3xl font-bold md:text-5xl">
                Take home<span className="text-yellow-500">100%</span> of your
                Revenue
              </div>
              <ul className="list-disc pl-4 text-lg">
                <li className="mb-2 font-medium">
                  Share Personalised Link on Instagram
                </li>
                <li className="mb-2 font-medium">
                  Sell digital products and services
                </li>
                <li className="mb-2 font-medium">
                  Get Payments securely by UPI, Card & Net Banking
                </li>
                <li className="mb-2 font-medium">
                  Pay Rs.0 per month and Keep up to 100% of revenue*
                </li>
                <li className="mb-2 font-medium">
                  Get 24/7 support to sell.
                </li>
              </ul>
              <br />
              <h6 className="text-sm">
                *We charge 12.5% on each successful transaction
              </h6>
            </div>
            <div className="row-span-2 flex flex-col items-start text-lg md:text-xl">
              <h6 className="py-16 text-sm">Claimo premium</h6>
              <p className="text-2xl md:text-4xl">Rs 0/-</p>
              <br />
              <ul className="list-disc py-8 pl-4 text-lg">
                <li className="mb-2 font-medium">
                  Share Personalised Link on Instagram
                </li>
                <li className="mb-2 font-medium">
                  Sell digital products and services
                </li>
                <li className="mb-2 font-medium">
                  Get Payments securely by UPI, Card & Net Banking
                </li>
                <li className="mb-2 font-medium">
                  Pay Rs.0 per month and Keep up to 100% of revenue*
                </li>
                <li className="mb-2 font-medium">
                  Get 24/7 support to sell.
                </li>
              </ul>
              <button className="rounded bg-primary px-10 py-4 text-black sm:w-full lg:w-fit">
                Get Started
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center bg-white text-black px-4 py-20">
          <img
            src="/assets/svg/vec-five.png"
            className="icon-container"
            style={{ width: "300px", height: "250px" }}
          />
          <h1 className="w-5/6 py-2 text-center text-xl font-bold md:text-3xl">
            Get Inspired
          </h1>
          <p className="w-5/6 text-center text-lg">
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
        </div>
      </div>
    </div>
  );
};

export default Explore;
