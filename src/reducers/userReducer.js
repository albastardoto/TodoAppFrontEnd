
import initialState from "./initialState";
import * as types from "../actions/actionTypes";
export default function userReducer(state=initialState.todos,actions){
    switch(actions.type){
        case types.SIGN_IN_SUCCESS:
            console.log(actions.data);
            return state;
        default:
            return state;

    }
};