import { DELETE_USER } from "./userTypes";

const initialState = {
 allUsers = userInfo
}

console.log("======user before delete====",allUsers)

const deleteUserReducer =(state = initialState, action) => {
    switch (action.type) {
        case DELETE_USER:
            let n = action.payload - 1
            return {
             
                ...state,
                allUsers = allUsers.splice(n, 1)
            }
            default:
                return state;

    }
}

export default deleteUserReducer;