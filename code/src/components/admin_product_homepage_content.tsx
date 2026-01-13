import React, { use } from "react";
import { Link } from "react-router";
import ProductApiService from "../services/product_api_service";

const Admin_product_homepage_content = () => {
	const products = use(new ProductApiService().selectAll()).data;

	// console.log(products);

	return (
		<div>
			Admin_product_homepage_content
			<Link to={"/admin/products/add"}>ajouter</Link>
			{products?.map((item) => {
				return (
					<div key={item.id}>
						<p>{item.name}</p>
						<p>
							<Link to={`/admin/products/add/${item.id}`}>Modifier</Link>
							<Link to={``}>Supprimer</Link>
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Admin_product_homepage_content;
