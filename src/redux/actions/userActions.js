import { VIEW_USERS } from "../actionTypes/userActionTypes";

import apiCall from "../../helpers/apiCall";

export const viewUsersAction = () => async (dispatch) => {
  try {
    const body = {
      action: "VIEW_USERS",
    };

    const viewUsersResponse = await apiCall.post("/users", body, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": " ",
      },
    });
    dispatch({
      type: VIEW_USERS,
      payload: viewUsersResponse,
    });
    console.log("_____________RESPONSE_________", viewUsersResponse);
  } catch (error) {
    //console.log('__________________ERROR_____', error);
    dispatch({
      type: VIEW_USERS,
      payload: error.response,
    });
  }
};
