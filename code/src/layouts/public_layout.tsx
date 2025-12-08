import { Outlet } from "react-router";

const PublicLayout = () => {
	return (
		<>
			<h1>Public layout</h1>
			<Outlet />
		</>
	);
};

export default PublicLayout;
