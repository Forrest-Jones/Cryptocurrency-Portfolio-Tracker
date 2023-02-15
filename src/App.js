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

  function handleLogin(){
    if(!login){
      return <Login onLogin={onLogin}/>
    }
  }
  const[theme, setTheme] = useState('true');

  const toggleTheme = () => {
    if (theme === 'true') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


    return(
      <>
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Mode</button>
      
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
