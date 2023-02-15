import React, { useState } from "react";
import Coin from "./Coin";
import "./MyCoins.css";

function MyCoins() {
  const [myCoins, setMyCoins] = useState([]);

  const addCoin = (coin) => {
    setMyCoins((prevCoins) => [...prevCoins, coin]);
  };

  return (
    <div className="my-coins-container">
      <h2>My Coins</h2>
      <div className="my-coins">
        {myCoins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
      <h2>Add a Coin</h2>
      <Search addCoin={addCoin} />
    </div>
  );
}

function Search({ addCoin }) {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${searchTerm}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          addCoin(data[0]);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter coin name or symbol..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            <Coin coin={coin} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyCoins;
