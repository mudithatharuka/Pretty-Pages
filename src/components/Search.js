import React from "react";
import "./styles/Search.css";

const Search = ({ theme }) => {
  return (
    <React.Fragment>
      <div className={`search search-${theme}`}>
        <input
          className={`search-box search-box-${theme}`}
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
