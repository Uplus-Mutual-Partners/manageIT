import { VIEW_USERS } from "./userTypes";

const initialState = {
  userInfo: {},
};

const viewUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_USERS:
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export default viewUsersReducer;
