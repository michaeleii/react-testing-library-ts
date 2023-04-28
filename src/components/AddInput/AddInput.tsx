import { useState } from "react";
import "./AddInput.css";
import { v4 } from "uuid";
import ITodo from "../../interfaces/ITodo";

function AddInput({
	setTodos,
	todos,
}: {
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
	todos: ITodo[];
}) {
	const [todo, setTodo] = useState("");

	const addTodo = () => {
		if (!todo) return;
		const updatedTodos = [
			...todos,
			{
				id: v4(),
				task: todo,
				completed: false,
			},
		];
		setTodos(updatedTodos);
		setTodo("");
	};

	return (
		<div className="input-container">
			<input
				className="input"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Add a new task here..."
			/>
			<button className="add-btn" onClick={addTodo}>
				Add
			</button>
		</div>
	);
}

export default AddInput;
