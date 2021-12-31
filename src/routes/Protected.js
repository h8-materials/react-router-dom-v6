import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
	const isLoggedin = false;
	if (!isLoggedin) return <Navigate to={"/login"} />;
	return children;
};

export default Protected;
