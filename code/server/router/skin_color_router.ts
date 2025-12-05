import express from "express";
import Skin_colorController from "../controller/skin_color_controller";

class Skin_colorRouter {
	// routeur express
	private router = express.Router();
	// liste des routes
	public getRoutes = () => {
		// créer une route /API accessible en GET
		// le prefixe des routes est dans le serveur
		this.router.get("/", new Skin_colorController().index);
		// variable de route : précédée par un : et suivie du nom de la variable
		this.router.get("/:id", new Skin_colorController().selectOne);
		// retourner le routeur
		return this.router;
	};
}
export default Skin_colorRouter;
