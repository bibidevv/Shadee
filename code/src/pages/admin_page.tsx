import { Link } from "react-router";
import Seo from "../components/shared/seo";

const AdminPage = () => {
	return (
		<>
			<Seo title="Admin" description="Espace d'administration" url="/admin" />

			<h2>Tableau de bord</h2>

			<p>Bienvenue dans votre espace d'administration.</p>

			<div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
				<Link to="/admin/products">
					<button type="button">Gérer les produits</button>
				</Link>

				{/* Plus tard */}
				{/* <Link to="/admin/users">
					<button type="button">Gérer les utilisateurs</button>
				</Link> */}
			</div>
		</>
	);
};

export default AdminPage;
