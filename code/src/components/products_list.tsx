import { use } from "react";
import type { Product } from "../../models/product";
import type { ApiResponse } from "../models/props/api_response";
import ProductApiService from "../models/props/product_api_service";
import ProductListItem from "./Product_list_item";

const Products_list = () => {
	const results = use<ApiResponse<Product[]>>(
		new ProductApiService().selectAll(),
	);

	// console.log(results);

	return (
		<>
			<p>products</p>

			{results.data?.map((item) => (
				// item est passé en props
				<ProductListItem key={item.id} data={item} />
			))}
		</>
	);
};

export default Products_list;
