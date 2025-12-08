import { Fragment } from "react/jsx-runtime";
import styles from "../assets/css/hi.module.css";

const Hi = () => {
	const name = "Aby";
	const students = ["Manon", "Lina", "Prativa"];
	const isConnected = false;
	return (
		<div className={styles.hi}>
			<h1 className={styles.title}>Hey {name}</h1>
			<h2>Hello</h2>
			{isConnected ? "Déconnexion" : "Connexion"}
			<hr />
			<img src="/public/img/vite.svg" alt="" />
			<label htmlFor="hee hee"> Nom :</label>
			<input type="text" id="hee hee" />
			{students.map((value) => (
				<p key={Math.random()}> {value}</p>
			))}
		</div>
	);
};

export default Hi;
