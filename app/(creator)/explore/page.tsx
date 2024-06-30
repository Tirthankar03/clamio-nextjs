import React from "react";
import vecone from "../../../public/assets/svg/vec-one.png";
import vectwo from "/assets/svg/vec-two.png";
import vecthree from "/assets/svg/vec-three.png";
import ProductsCategory from "@/components/shared/ProductsCategory";
import FeaturesSection from "@/components/Reusable Components/FeaturesSection";
import ProductsPage from "@/components/shared/explore/ProductsPage";
import MeetTheCreator from "@/components/shared/explore/MeetTheCreator";
import RevenueSection from "@/components/shared/explore/RevenueSection";
import FAQ from "@/components/Reusable Components/FAQ";
import Footer from "@/components/shared/explore/Footer";
import Hero from "@/components/shared/explore/Hero";
// import vecfour from "/assets/svg/vec-four.png";
// import vecfive from "/assets/svg/vec-five.png";
// import vecsix from "/assets/svg/vec-six.png";

const Explore = () => {
  return (
    <div className="">
      <Hero />

      <FeaturesSection />

      <ProductsPage />

      <MeetTheCreator />

      <RevenueSection />

      <FAQ />

      <Footer />
    </div>
  );
};

export default Explore;
