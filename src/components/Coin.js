import React, {useState} from 'react'
import {FiArrowUpRight, FiArrowDown, FiEyeOff, FiEye} from 'react-icons/fi'
import './Coin.css'

export default function Coin({coin, login, updateLogin}){

    const [watching, setWatching] = useState(false)

    let up = coin.price_change_percentage_24h > 0

    function handleWatching() {
        fetch(`http://localhost:4000/Logins/${login.id}`, {
        method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({Coins: [...login.Coins, coin.id]}),
        })
        .then(() => {
            updateLogin({Email: login.Email, Username: login.Username, Password: login.Password, Coins: [...login.Coins, coin.id], id: login.id})
            findCoin()
        })
    }

    function findCoin() {
        let found = false
        login.Coins.map(coinID => {
            if (coinID === coin.id){
                found = true
            }
        })
        return found
    }

    return (
        <div className='card'>
            {login ? <button className='add' onClick={handleWatching}>{findCoin() ? <FiEyeOff/> : <FiEye/>}</button> : null}
            <img src={coin.image} alt={coin.name}/>
            <h4>{coin.name}</h4>
            <p>${coin.current_price.toLocaleString()}</p>
            <span className={up ? 'green' : 'red'}>
                    {up ? <FiArrowUpRight className='icon'/> : <FiArrowDown className='icon'/>}
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </span>
        </div>
    )
}