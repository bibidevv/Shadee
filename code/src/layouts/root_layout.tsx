import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

const RootLayout = () => {
	return (
		<html lang="fr">
			<head>
				<meta charSet="UTF-8" />
				<link rel="icon" type="image/svg+xml" href="/vite.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<NavBar />
				{/* outlet : zone remplie par un autre contenu */}
				<Outlet />
				<Footer />
			</body>
		</html>
	);
};
export default RootLayout;
