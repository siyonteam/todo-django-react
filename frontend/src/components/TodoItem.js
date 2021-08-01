import React, { useState } from "react";
import "./TodoItem.scss";
import { Button } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TodoInput from "./TodoInput";
function TodoItem({ list, value, onRemove, onComplete, onEdit }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});
	const submitUpdate = (value) => {
		onEdit(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};
	if (edit.id) {
		return (
			<TodoInput
				edit={edit}
				onSubmit={submitUpdate}
				textEdit={edit.text}
			/>
		);
	}
	return list.map((todo, index) => (
		<div
			key={index}
			className={todo.isComplete ? "TodoItem complete" : "TodoItem"}>
			<div
				key={todo.id}
				onClick={() => onComplete(todo.id)}
				className='TodoItem__text'>
				<p>{todo.text}</p>
			</div>
			<div className='TodoItem__buttons'>
				<Button
					variant='light'
					size='sm'
					onClick={() => setEdit({ id: todo.id, value: todo.text })}>
					<EditIcon />
				</Button>
				<Button
					variant='light'
					size='sm'
					onClick={() => onRemove(todo.id)}>
					<DeleteIcon />
				</Button>
			</div>
		</div>
	));
}

export default TodoItem;
