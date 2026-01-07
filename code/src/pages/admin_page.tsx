import Seo from "../components/shared/seo";

const AdminPage = () => {
	return (
		<>
			<Seo title="Admin" description="Espace d'administration" url="/admin" />
			<h2>Bienvenue dans votre espace d'administration</h2>
			<p>Ici vous pourrez gérer vos produits et utilisateurs.</p>
		</>
	);
};

export default AdminPage;
