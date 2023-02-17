import React from 'react'
import Coin from './Coin.js'
import './CoinContainer.css'

export default function CoinContainer({coins, login, updateLogin}) {
    return (
        <ul>
            {coins?.map(coin => {return <li key={coin.id}><Coin coin={coin} login={login} updateLogin={updateLogin}/></li>})}
        </ul>
    )
}