import { VIEW_USERS, DELETE_USER} from "./userTypes";

export const initialState = {
  userInfo: [],
};

const viewUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_USERS:
      return {
        ...state,
        userInfo: action.payload,
      };
      case DELETE_USER:
            return {
             ...state,
             userInfo: state.userInfo.filter((user) => user.id !== action.payload)
            };
   
    default:
      return state;
  }
};


export default viewUsersReducer;
