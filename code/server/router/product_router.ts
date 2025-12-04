import express from "express";
import MenuController from "../controller/product_controller";

class ProductRouter {
	// routeur express
	private router = express.Router();
	// liste des routes
	public getRoutes = () => {
		// créer une route /API accessible en GET
		// le prefixe des routes est dans le serveur
		this.router.get("/", new MenuController().index);
		return this.router;
	};
}
export default ProductRouter;
