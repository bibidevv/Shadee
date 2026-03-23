import React, { use } from "react";
import { Link } from "react-router";
import styles from "../assets/css/admin_product_homepage_content.module.css";
import ProductApiService from "../services/product_api_service";

const AdminProductHomepageContent = () => {
	const products = use(new ProductApiService().selectAll()).data;

	return (
		<div className={styles["admin-products-container"]}>
			<div className={styles["admin-products-header"]}>
				<h2>Gestion des produits</h2>
				<Link
					to="/admin/products/add"
					className={styles["admin-products-add-button"]}
				>
					Ajouter
				</Link>
			</div>

			{products?.map((item) => (
				<div key={item.id} className={styles["admin-product-card"]}>
					<div className={styles["admin-product-info"]}>
						<p>{item.name}</p>
						<p>{item.price} €</p>
					</div>
					<div className={styles["admin-product-actions"]}>
						<Link
							to={`/admin/products/add/${item.id}`}
							className={`${styles["admin-products-action-button"]} ${styles.modify}`}
						>
							Modifier
						</Link>
						<Link
							to={`/admin/products/delete/${item.id}`}
							className={`${styles["admin-products-action-button"]} ${styles.delete}`}
						>
							Supprimer
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default AdminProductHomepageContent;
