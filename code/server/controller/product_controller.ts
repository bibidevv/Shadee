import type { Request, Response } from "express";
import ProductRepository from "../repository/product_repository";

class ProductController {
	// méthode GET /api/product
	public index = async (_req: Request, res: Response) => {
		const results = await new ProductRepository().selectAll();

		// gestion d'erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		// renvoyer la réponse
		res.status(200).json({
			status: 200,
			message: "c'est le produit",
			data: results,
		});
	};

	// méthode POST /api/product
	public insert = async (req: Request, res: Response) => {
		console.log(req.body);

		const results = await new ProductRepository().insert(req.body);

		// gestion d'erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		// renvoyer la réponse
		res.status(201).json({
			status: 201,
			message: "Produit inséré avec succès",
			data: results,
		});
	};

	// méthode PUT /api/product
	public update = async (req: Request, res: Response) => {
		console.log(req.body);

		const results = await new ProductRepository().update(req.body);

		// gestion d'erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		// renvoyer la réponse
		res.status(200).json({
			status: 200,
			message: "Updated",
			data: results,
		});
	};
}

export default ProductController;
