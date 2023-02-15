import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import { Link } from "react-router-dom"


const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <div className='container'>
                <h1><span className='primary'>Coin Watcher</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                    <button className='btn'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;