import { use } from "react";
import type { Product } from "../../models/product";
import ProductDetailsContent from "../components/product_details_content";
import Seo from "../components/shared/seo";
import type { ProductsDetailsParams } from "../models/params/products_details_params";
import ProductApiService from "../models/props/product_api_service";

// params permet de récuperer une variable d'URL
const ProductsDetails = ({ params }: ProductsDetailsParams) => {
	const { id } = params;
	// récuperer les données
	const result = use(new ProductApiService().selectOne(id));

	console.log(result);

	return (
		<>
			<Seo title="Products" description="Products" url="products" />
			{/* <ProductsComponent /> */}
			<p>products</p>
			<h2>détails</h2>

			<ProductDetailsContent data={result.data as Product} />
		</>
	);
};

export default ProductsDetails;
