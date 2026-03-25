import express from "express";
import SecurityController from "../controller/security_controller";

class SecurityRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// GET /api/product
		this.router.post("/register", new SecurityController().register);
		this.router.post("/login", new SecurityController().login);

		return this.router;
	};
}

export default SecurityRouter;
