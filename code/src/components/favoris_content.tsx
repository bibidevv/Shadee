"use client";

import React from "react";
import { Link } from "react-router";
import styles from "../assets/css/favoris.module.css";

const FavorisContent = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Mes favoris ❤️</h1>

			<p className={styles.empty}>
				Tu n'as pas encore ajouté de produits en favoris.
			</p>
			<Link to="/espace-utilisateur">
				<button type="button" className={styles.backButton}>
					← Retour à l'accueil
				</button>
			</Link>
		</div>
	);
};

export default FavorisContent;
