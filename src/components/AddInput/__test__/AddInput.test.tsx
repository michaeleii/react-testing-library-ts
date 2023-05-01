import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddInput from "../AddInput";
import { vi } from "vitest";

const mockedSetTodo = vi.fn();

describe("AddInput", () => {
	it("should render input element", () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		expect(inputElement).toBeInTheDocument();
	});

	it("should be able to type into input", async () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(
			/Add a new task here.../i
		) as HTMLInputElement;
		await userEvent.type(inputElement, "Go Grocery Shopping");
		expect(inputElement.value).toBe("Go Grocery Shopping");
	});

	it("should be able to type into input", async () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
		await userEvent.type(inputElement, "Go Grocery Shopping");
		const buttonElement = screen.getByRole("button", { name: /Add/i });
		await userEvent.click(buttonElement);
		expect(mockedSetTodo).toBeCalled();
	});

	it("should have empty input when add button is cliked", async () => {
		render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
		const inputElement = screen.getByPlaceholderText(
			/Add a new task here.../i
		) as HTMLInputElement;
		await userEvent.type(inputElement, "Go Grocery Shopping");
		const buttonElement = screen.getByRole("button", { name: /Add/i });
		await userEvent.click(buttonElement);
		expect(inputElement.value).toBe("");
	});
});
