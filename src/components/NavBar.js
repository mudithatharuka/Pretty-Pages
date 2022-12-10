import React from "react";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import "./styles/NavBar.css";

const NavBar = ({ theme }) => {
  return (
    <div className="nav-bar">
      <ul className="grid-wrapper">
        <li className={`nav-item `}>
          <Link to="/" className={` nav-item-${theme}`}>
            <p>Home</p>
          </Link>
          <GoPrimitiveDot className="nav-item-icon" />
        </li>
        <li className={`nav-item `}>
          <Link to="/about" className={`nav-item-${theme}`}>
            <p>About</p>
          </Link>
          <GoPrimitiveDot className="nav-item-icon" />
        </li>
        <li className={`nav-item `}>
          <Link to="/contact" className={`nav-item-${theme}`}>
            <p>Contact</p>
          </Link>
          <GoPrimitiveDot className="nav-item-icon" />
        </li>
        <li className={`nav-item `}>
          <p>Home</p>
          <GoPrimitiveDot className="nav-item-icon" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
