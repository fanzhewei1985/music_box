import { combineReducers } from "redux";
import songReducers from "./songReducers";
import messageReducers from "./messageReducers";

export default combineReducers({songReducers,messageReducers})