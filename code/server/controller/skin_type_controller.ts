import type { Request, Response } from "express";
import Skin_typeRepository from "../repository/skin_type_repository";

class Skin_typeController {
	// méthode reliée à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// récuperation des résultats de la réponse
		const results = await new Skin_typeRepository().selectAll();

		// si la requete renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		// renvoyer une réponse avec un code de statut précis HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "Type de peau :",
			data: results,
		});
	};

	public selectOne = async (req: Request, res: Response) => {
		console.log(req.params);
		// récuperation des résultats de la réponse
		const results = await new Skin_typeRepository().selectOne({ id: 1 });

		// si la requete renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		// renvoyer une réponse avec un code de statut précis HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "Type de peau",
			data: results,
		});
	};
}

export default Skin_typeController;
