import type React from "react";
import Admin_product_homepage_content from "../components/admin_product_homepage_content";
import Seo from "../components/shared/seo";
import Products from "./products";

const AdminProductsHomepage = async (): Promise<React.JSX.Element> => {
	// récupération des produits

	return (
		<div>
			<Seo
				title="Admin - Produits"
				description="Gestion des produits"
				url="/admin/products"
			/>

			<Admin_product_homepage_content />
		</div>
	);
};

export default AdminProductsHomepage;
