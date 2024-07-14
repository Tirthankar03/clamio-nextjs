// 'use client'
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CreatorCard from "@/components/shared/creator/CreatorCard";
import { CreatorData } from "@/constants/data"; // Make sure this import path is correct

export default function CarouselSize({ type }: any) {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="lg:w-full w-auto max-w-[1433px] 2xl:mx-auto"
      >
        <CarouselContent>
          {CreatorData.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full flex sm:basis-1/2 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-2"
            >
              <CreatorCard
                idx={index}
                creator={{
                  _id: item.id, // Assuming `id` in `CreatorData` corresponds to `_id` in `Creator` type
                  title: item.name, // Assuming `name` in `CreatorData` corresponds to `title` in `Creator` type
                  numFollowers: item.followers,
                  totalSales: item.products,
                  description: item.description,
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-yellow-500 border-2 font-extrabold text-white" />
        <CarouselNext className="bg-yellow-500 border-2 font-extrabold text-white" />
      </Carousel>
    </div>
  );
}
