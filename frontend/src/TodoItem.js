import React from "react";
import "./TodoItem.css";
import { Button } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
function TodoItem({ value }) {
	return (
		<div className='TodoItem'>
			<div className='TodoItem__text'>{value}</div>
			<div className='TodoItem__buttons'>
				<Button variant='success'>
					<EditIcon />
				</Button>
				<Button variant='danger' size='sm'>
					<DeleteIcon />
				</Button>
			</div>
		</div>
	);
}

export default TodoItem;
