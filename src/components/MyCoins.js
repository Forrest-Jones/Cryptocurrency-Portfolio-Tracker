import React from "react";
import Search from "./Search.js"
import "./MyCoins.css";

export default function MyCoins({query}) {
  return (
    <div className="my-coins-container">
      <h2>My Coins</h2>
      <Search query={query}/>
    </div>
  )
}