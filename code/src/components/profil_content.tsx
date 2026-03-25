"use client";

import React from "react";
import styles from "../assets/css/profil.module.css";

const ProfilContent = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Mon profil ⚙️</h1>

			<div className={styles.card}>
				<p>Ici tu pourras modifier tes informations personnelles.</p>
			</div>
		</div>
	);
};

export default ProfilContent;
