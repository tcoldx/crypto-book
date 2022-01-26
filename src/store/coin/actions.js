import axios from "axios";

export const getCoin = (currency) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "COIN_DATA_PENDING",
    });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${currency}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
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
