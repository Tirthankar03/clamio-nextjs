// components/Header.tsx
import React from 'react';
import './Hero.css';
import Link from 'next/link'

const Hero = ({ onButtonClick }) => {
    return (
        <div className="text-white p-6 text-left hero-section">
            <div className='bg-secondary py-20 flex flex-col justify-start px-6'>
                <div className='transition transition-container'>
                    <h1 className="text-2xl md:text-5xl text-bold font-bold animate-slideInLeft transition-item delay-1">WELCOME</h1>
                    <h2 className="text-2xl md:text-5xl text-bold text-primary animate-slideInLeft delay-2 transition-item"><span className='text-white'>CREATOR </span>ONBOARD</h2>
                </div>
                <div className="mt-4 space-x-4">
                    <button onClick={onButtonClick} className="font-bold bg-primary text-secondary px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300">Create Your Product</button>
                    <button className="font-bold bg-primary text-secondary px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300">BUTTON</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
