
import initialState from "./initialState";
import * as types from "../actions/actionTypes";
export default function todoReducer(state=initialState.todos,actions){
    switch(actions.type){
        case types.LOAD_TODOS_SUCCESS:
            return actions.todos;
        default:
            return state;

    }
};