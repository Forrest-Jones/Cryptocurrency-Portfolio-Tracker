import {Link} from "react-router-dom"
import React, {useState} from 'react'
import Login from './Login'
import './Navbar.css'

function Navbar({theme, setTheme}) {
    const [login, setLogin] = useState(false)

    function handleLogin() {
        setLogin(!login)
    }

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
                </nav>
            </ul>
            <div className='btn-group'>
                {!login ? <button className='btn' onClick={handleLogin}>Login</button> : <Login />}
                <button className='btn' onClick={setTheme}>{theme ? 'Dark' : 'Light'}</button>
            </div>
        </div>
    )
}

export default Navbar