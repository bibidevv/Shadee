"use client";

import { Outlet } from "react-router";
import NavBar from "../components/navbar";

const AdminLayout = () => {
	return (
		<div>
			<NavBar />
			<main style={{ padding: "2rem" }}>
				<h1>Administration</h1>
				<Outlet />
			</main>
		</div>
	);
};

export default AdminLayout;
