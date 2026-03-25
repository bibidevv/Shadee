"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router";
import styles from "../assets/css/navbar.module.css";
import logo from "../assets/img/shadeelogo.svg";
import SecurityService from "../services/security_service";

const NavBar = () => {
	const [navMobileIsVisible, setNavMobileIsVisible] = useState(false);
	const user = new SecurityService().getUser();

	const handleClick = () => {
		setNavMobileIsVisible(!navMobileIsVisible);
	};

	const closeMenu = () => {
		setNavMobileIsVisible(false);
	};

	return (
		<header className={styles.navbar}>
			<img src={logo} alt="Shadee Logo" className={styles.logo} />

			<nav
				className={`${styles.menu} ${
					navMobileIsVisible ? styles.menuVisible : ""
				}`}
			>
				<NavLink to="/" onClick={closeMenu}>
					Accueil
				</NavLink>

				<NavLink to="/products" onClick={closeMenu}>
					Produits
				</NavLink>

				<NavLink to="/contact" onClick={closeMenu}>
					Contact
				</NavLink>

				{user?.role.name === "admin" && (
					<NavLink to="/admin" onClick={closeMenu}>
						Admin
					</NavLink>
				)}

				{user ? (
					<NavLink to="/logout" onClick={closeMenu}>
						Se déconnecter
					</NavLink>
				) : (
					<>
						<NavLink to="/login" onClick={closeMenu}>
							Se connecter
						</NavLink>

						<NavLink to="/register" onClick={closeMenu}>
							S'inscrire
						</NavLink>
					</>
				)}
			</nav>

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
