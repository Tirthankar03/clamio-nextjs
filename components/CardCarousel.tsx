// // 'use client';
// import * as React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const dummyData = [
//   { img: "/pana.png" },
//   { img: "/cuate.png" },
//   { img: "/amico.png" },
// ];

// export default function CarouselSize() {
//   return (
//     <div className="">
//       <Carousel
//         opts={{
//           align: "start",
//         }}
//         className="lg:w-full w-auto md:w-full max-w-[1433px] 2xl:mx-auto md:mx-10"
//       >
//         <CarouselContent>
//           {dummyData.map((item, index) => (
//             <CarouselItem key={index} className="basis-full flex md:basis-1/3 lg:basis-1/4 xl:basis-1/4 2xl:basis-1/5 p-2">
//               <Card className="w-full overflow-x-hidden rounded-lg">
//                 <CardContent className="flex items-center justify-center p-6">
//                   <div className="flex flex-col items-start text-left space-y-2 w-full">
//                     <img src={item.img} alt={`Image ${index + 1}`} className="w-full" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }
