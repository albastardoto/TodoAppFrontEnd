import * as types from "./actionTypes";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";
import {loadTodos} from "../api/TodoApi";
export function loadTodosSuccess(courses){
    return {type:types.LOAD_TODOS_SUCCESS,courses}
}
export function loadTodos(){
    return function(dispatch){
      dispatch(beginAjaxCall());
      return loadTodos.then(courses=>{
        dispatch(loadCoursesSuccess(courses));
      }).catch(error =>{
  
        throw(error);
      });
    };
  }