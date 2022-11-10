import React from "react";
import "./styles/Header.css";
import Search from "../components/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="top-wrapper">
        <div></div>
        <div>
          <Search />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
