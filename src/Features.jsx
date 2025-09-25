import React from "react";
import "./Features.css"
const Feature=()=>{
    return(
        <section className="features-section">
            <h2 className="features-heading">Why Choose Code Delight?</h2>
            <div className="features-container">
                <div className="feature-box">
                    <i className="fa-solid fa-gamepad"></i>
                    <h3>Gamified Learning</h3>
                    <p>Earn coins, badges, and unlock levels while learning to code.</p>
                </div>
                <div className="feature-box">
                    <i class="fa-solid fa-laptop-code"></i>
                    <h3>Interactive Practice</h3>
                    <p>Use real-time compilers to practice and submit your code live.</p>
                </div>
                <div className="feature-box">
                    <i class="fa-solid fa-award"></i>
                    <h3>Certified Courses</h3>
                    <p>Get certified upon completing skill-based and project-driven courses.</p>
               </div>
               <div className="feature-box">
                    <i class="fa-solid fa-users"></i>
                    <h3>Community Support</h3>
                    <p>Engage with peers, mentors, and participate in coding challenges.</p>
                </div>
            </div>
        </section>
    );
};
export default Feature;