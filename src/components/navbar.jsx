import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css"

import search_icon from "../assets/search-icon.svg"
import menu_icon from "../assets/menu-icon.svg"

import logo from "../assets/people.png"

const Navbar = () => {
    return (
        <nav id="nav">
            {/* Menu icon */}
            <img src={menu_icon} alt="Menu" className="menu" />

            {/* Search form */}
            <form action="#" className="search-form">
                <div className="form-input">
                <input type="search" placeholder="Search..." />
                <button type="submit" className="search-btn">
                    <img src={search_icon} alt="Search" />
                </button>
                </div>
            </form>

            {/* Profile */}
            <Link to="/profile" className="profile">
                <img src={logo} />
                <p className="text">605010779</p>
            </Link>
        </nav>
    );
};

export default Navbar;