import { VIEW_USERS_INFO } from "../actionTypes/profileActionTypes";

import apiCall from "../../helpers/apiCall";

export const viewUsersProfileAction = () => async (dispatch) => {
  try {
    const body = {
      action: "VIEW_USERS_INFO",
    };

    const viewUsersInfoResponse = await apiCall.post("/users", body, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": " ",
      },
    });
    dispatch({
      type: VIEW_USERS_INFO,
      payload: viewUsersInfoResponse.data,
    });
    console.log(
      "_____________RESPONSE_________",
      viewUsersInfoResponse.data.data
    );
  } catch (error) {
    //console.log('__________________ERROR_____', error);
    dispatch({
      type: VIEW_USERS_INFO,
      payload: error.response,
    });
  }
};
