export default function getCoin(id){
    const apiURL = `https://api.coingecko.com/api/v3/coins/${id}`

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        return response.image.large;
    })

}
