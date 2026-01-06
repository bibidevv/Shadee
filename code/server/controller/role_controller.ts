import type { Request, Response } from "express";
import RoleRepository from "../repository/role_repository";

class RoleController {
	// méthode reliée à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// récuperation des résultats de la réponse
		const results = await new RoleRepository().selectAll();

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
			message: "role:",
			data: results,
		});
	};

	public selectOne = async (req: Request, res: Response) => {
		console.log(req.params);
		// récuperation des résultats de la réponse
		const results = await new RoleRepository().selectOne({ id: 1 });

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
			message: "Voici le role",
			data: results,
		});
	};
}

export default RoleController;
