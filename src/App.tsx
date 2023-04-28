import "./App.css";
import Banner from "./components/Banner/Banner";
import FollowersPage from "./pages/FollowerPage";
import TodoPage from "./pages/TodoPage";
import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from "react-router-dom";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <TodoPage />,
	},
	{
		path: "/followers",
		element: <FollowersPage />,
	},
];

const router = createBrowserRouter(routes);

function App() {
	return (
		<div className="App">
			<Banner />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
