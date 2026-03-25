import type { User } from "../../models/user";
import type { ApiResponse } from "../models/props/api_response";

class SecurityApiService {
	// préfixe de l'API
	private prefix = "/api";

	// sélection d'un enregistrement
	public register = async (data: Partial<User>): Promise<ApiResponse<User>> => {
		// configurer la requête HTTP
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/register`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
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

	public login = async (data: Partial<User>): Promise<ApiResponse<User>> => {
		// configurer la requête HTTP
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/login`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			},
		);

		const response = await fetch(request);

		const results = await response.json();

		return results;
	};
}

export default SecurityApiService;
