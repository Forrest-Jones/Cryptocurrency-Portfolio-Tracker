import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1>Coin <span className='primary'>Watcher</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Search</a>
                    </li>
                    <li>
                        <a href='/'>My Coins</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
//