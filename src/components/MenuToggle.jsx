import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Menu items array
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/course" },
    { name: "Compilers", path: "/compilers" },
    { name: "Fun Zone", path: "/funzone" },
    { name: "Sign In", path: "/signin" },
    { name: "Sign Up", path: "/signup" },
  ];

  useEffect(() => {
    let timer;
    if (isOpen) {
      // Auto-close after 2 minutes (120000 ms)
      timer = setTimeout(() => setIsOpen(false), 120000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="menu_toggle">
      <div className="parent">
        {/* Hamburger / Close icon */}
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "32px", color: "white", cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "close" : "menu"}
        </span>

        {/* Dynamic Mobile Menu */}
        {isOpen && (
          <div className="mobile_nav">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="nav-item"
                onClick={() => handleNavigate(item.path)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuToggle;
