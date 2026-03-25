"use client";

import React from "react";
import styles from "../assets/css/favoris.module.css";

const FavorisContent = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Mes favoris ❤️</h1>

			<p className={styles.empty}>
				Tu n'as pas encore ajouté de produits en favoris.
			</p>
		</div>
	);
};

export default FavorisContent;
