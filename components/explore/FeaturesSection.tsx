// components/FeaturesSection.js
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <div className="w-full bg-white text-black">

      <section className="text-center max-w-6xl mx-auto my-20 mb-8 overflow-hidden">
      <div className=" max-w-6xl mx-auto grid grid-cols-1 gap-16 my-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Effortless Upload and Sell */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center justify-between">
          <div className="relative w-full h-80 md:h-96">
            <Image src="/13858475_5370051.jpg" alt="Effortless Upload and Sell" layout="fill" objectFit="cover" />
          </div>
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-3xl py-4 font-bold">Effortless Upload and Sell</h3>
            <p className="text-lg md:text-base my-4">
              Upload your digital products effortlessly with CLAMIO’s easy-to-use platform built exclusively for digital creators.
            </p>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200">Explore</button>
          </div>
        </div>

        {/* Secure Payments and Same Day Payout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center justify-between">
          <div className="relative w-full h-80 md:h-96 md:order-2">
            <Image src="/Secure data-bro.png" alt="Secure Payments and Same Day Payout" layout="fill" objectFit="cover" />
          </div>
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-3xl py-4 font-bold">Secure Payments and Same Day Payout</h3>
            <p className="text-lg md:text-base my-4">
              Get your payments within 24 hours on a successful transaction through CLAMIO’s secured payment gateway.
            </p>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200">Explore</button>
          </div>
        </div>

        {/* Personalized Dashboard */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center justify-between">
          <div className="relative w-full h-80 md:h-96">
            <Image src="/11436084_4720780.jpg" alt="Personalized Dashboard" layout="fill" objectFit="cover" />
          </div>
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-3xl py-4 font-bold">Personalized Dashboard</h3>
            <p className="text-lg md:text-base my-4">
              Get your CLAMIO personalized dashboard to gain curated insights about your products, customers, and peers.
            </p>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200">Explore</button>
          </div>
        </div>

      </div>
    </section>
    </div>


    
  );
};

export default FeaturesSection;
