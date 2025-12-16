import express, { type Router } from "express";
import HomepageRouter from "../router/homepage_router";
import ProductRouter from "../router/product_router";
import RoleRouter from "../router/role_router";
import Skin_colorRouter from "../router/skin_color_router";
import Skin_typeRouter from "../router/skin_type_router";
import UndertoneRouter from "../router/undertone_router";
import UserRouter from "../router/user_router";

class Server {
	// propriété pour stocker l'appli express
	private app = express();
	private router: Router = express.Router();

	constructor() {
		// relier le routeur à l'application

		// intégrer le middleware express json qui permet de récupérer la propriété body de la requete http en json

		this.app.use(express.json());

		// relier le routeur à l'application
		this.app.use(this.router);

		// appel des routeurs
		this.routersList();
	}

	// méthodes
	// liste des routeurs
	private routersList = () => {
		this.router.use("/api", new HomepageRouter().getRoutes());
		this.router.use("/api/product", new ProductRouter().getRoutes());
		this.router.use("/api/role", new RoleRouter().getRoutes());
		this.router.use("/api/skin_color", new Skin_colorRouter().getRoutes());
		this.router.use("/api/skin_type", new Skin_typeRouter().getRoutes());
		this.router.use("/api/undertone", new UndertoneRouter().getRoutes());
		this.router.use("/api/user", new UserRouter().getRoutes());
	};

	// démarrer le serveur
	public start = () => {
		return this.app;
	};
}

export default Server;
