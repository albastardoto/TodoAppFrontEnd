import * as types from "./actionTypes";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

import {login, setAuthorizationToken} from "../api/TodoApi";

export function signInSuccess(data){
    return{type:types.SIGN_IN_SUCCESS,data}
}
export function signIn(data){
    return function (dispatch){
        dispatch(beginAjaxCall());
        return login(data).then(data=>{
            dispatch(signInSuccess(data))
        },(error)=>{
            dispatch(ajaxCallError());
            throw(error);
        });
    }
}