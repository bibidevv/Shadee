"use client";

import { Link } from "react-router";
import styles from "../assets/css/user_dashboard.module.css";

const UserDashboard = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Mon espace</h1>

			<div className={styles.grid}>
				<Link to="/favoris" className={styles.card}>
					<span className={styles.icon}>❤️</span>
					<h2>Mes favoris</h2>
					<p>Retrouve les produits que tu as sauvegardés</p>
				</Link>

				<Link to="/profil" className={styles.card}>
					<span className={styles.icon}>⚙️</span>
					<h2>Modifier mon profil</h2>
					<p>Met à jour tes informations personnelles</p>
				</Link>
			</div>
		</div>
	);
};

export default UserDashboard;
