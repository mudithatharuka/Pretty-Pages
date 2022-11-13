import React from "react";
import { BsDot } from "react-icons/bs";
import "./styles/NavBar.css";

const NavBar = ({ theme }) => {
  return (
    <div className="nav-bar">
      <ul className="grid-wrapper">
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>
          <BsDot />
        </li>
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>
          <BsDot />
        </li>
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>
          <BsDot />
        </li>
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>
          <BsDot />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
