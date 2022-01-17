const initialState = {
  priceData: [],
  volumeData: [],
  priceLabels: [],
  volumeLabels: [],
  currentPrice: [],
  currentVolume: [],
  isPriceLoading: true,
  isVolumeLoading: true,
  hasError: false,
};

export const market = (state = initialState, action) => {
  switch (action.type) {
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
