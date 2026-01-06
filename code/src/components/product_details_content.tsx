import React from "react";
import type { ProductDetailsContentProps } from "../models/props/product_details_content_props";

// récupération de la props data envoyée par le parent
const ProductDetailsContent = ({ data }: ProductDetailsContentProps) => {
	return (
		<div className="Infos">
			<h1>{data.name}</h1>
			<h2> {data.description}</h2>
		</div>
	);
};

export default ProductDetailsContent;
