import type { Product } from "../../../models/product";
import type { ApiResponse } from "./api_response";

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
}

export default ProductApiService;
