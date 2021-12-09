import { combineReducers } from "redux";
import viewUsersReducer from "./viewUserReducer";

const rootReducer = combineReducers({
  user: viewUsersReducer,
});

export default rootReducer;
