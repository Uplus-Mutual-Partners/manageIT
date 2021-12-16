import { VIEW_USERS, ERROR_HUNDLING } from "./userTypes";

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

export default viewUsersReducer;
