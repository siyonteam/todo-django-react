import todoReducer from "./todoReducer";
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const allReducers = combineReducers({
	todo: todoReducer,
	auth: loginReducer,
});

export default allReducers;
