import "../assets/css/base.css";
import ProfilContent from "../components/profil_content";
import Seo from "../components/shared/seo";

const Profil = () => {
	return (
		<>
			<Seo
				title="Mon profil"
				description="Gestion du profil utilisateur"
				url="/profil"
			/>

			<ProfilContent />
		</>
	);
};

export default Profil;
