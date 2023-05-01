import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
	return (
		<BrowserRouter>
			<Todo />
		</BrowserRouter>
	);
};

const addTask = async (tasks: string[]) => {
	const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
	const buttonElement = screen.getByRole("button", { name: /Add/i });
	for await (const task of tasks) {
		await userEvent.type(inputElement, task);
		await userEvent.click(buttonElement);
	}
};

it("should be able to type into input", async () => {
	render(<MockTodo />);
	await addTask(["Go Grocery Shopping"]);
	const divElement = screen.getByText(/Go Grocery Shopping/i);
	expect(divElement).toBeInTheDocument();
});

it("should render multiple items", async () => {
	render(<MockTodo />);
	await addTask([
		"Go Grocery Shopping",
		"Go Grocery Shopping",
		"Go Grocery Shopping",
	]);
	const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
	expect(divElements.length).toBe(3);
});

it("task should not have complete class when initally rendered", async () => {
	render(<MockTodo />);
	await addTask(["Go Grocery Shopping"]);
	const divElement = screen.getByText(/Go Grocery Shopping/i);
	expect(divElement).not.toHaveClass("todo-item-active");
});

it("task should have complete class when clicked", async () => {
	render(<MockTodo />);
	await addTask(["Go Grocery Shopping"]);
	const divElement = screen.getByText(/Go Grocery Shopping/i);
	await userEvent.click(divElement);
	expect(divElement).toHaveClass("todo-item-active");
});
