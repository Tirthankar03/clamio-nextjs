import React from 'react';

interface CommunityCardData {
    id: number;
    title: string;
    members: string;
}

interface CommunityInfoProps {
    community: CommunityCardData;
}

const CommunityInfo: React.FC<CommunityInfoProps> = ({ community }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative h-96 w-full rounded-lg overflow-hidden bg-yellow-300"></div>
        <div className="flex flex-col justify-between">
            <div>
                <h1 className="text-3xl font-bold mb-4">{community.title}</h1>
                <div className="flex items-center mb-4">
                    <span className="ml-2 text-xl">{community.members}</span>
                </div>
                <p className="mb-8">
                    This is the description of the community. More details about the community can go here.
                </p>
            </div>
            <div className="flex space-x-4">
                <button className="bg-gray-800 text-white px-4 py-2 rounded">Join Community</button>
            </div>
        </div>
    </div>
);

export default CommunityInfo;
