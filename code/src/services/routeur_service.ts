import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

class RouteurService {
	public getRouter = () => {
		return [
			{
				// id unique de la route
				id: "public",
				// préfixe des routes
				path: "",
				// importation de la mise en page parente
				lazy: () => import("../layouts/root_layout"),

				children: [
					{
						id: "public",
						index: true,
						path: "",
						lazy: () => import("../pages/index"),
					},
					//     {
					//       id: "about",
					//       path: "about",
					//       lazy: () => import("./about/route"),
					//     },
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouteurService;
