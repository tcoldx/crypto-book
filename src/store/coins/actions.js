import axios from "axios";

export const getChartData = () => async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_MARKET_PENDING",
    });
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
    );
    // setting the chart labels and the price into variable with data
    const priceData = data.prices.map((el) => el[1]);
    const priceLabels = data.prices
      .map((el) => new Date(el[0]).getDate().toString())
      .map((el) => (el.length === 1 ? `0${el}` : el));
    const volumeData = data.total_volumes.map((el) => el[1]);
    const volumeLabels = data.total_volumes
      .map((el) => new Date(el[0]).getDate().toString())
      .map((el) => (el.length === 1 ? `0${el}` : el));
    dispatch({
      type: "FETCH_MARKET_SUCCESS",
      payload: { priceData, volumeData, priceLabels, volumeLabels },
    });
  } catch (err) {
    dispatch({
      type: "FETCH_MARKET_ERROR",
      payload: err,
    });
  }
};

export const getMarketPrice = () => async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_DATA_PENDING",
    });
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
    const currentPrice = data.market_data.current_price.usd;
    const currentVolume = data.market_data.total_volume.usd;
    dispatch({
      type: "FETCH_DATA_SUCCESS",
      payload: { currentPrice, currentVolume },
    });
  } catch (err) {
    dispatch({
      type: "FETCH_DATA_ERROR",
      payload: err,
    });
  }
};
