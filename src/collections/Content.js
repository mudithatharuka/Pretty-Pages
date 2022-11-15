import React from "react";
import "./styles/Content.css";

const Content = ({ theme }) => {
  return (
    <div className={`Content Content-${theme}`}>
      <h1>Hey there</h1>
    </div>
  );
};

export default Content;
