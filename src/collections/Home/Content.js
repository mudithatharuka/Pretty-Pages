import React from "react";
import Bookcard from "../../components/Bookcard";
import Headmat from "./Headmat";
import Informat from "./Informat";
import "../styles/Home/Content.css";

const Content = ({ theme }) => {
  return (
    <div className={`Content Content-${theme}`}>
      <Informat theme={theme} />
      <div className={`right-content right-content-${theme}`}>
        <Headmat theme={theme} />
        <div className={`inner-right-content inner-right-content-${theme}`}>
          <Bookcard theme={theme} />
          <Bookcard theme={theme} />
          <Bookcard theme={theme} />
          <Bookcard theme={theme} />
          <Bookcard theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Content;
