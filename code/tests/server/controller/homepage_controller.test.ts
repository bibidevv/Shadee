import supertest from "supertest";
import { describe, expect, it } from "vitest";
import Server from "../../../server/core/server";

describe("homepage controller test suites", () => {
	const apiRoute = "/api";
	const route = "/";
	// tester le code 200 renvoyé par la route
	it("should returns a 200 status code", async () => {
		// arrange
		const expected = 200;
		//sut : system under test
		const sut = supertest(new Server().start());

		// act
		const response = await sut.get(`${apiRoute}${route}`);
		const actual = response.status;

		// assert
		expect(actual).toBe(expected);
	});
});

// const sum = (n1: number, n2: number) => n1 + n2;

// // describe permet de regrouper plusieurs tests
// describe("sum test suites", () => {
// 	// it permet de créer un test
// 	it("should returns a sum of two numbers", () => {
// 		// arrange : organiser
// 		// expected est le résultat attendu
// 		const expected = 5;
// 		const notExpected = 4;
// 		const n1 = 2;
// 		const n2 = 3;

// 		// act : agir
// 		// actual permet de définir l'obtention du résultat attendu
// 		const actual = sum(n1, n2);

// 		// assert :affirmer
// 		expect(actual).toBe(expected);
// 		expect(actual).not.toBe(notExpected);
// 	});
// });
