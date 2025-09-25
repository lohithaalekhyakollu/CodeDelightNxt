import React from "react";
import "./nav.css";
const NavBar = () => {
    return (
        <nav className="nav_bar">
            <a href="/index.html" onClick={() => console.log('Go Home')}>Home</a>
            <a href="../html/courses.html">Courses</a>
            <a href="../html/compilers.html">Compilers</a>
            <a href="../html/funzone.html">Fun Zone</a>
        </nav>
    );
};

export default NavBar;
