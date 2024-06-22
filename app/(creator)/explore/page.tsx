import React from "react";
import vecone from "../../../public/assets/svg/vec-one.png";
import vectwo from "/assets/svg/vec-two.png";
import vecthree from "/assets/svg/vec-three.png";
import ProductsCategory from "@/components/shared/ProductsCategory";
import Hero from "@/components/explore/Hero";
import FeaturesSection from "@/components/explore/FeaturesSection";
import ProductsPage from "@/components/explore/ProductsPage";
import MeetTheCreator from "@/components/explore/MeetTheCreator";
import RevenueSection from "@/components/explore/RevenueSection";
import FAQ from "@/components/explore/FAQ";
import Footer from "@/components/explore/Footer";
// import vecfour from "/assets/svg/vec-four.png";
// import vecfive from "/assets/svg/vec-five.png";
// import vecsix from "/assets/svg/vec-six.png";

const Explore = () => {
  return (
    <div className="">
    
     {/* Section 1 */}
    <Hero/>

      {/* Section 2 */}
     
   
        <FeaturesSection/>
    

      {/* Section 3 */}

           
    
      <ProductsPage/>

      <MeetTheCreator/>

      <RevenueSection/>

      <FAQ/>

      <Footer/>
    
    </div>
  );
};

export default Explore;
