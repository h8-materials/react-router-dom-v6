import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => setUsers(data))
			.catch((err) => console.log(err));
	}, []);

	const handleToDetail = (id) => {
		navigate(`/detail/${id}`);
	};
	return (
		<div>
			<h1>Home</h1>
			<ul>
				{users.map((user) => {
					return (
						<li key={user.id}>
							{user.name} |{" "}
							<button onClick={() => handleToDetail(user.id)}>Detail</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
