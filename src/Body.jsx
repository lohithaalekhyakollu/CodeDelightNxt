import React from "react";
import Hero from "./Hero.jsx";
import Feature from "./Features.jsx";
import CourseSection from "./CourseSection.jsx"
import CompilerSection  from "./CompilerSection.jsx";
import Reviews from"./Reviews.jsx"
function Body() {
    return (
        <>
            <Hero />
            <Feature/>
            <CourseSection/>
            <CompilerSection/>
            <Reviews/>
        </>
    );
}

export default Body;
