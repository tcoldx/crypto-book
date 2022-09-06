import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { market } from "./coins";
import { global } from "./global";
import { coin } from "./coin";
import { portfolio } from "./portfolio";
import {watchlist} from "./watchlist";

const rootReducer = combineReducers({
  market,
  global,
  coin,
  portfolio,
  watchlist,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
