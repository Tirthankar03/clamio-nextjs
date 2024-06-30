// components/Header.tsx
import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className="text-white p-6 text-left">
            <div className='bg-secondary py-20 flex flex-col justify-start px-6'>
                <div className='transition transition-container'>
                    <h1 className="text-5xl text-bold font-bold animate-slideInLeft transition-item">WELCOME</h1>
                    <h2 className="text-5xl text-bold text-primary animate-slideInLeft delay-200 transition-item"><span className='text-white'>CREATOR </span>ONBOARD</h2>
                </div>
                <div className="mt-4 space-x-4">
                    <button className="bg-primary text-secondary px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300">BUTTON</button>
                    <button className="bg-primary text-secondary px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300">BUTTON</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
