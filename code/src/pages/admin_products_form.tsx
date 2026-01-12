import { use } from "react";
import ProductForm from "../components/admin_product_form_content";
import Seo from "../components/shared/seo";
import Skin_colorApiService from "../services/skin_color_api_service";
import Skin_typeApiService from "../services/skin_type_api_service";
import UndertoneApiService from "../services/undertone_api_service";
import AdminProductFormValidator from "../validators/admin/admin_product_form_validator";

const AdminAddProductPage = () => {
	const skin_colors = use(new Skin_colorApiService().selectAll());
	const skin_type = use(new Skin_typeApiService().selectAll());
	const undertones = use(new UndertoneApiService().selectAll());

	console.log(skin_colors);
	console.log(skin_type);
	console.log(undertones);

	return (
		<>
			<Seo
				title="Admin - Ajouter un produit"
				description="Ajouter un produit"
				url="/admin/products/add"
			/>

			<h2>Ajouter un produit</h2>

			<ProductForm validator={new AdminProductFormValidator().validate} />
		</>
	);
};

export default AdminAddProductPage;
