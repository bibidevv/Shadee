import { Outlet } from "react-router";
import LoginForm from "../components/login_form";
import NavBar from "../components/navbar";

// import NavBar from "../components/navbar";

const PublicLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default PublicLayout;
