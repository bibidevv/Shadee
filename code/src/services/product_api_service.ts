import type { Product } from "../../models/product";
import type { ApiResponse } from "../models/props/api_response";

// import SecurityService from "./security_service";

class ProductApiService {
	// préfixe de l'API
	private prefix = "/api/product";

	// sélection de tous les enregistrements
	public selectAll = async (): Promise<ApiResponse<Product[]>> => {
		// configurer la requête HTTP
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
		);

		// executer la requete HTTP
		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objets, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractères en données complexes : objets, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};

	// sélection d'un enregistrement
	public selectOne = async (id: number): Promise<ApiResponse<Product>> => {
		// configurer la requête HTTP
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/${id}`,
		);

		// executer la requete HTTP
		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objets, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractères en données complexes : objets, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};
	// insertion d'un enregistrement

	// si le formulaire contient un champ de fichier : utiliser formData, sinon typer
	public insert = async (
		data: FormData,
		token: string,
	): Promise<ApiResponse<Product>> => {
		// configurer la requête HTTP
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "post",
				/* si le formulaire contient un champ de fichier, la propriété body renvoie un objet formData. 
				Si le formulaire ne contient pas de champ de fichier, la propriété renvoie du JSON (JSON stringify)... ajouter l'en-tête Content-Type:  */
				body: data,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		// executer la requete HTTP
		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objets, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractères en données complexes : objets, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};
	// MAJ d'un enregistrement
	public update = async (
		data: FormData,
		token: string,
	): Promise<ApiResponse<null>> => {
		// configurer la requête HTTP
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "put",
				/* si le formulaire contient un champ de fichier, la propriété body renvoie un objet formData. 
				Si le formulaire ne contient pas de champ de fichier, la propriété renvoie du JSON (JSON stringify)... ajouter l'en-tête Content-Type:  */
				body: data,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		// executer la requete HTTP
		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objets, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractères en données complexes : objets, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};

	// suppression d'un enregistrement
	public delete = async (
		data: Partial<Product>,
		token: string,
	): Promise<ApiResponse<null>> => {
		// configurer la requête HTTP
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "delete",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},

				// sérialiser et désérialiser

				body: JSON.stringify(data),
			},
		);

		const response = await fetch(request);
		const results = await response.json();
		return results;
	};
}

export default ProductApiService;
