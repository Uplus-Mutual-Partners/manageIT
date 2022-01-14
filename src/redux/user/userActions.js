import { VIEW_USERS, ERROR_HUNDLING, DELETE_USER, ADD_USER, EDIT_USER } from "./userTypes";

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

export const addUserAction = (formData) => {
  return (dispatch) => {
    apiCall
      .post("/users", formData )
      .then((res) => {
        console.log("201: user created", res.data);
        dispatch({
          type: ADD_USER,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUserAction = (id) => {
  return (dispatch) => {
    apiCall
    .delete(`/users/${id}`)
    .then((res)=> {
      console.log("=====user deleted====",res.data);
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    })
    .catch((error) => {
      console.log(error);
    });
    
  };
};

export const EditUserAction = (formData, id) => {
  return (dispatch) => {
    apiCall
    .put(`/users/${id}`, formData)
    .then((res)=> {
      console.log("=====user deleted====",res.data);
      dispatch({
        type: EDIT_USER,
        id: id,
        payload: formData
      });
    })
    .catch((error) => {
      console.log(error);
    });
    
  };
};
