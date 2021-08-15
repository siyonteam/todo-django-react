export const addTodo = () => {
	return {
		type: "TODO_ADD",
	};
};

export const removeTodo = (id) => {
	return {
		type: "TODO_REMOVE",
		payload: id,
	};
};
export const editTodo = (editString) => {
	return {
		type: "TODO_EDIT",
		payload: editString,
	};
};
export const completeTodo = () => {
	return {
		type: "TODO_COMPLETE",
	};
};
