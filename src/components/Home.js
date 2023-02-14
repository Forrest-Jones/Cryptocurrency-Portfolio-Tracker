import React, { useState, useEffect } from "react"
import CoinContainer from "./CoinContainer"
import "./CoinContainer.css"

function Home(){
    const [coins, setCoins] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=226&page=1&sparkline=false')
        .then(r => r.json())
        .then(data => setCoins(data))
      }, [])

    return (
        <div>
        {coins ? <CoinContainer coins={coins}/> : null}
        </div>
    )
}

export default Home;