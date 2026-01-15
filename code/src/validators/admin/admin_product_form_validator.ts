import { type ZodError, z } from "zod";
import type { Product } from "../../../models/product";

class AdminProductFormValidator {
	// validation des données du formulaire

	public validate = async (
		data: Partial<Product>,
	): Promise<Partial<Product> | ZodError> => {
		// la méthode doit etre executée coté server
		"use server";
		// contraintes de validation
		// reprendre strictement les propriétés du type à valider
		const constraints = z.object({
			id: z.union([z.string().nullable(), z.coerce.number().positive()]), // id optionnel
			name: z.string().min(10, "Le nom doit comporter au moins 10 caractères"),
			price: z.coerce.number().positive(), // prix du produit
			description: z
				.string()
				.min(10, "La description doit comporter au moins 10 caractères"),
			// skin_color_ids: z.string(), // couleurs de peau (sélection multiple)
			// undertone_ids: z.string(), // sous-ton (sélection simple)
			// skin_type_ids: z.string(), // types de peau (sélection multiple)
			image: z.union([
				z.string().nullable(),
				z.file("L'image est obligatoire"), // image (juste une chaîne)
			]),
		});

		// validation de la saisir du formulaire

		const validation = await constraints.safeParseAsync(data);

		// si la validation échoue
		if (!validation.success) {
			return validation.error;
		}

		// si la validation réussie
		return validation.data as Partial<Product>;
	};
}

export default AdminProductFormValidator;
