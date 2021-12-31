import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Protected from "./routes/Protected";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<nav>
				<Link to="/">/Home</Link>
				<Link to="/login"> /Login</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/detail/:id"
					element={
						<Protected>
							<Detail />
						</Protected>
					}
				>
					<Route index element={<Profile />}></Route>
					<Route path="post" element={<Post />}></Route>
				</Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</div>
	);
}

export default App;
