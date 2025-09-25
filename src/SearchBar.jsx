import React from "react";
import "./SearchBar.css";
import logo from './assets/logo.png';
const Searchs = () => {
    return (
    <div className="search_bar">
      <span class="material-symbols-outlined search_icon">search</span>
      <input id="searchInput" className="search_input" placeholder="Search for and more"/>
    </div>
    )
};

export default Searchs;