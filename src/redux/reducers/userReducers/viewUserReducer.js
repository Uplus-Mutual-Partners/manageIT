import { VIEW_USERS } from "../../actionTypes/userActionTypes";

import initialState from "../../store/initialState";

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
