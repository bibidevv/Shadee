"use client";

import { useState } from "react";

const RegisterForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState(""); // optionnel, selon ta table user

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log({ email, password, username });
		// Ici tu pourras brancher ton API pour enregistrer l'utilisateur
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div>
				<label htmlFor="password">Mot de passe</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>

			<div>
				<label htmlFor="username">Nom d'utilisateur</label>
				<input
					id="username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>

			<button type="submit">S'inscrire</button>
		</form>
	);
};

export default RegisterForm;
