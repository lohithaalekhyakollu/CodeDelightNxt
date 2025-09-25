import React from "react";
import NavBar from "./nav";
import './index.css'
import Logo from './Logo.jsx'
import Action from './Action'
import SearchBar from './SearchBar'
import Menu from './MenuToggle.jsx'
function Nav() {
    return (
        <>
            <div className="header">
                <Logo/>
                <SearchBar/>
                <NavBar />
                <Action/>
                <Menu/>
            </div>
        </>
    );
}

export default Nav;