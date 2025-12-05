import express from "express";
import UserController from "../controller/user_controller";

class UserRouter {
	// routeur express
	private router = express.Router();
	// liste des routes
	public getRoutes = () => {
		// créer une route /API accessible en GET
		// le prefixe des routes est dans le serveur
		this.router.get("/", new UserController().index);
		// variable de route : précédée par un : et suivie du nom de la variable
		this.router.get("/:id", new UserController().selectOne);
		// retourner le routeur
		return this.router;
	};
}
export default UserRouter;
