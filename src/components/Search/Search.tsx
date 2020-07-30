import React from 'react';

const Search = ({searchHandler}:any) => {

  return (
    <div className='search-container'>
    <label htmlFor="search">Search </label>
    <input
      id="search"
      type="search"
      onKeyPress={searchHandler}
    />
    </div>
  );
};
export default Search;
