import axios from "axios";

export const StarredCoins = (currency) => async (dispatch) => {
    try {
   const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${currency}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true'`)   
   dispatch({
        type: "STAR_COIN_SUCCESS",
        payload: data
    })
} catch (err) {
    console.log(err)
}
  
}