import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import viewUsersReducer from "../reducers/authReducers/viewUserReducer";

const middleware = applyMiddleware(logger, thunk);

const store = createStore(
  viewUsersReducer,

  composeWithDevTools(middleware)
);

export default store;
