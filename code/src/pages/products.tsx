import { use } from "react";
import type { Product } from "../../models/product";
import Products_list from "../components/products_list";
import Seo from "../components/shared/seo";
import type { ApiResponse } from "../models/props/api_response";
import ProductApiService from "../models/props/product_api_service";

const Products = () => {
	/* use permet de récuperer les données d'une promesse dans un composant serveur de react */
	const results = use<ApiResponse<Product[]>>(
		new ProductApiService().selectAll(),
	);

	console.log(results);

	return (
		<>
			<Seo title="Products" description="Products" url="products" />
			{/* <ProductsComponent /> */}
			<p>products</p>
			<Products_list />
		</>
	);
};

export default Products;
