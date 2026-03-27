import express from "express";
import ContactController from "../controller/contact_controller";

class ContactRouter {
	// routeur express
	private router = express.Router();
	// liste des routes
	public getRoutes = () => {
		// créer une route /API accessible en GET
		// le prefixe des routes est dans le serveur
		this.router.get("/", new ContactController().index);
		this.router.post("/", new ContactController().insert);

		return this.router;
	};
}
export default ContactRouter;
