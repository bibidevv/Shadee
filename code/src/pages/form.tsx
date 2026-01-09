import ProductForm from "../components/admin_product_form_content";
import AdminProductFormValidator from "../validators/admin/admin_product_form_validator";

const AdminProductsForm = () => {
	// const skin_colors = use(new ProductApiService().selectAll());
	// const skin_type = use(new ProductApiService().selectAll());
	// const undertones = use(new ProductApiService().selectAll());

	return (
		<>
			<title> Gestion des menus - Administration - Shadee </title>

			<ProductForm validator={new AdminProductFormValidator().validate} />
		</>
	);
};

export default AdminProductsForm;
