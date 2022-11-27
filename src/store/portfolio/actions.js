import axios from "axios";

export const getCoinInfo = (data) => async (dispatch) => {
  const { amount, name, date, key, _id } = data;
  console.log(_id)
  if (amount < 1) {
    return null;
  }
  try {
    dispatch({
      type: "COIN_INFO_PENDING",
    });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${name}/history?date=${date
        .split("-")
        .reverse()
        .join("-")}`
    );

    dispatch({
      type: "COIN_HISTORY_SUCCESS",
      payload: {
        key: key,
        id: _id,
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

export const getCoinsList = (search) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_COINS_PENDING",
    });
    const { data } = await axios.get(
      `https://crypto-app-server.herokuapp.com/coins/${search}`
    );
    dispatch({
      type: "GET_COINS_SUCCESS",
      payload: data,
    });
  } catch (err) {}
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

export const deleteItem = (coinId) => {
  return {
    type: "REMOVE_ITEM",
    payload: coinId,
  };
};

export const editItem = (datas) => async (dispatch) => {
  const { name, amount, date, key } = datas;
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${name}/history?date=${date
      .split("-")
      .reverse()
      .join("-")}`
  );
  dispatch({
    type: "EDIT_ITEM",
    payload: {
      key: key,
      amountPurchased: amount,
      datePurchased: date,
      purchaseData: data,
    },
  });
};
