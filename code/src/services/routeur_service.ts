import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

class RouteurService {
	public getRouter = () => {
		return [
			{
				id: "root",
				path: "/",
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
								id: "legal",
								path: "legal",
								lazy: () => import("../pages/mentions_legales_page"),
							},

							// Espace utilisateur parent
							{
								id: "user",
								path: "espace-utilisateur",
								lazy: () => import("../layouts/user_layout"), // layout parent
								children: [
									{
										id: "user-home",
										index: true,
										path: "",
										lazy: () => import("../pages/espace_user_page"), // page principale user
									},
									{
										id: "favoris",
										path: "favoris",
										lazy: () => import("../pages/favoris"), // page favoris
									},
									{
										id: "profil",
										path: "profil",
										lazy: () => import("../pages/profil"), // page profil
									},
								],
							},

							{
								id: "logout",
								path: "logout",
								lazy: () => import("../pages/logout"),
							},

							// Admin
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
									{
										id: "admin-products",
										path: "products",
										lazy: () => import("../pages/admin_products_homepage"),
									},
									{
										id: "admin-products-add",
										path: "products/add/:id?",
										lazy: () => import("../pages/admin_products_form"),
									},
									{
										id: "admin-products-delete",
										path: "products/delete/:id",
										lazy: () => import("../pages/admin_products_delete"),
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
