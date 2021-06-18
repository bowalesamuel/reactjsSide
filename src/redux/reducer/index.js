import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./auth";

// main reducers

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: authReducer,
    // your reducer here
  });

export default rootReducer;
