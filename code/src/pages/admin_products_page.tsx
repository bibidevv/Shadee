import Seo from "../components/shared/seo";

const AdminProductsPage = () => {
	const products = [
		{ id: 1, name: "Produit 1" },
		{ id: 2, name: "Produit 2" },
	];

	return (
		<div>
			<Seo
				title="Admin - Produits"
				description="Gestion des produits"
				url="/admin/products"
			/>

			<h2>Gestion des produits</h2>

			<a href="/admin/products/add">
				<button type="button">Ajouter un produit</button>
			</a>

			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.name}
						<button type="button">Modifier</button>
						<button type="button">Supprimer</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AdminProductsPage;
