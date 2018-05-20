
import initialState from "./initialState";
import * as types from "../actions/actionTypes";
export default function todoReducer(state=initialState.todos,actions){
    switch(actions.type){
        case types.LOAD_TODOS_SUCCESS:
            return actions.todos;
        case types.DELETE_TODO_SUCCESS:
            return state.filter(todo=>todo._id !== actions.id);
        default:
            return state;

    }
};