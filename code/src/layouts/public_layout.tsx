import { Outlet } from "react-router";
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
