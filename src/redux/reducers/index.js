import { combineReducers } from "redux";
import userReducers from "./authReducers";

export default combineReducers({
  users: userReducers,
});
