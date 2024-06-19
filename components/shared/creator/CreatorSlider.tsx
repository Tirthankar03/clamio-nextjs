//BAD PRACTICE
'use client'
// src/components/CreatorSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CreatorCard from './CreatorCard';
import './CreatorSlider.css'; // Make sure to import your CSS file here
import { NextArrow, PrevArrow } from './CustomArrows';

const CreatorSlider = ({ type }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  };

  return (
    <div className="my-8 mx-10 sm:mx-5 md:mx-20 lg:mx-20 2xl:mx-20 relative">
      <h2 className="text-2xl font-bold text-white mb-4">{type} Creators</h2>
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div className="p-2"><CreatorCard type={type} /></div>
          <div className="p-2"><CreatorCard type={type} /></div>
          <div className="p-2"><CreatorCard type={type} /></div>
          <div className="p-2"><CreatorCard type={type} /></div>
          <div className="p-2"><CreatorCard type={type} /></div>
          <div className="p-2"><CreatorCard type={type} /></div>
        </Slider>
      </div>
    </div>
  );
};

export default CreatorSlider;
