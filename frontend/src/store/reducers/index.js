import todoReducer from './todoReducer'
import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import message from './message'
const allReducers = combineReducers({
	todo: todoReducer,
	auth: loginReducer,
	message,
})

export default allReducers
