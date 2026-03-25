import type { QueryResult } from "mysql2";
import type { Role } from "../../models/role";
import type { User } from "../../models/user";
import MySQLService from "../service/mysql_service";
import RoleRepository from "./role_repository";

class SecurityRepository {
	// nom de la table sql
	private table = "user";

	// enregistrer un utilisateur
	public register = async (
		data: Partial<User>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur mysql
		const connection = await new MySQLService().connect();

		// requête SQL
		const sql = `
			INSERT INTO ${process.env.MYSQL_DATABASE}.${this.table}
			VALUE (
			NULL, 
			:email, 
			:password,
			2,
			NULL, 
			NULL, 
			NULL
			)
		`;

		try {
			const [query] = await connection.execute(sql, data);

			return query;
		} catch (error) {
			return error;
		}
	};

	// vérifier l'existence de l'email d'un utilisateur

	public isEmailUserExists = async (
		data: Partial<User>,
	): Promise<boolean | unknown> => {
		// connexion au serveur mysql
		const connection = await new MySQLService().connect();

		// requête SQL
		const sql = `
			SELECT ${this.table}.*
			FROM ${process.env.MYSQL_DATABASE}.${this.table}
			WHERE ${this.table}.email = :email
			;
		`;

		try {
			const [query] = await connection.execute(sql, data);
			// retourner les résultats si l'email existe
			if ((query as []).length > 0) return true;
			return false;
		} catch (error) {
			return error;
		}
	};

	// récupérer un utilisateur par son email

	public selectOneByEmail = async (
		data: Partial<User>,
	): Promise<User | null | unknown> => {
		const connection = await new MySQLService().connect();

		const sql = `
			SELECT ${this.table}.*
			FROM ${process.env.MYSQL_DATABASE}.${this.table}
			WHERE ${this.table}.email = :email;
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

			return result;
		} catch (error) {
			return error;
		}
	};
}

export default SecurityRepository;
