import axios from "axios";

export const getCoin = (currency) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "COIN_DATA_PENDING",
    });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${currency}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
    );
    dispatch({
      type: "COIN_DATA_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "COIN_DATA_ERROR",
      payload: err,
    });
  }
};

export const getCoinChartData = (duration) => async (dispatch, getState) => {
  const state = getState();
  const { currentCurrency } = state.global;
  try {
    dispatch({
      type: "FETCH_CHART_PENDING",
    });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currentCurrency}&days=${duration}`
    );
    const priceData = data.prices.map((el) => el[1]);
    const priceLabels = data.prices
      .map((el) => new Date(el[0]).getDate().toString())
      .map((el) => (el.length === 1 ? `0${el}` : el));
    dispatch({
      type: "FETCH_CHART_SUCCESS",
      payload: { priceData, priceLabels },
    });
  } catch (err) {
    dispatch({
      type: "FETCH_CHART_ERROR",
      payload: err,
    });
  }
};
