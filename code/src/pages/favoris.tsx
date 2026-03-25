import "../assets/css/base.css";
import FavorisContent from "../components/favoris_content";
import Seo from "../components/shared/seo";

const Favoris = () => {
	return (
		<>
			<Seo title="Mes favoris" description="Produits favoris" url="/favoris" />

			<FavorisContent />
		</>
	);
};

export default Favoris;
