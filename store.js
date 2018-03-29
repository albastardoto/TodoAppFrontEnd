import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {createLogger} from "logger"
const middleware= applyMiddleware(thunk,createStore())
export default (initialState)=>{
    return createStore(rootReducer,initialState);
}