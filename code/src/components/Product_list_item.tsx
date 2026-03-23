import { Link } from "react-router";
import styles from "../assets/css/products_list.module.css";
import type { ProductListItemProps } from "../models/props/Product_list_item_props";

const ProductListItem = ({ data }: ProductListItemProps) => {
	return (
		<article className={styles.productItem}>
			<h2>{data.name} :</h2>
			<h3>Prix : {data.price}€</h3>

			<p>
				Convient aux peaux :{" "}
				{data.skin_colors.map((item) => item.name.toLowerCase()).join(", ")}
			</p>

			<p>
				Convient aux types de peaux :{" "}
				{data.skin_types.map((item) => item.name.toLowerCase()).join(", ")}
			</p>

			<p>
				Convient aux sous tons :{" "}
				{data.undertones.map((item) => item.name.toLowerCase()).join(", ")}
			</p>

			<Link to={`/product/${data.id}`}>voir</Link>

			<img src={`/assets/img/${data.image}`} alt={data.name} />
		</article>
	);
};

export default ProductListItem;
