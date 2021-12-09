import { VIEW_USERS } from "./userTypes";

import apiCall from "../../helpers/apiCall";

export const viewUsersAction = () => async (dispatch) => {
  await fetch("${apiCall}/users").then((res) =>
    dispatch({
      type: VIEW_USERS,
      payload: res,
    })
  );
};
