import { VIEW_USERS, ERROR_HUNDLING, DELETE_USER, ADD_USER } from "./userTypes";

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
    case ADD_USER:
      // return state.concat({
      //   username: action.payload.username,
      //   street: action.payload.street,
      //   suite: action.payload.suite,
      //   city: action.payload.city,
      //   zipcode: action.payload.zipcode,
      //   lat: action.payload.lat,
      //   lng: action.payload.lng,
      // });

      return { ...state, userInfo: { ...state.userInfo, ...action.payload } };

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
