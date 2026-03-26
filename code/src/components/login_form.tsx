"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import type { User } from "../../models/user";
import styles from "../assets/css/login.module.css";
import SecurityApiService from "../services/security_api_service";
import SecurityService from "../services/security_service";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const process = await new SecurityApiService().login({
			email: email,
			password: password,
		});

		if ([200, 201].includes(process.status)) {
			const user = process.data as User;

			// stocker l'utilisateur
			new SecurityService().setUser(user);

			// stocker le token JWT
			await new SecurityService().setToken(user);
			console.log(new SecurityService().getToken());

			if (user.role.name === "admin") {
				navigate("/admin");
				return;
			}

			navigate("/espace-utilisateur");
		} else if ([400, 401, 403].includes(process.status)) {
			setMessage("Une erreur est survenue. Veuillez réessayer.");
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.group}>
				<label htmlFor="email" className={styles.label}>
					Email
				</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className={styles.input}
				/>
			</div>

			<div className={styles.group}>
				<label htmlFor="password" className={styles.label}>
					Mot de passe
				</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					className={styles.input}
				/>
			</div>

			<button type="submit" className={styles.button}>
				Se connecter
			</button>

			{message && <p>{message}</p>}

			<p className={styles.register}>
				Pas encore de compte ? <Link to="/register">S'inscrire</Link>
			</p>
		</form>
	);
};

export default LoginForm;
