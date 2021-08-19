import {
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
} from '../actions/types'

const initialState = {}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
			return
		case REGISTER_FAILED:
			return
		case LOGIN_SUCCESS:
			return
		case LOGIN_FAILED:
			return
		default:
			return state
	}
}

export default auth
