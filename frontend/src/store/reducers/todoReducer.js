import {
	TODO_ADD,
	TODO_REMOVE,
	TODO_EDIT,
	TODO_COMPLETE,
} from '../actions/types'

import { v4 } from 'uuid'

const todoReducer = (state = [], action) => {
	switch (action.type) {
		case TODO_ADD:
			return [
				...state,
				{
					id: v4(),
					description: action.payload.description,
					completed: false,
				},
			]
		case TODO_REMOVE:
			return state.filter((state) => state.id !== action.payload.id)
		case TODO_EDIT:
			return state.map((state) =>
				state.id !== action.payload.id
					? state
					: { ...state, description: action.payload.description }
			)
		case TODO_COMPLETE:
			return state.map((state) =>
				state.id !== action.payload.id
					? state
					: { ...state, completed: true }
			)
		default:
			return state
	}
}

export default todoReducer
