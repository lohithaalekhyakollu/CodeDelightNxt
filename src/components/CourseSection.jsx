import React from "react";
import "../styles/CourseSection.css";

const CourseSection = () => {
  const courses = [
    {
      className: "html",
      icon: "fa-brands fa-html5",
      title: "HTML",
      description: "Structure the web with semantic and accessible markup.",
      link: "../html/htmlcourse.html",
    },
    {
      className: "css",
      icon: "fa-brands fa-css3-alt",
      title: "CSS",
      description: "Style beautiful websites with powerful layouts and animations.",
      link: "../html/csscourse.html",
    },
    {
      className: "js",
      icon: "fa-brands fa-js",
      title: "JavaScript",
      description: "Bring engaging interactivity and vibrant life to your web projects.",
      link: "../html/jscourse.html",
    },
    {
      className: "dsa",
      icon: "fa-solid fa-database",
      title: "DSA",
      description: "Master Data Structures and Algorithms for coding interviews.",
      link: "../html/dsacourse.html",
    },
  ];

  return (
    <section className="courses-section">
      <h2 className="courses-heading">Explore Our Courses</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className={`course-card ${course.className}`}>
            <i className={course.icon}></i>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href={course.link}>Start Learning</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
