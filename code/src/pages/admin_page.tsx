import { Link } from "react-router";
import styles from "../assets/css/admin_page.module.css";
import Seo from "../components/shared/seo";

const AdminPage = () => {
	return (
		<>
			<Seo title="Admin" description="Espace d'administration" url="/admin" />

			<div className={styles.container}>
				<div className={styles.card}>
					<h2 className={styles.title}>Tableau de bord</h2>

					<p className={styles.text}>
						Bienvenue dans votre espace d'administration.
					</p>

					<div className={styles.actions}>
						<Link to="/admin/products">
							<button className={styles.button} type="button">
								Gérer les produits
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminPage;
