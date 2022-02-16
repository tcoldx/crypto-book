import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { market } from "./coins";
import { global } from "./global";
import { coin } from "./coin";
import { portfolio } from "./portfolio";

const rootReducer = combineReducers({
  market,
  global,
  coin,
  portfolio,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
