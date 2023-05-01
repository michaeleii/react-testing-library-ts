import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";
import { vi } from "vitest";

const MockFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe("FollowersList", () => {
	beforeEach(() => {
		vi.mock("../../../__mocks__/axios");
	});

	it("should fetch and render input element", async () => {
		render(<MockFollowersList />);
		const followerDivElement = await screen.findByTestId(`follower-item-0`);
		expect(followerDivElement).toBeInTheDocument();
	});

	it("should fetch and render input element", async () => {
		render(<MockFollowersList />);

		const followerDivElement = await screen.findByTestId(`follower-item-0`);
		expect(followerDivElement).toBeInTheDocument();
	});
});
