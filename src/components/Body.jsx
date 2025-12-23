import React from "react";
import Hero from "./HeroSection.jsx";
import Feature from "./FeaturesSection.jsx";
import CourseSection from "./CourseSection.jsx";
import CompilerSection from "./CompilerSection.jsx";
import Reviews from "./ReviewsSection.jsx";

function Body({ setPage }) {   // ✅ receive setPage from App
  return (
    <>
      <Hero setPage={setPage} />   {/* ✅ now it's defined */}
      <Feature />
      <CourseSection />
      <CompilerSection />
      <Reviews />
    </>
  );
}

export default Body;
