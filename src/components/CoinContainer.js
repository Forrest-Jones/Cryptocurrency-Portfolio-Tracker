import React, { useState, useEffect } from 'react'
import Coin from './Coin.js'
import './CoinContainer.css'

function CoinContainer({coins}) {
    return (
        <ul>
            {coins.map(coin => {
                return (
                    <li>
                        <Coin coin={coin}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default CoinContainer