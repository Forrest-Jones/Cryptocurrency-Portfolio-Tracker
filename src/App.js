import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Search from "./components/Search.js"
import MyCoins from "./components/MyCoins.js"
import CoinContainer from './components/CoinContainer.js'
import {Routes, Route, useNavigate, Switch, Link, Redirect} from 'react-router-dom';
import Login from './components/Login.js' 
import './index.css'

function App() {

  const [coins, setCoins] = useState(null)
  const [lightTheme, setLightTheme] = useState(true)
  const [searchQuery, setSearchQuery] = useState('');
  const [login, setLogin] = useState(false)

 
  
  useEffect(() => {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
      .then(r => r.json())
      .then(data => setCoins(data))
  }, [])

  // function handleLogin(){
  //   if(!login){
  //     return <Login onLogin={onLogin}/>
  //   }
  // }

  function toggleTheme() {
    setLightTheme(!lightTheme)
  }

  function filteredCoins(){
    return coins.filter(coin =>coin.name.toLowerCase().includes(searchQuery.toLowerCase()))
  };

  return (
    <div className={`App ${lightTheme ? 'light' : 'dark'}`}>
      <Login />
      <Navbar theme={lightTheme} setTheme={toggleTheme}/>
      <Switch>
        <Route path="/search">
          <Search query={setSearchQuery}/>
        </Route>
        <Route path="/myCoins">
          <MyCoins />
        </Route>
        
        <Redirect to="/" />
      </Switch>

      <div className='Coins'>
        {coins ? <CoinContainer coins={filteredCoins()}/> : null}
      </div>
    </div>
  )
}

export default App
