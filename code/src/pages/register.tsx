import styles from "../assets/css/register.module.css";
import RegisterForm from "../components/register_form";
import Seo from "../components/shared/seo";

const RegisterPage = () => {
	return (
		<>
			<Seo
				title="Inscription"
				description="Page d'inscription"
				url="/register"
			/>

			<div className={styles.container}>
				<h1 className={styles.title}>Inscription</h1>
				<RegisterForm />
			</div>
		</>
	);
};

export default RegisterPage;
