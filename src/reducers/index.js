import todos from "./todoReducer";
import {combineReducers} from "redux";
import numAjaxCallsInProgress from "./ajaxStatusReducer";
import user from "./userReducer";
const rootReducer = combineReducers({
    todos,
    numAjaxCallsInProgress,
    user
});
export default rootReducer;