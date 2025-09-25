import React from "react";

const Menu = () => {
  return (
    <div className="menu_toggle">
      <div className="parent" style={{ position: "relative" }}>
        <span className="material-symbols-outlined">menu</span>
        <div className="mobile_nav" style={{ position: "absolute" }}>
          <div className="nav-item" onClick={() => (window.location.href = "/index.html")}>Home</div>
          <div className="nav-item" onClick={() => (window.location.href = "../html/courses.html")}>Courses</div>
          <div classNameName="nav-item" onClick={() => (window.location.href = "../html/compilers.html")}>Compilers</div>
          <div className="nav-item" onClick={() => (window.location.href = "../html/funzone.html")}>Fun Zone</div>
          <div className="nav-item" onClick={() => (window.location.href = "../html/signin.html")}>Sign In</div>
          <div className="nav-item" onClick={() => (window.location.href = "../html/signup.html")}>Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
