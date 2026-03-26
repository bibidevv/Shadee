"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import SecurityService from "../services/security_service";

const Logout = () => {
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// supprimer à l'affichage de la page/composant

	useEffect(() => {
		// const reset = async () => {
		// 	//supprimer l'utilisateur stocké
		// 	new SecurityService().setUser(null);

		// 	// stocker le token JWT
		// 	await new SecurityService().setToken(null);
		// };

		// reset();
		new SecurityService().logout();

		// redirection vers une route
		navigate("/");
	}, [navigate]);

	return <></>;
};

export default Logout;
