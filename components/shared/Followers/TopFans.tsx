'use client'
import Image from 'next/image';
import { topFans } from '@/constants/data';

const TopFans = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-12 w-full">
            <div>
                <Image src="/follower-img/two.png" alt="Refer and Earn" width={500} height={500} className="w-full" />
            </div>
            <div className='md:ml-20'>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Your Top Fans</h2>
                <ul className="list-disc pl-5 mb-4 p-4 grid grid-cols-2 text-lg xl:text-2xl ">
                    <div className='flex flex-col'>
                        {topFans.slice(0, 4).map((fan, index) => (
                            <li key={index}>{fan}</li>
                        ))}
                    </div>
                    <div className='flex flex-col pl-6'>
                        {topFans.slice(4).map((fan, index) => (
                            <li key={index}>{fan}</li>
                        ))}
                    </div>
                </ul>
                <button className="px-6 py-2 mt-4 border border-black text-black rounded">View All</button>
            </div>
        </section>
    );
}

export default TopFans;
