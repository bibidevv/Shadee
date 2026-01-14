"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { AdminProductsParams } from "../models/params/admin_products_params";
import ProductApiService from "../services/product_api_service";

const AdminProductDelete = ({
	params,
}: AdminProductsParams): React.JSX.Element => {
	const { id } = params;

	const navigate = useNavigate();

	useEffect(() => {
		new ProductApiService().delete({ id: id }).then(() => {
			navigate("/admin/products");
			return;
		});
	}, [id, navigate]);

	// await n'est pas dispo dans useeFFECT
	// la méthode

	return (
		<>
			{/* Seo */}
			<title>Administration</title>

			<p>Suppression du produit en cours...</p>
		</>
	);
};

export default AdminProductDelete;
