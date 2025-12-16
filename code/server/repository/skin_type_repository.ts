import type { Skin_type } from "../../models/skin_type";
import MySQLService from "../service/mysql_service";

class Skin_typeRepository {
	// nom de la table sql
	private table = "skin_type";

	// sélectionner tous les enregistrements
	public selectInList = async (
		list: string,
	): Promise<Skin_type[] | unknown> => {
		// connexion au serveur mysql
		const connection = await new MySQLService().connect();

		// requête SQL
		//SELECT menu.* FROM shadee_dev.menu;
		const sql = `
        SELECT ${this.table}.*
        FROM ${process.env.MYSQL_DATABASE}.${this.table}
		WHERE ${this.table}.id IN (${list});  
        `;

		// try / catch : récuperer els résultats de la requete ou une erreur
		try {
			const [query] = await connection.execute(sql);

			return query;
		} catch (error) {
			return error;
		}
	};
	// sélectionner un enreigistrement
	public selectOne = async (
		data: Partial<Skin_type>,
	): Promise<Skin_type | unknown> => {
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
			const result = (query as Skin_type[]).shift() as Skin_type;

			return result;
		} catch (error) {
			return error;
		}
	};
}

export default Skin_typeRepository;
