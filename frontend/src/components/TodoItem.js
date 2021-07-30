import React from "react";
import "./TodoItem.css";
import { Button } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
function TodoItem({ list, value, onRemove = (f) => f }) {
	return list.map((todo, index) => (
		<div key={index} className='TodoItem'>
			<div className='TodoItem__text'>{todo.text}</div>
			<div className='TodoItem__buttons'>
				<Button variant='success'>
					<EditIcon />
				</Button>
				<Button
					variant='danger'
					size='sm'
					onClick={() => onRemove(todo.id)}>
					<DeleteIcon />
				</Button>
			</div>
		</div>
	));
}

export default TodoItem;
