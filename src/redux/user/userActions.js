import { VIEW_USERS, ERROR_HUNDLING } from "./userTypes";

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

// export const viewUsersAction = () => async (dispatch) => {
//   await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     dispatch({
//       type: VIEW_USERS,
//       payload: res,
//     })
//   );
// };
