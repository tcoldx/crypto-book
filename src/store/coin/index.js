const initialState = {
  coin: null,
  priceData: null,
  priceLabels: null,
};

export const coin = (state = initialState, action) => {
  switch (action.type) {
    case "COIN_DATA_SUCCESS":
      return {
        ...state,
        coin: action.payload,
      };
    case "FETCH_CHART_SUCCESS":
      const { priceData, priceLabels } = action.payload;
      return {
        ...state,
        priceData,
        priceLabels,
      };
    default:
      return state;
  }
};
