import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { market } from "./coins";
import { global } from "./global";

const rootReducer = combineReducers({
  market,
  global,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
