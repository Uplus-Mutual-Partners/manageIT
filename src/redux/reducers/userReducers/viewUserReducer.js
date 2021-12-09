import { VIEW_USERS } from "../../actionTypes/userActionTypes";

import initialUserState from "../../store/initialState";

const viewUsersReducer = (state = initialUserState, action) => {
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
