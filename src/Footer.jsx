import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">Code Delight</div>
          <p>Learn. Play. Code. A fun way to become a coding pro!</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">Compilers</a>
            <a href="#">Funzone</a>
            <a href="#">Profile</a>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <h4>Follow Us</h4>
            <div style={{
                display: "flex",
                gap: "1rem",
                marginTop: "0.5rem",
                alignContent: "center",
                justifyContent: "center",
              }}>
              <a href="https://facebook.com"target="_blank"aria-label="Facebook"style={{ color: "#ccc" }}>
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://instagram.com"target="_blank"aria-label="Instagram"style={{ color: "#ccc" }} >
              <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://google.com" target="_blank"aria-label="Google"style={{ color: "#ccc" }}>
               <i className="fab fa-google fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@codedelight.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Code Delight. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
