import axios from "axios";

export const getCoinInfo = (data) => async (dispatch) => {
  const { amount, name, date } = data;
  let today = new Date();
  let givenDate = new Date(date);

  if (amount < 1) {
    return null;
  }
  try {
    dispatch({
      type: "COIN_INFO_PENDING",
    });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${name}/history?date=${
        givenDate > today
          ? alert("please use a previous date or the current")
          : date
      }`
    );
    console.log(data);
    dispatch({
      type: "COIN_HISTORY_SUCCESS",
      payload: {
        currencyPurchased: null,
        amountPurchased: amount,
        datePurchased: date,
        purchaseData: data,
      },
    });
  } catch (err) {
    dispatch({
      type: "COIN_INFO_ERROR",
      payload: err,
    });
  }
};

export const getCoinsData = (currency) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_COINLIST_PENDING",
    });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=500&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d`
    );
    dispatch({
      type: "GET_COINLIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "GET_COINLIST_ERROR",
      payload: err,
    });
  }
};
