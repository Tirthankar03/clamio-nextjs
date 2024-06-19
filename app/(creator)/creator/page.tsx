//bad practice: why use hooks when you can directly set responsive size 
// 'use client'
import React from 'react'
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
// import CreatorCategory from './CreatorCategory';
// import CreatorSlider from './CreatorSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CreatorCategory from '@/components/shared/creator/CreatorCategory';
import CreatorSlider from '@/components/shared/creator/CreatorSlider';


const DiscoverCreator = () => {
  // const isSmallOrMedium = useMediaQuery({ maxWidth: 1700 });

  // const settings = {
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   width: "70%",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //       }
  //     },
  //     {
  //       breakpoint: 1700,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 5,
  //       }
  //     },
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 1100,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 770,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 730,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 670,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 690,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 430,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       }
  //     },
      
  //   ]
    
  //   // Optional: Add dots for navigation
  // };

  return (
    <div className="bg-secondary min-h-screen text-white">
    <div className="p-4">
      {/* {isSmallOrMedium ? ( */}
        {/* // <Slider {...settings} className="category-slider"> */}
        <div>
          <div className='w-[70%]'><CreatorCategory name="Tarot Card Reading" image="/tarot.png" /></div>
          <div className='w-[70%]'><CreatorCategory name="Travel Guide" image="/travel-guide.png" /></div>
          <div><CreatorCategory name="Food Recipes" image="/book.png" /></div>
          <div><CreatorCategory name="Diet Plan" image="/diet.png" /></div>
          <div><CreatorCategory name="Digital Art" image="/digital-art.png" /></div>
          <div><CreatorCategory name="E-Sports Guide" image="/e-sports.png" /></div>
          <div><CreatorCategory name="More" image='' /></div>
          </div>
    
      {/* </Slider>
       ) : (
        <div className="flex flex-wrap justify-center space-x-2">
          <CreatorCategory name="Tarot Card Reading" image="/tarot.png" />
          <CreatorCategory name="Travel Guide" image="/travel-guide.png" />
          <CreatorCategory name="Food Recipes" image="/book.png" />
          <CreatorCategory name="Diet Plan" image="/diet.png" />
          <CreatorCategory name="Digital Art" image="/digital-art.png" />
          <CreatorCategory name="E-Sports Guide" image="/e-sports.png" />
          <CreatorCategory name="More" image='' />
        </div>
      )} */}
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search Creator"
          className="px-5 border-4 border-black rounded-lg py-3 w-80 md:w-1/2 text-black"
        />
      </div>
    </div>
    <div className="p-4">
      <CreatorSlider type="Gaming" />
      <CreatorSlider type="YouTube" />
      <CreatorSlider type="Gaming" />
    </div>
  </div>
  )
}

export default DiscoverCreator