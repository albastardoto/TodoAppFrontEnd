
import initialState from "./initialState";
import * as types from "../actions/actionTypes";
export default function todoReducer(state=initialState.todos,actions){
    switch(actions.type){
        case types.LOAD_TODOS_SUCCESS:
            return actions.todos;
        case types.DELETE_TODO_SUCCESS:
            return state.filter(todo=>todo._id !== actions.id);
        case types.CREATE_TODO_SUCCESS:
            return [...state,actions.todo]
        case types.CREATE_TODO_ERROR:
            let currState=state;
            let index= state.findIndex((todo)=>{
                return actions.text===todo.text
            });
            return currState.splice(index,1);

        default:
            return state;

    }
};