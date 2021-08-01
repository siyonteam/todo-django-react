import React, { useState } from "react";
import "./TodoList.scss";
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
	const updateTodo = (id, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) return;
		setTodos((prev) =>
			prev.map((item) => (item.id === id ? newValue : item))
		);
	};
	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};
	return (
		<div className='TodoList'>
			<TodoInput onSubmit={addTodo} buttonText={"Add"} />
			<div className='TodoList__items'>
				<TodoItem
					list={todos}
					onRemove={removeTodo}
					onComplete={completeTodo}
					onEdit={updateTodo}
				/>
			</div>
		</div>
	);
}

export default TodoList;
