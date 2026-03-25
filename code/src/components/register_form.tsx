"use client";

import { useState } from "react";
import { Link } from "react-router";
import styles from "../assets/css/register.module.css";
import SecurityApiService from "../services/security_api_service";

const RegisterForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [username, setUsername] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const process = new SecurityApiService().register({
			email: email,
			password: password,
		});
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

			{/* <div className={styles.group}>
				<label htmlFor="username" className={styles.label}>
					Nom d'utilisateur
				</label>
				<input
					id="username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className={styles.input}
				/>
			</div> */}

			<button type="submit" className={styles.button}>
				S'inscrire
			</button>

			<p className={styles.login}>
				Déjà un compte ? <Link to="/login">Se connecter</Link>
			</p>
		</form>
	);
};

export default RegisterForm;
