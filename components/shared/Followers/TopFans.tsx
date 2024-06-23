'use client'
import Image from 'next/image';
import { topFans } from '@/constants/data';
import { useState } from 'react';

const TopFans = () => {
    return (
        <section className="grid grid-cols-1 gap-8 items-center my-12 w-full md:w-5/6 mx-auto py-8 ">
            <div className=''>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Your Top Fans</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2 hidden md:table-cell">Country</th>
                                <th className="px-4 py-2 hidden md:table-cell">Watch Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topFans.map((fan, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border px-4 py-2">{fan.id}</td>
                                    <td className="border px-4 py-2">{fan.name}</td>
                                    <td className="border px-4 py-2 hidden md:table-cell">{fan.country}</td>
                                    <td className="border px-4 py-2 hidden md:table-cell">{fan.watchHours}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="px-6 py-2 mt-4 border border-black text-black rounded">View All</button>
            </div>
        </section>
    );
}

export default TopFans;
