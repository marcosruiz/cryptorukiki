import React, {useEffect, useState} from "react";
import getCoins from "../services/getCoins";
import Coin from '../components/Coin';

function CoinList() {
  const [coinList, updateCoinList] = useState([])

  useEffect(() => {
      getCoins().then(coinList => updateCoinList(coinList))
    }, [])

  return (
    <div>
      {
        coinList.map((singleCoin) => 
          <Coin 
            key={singleCoin.id} 
            id={singleCoin.id} 
            coinAcronym={singleCoin.coin} 
            name={singleCoin.name} 
            type={singleCoin.type} 
            algorithm={singleCoin.algorithm} 
            network_hashrate={singleCoin.network_hashrate} 
            difficulty={singleCoin.difficulty} 
            reward={singleCoin.reward} 
            reward_unit={singleCoin.reward_unit} 
            reward_block={singleCoin.reward_block} 
            price={singleCoin.price} 
            volume={singleCoin.volume} 
            updated={singleCoin.updated} 
          />
        )
      }
    </div>
  );
}

export default CoinList;
