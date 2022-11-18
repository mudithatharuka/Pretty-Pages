import React from "react";
import Headmat from "./Headmat";
import Informat from "./Informat";
import "./styles/Content.css";

const Content = ({ theme }) => {
  return (
    <div className={`Content Content-${theme}`}>
      <Informat theme={theme} />

      <div className={`right-content right-content-${theme}`}>
        <Headmat theme={theme} />
      </div>
    </div>
  );
};

export default Content;
