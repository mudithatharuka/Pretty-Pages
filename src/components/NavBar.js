import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import "./styles/NavBar.css";

const getCurrTab = (pathName) => {
  let page;
  switch (pathName) {
    case "/":
      page = "Home";
      break;
    case "/about":
      page = "About";
      break;
    case "/contact":
      page = "Contact";
      break;
    case "/":
      page = "";
      break;

    default:
      page = "";
      break;
  }
  return page;
};

const NavBar = ({ theme }) => {
  const location = useLocation();
  // const [tab, setTab] = useState(getCurrTab(location.pathname));

  const changeActive = (event) => {
    let siblings = [];
    let s = event.target.parentNode.parentNode.parentNode.firstChild;

    do {
      siblings.push(s);
    } while ((s = s.nextSibling));

    for (let i in siblings) {
      if (siblings[i].textContent === event.target.textContent) {
        siblings[i].lastChild.style.visibility = "visible";
      } else {
        siblings[i].lastChild.style.visibility = "hidden";
      }
    }
  };

  return (
    <div className="nav-bar">
      <ul className="grid-wrapper">
        <li className={`nav-item `}>
          <Link to="/" className={` nav-item-${theme}`}>
            <p>Home</p>
          </Link>
          {location.pathname === "/" ? (
            <GoPrimitiveDot className="nav-item-icon" />
          ) : (
            ""
          )}
        </li>
        <li className={`nav-item `}>
          <Link to="/about" className={`nav-item-${theme}`}>
            <p>About</p>
          </Link>
          {location.pathname === "/about" ? (
            <GoPrimitiveDot className="nav-item-icon" />
          ) : (
            ""
          )}
        </li>
        <li className={`nav-item `}>
          <Link to="/contact" className={`nav-item-${theme}`}>
            <p>Contact</p>
          </Link>
          {location.pathname === "/contact" ? (
            <GoPrimitiveDot className="nav-item-icon" />
          ) : (
            ""
          )}
        </li>
        <li className={`nav-item `}>
          <Link to="/ex" className={`nav-item-${theme}`}>
            <p>Extra</p>
          </Link>
          {location.pathname === "/ex" ? (
            <GoPrimitiveDot className="nav-item-icon" />
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
