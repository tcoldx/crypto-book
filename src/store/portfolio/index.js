const initialState = {
  coinsData: [],
  statsList: null,
};

export const portfolio = (state = initialState, action) => {
  switch (action.type) {
    case "COIN_HISTORY_SUCCESS":
      return {
        ...state,
        coinsData: [...state.coinsData, action.payload],
      };

    case "GET_COINLIST_SUCCESS":
      return {
        ...state,
        statsList: action.payload,
      };

    default:
      return state;
  }
};
