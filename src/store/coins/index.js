const initialState = {
  priceData: null,
  volumeData: null,
  priceLabels: null,
  volumeLabels: null,
  currentPrice: null,
  currentVolume: null,
  coins: [],
  coinsLoading: false,
  chartLoading: false,
  hasError: false,
};

export const market = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MARKET_PENDING":
      return {
        ...state,
        chartLoading: true,
      };
    case "FETCH_MARKET_SUCCESS":
      const { priceData, volumeData, priceLabels, volumeLabels } =
        action.payload;
      return {
        ...state,
        // try to destructure that action.payload and get that priceData only for the priceData
        // try to destructure to get the volumeData only for the volumeData
        priceData,
        volumeData,
        volumeLabels,
        priceLabels,
        chartLoading: false,
      };

    case "FETCH_COINS_PENDING":
      return {
        ...state,
        coinsLoading: true,
      };

    case "FETCH_COINS_SUCCESS":
      return {
        ...state,
        coins: action.payload,
        coinsLoading: false,
      };

    case "FETCH_DATA_SUCCESS":
      const { currentVolume, currentPrice } = action.payload;
      return {
        ...state,
        currentPrice,
        currentVolume,
      };

    default:
      return state;
  }
};
