const initialState = {
  coinsData: [],
  arrayCoins: [],
  statsList: null,
  loading: false,
};

export const portfolio = (state = initialState, action) => {
  switch (action.type) {
    case "COIN_HISTORY_SUCCESS":
      return {
        ...state,
        coinsData: [...state.coinsData, action.payload],
      };

    // if trash button is clicked then delete the coin from the list
    case "REMOVE_ITEM":
      return {
        ...state,
        coinsData: state.coinsData.filter(
          (el) => el.purchaseData.id !== action.payload
        ),
      };

    case "CHANGE_ITEM":
      return {
        ...state,
        coinsData: [...state.coinsData, action.payload],
      };

    case "GET_COINS_PENDING":
      return {
        ...state,
        loading: true,
      };

    case "GET_COINS_SUCCESS":
      return {
        ...state,
        arrayCoins: action.payload,
        loading: false,
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
