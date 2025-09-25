import React from "react";
import "./CompilerSection.css"
import CompilerImg from "./assets/compiler.png"
const CompilerSection=()=>{
    return(
        <section className="compiler-section">
      <div className="compiler-wrapper">
        <div className="compiler-image-box">
          <img src={CompilerImg} />
        </div>
        <div className="compiler-info-box">
          <h2 className="compiler-title">Online Compiler</h2>
          <p className="compiler-subtitle">Your Interactive Coding Playground</p>
          <ul className="compiler-features">
            <li>Code, test & debug instantly in any language.</li>
            <li>Build web apps with our HTML and React compilers.</li>
            <li>Optimize your code using AI-driven debugging.</li>
          </ul>
          <a href="../html/compilers.html" className="btn">Explore Compiler</a>
        </div>            
      </div>
    </section>
    );
};
export default CompilerSection;