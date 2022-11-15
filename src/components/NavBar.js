import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import "./styles/NavBar.css";

const NavBar = ({ theme }) => {
  return (
    <div className="nav-bar">
      <ul className="grid-wrapper">
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>
          <GoPrimitiveDot />
        </li>
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>
          <GoPrimitiveDot />
        </li>
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>
          <GoPrimitiveDot />
        </li>
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>
          <GoPrimitiveDot />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
