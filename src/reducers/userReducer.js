
import initialState from "./initialState";
import * as types from "../actions/actionTypes";
export default function userReducer(state=initialState.user,actions){
    let user;
    switch(actions.type){
        case types.SIGN_IN_SUCCESS:
            user=Object.assign({},state);
            user.loggedIn=true;
            return user;
        case types.FOUND_AUTHORIZATION:
            user=Object.assign({},state);
            user.loggedIn=true;
            return user;
        case types.LOG_OUT:
            user=Object.assign({},state);
            user.loggedIn=false;
            localStorage.removeItem("jwtToken");
            return user;
        default:
            return state;

    }
};