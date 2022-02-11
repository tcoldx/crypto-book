const initialState = {
  navData: [],
  currentCurrency: "usd",
  currentCoin: "bitcoin",
  coins: null,
};

export const global = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NAV_SUCCESS":
      return {
        ...state,
        navData: action.payload,
      };

    case "CHANGE_CURRENCY":
      return {
        ...state,
        currentCurrency: action.payload,
      };

    case "CHANGE_COIN":
      return {
        ...state,
        currentCoin: action.payload,
      };

    case "SEARCH_SUCCESS":
      return {
        ...state,
        coins: action.payload,
      };

    default:
      return state;
  }
};
