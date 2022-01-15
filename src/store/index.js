import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { market } from "./coins";

const rootReducer = combineReducers({
  market,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
