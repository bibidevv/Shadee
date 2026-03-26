import * as jose from "jose";
import type { User } from "../../models/user";

class SecurityService {
	// stocker l'utilisateur
	private static user: User | null;

	// stocker le JWT token
	private static token: string | null;

	// déconnexion
	public logout = () => {
		// supprimre l'utilisateur
		SecurityService.user = null;

		// supprimre le token JWT
		SecurityService.token = null;
	};

	// getter / setter (accesseur /)
	public getUser = () => {
		"use server";
		return SecurityService.user;
	};

	public setUser = (value: User | null) => {
		"use server";
		SecurityService.user = value;
	};

	public setToken = async (user: User | null) => {
		const secret = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);
		const alg = "HS256";
		if (user) {
			SecurityService.token = await new jose.SignJWT(user as User)
				.setProtectedHeader({ alg })
				// durée de validité du token
				.setExpirationTime("10h")
				.sign(secret);
		}
	};

	public getToken = (): string | null => SecurityService.token;
}

export default SecurityService;
