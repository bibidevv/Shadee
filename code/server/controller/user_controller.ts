import type { Request, Response } from "express";
import UserRepository from "../repository/user_repository";

class UserController {
	// méthode reliée à la route en GET située dans le routeur
	public index = async (req: Request, res: Response) => {
		// récuperation des résultats de la réponse
		const results = await new UserRepository().selectAll();

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
			message: "utilisateur",
			data: results,
		});
	};

	public selectOne = async (req: Request, res: Response) => {
		console.log(req.params);
		// récuperation des résultats de la réponse
		const results = await new UserRepository().selectOne(req.params);

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
			message: "Utilisateur",
			data: results,
		});
	};
}

export default UserController;
