import axios from "axios";

export const getChartData = (item, currency) => async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_MARKET_PENDING",
    });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${item}&interval=daily`
    );
    // setting the chart labels and the price into variable with data
    // price chart data
    const priceData = data.prices.map((el) => el[1]);
    const priceLabels = data.prices
      .map((el) => new Date(el[0]).getDate().toString())
      .map((el) => (el.length === 1 ? `0${el}` : el));
    // volume chart data
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

export const getCoins = (type) => async (dispatch, getState) => {
  const state = getState();
  const { currentCurrency } = state.global;
  // return an action
  try {
    dispatch({
      type: "FETCH_COINS_PENDING",
    });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&category=${`${
        type ? type : "cryptocurrency"
      }`}&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C7d`
    );
    dispatch({
      type: "FETCH_COINS_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "FETCH_COINS_ERROR",
    });
  }
};

export const getMarketPrice = () => async (dispatch, getState) => {
  const state = getState();
  const { currentCurrency } = state.global;
  try {
    dispatch({
      type: "FETCH_DATA_PENDING",
    });
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
    const currentPrice = data.market_data.current_price[currentCurrency];
    const currentVolume = data.market_data.total_volume[currentCurrency];
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
