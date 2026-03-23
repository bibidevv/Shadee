import { use } from "react";
import { Link } from "react-router";
import type { Product } from "../../models/product";
import styles from "../assets/css/products_list.module.css";
import type { ApiResponse } from "../models/props/api_response";
import ProductApiService from "../services/product_api_service";

const Products_list = () => {
	const results = use<ApiResponse<Product[]>>(
		new ProductApiService().selectAll(),
	);

	return (
		<div className={styles.productsContainer}>
			{results.data?.map((item) => (
				<article key={item.id} className={styles.productItem}>
					<img src={`/assets/img/${item.image}`} alt={item.name} />

					<h2>{item.name}</h2>

					<h3>{item.price} €</h3>

					<Link to={`/product/${item.id}`}>Voir</Link>
				</article>
			))}
		</div>
	);
};

export default Products_list;
