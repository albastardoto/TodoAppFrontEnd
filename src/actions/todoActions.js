import * as types from "./actionTypes";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";
import {loadTodosAPI} from "../api/TodoApi";



export function loadTodosSuccess(todos){
    return {type:types.LOAD_TODOS_SUCCESS,todos}
}
export function loadTodos(){
    return function(dispatch){
      dispatch(beginAjaxCall());
      return loadTodosAPI().then(todos=>{
        dispatch(loadTodosSuccess(todos));
      }).catch(error =>{
        dispatch(ajaxCallError());
        throw(error);
      });
    };
  }