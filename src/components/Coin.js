import React, {useState} from 'react'
import {FiArrowUpRight, FiArrowDown, FiEyeOff, FiEye} from 'react-icons/fi'
import './Coin.css'

function Coin({coin}){
    const [watching, setWatching] = useState(false)

    let up = coin.price_change_percentage_24h > 0

    function handleWatching() {
        setWatching(!watching)
    }

    return (
        <div className='card'>
            <button className='add' onClick={handleWatching}>{watching ? <FiEyeOff/> : <FiEye/>}</button>
            <img src={coin.image} alt={coin.name}/>
            <h4>{coin.name}</h4>
            <p>${coin.current_price.toLocaleString()}</p>
            <span className={up ? 'green' : 'red'}>
                    {up ? <FiArrowUpRight className='icon'/> : <FiArrowDown className='icon'/>}
                    {Math.abs(coin.price_change_percentage_24h.toFixed(2))}%
            </span>
            
        </div>
    )
}

export default Coin