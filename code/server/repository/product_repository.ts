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
		//SELECT product.*,
		// GROUP_CONCAT (undertone.id) AS undertone_ids
		//  FROM shadee_dev.product
		// JOIN shadee_dev.product_undertone
		// ON product.id = product_undertone.product_id
		// JOIN shadee_dev.undertone
		// ON undertone.id = product_undertone.undertone_id
		// GROUP BY product.id;

		const sql = `
        SELECT 
		${this.table}.*, GROUP_CONCAT(skin_type_id) AS skin_type_ids
        FROM 
		${process.env.MYSQL_DATABASE}.${this.table}
		JOIN 
		;  
        `;

		// try / catch : récuperer les résultats de la requete ou une erreur
		try {
			const [query] = await connection.execute(sql);

			return query;
		} catch (error) {
			return error;
		}
	};

	// clés étrangères
	// result.product = (await new ProductRepository().selectOne({
	// 	id: this.result.product_id,
	// })) as Product;
}

export default ProductRepository;
