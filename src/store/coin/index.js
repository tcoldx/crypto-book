const initialState = {
  coin: null,
};

export const coin = (state = initialState, action) => {
  switch (action.type) {
    case "COIN_DATA_SUCCESS":
      return {
        ...state,
        coin: action.payload,
      };
    default:
      return state;
  }
};
