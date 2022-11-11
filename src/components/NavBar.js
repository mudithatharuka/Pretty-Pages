import React from "react";
import "./styles/NavBar.css";

const NavBar = ({ theme }) => {
  return (
    <div className="nav-bar">
      <ul className="grid-wrapper">
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>o
        </li>
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>o
        </li>
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>o
        </li>
        <li className={`nav-item nav-item-${theme}`}>
          <p>Home</p>o
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
