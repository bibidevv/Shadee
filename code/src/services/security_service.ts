import type { User } from "../../models/user";

class SecurityService {
	// stocker l'utilisateur
	private static user: User | null;

	// getter / setter (accesseur /)
	public getUser = () => {
		"use server";
		return SecurityService.user;
	};

	public setUser = (value: User | null) => {
		"use server";
		SecurityService.user = value;
	};
}

export default SecurityService;
