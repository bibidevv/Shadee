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
		// SELECT user.* FROM shadee_dev.user;
		const sql = `
			SELECT ${this.table}.*
			FROM ${process.env.MYSQL_DATABASE}.${this.table};
		`;

		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			const [query] = await connection.execute(sql);

			// transformation du résultat en tableau de User
			const users = query as User[];

			// boucle sur chaque utilisateur pour récupérer les relations
			for (const user of users) {
				// récupération du rôle de l'utilisateur
				user.role = (await new RoleRepository().selectOne({
					id: user.role_id,
				})) as Role;

				// récupération de la couleur de peau
				user.skin_color = (await new Skin_colorRepository().selectOne({
					id: user.skin_color_id,
				})) as Skin_color;

				// récupération du type de peau
				user.skin_type = (await new Skin_typeRepository().selectOne({
					id: user.skin_type_id,
				})) as Skin_type;

				// récupération du sous-ton
				user.undertone = (await new UndertoneRepository().selectOne({
					id: user.undertone_id,
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
		// connexion au serveur mysql
		const connection = await new MySQLService().connect();

		// requête SQL
		// variable de requête : précédée d'un :, suivi du nom de la variable
		// requête préparée : la requête est exécutée si elle ne représente pas de risque de sécurité
		const sql = `
			SELECT ${this.table}.*
			FROM ${process.env.MYSQL_DATABASE}.${this.table}
			WHERE ${this.table}.id = :id;
		`;

		// try / catch : récupérer le résultat de la requête ou une erreur
		try {
			const [query] = await connection.execute(sql, data);

			// récupérer le premier indice du tableau
			const result = (query as User[]).shift();

			// si aucun utilisateur trouvé
			if (!result) return null;

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
