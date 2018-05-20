import * as types from "./actionTypes";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";
import {loadTodos} from "./todoActions";
import {login,signUpAPI} from "../api/TodoApi";

export function signInSuccess(data){
    return{type:types.SIGN_IN_SUCCESS,data}
}
export function foundAuthorization(){
    return{type:types.FOUND_AUTHORIZATION}
}
export function signIn(data){
    return function (dispatch){
        dispatch(beginAjaxCall());
        return login(data).then(data=>{
            dispatch(signInSuccess(data));
            dispatch(loadTodos());
        },(error)=>{
            dispatch(ajaxCallError());
            throw(error);
        });
    }
}
export function logOut(){
    return{type:types.LOG_OUT};
}
export function signUp(data){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return signUpAPI(data).then((data)=>{
            dispatch(signInSuccess(data));
            dispatch(loadTodos());
        },(error)=>{
            dispatch(ajaxCallError());
            throw(error);
        });
    }
}