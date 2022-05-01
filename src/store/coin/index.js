const initialState = {
  coin: null,
  priceData: null,
  priceLabels: null,
  chartLoading: false,
  loading: false,
};

export const coin = (state = initialState, action) => {
  switch (action.type) {
    case "COIN_DATA_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "COIN_DATA_SUCCESS":
      return {
        ...state,
        coin: action.payload,
        loading: false,
      };

    case "FETCH_CHART_PENDING":
      return {
        ...state,
        chartLoading: true,
      };
    case "FETCH_CHART_SUCCESS":
      const { priceData, priceLabels } = action.payload;
      return {
        ...state,
        priceData,
        priceLabels,
        chartLoading: false,
      };
    default:
      return state;
  }
};
