import React, { useState, useEffect, useRef } from "react";
import "./TodoInput.scss";
import { v4 } from "uuid";
function TodoInput(props) {
	const [input, setInput] = useState("");

	const inputRef = useRef(null);

	useEffect(() => inputRef.current.focus());

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
				{props.edit ? (
					<>
						<input
							type='text'
							placeholder='ویرایش'
							value={input}
							onChange={handleChange}
							ref={inputRef}
						/>
						<button>Update</button>
					</>
				) : (
					<>
						<input
							type='text'
							value={input}
							onChange={handleChange}
							ref={inputRef}
						/>
						<button>Add</button>
					</>
				)}
			</form>
		</div>
	);
}

export default TodoInput;
