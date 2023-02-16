import {Link} from "react-router-dom"
import React, {useState} from 'react'
import Login from './Login'
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";

export default function Navbar({theme, setTheme}) {

   
    

    return (
        <div className='container'>
            <h1 className='primary'>Coin Watcher</h1>
            
            <ul className='nav-menu'>
                <nav>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <Link to='/myCoins'>My Coins</Link>
                    </li>
                    <li>
                       
                    </li>
                </nav>
            </ul>
            <div className='btn-group'>
                
                <button className='btn' onClick={setTheme}>{theme ? 'Dark' : 'Light'}</button>
            </div>
        </div>
    )
}

