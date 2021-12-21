import { VIEW_USERS, ERROR_HUNDLING, DELETE_USER } from "./userTypes";

const initialState = {
  userInfo: [],
};

const viewUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_USERS:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ERROR_HUNDLING:
      return {
        ...state,
        userInfo: [],
      };

    default:
      return state;
  }
};

const deleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
      };
  }
};

export default viewUsersReducer;
