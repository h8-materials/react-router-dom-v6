import { useParams, Outlet, Link } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();
	return (
		<div>
			<h1>Detail</h1>
			<h2>{id}</h2>
			<nav>
				<Link to="profile">Profile</Link> | <Link to="post">post</Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default Detail;
