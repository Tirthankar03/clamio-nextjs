// CreatorCard.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import FavoriteButton from "@/components/Reusable Components/FavoriteButton";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Creator } from "@/lib/types"; // Adjust the import path as necessary

type CreatorCardProps = {
  creator: Pick<Creator, '_id' | 'title' | 'numFollowers' | 'totalSales' | 'description'> | undefined;
  idx: number;
};

function CreatorCard({ idx = 0, creator }: CreatorCardProps) {
  if (!creator) {
    return null; // Or show a loading spinner or fallback UI
  }

  const { _id, title, numFollowers, totalSales, description } = creator;

  return (
    <Card className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden border border-gray-200 cursor-pointer">
      <div className="relative px-6 py-5">
        <img
          className="w-full h-36 object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D"
          alt="Cover"
        />
        <div className="absolute inset-0 flex items-center justify-center mt-36">
          <div className="shadow-lg w-[4.5rem] h-[4.5rem] rounded-full bg-secondary flex items-center justify-center text-white text-2xl font-bold z-10">
            <Avatar className="w-16 h-16">
              <AvatarImage
                className="rounded-full"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback className="bg-gray-200">CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="p-1 absolute top-7 right-8 rounded-full">
          <FavoriteButton idx={idx} />
        </div>
      </div>
      
      <CardContent className="relative mt-5 p-4">
        <Link href={`/creator/${_id}`}>
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{title}</h3>
          <div className="flex justify-center mb-2 items-center">
            <AiOutlineUser className="text-gray-600 mr-1" />
            <p className="text-sm text-gray-600 mr-4">{numFollowers}</p>
            <AiOutlineShopping className="text-gray-600 mr-1" />
            <p className="text-sm text-gray-600">{totalSales}</p>
          </div>
          <p className="text-sm text-gray-700 text-center leading-relaxed">{description}</p>
          <div className="flex justify-center mt-4">
            <button className="px-6 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 flex items-center">
              <FaUserPlus className="text-xl mr-2" /> Follow
            </button>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

export default CreatorCard;
