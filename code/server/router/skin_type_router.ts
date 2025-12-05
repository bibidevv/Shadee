import express from "express";
import Skin_typeController from "../controller/skin_type_controller";

class Skin_typeRouter {
	// routeur express
	private router = express.Router();
	// liste des routes
	public getRoutes = () => {
		// créer une route /API accessible en GET
		// le prefixe des routes est dans le serveur
		this.router.get("/", new Skin_typeController().index);
		// variable de route : précédée par un : et suivie du nom de la variable
		this.router.get("/:id", new Skin_typeController().selectOne);
		// retourner le routeur
		return this.router;
	};
}
export default Skin_typeRouter;
