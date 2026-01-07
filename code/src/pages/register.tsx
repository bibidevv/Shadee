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
			<h1>Inscription</h1>
			<RegisterForm />
		</>
	);
};

export default RegisterPage;
