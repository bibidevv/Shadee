import { Link } from "react-router";
import styles from "../assets/css/product_details.module.css";
import type { ProductDetailsContentProps } from "../models/props/product_details_content_props";

const ProductDetailsContent = ({ data }: ProductDetailsContentProps) => {
	return (
		<div className={styles["product-details-container"]}>
			<h1>{data.name}</h1>
			<h2>{data.description}</h2>

			<p>
				<strong>Prix :</strong> {data.price}€
			</p>
			<p>
				<strong>Convient aux peaux :</strong>{" "}
				{data.skin_colors.map((c) => c.name.toLowerCase()).join(", ")}
			</p>
			<p>
				<strong>Types de peaux :</strong>{" "}
				{data.skin_types.map((t) => t.name.toLowerCase()).join(", ")}
			</p>
			<p>
				<strong>Sous-tons :</strong>{" "}
				{data.undertones.map((u) => u.name.toLowerCase()).join(", ")}
			</p>

			<img src={`/images/${data.image}`} alt={data.name} />

			<Link to="/products">
				<button type="button" className={styles.backButton}>
					← Retour au catalogue
				</button>
			</Link>
		</div>
	);
};

export default ProductDetailsContent;
