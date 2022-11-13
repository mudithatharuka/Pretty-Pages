import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import "./styles/Header.css";
import Search from "../components/Search";
import NavBar from "../components/NavBar";

const Header = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`header header-${theme}`}>
      <div className="top-wrapper">
        <div className="top-col">Pretty Pages</div>
        <div className="top-col">
          <Search theme={theme} />
        </div>
        <div className="top-col">
          {theme === "light" ? (
            <MdDarkMode
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <BsSunFill
              onClick={() => {
                setTheme("light");
              }}
            />
          )}
        </div>
      </div>
      <div className="bottom-wrapper">
        <NavBar theme={theme} />
      </div>
    </div>
  );
};

export default Header;
