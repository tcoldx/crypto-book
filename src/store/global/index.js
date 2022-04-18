const initialState = {
  navData: [],
  currentCurrency: "usd",
  currentCoin: "bitcoin",
  coins: null,
  setLoading: false,
};

export const global = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NAV_SUCCESS":
      return {
        ...state,
        navData: action.payload,
      };

    case "SEARCH_PENDING":
      return {
        ...state,
        setLoading: true,
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
        setLoading: false,
      };

    default:
      return state;
  }
};
