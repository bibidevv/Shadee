"use client";

import React from "react";
import { Link } from "react-router";
import styles from "../assets/css/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>© 2026 Shadee, chercheur de produits personnalisés</p>
			<p>
				<Link to="/legal" className={styles.legalLink}>
					Mentions légales
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
