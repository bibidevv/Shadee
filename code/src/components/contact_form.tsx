"use client";

import { useState } from "react";
import { date } from "zod/v3";
import styles from "../assets/css/contact.module.css";

const ContactForm = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ email, subject, message, date });
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
				<label htmlFor="subject" className={styles.label}>
					Sujet
				</label>
				<input
					id="subject"
					type="text"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					required
					className={styles.input}
				/>
			</div>

			<div className={styles.group}>
				<label htmlFor="message" className={styles.label}>
					Message
				</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
					className={styles.textarea}
				/>
			</div>

			<button type="submit" className={styles.button}>
				Envoyer
			</button>
		</form>
	);
};

export default ContactForm;
