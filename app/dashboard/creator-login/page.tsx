// pages/index.tsx
'use client';
import React, { useState } from 'react';
import Hero from '@/components/shared/creator-login/Hero';
import MainContent from '@/components/shared/creator-login/Main';

export default function Home() {
    const [isBlurred, setIsBlurred] = useState(false);
    const [isCardFocused, setIsCardFocused] = useState(false);

    const handleButtonClick = () => {
        setIsBlurred(true);
        setIsCardFocused(true);
        setTimeout(() => setIsCardFocused(false), 2000); // Reset after 2 seconds
    };

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isBlurred && !event.target.closest('.main-grid-4')) {
            setIsBlurred(false);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 hidden md:block" onClick={handleClickOutside}>
                <div className={`main-content ${isBlurred ? 'blurred' : ''}`}>
                    <Hero onButtonClick={handleButtonClick} />
                    <MainContent isCardFocused={isCardFocused} />
                </div>
            </div>
            <div className='min-h-screen justify-center items-center text-center align-center block md:hidden'>
                Mobile View Unavailable
            </div>
        </>
    );
}
