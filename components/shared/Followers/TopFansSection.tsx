import { useRef } from "react";
import Image from "next/image";
import Follower from "@/public/assets/follower-img/two.png";

interface TopFansSectionProps {
    scrollToTopFans: () => void;
}

const TopFansSection: React.FC<TopFansSectionProps> = ({ scrollToTopFans }) => {
    return (
        <section className="bg-secondary text-white p-4 sm:p-8 min-h-[60vh] md:min-h-[50vh] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-auto max-w-6xl md:w-5/6">
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-5xl lg:text-6xl font-bold mb-7 text-white hidden md:block">
                        KNOW YOUR <span className="text-yellow-500"><br />TOP</span> FANS
                    </h2>
                    <h2 className="text-4xl font-bold mb-7 text-white block md:hidden">
                        KNOW YOUR <span className="text-yellow-500">TOP</span> FANS
                    </h2>
                    <h3 className="text-xl md:text-2xl mb-4">
                        Lorem ipsum dolor sit amet.
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                        <button
                            className="bg-gray-300 font-semibold text-black w-5/6 mx-auto md:mx-0 md:w-44 py-2 md:py-3 md:px-6 rounded text-lg mb-14 mb:my-0"
                            onClick={scrollToTopFans}
                        >
                            VIEW
                        </button>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <Image className="w-5/6 lg:w-full" src={Follower} alt="Reward program" />
                </div>
            </div>
        </section>
    );
    );
};

export default TopFansSection;
