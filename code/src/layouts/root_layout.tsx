import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<html lang="fr">
			<head>
				<meta charSet="UTF-8" />
				<link rel="icon" type="image/svg+xml" href="/vite.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Shadee</title>
			</head>
			<body>
				{/* outlet : zone remplie par un autre contenu */}
				<Outlet />
			</body>
		</html>
	);
};
export default RootLayout;
