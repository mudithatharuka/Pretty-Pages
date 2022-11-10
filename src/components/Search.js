import React from "react";
import "./styles/Search.css";

const Search = () => {
  return (
    <React.Fragment>
      <div className="search">
        <input
          className="search-box"
          placeholder="Search by title"
          type="text"
          name="search"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Search;
