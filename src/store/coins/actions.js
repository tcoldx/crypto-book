import axios from "axios";

export const getChartData = () => async (dispatch) => {
  dispatch({
    type: "FETCH_MARKET_PENDING",
  });
  const { data } = await axios.get(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
  );
  console.log(data);
  const marketPrice = data.prices.map((el) => el[0]);
  const priceLabel = data.prices
    .map((el) => new Date(el[0]).getDate().toString())
    .map((el) => (el.length === 1 ? `0${el}` : el));
  const marketVolume = data.total_volumes.map((el) => el[1]);
  const volumeLabel = data.total_volumes
    .map((el) => new Date(el[0]).getDate().toString())
    .map((el) => (el.length === 1 ? `0${el}` : el));
  dispatch({
    type: "FETCH_MARKET_SUCCESS",
    payload: data,
  });
};
