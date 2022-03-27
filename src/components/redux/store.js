import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counter as card } from "./modules/card";
import thunk from "redux-thunk";

const middleware = [thunk];
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middleware)) //배포용
    : composeWithDevTools(applyMiddleware(...middleware)); //개발용
const rootReducer = combineReducers({ card });

const store = createStore(rootReducer, enhancer);

export default store;
