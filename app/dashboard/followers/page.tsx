'use client'
import { useRef } from "react";
import Charts from "@/components/shared/Followers/Charts";
import TopFans from "@/components/shared/Followers/TopFans";
import TopFansSection from "@/components/shared/Followers/TopFansSection";

const Page: React.FC = () => {
    const topFansRef = useRef<HTMLDivElement>(null);

    const scrollToTopFans = () => {
        if (topFansRef.current) {
            topFansRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <TopFansSection scrollToTopFans={scrollToTopFans} />
            <div className="min-h-screen bg-white w-11/12 mx-auto">
                <main className="w-5/6 mx-auto">
                    <div ref={topFansRef}>
                        <TopFans />
                    </div>
                    <Charts />
                </main>
            </div>
        </div>
    );
};

export default Page;
