import * as jose from "jose";
import supertest from "supertest";
import { describe, expect, it } from "vitest";
import type { Product } from "../../../models/product";
import type { User } from "../../../models/user";
import Server from "../../../server/core/server";
import SecurityService from "../../../src/services/security_service";

describe("product controller test suites", async () => {
	// configuration
	const apiRoute = "/api";
	const route = "/product";

	// admin
	const admin: Partial<User> = {
		id: 1,
		email: "admin@admin.fr",
		password:
			"$argon2i$v=19$m=16,t=2,p=1$ODc2VnZqdnNnZ3lQUnFobA$CNXArmmmxp81Q9A59hYrHA",
		role_id: 1,
		role: {
			id: 1,
			name: "admin",
		},
	};

	const secret = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);
	const alg = "HS256";

	const token = await new jose.SignJWT(admin as User)
		.setProtectedHeader({ alg })
		// durée de validité du token
		.setExpirationTime("10h")
		.sign(secret);

	// fake date
	const data: Partial<Product> = {
		id: 2,
		name: `name - ${Math.random()}`,
		description: "fond de teint hydratant",
		image: "skin1.jpg",
		price: 38.0,
		undertone_ids: "1,2",
		skin_type_ids: "1,2",
		skin_color_ids: "1,2",
	};

	// tester le code 201 renvoyé par la réponse
	it("should returns a 201 status code when a record is inserted", async () => {
		// arrange
		const expected = 201;
		const sut = supertest(new Server().start());

		// act
		/* envoyer des données dans body : si une image est présente : utiliser la méthode fiald pour chaque champ et/ou utiliser la méthode attach pour transferer une image. si une image n'est pas présente, utiliser la méthode send(JSON) */
		const response = await sut
			.post(`${apiRoute}${route}`)

			// token JWT
			.auth(token, { type: "bearer" })
			.field("name", data.name as string)
			.field("description", data.description as string)
			.attach("image", `${process.env.PUBLIC_DIR}/images/${data.image}`)
			.field("price", data.price as number)
			.field("undertone_ids", data.undertone_ids as string)
			.field("skin_type_ids", data.skin_type_ids as string)
			.field("skin_color_ids", data.skin_color_ids as string);
		// console.log(response);

		const actual = response.status;

		// assert
		expect(actual).toBe(expected);
	});
});
