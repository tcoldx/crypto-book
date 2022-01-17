const initialState = {
  data: [],
};
export const market = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MARKET_SUCCESS":
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};
