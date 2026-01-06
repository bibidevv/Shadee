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

	// sélectionner un enregistrement
	public selectOne = async (
		data: Partial<Product>,
	): Promise<Product | unknown> => {
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
	WHERE ${this.table}.id = :id 
GROUP BY ${this.table}.id;
		`;

		try {
			const [query] = await connection.execute(sql, data);
			// récuperer le premier indice d'un array
			const result = (query as Product[]).shift() as Product;

			result.undertones = (await new UndertoneRepository().selectInList(
				result.undertone_ids,
			)) as Undertone[];

			result.skin_colors = (await new Skin_colorRepository().selectInList(
				result.skin_color_ids,
			)) as Skin_color[];

			result.skin_types = (await new Skin_typeRepository().selectInList(
				result.skin_type_ids,
			)) as Skin_type[];

			return result;
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
			await connection.execute(sql, data);

			sql = `SET @id = LAST_INSERT_ID();`;
			await connection.execute(sql);

			let joinIds = data.undertone_ids
				?.split(",")
				.map((value) => `(@id, ${value})`)
				.join(",");

			sql = `
				INSERT INTO ${process.env.MYSQL_DATABASE}.product_undertone
				VALUES ${joinIds};
			`;

			await connection.execute(sql);

			joinIds = data.skin_type_ids
				?.split(",")
				.map((value) => `(@id, ${value})`)
				.join(",");

			sql = `
				INSERT INTO ${process.env.MYSQL_DATABASE}.product_skin_type
				VALUES ${joinIds};
			`;

			await connection.execute(sql);

			joinIds = data.skin_color_ids
				?.split(",")
				.map((value) => `(@id, ${value})`)
				.join(",");

			sql = `
				INSERT INTO ${process.env.MYSQL_DATABASE}.product_skin_color
				VALUES ${joinIds};
			`;

			const [query] = await connection.execute(sql);

			// valider la transaction SQL
			await connection.commit();

			return query;
		} catch (error) {
			await connection.rollback();
			return error;
		}
	};

	// update un enregitrement
	public update = async (
		data: Partial<Product>,
	): Promise<QueryResult | unknown> => {
		console.log("UPDATE DATA :", data);

		const connection = await new MySQLService().connect();

		let sql = `
			UPDATE ${process.env.MYSQL_DATABASE}.${this.table}
			SET 
				name = :name,
				description = :description,
				image = :image,
				price = :price
			WHERE 
				${this.table}.id = :id
			;
		`;

		try {
			// démarrer une transaction sql
			await connection.beginTransaction();

			// exécuter l'update principal
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
				${process.env.MYSQL_DATABASE}.product_undertone
				WHERE
				product_undertone.product_id = :id
			;
			`;
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
				${process.env.MYSQL_DATABASE}.product_skin_type
				WHERE
				product_skin_type.product_id = :id
			;
			`;
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
				${process.env.MYSQL_DATABASE}.product_skin_color
				WHERE
				product_skin_color.product_id = :id
			;
			`;
			await connection.execute(sql, data);

			let joinIds = data.undertone_ids
				?.split(",")
				.map((value) => `(:id, ${value})`)
				.join(",");

			sql = `
				INSERT INTO ${process.env.MYSQL_DATABASE}.product_undertone
				VALUES ${joinIds};
			`;

			await connection.execute(sql, data);

			joinIds = data.skin_type_ids
				?.split(",")
				.map((value) => `(:id, ${value})`)
				.join(",");

			sql = `
				INSERT INTO ${process.env.MYSQL_DATABASE}.product_skin_type
				VALUES ${joinIds};
			`;

			await connection.execute(sql, data);

			joinIds = data.skin_color_ids
				?.split(",")
				.map((value) => `(:id, ${value})`)
				.join(",");

			sql = `
				INSERT INTO ${process.env.MYSQL_DATABASE}.product_skin_color
				VALUES ${joinIds};
			`;

			const [query] = await connection.execute(sql, data);

			// valider la transaction SQL
			await connection.commit();

			return query;
		} catch (error) {
			await connection.rollback();
			return error;
		}
	};

	// supprimer un enregitrement
	public delete = async (
		data: Partial<Product>,
	): Promise<QueryResult | unknown> => {
		const connection = await new MySQLService().connect();

		let sql = `
			DELETE FROM
				${process.env.MYSQL_DATABASE}.product_undertone
			WHERE
				product_undertone.product_id = :id
			;
		`;

		try {
			// démarrer une transaction sql
			await connection.beginTransaction();

			// exécuter l'update principal
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
				${process.env.MYSQL_DATABASE}.product_skin_type
				WHERE
				product_skin_type.product_id = :id
			;
			`;
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
				${process.env.MYSQL_DATABASE}.product_skin_color
				WHERE
				product_skin_color.product_id = :id
			;
			`;

			await connection.execute(sql, data);

			sql = `
				DELETE FROM
				${process.env.MYSQL_DATABASE}.${this.table}
				WHERE
				${this.table}.id = :id
			;
			`;

			const [query] = await connection.execute(sql, data);

			// valider la transaction SQL
			await connection.commit();

			return query;
		} catch (error) {
			await connection.rollback();
			return error;
		}
	};
}

export default ProductRepository;
