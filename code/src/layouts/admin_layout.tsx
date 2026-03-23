"use client";

import { Outlet } from "react-router";

const AdminLayout = () => {
	return (
		<div>
			<main style={{ padding: "2rem" }}>
				<h1>Administration</h1>
				<Outlet />
			</main>
		</div>
	);
};

export default AdminLayout;
