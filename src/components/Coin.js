import React from 'react'
import {FiArrowUpRight, FiArrowDown, FiEyeOff, FiEye} from 'react-icons/fi'
import './Coin.css'

export default function Coin({coin, login, updateLogin}){
    let up = coin.price_change_percentage_24h > 0
    let watching = false

    function handleWatching() {
        fetch(`http://localhost:4000/Logins/${login.id}`, {
        method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({Coins: filterCoins()}),
        })
        .then(() => {
            updateLogin({Email: login.Email, Username: login.Username, Password: login.Password, Coins: filterCoins(), id: login.id})
            findCoin()
        })
    }

    function filterCoins() {
        let temp = [...login.Coins]
        if (watching){
            temp.splice(login.Coins.findIndex(coinID => coinID === coin.id), 1)
        }else{
            temp.push(coin.id)
        }
        return temp
    }

    function findCoin() {
        if (login.Coins.find(coinID => coinID === coin.id)){
            watching = true
            return watching
        }else{
            watching = false
        }
        return false
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