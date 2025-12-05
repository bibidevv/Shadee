import type { User } from "../../models/user";
import MySQLService from "../service/mysql_service";

class UserRepository {
	// nom de la table sql
	private table = "user";

	// sélectionner un enreigistrement
	public selectOne = async (data: Partial<User>): Promise<User | unknown> => {
		// connexion au serveur mysql
		const connection = await new MySQLService().connect(); // requête SQL
		// variable de requête : précédée d'un :, suivi du nom de la variable
		// requête préparées (utilisation des variables de requêtes) : la requête est exécutée si elle ne représente pas de risque de sécurité
		const sql = `
        SELECT ${this.table}.*
        FROM ${process.env.MYSQL_DATABASE}.${this.table}
		WHERE ${this.table}.id = :id 
		 ;  
        `;

		// try / catch : récuperer els résultats de la requete ou une erreur
		// si la requête possède des variables, utiliser le paramètre de la méthode
		try {
			const [query] = await connection.execute(sql, data);

			// récuperer le premier indice d'un array
			const result = (query as User[]).shift();

			return result;
		} catch (error) {
			return error;
		}
	};
}

export default UserRepository;
