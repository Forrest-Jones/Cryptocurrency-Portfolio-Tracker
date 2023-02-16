import React from 'react';
import './Search.css';

function Search({query}) {
  const handleSearch = (e) => {
    query(e.target.value);
  };

  return (
    <div className='search-bar'>
        <input type='text' placeholder='Search Coins' onChange={handleSearch} />
    </div>
  );
}

export default Search;
