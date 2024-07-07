// components/shared/creator-login/MainContent.tsx
import React from 'react';
import LineChart from "@/components/shared/creator-login/LineChart";
<<<<<<< HEAD
import Add from '@/public/assets/creator-login-img/Add.png';
import Image from 'next/image';
import Card from '@/public/assets/creator-login-img/imgone.png';
import Link from 'next/link';

const MainContent = ({ isCardFocused, hideCreateSection }: any) => {
=======
import Add from '@/public/assets/creator-login-img/Add.png'
import Image from 'next/image'
import Card from '@/public/assets/creator-login-img/imgone.png'
import Link from 'next/link';
const MainContent = () => {
>>>>>>> 4b8b91b12926110cdc885bcb958130862f9345f0
    return (
        <div className="p-0 md:p-6 space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
            <div className="col-span-3 bg-white shadow-lg rounded p-4 main-content-section">
                <LineChart />
            </div>
<<<<<<< HEAD

            {!hideCreateSection && (
                <div className={`flex flex-col items-center bg-secondary text-white p-6 rounded justify-center main-grid-4 ${isCardFocused ? 'focus-effect' : ''}`}>
                    <div>
                        <Image src={Card} alt='card.png' />
                    </div>
                    <Link href="/dashboard/create-product">
                        <button type='button' className="text-secondary px-4 py-2 rounded mt-4 transition-colors duration-300">
                            <Image src={Add} alt='add.png' width={60} />
                        </button>
                    </Link>
                    <Link href="/dashboard/create-product">
                        <button className="font-bold bg-primary text-secondary px-4 py-2 rounded mt-6 transition-colors duration-300 text-secondary">
                            Create Your Product
                        </button>
                    </Link>
                </div>
            )}
=======
            <div className="flex flex-col items-center bg-secondary text-white p-6 rounded justify-end ">
                <div className=''>
                    <Image src={Card} alt='card.png' />
                </div>
                <button type='button' className="text-secondary px-4 py-2 rounded mt-4 transition-colors duration-300">
                <Link href='/dashboard/create-product'>

                    <Image
                        src={Add}
                        alt='add.png'
                        width={60}
                    />
                </Link>

                </button>
                <button className="bg-primary px-4 py-2 rounded mt-4 transition-colors duration-300 text-bold text-secondary">
                <Link href='/dashboard/create-product'>
                    Create Your Product
                </Link>
                </button>
            </div>
>>>>>>> 4b8b91b12926110cdc885bcb958130862f9345f0
        </div>
    );
};

export default MainContent;
