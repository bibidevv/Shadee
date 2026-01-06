"use client";

import React from "react";
import styles from "../assets/css/HomePage.module.css";
import mainImage from "../assets/img/skin1.jpg";
import Footer from "../components/footer";

const HomePage = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.mainContent}>
					<h1 className={styles.title}>
						Shadee, ton assistant makeup sur-mesure.
					</h1>

					<img src={mainImage} alt="skin" className={styles.image} />

					<h2 className={styles.subtitle}>
						Trouve le produit qui te correspond
					</h2>

					<button type="button" className={styles.button}>
						Voir les produits
					</button>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default HomePage;
