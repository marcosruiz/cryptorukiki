
export default function getCoins(){
    const apiURL = "https://api.minerstat.com/v2/coins?list=BTC,ETH,XMR,DOGE"

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        //const {data = []} =  response;
        return response;
    })

}
