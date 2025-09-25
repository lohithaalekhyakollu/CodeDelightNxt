import React from "react";
import "./Hero.css";
import HeroImg from "./assets/hero.png"
const Hero = () => {
    return (
        <section className="hero">
            <div className="left">
                <h1 className="hero-headline">
                    Learn to code, play to win.
                </h1>
                <p className="hero-subheadline">
                    Master compilers, complete real coding courses, collect coins, and unlock levels in the most addictive way to learn programming.
                </p>
                <a href="../html/courses.html" className="btn">Start Learning</a>
            </div>
            <div className="right">
                    <img src={HeroImg} alt="Hero Image"/>
            </div>
        </section>
    );
};

export default Hero;
