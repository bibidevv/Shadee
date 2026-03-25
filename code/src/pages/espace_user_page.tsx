import "../assets/css/base.css";
import UserHomePage from "../components/espace_user";
import Seo from "../components/shared/seo";

const EspaceUser = () => {
	return (
		<>
			<Seo
				title="Espace utilisateur"
				description="Votre espace personnel Shadee"
				url="/espace-utilisateur"
			/>

			<UserHomePage />
		</>
	);
};

export default EspaceUser;
