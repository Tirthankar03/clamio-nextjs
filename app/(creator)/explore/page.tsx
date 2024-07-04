'use client'
import React from "react";
import { useSelector } from "react-redux";
import Hero from "@/components/shared/explore/Hero";
import HeroPage from "@/components/shared/afterlogin/HeroPage";
import FeaturesSection from "@/components/Reusable Components/FeaturesSection";
import ProductsPage from "@/components/shared/explore/ProductsPage";
import MeetTheCreator from "@/components/shared/explore/MeetTheCreator";
import RevenueSection from "@/components/shared/explore/RevenueSection";
import FAQ from "@/components/Reusable Components/FAQ";
import Footer from "@/components/shared/explore/Footer";
import Pricing from "@/components/shared/afterlogin/Pricing";
import { RootState } from "@/Store/store";

const Explore = () => {
  const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);

  return (
    <div className="">
      {isLoggedIn ? (
        <>
          <HeroPage />
          <Pricing />
          <ProductsPage />
          <FAQ />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <FeaturesSection />
          <ProductsPage />
          <MeetTheCreator />
          <RevenueSection />
          <FAQ />
          <Footer />
        </>
      )}


    </div>
  );
};

export default Explore;
