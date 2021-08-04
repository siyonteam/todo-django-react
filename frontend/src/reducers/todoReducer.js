import { FETCH_TODOS, NEW_TODO } from "../actions/types";

const intialState = {
	items: [],
	item: {},
};

export default function (state = intialState, action) {
	switch (action.type) {
		case FETCH_TODOS:
			return {
				...state,
				items: action.payload,
			};

		default:
			return state;
	}
}
