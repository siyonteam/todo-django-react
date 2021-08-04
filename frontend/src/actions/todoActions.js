import { FETCH_TODOS, NEW_TODO } from "../actions/types";

export const fetchTodos = () => (dispatch) => {
	console.log("dispatc");
	fetch("https://google.com")
		.then((res) => res.json())
		.then((todos) =>
			dispatch({
				type: FETCH_TODOS,
				payload: todos.payload,
			})
		);
};
