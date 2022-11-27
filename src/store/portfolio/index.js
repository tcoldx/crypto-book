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
          (el) => el.id ? el.id !== action.payload : el.key !== action.payload
        ),
      };

    case "EDIT_ITEM":
      const newArray = state.coinsData.map((oldCoin) => {
        if (oldCoin.key === action.payload.key) {
          return action.payload;
        } else {
          return oldCoin;
        }
      });
      return {
        ...state,
        coinsData: newArray,
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
