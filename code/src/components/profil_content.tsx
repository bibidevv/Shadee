"use client";

import React from "react";
import { Link } from "react-router";
import styles from "../assets/css/profil.module.css";

const ProfilContent = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Mon profil ⚙️</h1>

			<div className={styles.card}>
				<p>Ici tu pourras modifier tes informations personnelles.</p>
			</div>
			<Link to="/espace-utilisateur">
				<button type="button" className={styles.backButton}>
					← Retour à l'accueil
				</button>
			</Link>
		</div>
	);
};

export default ProfilContent;
