import todoReducer from './todoReducer'
import { combineReducers } from 'redux'
import auth from './auth'
import message from './message'
const allReducers = combineReducers({
	todo: todoReducer,
	auth,
	message,
})

export default allReducers
