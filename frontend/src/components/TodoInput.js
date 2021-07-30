import React, { useState } from "react";
import "./TodoInput.css";

import { v4 } from "uuid";
function TodoInput(props) {
	const [input, setInput] = useState("");
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: v4(),
			text: input,
		});

		setInput("");
	};
	return (
		<div className='TodoInput'>
			<form className='TodoInput__form' onSubmit={handleSubmit}>
				<input type='text' value={input} onChange={handleChange} />
				<button onClick={handleSubmit}>Add</button>
			</form>
		</div>
	);
}

export default TodoInput;
