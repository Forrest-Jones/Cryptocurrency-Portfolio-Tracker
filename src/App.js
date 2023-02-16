import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import Navbar from './components/Navbar'
import CoinContainer from './components/CoinContainer.js';
import { Route, Switch } from "react-router-dom";
import Search from "./components/Search.js"
import MyCoins from "./components/MyCoins.js"
import Home from "./components/Home.js"
import Login from './components/Login.js' 
import './index.css';

function App() {

  const[page,setPage] = useState("/")
  const [login, onLogin] = useState();
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick(){
    setDarkMode((darkMode) =>!darkMode);
  }

  const theme = darkMode? "dark" : "light";
  function handleLogin(){
    if(!login){
      return <Login onLogin={onLogin}/>
    }
  }
  


    return(
      <>
      <div className={theme}>
        <button onClick={handleDarkModeClick}>{darkMode ? "dark" : "Light"} Mode</button>
      
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
        </div>
      </>
    )
    }
  export default App;
