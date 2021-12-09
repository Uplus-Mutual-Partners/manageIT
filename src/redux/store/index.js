import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/userReducers/rootReducer";
import initialUserState from "./initialState";

const middleware = applyMiddleware(logger, thunk);

const store = createStore(
  rootReducer,
  initialUserState,
  composeWithDevTools(middleware)
);

export default store;
