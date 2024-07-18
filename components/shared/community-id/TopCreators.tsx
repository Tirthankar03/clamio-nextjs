import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import FavoriteButton from "@/components/Reusable Components/FavoriteButton";
import Link from "next/link";

interface CreatorCardProps {
    id: number;
    idx: number;
    name: string;
    followers: string;
    products: string;
    description: string;
    img_url: string;
    profile_url: string;
}

function TopCreator({
    idx = 0,
    name = "",
    followers = "",
    products = "",
    description = "",
    img_url = "",
    profile_url = "",
    id = 1,
}: CreatorCardProps) {
    return (
        <Link href={`/creator/${id}`}>
            <div className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden border border-gray-200 cursor-pointer">
                <div className="relative px-6 py-5">
                    <img
                        className="w-full h-36 object-cover rounded-lg"
                        src={img_url}
                        alt="Cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center mt-36">
                        <img
                            className="shadow-lg w-[4.5rem] h-[4.5rem] rounded-full bg-secondary flex items-center justify-center text-white text-2xl font-bold z-10"
                            src={profile_url}
                            alt="Profile"
                        />
                    </div>
                    <div className="p-1 absolute top-7 right-8 rounded-full">
                        <FavoriteButton idx={idx} />
                    </div>
                </div>
                <div className="relative mt-5 p-4">
                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{name}</h3>
                    <div className="flex justify-center mb-2 items-center">
                        <AiOutlineUser className="text-gray-600 mr-1" />
                        <p className="text-sm text-gray-600 mr-4">{followers}</p>
                        <AiOutlineShopping className="text-gray-600 mr-1" />
                        <p className="text-sm text-gray-600">{products}</p>
                    </div>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">{description}</p>
                    <div className="flex justify-center mt-4">
                        <button className="px-6 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 flex items-center">
                            <FaUserPlus className="text-xl mr-2" /> Follow
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TopCreator;
