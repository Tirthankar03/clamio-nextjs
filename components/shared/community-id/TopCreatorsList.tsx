// 'use client'
import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { CreatorData } from "@/constants/data";
import TopCreator from "./TopCreators";

export interface Creator {
    id: number;
    name: string;
    products: string;
    followers: string;
    description: string;
}

interface CreatorCardProps {
    TopCreatorData: Creator[];
}

export default function TopCreatorsList({ TopCreatorData }: any) {
    return (
        <div className="">
            <h1 className="text-2xl font-bold mt-8">Top Creators</h1>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="lg:w-full w-auto  max-w-[1433px] 2xl:mx-auto "
            >
                <CarouselContent>
                    {TopCreatorData.map((item, index) => (
                        <CarouselItem key={index} className="basis-full flex sm:basis-1/2 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-2">
                            <TopCreator

                                idx={index}
                                id={item.id}
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
