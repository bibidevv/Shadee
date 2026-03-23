import { use } from "react";
import type { Product } from "../../models/product";
import ProductDetailsContent from "../components/product_details_content";
import Seo from "../components/shared/seo";
import type { ProductsDetailsParams } from "../models/params/products_details_params";
import ProductApiService from "../services/product_api_service";

// params permet de récuperer une variable d'URL
const ProductsDetails = ({ params }: ProductsDetailsParams) => {
	const { id } = params;
	// récupérer les données
	const result = use(new ProductApiService().selectOne(id));

	return (
		<>
			<Seo title="Products" description="Products" url="products" />

			<h2>Détails du produit</h2>
			<ProductDetailsContent data={result.data as Product} />
		</>
	);
};

export default ProductsDetails;
