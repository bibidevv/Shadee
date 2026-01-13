import { use } from "react";
import type { Product } from "../../models/product";
import ProductForm from "../components/admin_product_form_content";
import Seo from "../components/shared/seo";
import type { AdminProductsParams } from "../models/params/admin_products_params";
import ProductApiService from "../services/product_api_service";
import Skin_colorApiService from "../services/skin_color_api_service";
import Skin_typeApiService from "../services/skin_type_api_service";
import UndertoneApiService from "../services/undertone_api_service";
import AdminProductFormValidator from "../validators/admin/admin_product_form_validator";

const AdminAddProductPage = ({ params }: AdminProductsParams) => {
	const skin_colors = use(new Skin_colorApiService().selectAll());
	const skin_type = use(new Skin_typeApiService().selectAll());
	const undertones = use(new UndertoneApiService().selectAll());

	console.log(skin_colors);
	console.log(skin_type);
	console.log(undertones);

	const { id } = params;

	// récuperer les données a MAJ
	let dataToUpdate: Product | undefined;

	// si un identifiant est présent dans l'url
	if (id) {
		dataToUpdate = use(new ProductApiService().selectOne(id)).data as Product;
		console.log(dataToUpdate);
	}

	return (
		<>
			<Seo
				title="Admin - Ajouter un produit"
				description="Ajouter un produit"
				url="/admin/products/add"
			/>

			<h2>Ajouter un produit</h2>

			<ProductForm
				validator={new AdminProductFormValidator().validate}
				dataToUpdate={dataToUpdate}
			/>
		</>
	);
};

export default AdminAddProductPage;
