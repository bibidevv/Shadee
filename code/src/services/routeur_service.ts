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

							{
								id: "products",
								path: "products",
								lazy: () => import("../pages/products"),
							},
							{
								id: "products-details",
								path: "product/:id",
								lazy: () => import("../pages/products_details"),
							},
							{
								id: "login",
								path: "login",
								lazy: () => import("../pages/login"),
							},
							{
								id: "register",
								path: "register",
								lazy: () => import("../pages/register"),
							},
							{
								id: "admin",
								path: "admin",
								lazy: () => import("../layouts/admin_layout"),
								children: [
									{
										id: "admin-home",
										index: true,
										path: "",
										lazy: () => import("../pages/admin_page"),
									},
								],
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouteurService;
