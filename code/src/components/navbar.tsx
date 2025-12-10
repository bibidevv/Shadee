"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router";
import styles from "../assets/css/navbar.module.css";
import logo from "../assets/img/shadee logo.svg";

const NavBar = () => {
	const [navMobileIsVisible, setNavMobileIsVisible] = useState(false);

	const handleClick = () => {
		setNavMobileIsVisible(!navMobileIsVisible);
	};

	return (
		<header className={styles.navbar}>
			{/* Logo */}
			<img src={logo} alt="Shadee Logo" className={styles.logo} />

			{/* Menu desktop / mobile */}
			<nav
				className={`${styles.menu} ${navMobileIsVisible ? styles.menuVisible : ""}`}
			>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? styles.active : "")}
				>
					Accueil
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? styles.active : "")}
				>
					Contact
				</NavLink>
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
