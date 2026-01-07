"use client";

import { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log({ email, password });
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

			<button type="submit">Se connecter</button>
		</form>
	);
};

export default LoginForm;
