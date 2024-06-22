// 'use client'
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CreatorCard from '@/components/shared/creator/CreatorCard';
import { CreatorData } from "@/app/utils/constants";


export default function CarouselSize({ type }: any) {
  return (
    <div className="">
      <Carousel
        opts={{
          align: "start",
        }}
        className="lg:w-full w-auto  max-w-[1433px] 2xl:mx-auto "
      >
        <CarouselContent>
          {CreatorData.map((item, index) => (
            <CarouselItem key={index} className="basis-full flex sm:basis-1/2 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-2">
              <CreatorCard
                name={item.name}
                followers={item.followers}
                products={item.products}
                description={item.description}
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
