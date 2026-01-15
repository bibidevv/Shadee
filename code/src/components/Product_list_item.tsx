import { Link } from "react-router";
import type { ProductListItemProps } from "../models/props/Product_list_item_props";

const ProductListItem = ({ data }: ProductListItemProps) => {
	return (
		<article>
			<h2>{data.name} :</h2>
			<h3>Prix : {data.price}€</h3>

			<p>
				Convient aux peaux :
				{
					// boucler sur les produits
					data.skin_colors
						.map((item) => item.name.toLowerCase())
						.join()
				}
			</p>

			<p>
				Convient aux types de peaux :
				{
					// boucler sur les produits
					data.skin_types
						.map((item) => item.name.toLowerCase())
						.join()
				}
			</p>

			<p>
				Convient aux sous tons :
				{
					// boucler sur les produits
					data.undertones
						.map((item) => item.name.toLowerCase())
						.join()
				}
			</p>

			<Link to={`/product/${data.id}`}>voir</Link>

			{/* <ul>
				{
					// boucler sur les produits
					data.skin_colors.map((item) => (
						<li key={item.id}> {item.name}</li>
					))

				}
			</ul> */}

			{/* <p>
				Convient aux peaux : {data.} et {data.skin_type}
				<br />
				Convient aux sous tons : {data.undertone}
			</p> */}

			<img src={`/images/${data.image}`} alt={data.name} />
		</article>
	);
};

export default ProductListItem;
