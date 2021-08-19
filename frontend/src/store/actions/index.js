import { TODO_ADD, TODO_REMOVE, TODO_EDIT, TODO_COMPLETE } from './types'

export const addTodo = (description) => {
	return {
		type: TODO_ADD,
		payload: {
			description,
		},
	}
}

export const removeTodo = (id) => {
	return {
		type: TODO_REMOVE,
		payload: {
			id,
		},
	}
}
export const editTodo = (id, description) => {
	return {
		type: TODO_EDIT,
		payload: {
			id,
			description,
		},
	}
}
export const completeTodo = (id) => {
	return {
		type: TODO_COMPLETE,
		payload: {
			id,
		},
	}
}
