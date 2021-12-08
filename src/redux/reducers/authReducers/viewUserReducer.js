import { VIEW_USERS_INFO } from "../../actionTypes/profileActionTypes";

import initialState from "../../store/initialState";

const viewUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_USERS_INFO:
      return {
        ...state,
        viewProfileInfo: action.payload,
      };

    default:
      return state;
  }
};

export default viewUsersReducer;
