"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import SecurityService from "../services/security_service";

const Logout = () => {
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// supprimer à l'affichage de la page/composant

	useEffect(() => {
		//supprimer l'utilisateur stocké
		new SecurityService().setUser(null);

		// redirection vers une route
		navigate("/");
	}, [navigate]);

	return <></>;
};

export default Logout;
