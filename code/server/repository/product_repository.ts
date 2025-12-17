import type { QueryResult } from "mysql2";
import type { Product } from "../../models/product";
import type { Skin_color } from "../../models/skin_color";
import type { Skin_type } from "../../models/skin_type";
import type { Undertone } from "../../models/undertone";

import MySQLService from "../service/mysql_service";
import Skin_colorRepository from "./skin_color_repository";
import Skin_typeRepository from "./skin_type_repository";
import UndertoneRepository from "./undertone_repository";

class ProductRepository {
	// nom de la table sql
	private table = "product";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Product[] | unknown> => {
		const connection = await new MySQLService().connect();

		const sql = `
SELECT 
	${this.table}.*,
	GROUP_CONCAT(DISTINCT product_undertone.undertone_id) AS undertone_ids,
	GROUP_CONCAT(DISTINCT product_skin_type.skin_type_id) AS skin_type_ids,
	GROUP_CONCAT(DISTINCT product_skin_color.skin_color_id) AS skin_color_ids
FROM ${process.env.MYSQL_DATABASE}.${this.table}
LEFT JOIN product_undertone
	ON ${this.table}.id = product_undertone.product_id
LEFT JOIN product_skin_type
	ON ${this.table}.id = product_skin_type.product_id
LEFT JOIN product_skin_color
	ON ${this.table}.id = product_skin_color.product_id
GROUP BY ${this.table}.id;
		`;

		try {
			const [query] = await connection.execute(sql);
			const products = query as Product[];

			for (let i = 0; i < products.length; i++) {
				const result = products[i];

				result.undertones = (await new UndertoneRepository().selectInList(
					result.undertone_ids,
				)) as Undertone[];

				result.skin_colors = (await new Skin_colorRepository().selectInList(
					result.skin_color_ids,
				)) as Skin_color[];

				result.skin_types = (await new Skin_typeRepository().selectInList(
					result.skin_type_ids,
				)) as Skin_type[];
			}

			return products;
		} catch (error) {
			return error;
		}
	};

	// insérer un enregistrement
	public insert = async (
		data: Partial<Product>,
	): Promise<QueryResult | unknown> => {
		const connection = await new MySQLService().connect();

		let sql = `
			INSERT INTO ${process.env.MYSQL_DATABASE}.${this.table}
			VALUES (
				NULL,
				:name,
				:description,
				:image,
				:price
			);
		`;

		try {
			// démarrer une transaction sql
			await connection.beginTransaction();

			// exécuter l'insert principal
			const [query] = await connection.execute(sql, data);

			// récupérer l'id inséré
			sql = `SET @id = LAST_INSERT_ID();`;
			await connection.execute(sql);

			// troisième requete : undertones
			let joinIds = data.undertone_ids
				?.split(",")
				.map((value) => `(${value}, @id)`)
				.join(",");

			console.log("1,2,3", joinIds);

			sql = `
				INSERT INTO ${process.env.MYSQL_DATABASE}.product_undertone (undertone_id, product_id)
				VALUES ${joinIds};
			`;
			await connection.execute(sql, data);

			// troisième requete : skin colors
			joinIds = data.skin_color_ids
				?.split(",")
				.map((value) => `(${value}, @id)`)
				.join(",");

			console.log("1,2", joinIds);

			sql = `
				INSERT INTO ${process.env.MYSQL_DATABASE}.product_skin_color (skin_color_id, product_id)
				VALUES ${joinIds};
			`;
			await connection.execute(sql, data);

			// troisième requete : skin types
			joinIds = data.skin_type_ids
				?.split(",")
				.map((value) => `(${value}, @id)`)
				.join(",");

			console.log("1,2,3,4", joinIds);

			sql = `
				INSERT INTO ${process.env.MYSQL_DATABASE}.product_skin_type (skin_type_id, product_id)
				VALUES ${joinIds};
			`;
			await connection.execute(sql, data);

			// valider la transaction SQL
			await connection.commit();

			// retourner les infos de la requete
			return query;
		} catch (error) {
			// annuler la transaction
			await connection.rollback();

			return error;
		}
	};
}

export default ProductRepository;
