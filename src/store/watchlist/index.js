const initialState = {
    savedCoin: [],
}
export const watchlist = (state = initialState, action) => {
   
    switch(action.type) {
        case "STAR_COIN_SUCCESS": 
        return {
            ...state,
            savedCoin: [...state.savedCoin, action.payload],
        }

        default: 
        return state
    }
}

