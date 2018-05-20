import * as types from "./actionTypes";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";
import {loadTodosAPI, deleteTodoAPI} from "../api/TodoApi";
import { logOut } from "./userActions";

export function loadTodosSuccess(todos){
  return {type:types.LOAD_TODOS_SUCCESS,todos}
}
export function deleteTodoSuccess(id){
  return {type:types.DELETE_TODO_SUCCESS,id}
}
export function loadTodos(){
    return function(dispatch){
      dispatch(beginAjaxCall());
      return loadTodosAPI().then(todos=>{
        dispatch(loadTodosSuccess(todos));
      }).catch(error =>{
        dispatch(ajaxCallError());
        if(error.message==="Request failed with status code 401"){
          dispatch(logOut());
        }
        throw(error);
      });
    };
  }
export function deleteTodo(todo){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return deleteTodoAPI(todo).then((id)=>{
      dispatch(deleteTodoSuccess(id));
    }).catch((error)=>{
      dispatch(ajaxCallError());
      throw(error);
    });
  }
}