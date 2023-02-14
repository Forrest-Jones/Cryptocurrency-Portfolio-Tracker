import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import Navbar from './components/Navbar'
import CoinContainer from './components/CoinContainer.js';
import { Route, Switch } from "react-router-dom";
import Search from "./components/Search.js"
import MyCoins from "./components/MyCoins.js"
import Home from "./components/Home.js"

function App() {

  const[page,setPage] = useState("/")

  const [coins, setCoins] = useState(null)

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=226&page=1&sparkline=false')
    .then(r => r.json())
    .then(data => setCoins(data))
  }, [])

    return(
      <>
       <Navbar onChangePage={setPage} />
        {coins ? <CoinContainer coins={coins}/> : null}
            <Switch>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/myCoins">
                <MyCoins />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>

      </>
    )
    }
  export default App;
