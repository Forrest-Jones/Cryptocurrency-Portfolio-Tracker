import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Search from "./components/Search.js"
import MyCoins from "./components/MyCoins.js"
import CoinContainer from './components/CoinContainer.js'
import {Route, Routes, useLocation} from 'react-router-dom';
import Login from './components/Login.js' 
import './index.css'

export default function App() {

  let location = useLocation()

  const [coins, setCoins] = useState(null)
  const [login, setLogin] = useState(null)
  const [lightTheme, setLightTheme] = useState(true)
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
      .then(r => r.json())
      .then(data => setCoins(data))
  }, [])

  const toggleTheme = () => setLightTheme(!lightTheme)

  const filteredCoins = () => {return coins.filter(coin =>coin.name.toLowerCase().includes(searchQuery.toLowerCase()))}

  const updateLogin = login => setLogin(login)

  return (
    <div className={`App ${lightTheme ? 'light' : 'dark'}`}>
      <Navbar theme={lightTheme} setTheme={toggleTheme} login={login} setLogin={updateLogin}/>
      <Routes>
        <Route path="/search" element={<Search query={setSearchQuery}/>}/>
        <Route path="/myCoins" element={<MyCoins/>}/>
        <Route path="/login" element={<Login setLogin={updateLogin}/>}/>
        <Route exact path="/" element={null}/>
      </Routes>

      <div className='Coins'>
        {(location.pathname !== "/login" && coins) ? <CoinContainer coins={filteredCoins()} login={login} updateLogin={updateLogin}/> : null}
      </div>
    </div>
  )
}