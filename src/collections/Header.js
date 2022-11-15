import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import "./styles/Header.css";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import Theme from "../Theme";

const Header = ({ theme, setTheme }) => {
  return (
    <div className={`header header-${theme}`}>
      <div className="top-wrapper">
        <div className="top-col top-col-left">Pretty Pages</div>
        <div className="top-col">
          <Search theme={theme} />
        </div>
        <div className="top-col top-col-right">
          {theme === "light" ? (
            <MdDarkMode
              className="icon-dark"
              onClick={() => {
                setTheme("dark");
                document.body.bgColor = Theme.__primaryDark;
              }}
            />
          ) : (
            <BsSunFill
              className="icon-light"
              onClick={() => {
                setTheme("light");
                document.body.bgColor = Theme.__primaryLight;
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
