"use client";

import React from "react";
import styles from "../assets/css/HomePage.module.css";
import mainImage from "../assets/img/skin1.jpg";

const HomePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.mainContent}>
				<h1 className={styles.title}>
					Shadee, ton assistant makeup sur-mesure.
				</h1>

				<img src={mainImage} alt="skin" className={styles.image} />

				<h2 className={styles.subtitle}>Trouve le produit qui te correspond</h2>

				<button type="button" className={styles.button}>
					Voir les produits
				</button>
			</div>

			<div className={styles.featuresSection}>
				<h1 className={styles.featuresTitle}>
					Shadee, c'est bien plus qu'un assistant :
				</h1>

				<div className={styles.featuresGrid}>
					<div className={styles.featureCard}>
						<span className={styles.icon}>✔</span>
						<p>Une liste de produits adaptée.</p>
					</div>

					<div className={styles.featureCard}>
						<span className={styles.icon}>✔</span>
						<p>Un catalogue trié par couleur, type de peau et sous ton.</p>
					</div>

					<div className={styles.featureCard}>
						<span className={styles.icon}>✔</span>
						<p>Une plateforme intuitive et facile à utiliser.</p>
					</div>
				</div>

				<button type="button" className={styles.button}>
					Créer mon compte
				</button>
			</div>
		</div>
	);
};

export default HomePage;
