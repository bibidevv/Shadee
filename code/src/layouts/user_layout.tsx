"use client";

import { Outlet } from "react-router";
import Guard from "../components/guard";

const AdminLayout = () => {
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

export default AdminLayout;
