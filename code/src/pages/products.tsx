import { use } from "react";
import type { Product } from "../../models/product";
import Products_list from "../components/products_list";
import Seo from "../components/shared/seo";
import type { ApiResponse } from "../models/props/api_response";
import ProductApiService from "../services/product_api_service";

const Products = () => {
	// récupération des produits
	// const results = use<ApiResponse<Product[]>>(
	// 	new ProductApiService().selectAll(),
	// );

	return (
		<>
			<Seo title="Products" description="Products" url="/products" />

			<h1>Tous les produits</h1>

			{/* Liste des produits */}
			<Products_list />
		</>
	);
};

export default Products;
