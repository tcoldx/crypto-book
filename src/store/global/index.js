const initialState = {
  navData: [],
  currentCurrency: "usd",
  currentCoin: "bitcoin",
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

    default:
      return state;
  }
};
