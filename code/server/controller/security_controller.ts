import argon2 from "argon2";
import type { Request, Response } from "express";
import type { User } from "../../models/user";
import SecurityRepository from "../repository/security_repository";

class SecurityController {
	// méthode GET /api/product
	public register = async (req: Request, res: Response) => {
		const results = await new SecurityRepository().register({
			...req.body,
			password: await argon2.hash(req.body.password),
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
			message: "crée",
			data: results,
		});
	};

	// authentifier (connecter) l'utilisateur

	public login = async (req: Request, res: Response) => {
		// vérifier si le mail existe dans la bdd
		let results = await new SecurityRepository().isEmailUserExists(req.body);

		// gestion d'erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

		// si l'email n'existe pas
		if (!results) {
			res.status(403).json({
				status: 403,
				message:
					process.env.NODE_ENV === "production"
						? "Error"
						: "user email inexistant",
			});
			return;
		}
		// récupérer l'utilisateur par son email
		results = (await new SecurityRepository().selectOneByEmail(
			req.body,
		)) as User;

		// vérifier le mdp
		const passwordIsValid = await argon2.verify(
			(results as User).password,
			req.body.password,
		);

		if (!passwordIsValid) {
			res.status(401).json({
				status: 401,
				message:
					process.env.NODE_ENV === "production"
						? "Error"
						: "Unauthorized - Invalid password",
			});

			return;
		}

		// renvoyer la réponse
		res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	};
}

export default SecurityController;
