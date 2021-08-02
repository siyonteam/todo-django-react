import React from "react";
import "./Main.scss";

import TodoList from "./TodoList";
import "rodal/lib/rodal.css";
function Main({ searchValue }) {
	return (
		<div className='Main'>
			<TodoList />
		</div>
	);
}

export default Main;
