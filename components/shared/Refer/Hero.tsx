import React from 'react'
import Follower from "@/public/assets/follower-img/two.png";
import Image from "next/image"

export default function Hero() {
    return <main>
        <section className="bg-secondary text-white p-4 sm:p-8 min-h-[60vh] md:min-h-[50vh] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-auto max-w-6xl md:w-5/6">
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-6xl font-bold mb-7 text-yellow-500 hidden md:block">
                        REFER <span className="text-white"><br />&</span> EARN
                    </h2>
                    <h2 className="text-4xl font-bold mb-7 text-yellow-500 block  md:hidden">
                        REFER <span className="text-white">&</span> EARN
                    </h2>
                    <h3 className="text-xl md:text-2xl mb-4">
                        Spread the word, boost your wallet.
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                        <button className="bg-gray-300 font-semibold text-black w-5/6 mx-auto md:mx-0 md:w-44 py-2 md:py-3 md:px-6 rounded text-lg">
                            Refer Now
                        </button>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <Image className="w-5/6 lg:w-full" src={Follower} alt="Reward program" />
                </div>
            </div>
        </section>
    </main>
}
