import axios from "axios";

export const getNavData = () => async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_NAV_PENDING",
    });
    const { data } = await axios.get("https://api.coingecko.com/api/v3/global");
    dispatch({
      type: "FETCH_NAV_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "FETCH_NAV_ERROR",
      payload: err,
    });
  }
};

export const changeCurrency = (currency) => {
  return {
    type: "CHANGE_CURRENCY",
    payload: currency,
  };
};

export const getCurrentCoin = (coin) => {
  return {
    type: "CHANGE_COIN",
    payload: coin,
  };
};
