import { Outlet } from "react-router";
import Guard from "../components/guard";

const UserLayout = () => {
	return (
		<Guard roles={["user"]}>
			<div>
				<main style={{ padding: "2rem" }}>
					<h1>Utilisateur</h1>
					<Outlet />
				</main>
			</div>
		</Guard>
	);
};

export default UserLayout;
