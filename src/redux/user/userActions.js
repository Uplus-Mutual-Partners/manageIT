import { VIEW_USERS, ERROR_HUNDLING, DELETE_USER, ADD_USER } from "./userTypes";

import apiCall from "../../helpers/apiCall";

export const viewUsersAction = () => async (dispatch) => {
  try {
    const Response = await apiCall.get("/users");
    dispatch({
      type: VIEW_USERS,
      payload: Response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_HUNDLING,
    });
  }
};

export const addUserAction = (formData) => async (dispatch) => {
  try {
    const Response = await apiCall.post("/users");
    dispatch({
      type: ADD_USER,
      payload: formData,
    });
  } catch (error) {
    dispatch({
      type: ERROR_HUNDLING,
    });
  }
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
