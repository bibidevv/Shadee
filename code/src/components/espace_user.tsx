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
						<span className={styles.icon}>✔</span>
						<p>Des recommandations adaptées à ton profil.</p>
					</div>

					<Link to="/favoris" className={styles.featureCard}>
						<span className={styles.icon}>❤️</span>
						<p>Accès rapide à tes produits favoris.</p>
					</Link>

					<Link to="/profil" className={styles.featureCard}>
						<span className={styles.icon}>⚙️</span>
						<p>Modifier ton profil.</p>
					</Link>
				</div>

				<Link to="/products">
					<button type="button" className={styles.button}>
						Accéder au catalogue
					</button>
				</Link>
			</div>
		</div>
	);
};

export default UserHomePage;
