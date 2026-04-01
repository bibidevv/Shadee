"use client";

import React from "react";
import { Link } from "react-router";
import mainImage from "../../public/images/skin2.jpg";
import styles from "../assets/css/HomePage.module.css";

const UserHomePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.mainContent}>
				<h1 className={styles.title}>Bienvenue sur ton espace Shadee </h1>

				<img src={mainImage} alt="skin" className={styles.image} />

				<h2 className={styles.subtitle}>
					Ton assistant makeup personnalisé t'attend
				</h2>
			</div>

			<div className={styles.featuresSection}>
				<h1 className={styles.featuresTitle}>Avec ton compte Shadee :</h1>

				<div className={styles.featuresGrid}>
					<div className={styles.featureCard}>
						<Link to="/espace-utilisateur/userproducts">
							<span className={styles.icon}>✔</span>
							<p>Un accès a tes produits personnalisés</p>
						</Link>
					</div>

					<Link to="/espace-utilisateur/favoris" className={styles.featureCard}>
						<span className={styles.icon}>❤️</span>
						<p>Accès rapide à tes produits favoris.</p>
					</Link>

					<Link to="/espace-utilisateur/profil" className={styles.featureCard}>
						<span className={styles.icon}>⚙️</span>
						<p>Modifier ton profil.</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserHomePage;
