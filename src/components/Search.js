import React, { useState, useEffect } from 'react';
import Coin from './Coin.js';
import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then((response) => response.json())
      .then((data) => setCoins(data));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='search-container'>
      <div className='search-bar'>
        <input type='text' placeholder='Search Coins' onChange={handleSearch} />
      </div>
      <div className='coin-container'>
        {filteredCoins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}

export default Search;
