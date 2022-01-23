const initialState = {
  navData: [],
};

export const global = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NAV_SUCCESS":
      return {
        navData: action.payload,
      };

    default:
      return state;
  }
};
