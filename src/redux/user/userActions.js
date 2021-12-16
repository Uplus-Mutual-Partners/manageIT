import { VIEW_USERS } from "./userTypes";

import apiCall from "../../helpers/apiCall";

export const viewUsersAction = () => async (dispatch) => {
  try {
    const Response = await apiCall.get("/users");
    dispatch({
      type: VIEW_USERS,
      payload: Response.data,
    });
  } catch (error) {
    console.log(error.response.data.error);
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
