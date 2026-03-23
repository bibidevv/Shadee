import styles from "../assets/css/login.module.css";
import LoginForm from "../components/login_form";

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Connexion</h1>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
