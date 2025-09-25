import React from "react";
import logo from "./assets/logo.png";
import "./Logo.css"
const logos = () => {
    return (
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
           </div>
    );
};

export default logos;
