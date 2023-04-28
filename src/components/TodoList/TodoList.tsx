import ITodo from "../../interfaces/ITodo";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";

function TodoList({
	todos,
	setTodos,
}: {
	todos: ITodo[];
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}) {
	const updateTask = (id: string) => {
		const updatedTasks = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				return todo;
			} else {
				return todo;
			}
		});
		setTodos(updatedTasks);
	};

	const calcNumberOfIncompletedTasks = () => {
		let count = 0;
		todos.forEach((todo) => {
			if (!todo.completed) count++;
		});
		return count;
	};

	return (
		<div className="todolist-container">
			<div className="todos-container">
				<div>
					{todos.map((todo) => (
						<div
							className={`todo-item ${todo.completed && "todo-item-active"}`}
							onClick={() => updateTask(todo.id)}
						>
							{todo.task}
						</div>
					))}
				</div>
			</div>
			<div>
				<TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
			</div>
		</div>
	);
}

export default TodoList;
