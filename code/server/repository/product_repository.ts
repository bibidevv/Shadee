import type { Product } from "../../models/product";
import MySQLService from "../service/mysql_service";

class ProductRepository {
	// nom de la table sql
	private table = "product";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Product[] | unknown> => {
		// connexion au serveur mysql
		const connection = await new MySQLService().connect();

		// requête SQL
		//SELECT menu.* FROM shadee_dev.menu;
		const sql = `
        SELECT ${this.table}.*
        FROM ${process.env.MYSQL_DATABASE}.${this.table};  
        `;

		// try / catch : récuperer els résultats de la requete ou une erreur
		try {
			const [query] = await connection.execute(sql);

			return query;
		} catch (error) {
			return error;
		}
	};
}

export default ProductRepository;
