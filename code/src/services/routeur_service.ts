import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

class RouteurService {
	public getRouter = () => {
		return [
			{
				// id unique de la route
				id: "root",
				// préfixe des routes
				path: "/",
				// importation de la mise en page parente
				lazy: () => import("../layouts/root_layout"),

				children: [
					{
						id: "public",
						path: "",
						lazy: () => import("../layouts/public_layout"),
						children: [
							{
								id: "home",
								index: true,
								path: "",
								lazy: () => import("../pages/"),
							},

							{
								id: "contact",
								path: "contact",
								lazy: () => import("../pages/contact"),
							},
							// 👉 Ajouts ici
							{
								id: "products",
								path: "products",
								// lazy: () => import("../pages/products"),
							},
							{
								id: "login",
								path: "login",
								// lazy: () => import("../pages/login"),
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouteurService;
