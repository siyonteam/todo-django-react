import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
function TodoList({ list, onRemove }) {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) return;

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
		console.log(todo, ...todos);
	};
	const removeTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};
	return (
		<div className='TodoList'>
			<TodoInput onSubmit={addTodo} />
			<div className='TodoList__items'>
				<TodoItem list={todos} onRemove={removeTodo} />
			</div>
		</div>
	);
}

export default TodoList;
