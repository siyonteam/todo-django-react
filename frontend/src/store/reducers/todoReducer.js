const todoReducer = (state, action) => {
	switch (action.type) {
		case "TODO_ADD":
			return;
		case "TODO_REMOVE":
			return;
		case "TODO_EDIT":
			return;
		case "TODO_COMPLETE":
			return;
		default:
			return;
	}
};
export default todoReducer;
