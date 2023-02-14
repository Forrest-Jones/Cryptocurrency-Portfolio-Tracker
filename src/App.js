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

    return(
      <>
       <Navbar onChangePage={setPage} />
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
