import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

interface CommunityCardData {
    id: number;
    title: string;
    members: string;
    img_url: string; // Add img_url field
}

interface ProfileSectionProps {
    community: CommunityCardData;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ community }) => {
    return (
        <div>
            <div className="mx-auto rounded-full overflow-hidden h-40 w-40 md:h-32 md:w-32">
                <Image
                    src={community.img_url}
                    alt={community.title}
                    layout="responsive"
                    width={128}
                    height={128}
                    className="object-cover"
                />
            </div>
            <h1 className="text-center mt-4 text-2xl font-bold">{community.title}</h1>
            <p className="text-center mt-2">{community.members}</p>
            <div className="flex flex-col md:flex-row md:justify-center mt-4">
                <span className="mr-4 text-center">Total Products: 230</span>
                <span className="text-center">Followers: 1M</span>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-black text-white px-4 py-2 rounded">Follow</button>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
                <span className="bg-red-500 p-2 rounded-full">
                    <FaYoutube size={20} color="white" />
                </span>
                <span className="bg-pink-500 p-2 rounded-full">
                    <FaInstagram size={20} color="white" />
                </span>
                <span className="bg-blue-500 p-2 rounded-full">
                    <FaLinkedin size={20} color="white" />
                </span>
            </div>
        </div>
    );
};

export default ProfileSection;
