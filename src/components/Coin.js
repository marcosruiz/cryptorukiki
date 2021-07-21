import React, {useEffect, useState} from "react"
import {Link} from 'wouter'

function Coin({id, coinAcronym, name, type, algorithm, network_hashrate, difficulty, reward, reward_unit, reward_block, price, volume, updated}) {
  
  const [coin, updateCoin] = useState({});
  const [imageSrc, updateImageSrc] = useState("/loading.gif");

  useEffect(() => {
    const url = `/logos/${name}.webp`
    fetch(url)
    .then(response => {
      if(response.ok){
        updateImageSrc(url)
      }
    })
  }, [])

  return (
    <Link to={`/coin/${id}`}>
      <div className="m-3 max-w-md mx-auto bg-white rounded-xl <shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={imageSrc} alt={name}/>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">{name}</div>
            <p className="block mt-1 text-l leading-tight font-medium text-black">Price: {price} $</p>
            <p className="block mt-1 text-l leading-tight font-medium text-black">Algorithm: {algorithm}</p>
            <p className="block mt-1 text-l leading-tight font-medium text-black">Reward: {reward_block} {reward_unit}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Coin;
