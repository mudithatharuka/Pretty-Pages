import React from "react";
import Informat from "./Informat";
import "./styles/Content.css";

const Content = ({ theme }) => {
  return (
    <div className={`Content Content-${theme}`}>
      <Informat theme={theme} />
    </div>
  );
};

export default Content;
