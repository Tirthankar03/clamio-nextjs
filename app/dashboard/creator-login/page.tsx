// pages/index.tsx
'use client';
import React, { useState } from 'react';
import Hero from '@/components/shared/creator-login/Hero';
import MainContent from '@/components/shared/creator-login/Main';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
    const [isBlurred, setIsBlurred] = useState(false);
    const [isCardFocused, setIsCardFocused] = useState(false);

    const handleButtonClick = () => {
        setIsBlurred(true);
        setIsCardFocused(true);
        setTimeout(() => setIsCardFocused(false), 2000); // Reset after 2 seconds
    };

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isBlurred && !(event.target as HTMLElement).closest('.main-grid-4')) {
            setIsBlurred(false);
        }
    };

    const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <>
            <div className="min-h-screen md:bg-gray-100" onClick={handleClickOutside}>
                <div className={`main-content ${isBlurred ? 'blurred' : ''}`}>
                    <Hero onButtonClick={handleButtonClick} showCreateButtons={isSmallScreen} />
                    <MainContent isCardFocused={isCardFocused} hideCreateSection={isSmallScreen} />
                </div>
            </div>
        </>
    );
}
