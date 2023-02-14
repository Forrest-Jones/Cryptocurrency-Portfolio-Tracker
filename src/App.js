import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import CoinContainer from './components/CoinContainer.js'

function App() {

  const [coins, setCoins] = useState(null)

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=226&page=1&sparkline=false')
    .then(r => r.json())
    .then(data => setCoins(data))
  }, [])

  return (
    <>
      <Navbar/>
      {coins ? <CoinContainer coins={coins}/> : null}
    </>
  );
}

export default App;
