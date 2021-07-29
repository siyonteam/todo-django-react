import React from "react";
import "./Main.css";
import TodoItem from "./TodoItem";
import { Button } from "react-bootstrap";

function Main() {
	return (
		<div className='Main'>
			<div className='Main__input'>
				<form className='Main__input--form'>
					<input type='text' />
					<Button variant='primary' value='submit'>
						Add
					</Button>
				</form>
			</div>
			<div className='Main__list'>
				<TodoItem value='hi' />
				<TodoItem value='سلام این یک تست است' />
				<TodoItem value='hi' />
				<TodoItem value='hi' />
			</div>
		</div>
	);
}

export default Main;
