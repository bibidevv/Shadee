import ProductForm from "./admin_product_form_content";
import Seo from "./shared/seo";

const AdminAddProductPage = () => {
	return (
		<>
			<Seo
				title="Admin - Ajouter un produit"
				description="Ajouter un produit"
				url="/admin/products/add"
			/>

			<h2>Ajouter un produit</h2>

			<ProductForm />
		</>
	);
};

export default AdminAddProductPage;
