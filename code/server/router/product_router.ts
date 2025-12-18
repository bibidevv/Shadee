import express from "express";
import multer from "multer";
import ProductController from "../controller/product_controller";

class ProductRouter {
	// routeur express
	private router = express.Router();

	// multer permet de transferer des fichiers
	private multer = multer({ dest: "public" });
	// liste des routes
	public getRoutes = () => {
		// GET /api/product
		this.router.get("/", new ProductController().index);

		// POST /api/product et utilisation du middlewear multer
		// ajout d'un enregistrement
		this.router.post("/", this.multer.any(), new ProductController().insert);

		// maj d'un enregistrement
		this.router.put("/", this.multer.any(), new ProductController().update);

		return this.router;
	};
}

export default ProductRouter;
