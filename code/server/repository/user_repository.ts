import type { Role } from "../../models/role";
import type { Skin_color } from "../../models/skin_color";
import type { Skin_type } from "../../models/skin_type";
import type { Undertone } from "../../models/undertone";
import type { User } from "../../models/user";

import MySQLService from "../service/mysql_service";
import RoleRepository from "./role_repository";
import Skin_colorRepository from "./skin_color_repository";
import Skin_typeRepository from "./skin_type_repository";
import UndertoneRepository from "./undertone_repository";

class UserRepository {
	// nom de la table sql
	private table = "user";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<User[] | unknown> => {
		// connexion au serveur mysql
		const connection = await new MySQLService().connect();

		// requête SQL
		const sql = `
			SELECT ${this.table}.*
			FROM ${process.env.MYSQL_DATABASE}.${this.table};
		`;

		try {
			const [query] = await connection.execute(sql);
			const users = query as User[];

			// boucle avec index
			for (let i = 0; i < users.length; i++) {
				const result = users[i] as User;

				// récupération du rôle
				result.role = (await new RoleRepository().selectOne({
					id: result.role_id,
				})) as Role;

				// récupération de la couleur de peau
				result.skin_color = (await new Skin_colorRepository().selectOne({
					id: result.skin_color_id,
				})) as Skin_color;

				// récupération du type de peau
				result.skin_type = (await new Skin_typeRepository().selectOne({
					id: result.skin_type_id,
				})) as Skin_type;

				// récupération du sous-ton
				result.undertone = (await new UndertoneRepository().selectOne({
					id: result.undertone_id,
				})) as Undertone;
			}

			return users;
		} catch (error) {
			return error;
		}
	};

	// sélectionner un enregistrement
	public selectOne = async (
		data: Partial<User>,
	): Promise<User | null | unknown> => {
		const connection = await new MySQLService().connect();

		const sql = `
			SELECT ${this.table}.*
			FROM ${process.env.MYSQL_DATABASE}.${this.table}
			WHERE ${this.table}.id = :id;
		`;

		try {
			const [query] = await connection.execute(sql, data);
			const users = query as User[];

			if (users.length === 0) return null;

			// accès au premier utilisateur avec index
			const result = users[0] as User;

			// récupération du rôle
			result.role = (await new RoleRepository().selectOne({
				id: result.role_id,
			})) as Role;

			// récupération de la couleur de peau
			result.skin_color = (await new Skin_colorRepository().selectOne({
				id: result.skin_color_id,
			})) as Skin_color;

			// récupération du type de peau
			result.skin_type = (await new Skin_typeRepository().selectOne({
				id: result.skin_type_id,
			})) as Skin_type;

			// récupération du sous-ton
			result.undertone = (await new UndertoneRepository().selectOne({
				id: result.undertone_id,
			})) as Undertone;

			return result;
		} catch (error) {
			return error;
		}
	};
}

export default UserRepository;
