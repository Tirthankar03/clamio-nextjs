// components/ImageCarousel.tsx
"use client"
import Autoplay from "embla-carousel-autoplay"
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Adjust the path as necessary

function ImageCarousel() {
  return (
    <div className="relative mb-12">
      <Carousel orientation="horizontal"
      
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselPrevious className="hidden" />
        <CarouselContent>
          <CarouselItem>
            <div className="text-center text-white">
              <img src="/pana.png" alt="Reach Out" className="mx-auto mb-4" />
              <h2 className="text-xl font-semibold">Reach Out</h2>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="text-center text-white">
              <img src="/cuate.png" alt="Find Common Ground" className="mx-auto mb-4" />
              <h2 className="text-xl font-semibold">Find Common Ground</h2>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="text-center text-white">
              <img src="/amico.png" alt="Go CLAMIO" className="mx-auto mb-4" />
              <h2 className="text-xl font-semibold">Go CLAMIO</h2>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
