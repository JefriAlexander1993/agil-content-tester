import React from "react";
import { SearchInput } from '../css/style.js';

const SearchBox = ({ onSearch }) => {
  const handleSearch = (event) => {
    const { value } = event.target;
    onSearch(value);
  };

  return (
    <div>
      <h2>Search people</h2>
      <SearchInput onChange={handleSearch}></SearchInput>
    </div>
  );
};

export default SearchBox;
