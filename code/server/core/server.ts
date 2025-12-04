import express, { type Router } from "express";
import HomepageRouter from "../router/homepage_router";
import ProductRouter from "../router/product_router";

class Server {
	// propriété pour stocker l'appli express
	private app = express();
	private router: Router = express.Router();

	constructor() {
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
	};

	// démarrer le serveur
	public start = () => {
		return this.app;
	};
}

export default Server;
