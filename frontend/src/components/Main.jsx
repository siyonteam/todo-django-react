import React, { useState } from "react";
import "./Main.scss";

import TodoList from "./TodoList";
import "rodal/lib/rodal.css";
function Main({ searchValue }) {
	const [searchV, setSearchV] = useState("");
	React.useEffect(() => {
		setSearchV(searchValue);
	}, [searchValue]);
	return (
		<div className='Main'>
			<TodoList searchValue={searchV} />
		</div>
	);
}

export default Main;
