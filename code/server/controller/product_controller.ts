import { log } from "node:console";
import type { Request, Response } from "express";
import type { SiExpress } from "react-icons/si";
import type { Product } from "../../models/product";
import ProductRepository from "../repository/product_repository";
import FileService from "../service/file_service";

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

	// méthode GET /api/product
	public selectOne = async (req: Request, res: Response) => {
		const { id } = req.params;

		const results = await new ProductRepository().selectOne({
			id: id as unknown as number,
		});

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
		// req files permet de récuperer les fichiers transférés
		const file = (
			req.files as Express.Multer.File[]
		).shift() as Express.Multer.File;
		// instancier le service de fichiers
		const fileService = new FileService();

		// renommer le fichier transféré et récupérer le nom complet
		const fullname = await fileService.rename(file);

		console.log(req.files);

		const results = await new ProductRepository().insert({
			...req.body,
			image: fullname,
		});

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
		const file = (
			req.files as Express.Multer.File[]
		).shift() as Express.Multer.File;
		// instancier le service de fichiers
		const fileService = new FileService();

		let fullname: string;
		if (file) {
			// renommer le fichier transféré et récupérer le nom complet avec extension

			fullname = await fileService.rename(file);
		} else {
			fullname = (
				(await new ProductRepository().selectOne(req.body)) as Product
			).image;
		}

		const results = await new ProductRepository().update({
			...req.body,
			image: fullname,
		});

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

	// méthode DELETE /api/product
	public delete = async (req: Request, res: Response) => {
		console.log(req.body);

		const results = await new ProductRepository().delete(req.body);

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
			message: "Deleted",
			data: results,
		});
	};
}

export default ProductController;
