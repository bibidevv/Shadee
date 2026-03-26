import express from "express";
import multer from "multer";
import ProductController from "../controller/product_controller";
import AuthorizationMiddleware from "../middleware/authorization_middleware";

class ProductRouter {
	// routeur express
	private router = express.Router();

	// multer permet de transferer des fichiers
	private multer = multer({
		dest: `${process.env.PUBLIC_DIR}/images`,
	});
	// liste des routes
	public getRoutes = () => {
		// GET /api/product
		this.router.get("/", new ProductController().index);
		this.router.get("/:id", new ProductController().selectOne);

		// POST /api/product et utilisation du middlewear multer
		// ajout d'un enregistrement
		this.router.post(
			"/",
			this.multer.any(),
			new AuthorizationMiddleware().authorize(["admin"]),
			new ProductController().insert,
		);

		// maj d'un enregistrement
		this.router.put(
			"/",
			this.multer.any(),
			new AuthorizationMiddleware().authorize(["admin"]),
			new ProductController().update,
		);

		// suppression d'un enregistrement
		this.router.delete(
			"/",
			new AuthorizationMiddleware().authorize(["admin"]),
			new ProductController().delete,
		);

		return this.router;
	};
}

export default ProductRouter;
