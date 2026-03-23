"use client";

import { useState } from "react";
import { Link } from "react-router";
import styles from "../assets/css/login.module.css";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ email, password });
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

			<p className={styles.register}>
				Pas encore de compte ? <Link to="/register">S'inscrire</Link>
			</p>
		</form>
	);
};

export default LoginForm;
