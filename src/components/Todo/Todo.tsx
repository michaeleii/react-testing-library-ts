import { useState } from "react";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";
import ITodo from "../../interfaces/ITodo";

function Todo() {
	const [todos, setTodos] = useState([] as ITodo[]);

	return (
		<div className="todo">
			<Header title="Todo" />
			<AddInput setTodos={setTodos} todos={todos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default Todo;
