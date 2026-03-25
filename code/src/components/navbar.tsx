"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import styles from "../assets/css/navbar.module.css";
import logo from "../assets/img/shadeelogo.svg";
import SecurityService from "../services/security_service";

const NavBar = () => {
	const [navMobileIsVisible, setNavMobileIsVisible] = useState(false);
	const navigate = useNavigate();
	const user = new SecurityService().getUser(); // vérifie si connecté

	const handleClick = () => {
		setNavMobileIsVisible(!navMobileIsVisible);
	};

	const handleLogout = () => {
		// juste redirection vers login
		navigate("/logout");
	};

	return (
		<header className={styles.navbar}>
			{/* Logo */}
			<img src={logo} alt="Shadee Logo" className={styles.logo} />

			{/* Menu desktop / mobile */}
			<nav
				className={`${styles.menu} ${
					navMobileIsVisible ? styles.menuVisible : ""
				}`}
			>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? styles.active : "")}
				>
					Accueil
				</NavLink>

				<NavLink
					to="/products"
					className={({ isActive }) => (isActive ? styles.active : "")}
				>
					Produits
				</NavLink>

				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? styles.active : "")}
				>
					Contact
				</NavLink>
				{/* Lien Admin uniquement si rôle admin */}
				{new SecurityService().getUser()?.role.name === "admin" ? (
					<NavLink
						to="/admin"
						className={({ isActive }) => (isActive ? styles.active : "")}
					>
						Admin
					</NavLink>
				) : (
					<></>
				)}

				{/* Liens selon l'utilisateur */}
				{user ? (
					// <button
					// 	type="button"
					// 	onClick={handleLogout}
					// 	className={styles.logoutButton}
					// >
					// 	Déconnexion
					// </button>
					<NavLink
						to="/logout"
						className={({ isActive }) => (isActive ? styles.active : "")}
					>
						Se déconnecter
					</NavLink>
				) : (
					<>
						<NavLink
							to="/login"
							className={({ isActive }) => (isActive ? styles.active : "")}
						>
							Se connecter
						</NavLink>

						<NavLink
							to="/register"
							className={({ isActive }) => (isActive ? styles.active : "")}
						>
							S'inscrire
						</NavLink>
					</>
				)}
			</nav>

			{/* Burger menu mobile */}
			<button
				type="button"
				className={styles.burger}
				onClick={handleClick}
				aria-label="Menu mobile"
			>
				<FaBars size={25} color="var(--color-title)" />
			</button>
		</header>
	);
};

export default NavBar;
