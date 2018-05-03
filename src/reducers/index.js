import todos from "./todoReducer";
import {combineReducers} from "redux";
import numAjaxCallsInProgress from "./ajaxStatusReducer";
import users from "./userReducer";
const rootReducer = combineReducers({
    todos,
    numAjaxCallsInProgress,
    users
});
export default rootReducer;