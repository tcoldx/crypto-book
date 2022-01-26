import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { market } from "./coins";
import { global } from "./global";
import { coin } from "./coin";

const rootReducer = combineReducers({
  market,
  global,
  coin,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
