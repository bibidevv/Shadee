"use client";

import { useState } from "react";

const ContactForm = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ email, subject, message });
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
				<label htmlFor="subject">Sujet</label>
				<input
					id="subject"
					type="text"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					required
				/>
			</div>

			<div>
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</div>

			<button type="submit">Envoyer</button>
		</form>
	);
};

export default ContactForm;
