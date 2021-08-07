import React, { useState, useEffect } from "react";
import "./TodoList.scss";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import { connect } from "react-redux";
// import { fetchTodos } from "../actions/todoActions";
function TodoList({ onRemove, searchValue }) {
	const [todos, setTodos] = useState([]);
	const [search, setSearch] = useState("");
	const [searchTodos, setSearchTodos] = useState([]);
	useEffect(() => {
		setSearch(searchValue);
		setSearchTodos(
			todos.filter((todo) =>
				todo.text.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [searchValue, search, todos]);
	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(todos);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		setTodos(items);
	};
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
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId='todoslist'>
					{(provided) => (
						<div
							className='TodoList__items'
							{...provided.droppableProps}
							ref={provided.innerRef}>
							{searchValue ? (
								<TodoItem
									list={searchTodos}
									onRemove={removeTodo}
									onComplete={completeTodo}
									onEdit={updateTodo}
								/>
							) : (
								<TodoItem
									list={todos}
									onRemove={removeTodo}
									onComplete={completeTodo}
									onEdit={updateTodo}
								/>
							)}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}

export default TodoList;
