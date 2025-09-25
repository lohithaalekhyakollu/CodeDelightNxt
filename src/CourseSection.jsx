import React from "react";
import "./CourseSection.css"
const CourseSection=()=>{
    return(
        <section className="courses-section">
        <h2 className="courses-heading">Explore Our Courses</h2>
        <div className="courses-container">
            <div className="course-card html">
            <i className="fa-brands fa-html5"></i>
            <h3>HTML</h3>
            <p>Structure the web with semantic and accessible markup.</p>
            <a href="../html/htmlcourse.html">Start Learning</a>
            </div>
            <div className="course-card css">
            <i className="fa-brands fa-css3-alt"></i>
            <h3>CSS</h3>
            <p>Style beautiful websites with powerful layouts and animations.</p>
            <a href="../html/csscourse.html">Start Learning</a>
            </div>
            <div className="course-card js">
            <i className="fa-brands fa-js"></i>
            <h3>JavaScript</h3>
            <p>Bring engaging interactivity and vibrant life to your web projects.</p>
            <a href="../html/jscourse.html">Start Learning</a>
            </div>
            <div className="course-card dsa">
            <i className="fa-solid fa-database"></i>
            <h3>DSA</h3>
            <p>Master Data Structures and Algorithms for coding interviews.</p>
            <a href="../html/dsacourse.html">Start Learning</a>
            </div>
        </div>
    </section>
    );
};
export default CourseSection;