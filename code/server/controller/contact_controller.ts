import type { Request, Response } from "express";
import type { SiExpress } from "react-icons/si";
import ContactRepository from "../repository/contact_repository";
import FileService from "../service/file_service";

class ContactController {
	// méthode GET /api/product
	public index = async (_req: Request, res: Response) => {
		const results = await new ContactRepository().selectAll();

		// renvoyer la réponse
		res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	};

	public insert = async (req: Request, res: Response) => {
		console.log(req.body);

		const results = await new ContactRepository().insert({
			...req.body,
			date: new Date(),
		});

		// renvoyer la réponse
		res.status(201).json({
			status: 201,
			message: "Crée",
			data: results,
		});
	};
}

export default ContactController;
