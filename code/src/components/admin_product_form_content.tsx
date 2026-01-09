"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { date } from "zod";
import type { ZodIssue } from "zod/v3";
import type { Product } from "../../models/product";
import type { AdminProductsForm_props } from "../models/props/admin_products_form_props";

/*
react hook form
- register : remplacer l'attribut name, permet de référencer le champ de saisie lors de la soumission du formulaire
- handleSubmit: permet de gérer la soumission du formulaire
- reset : permet de pré-remplir le formulaire avec des données
- errors : récupérer les erreurs de saisie
*/

const ProductForm = ({ validator }: AdminProductsForm_props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Product>>();

	// console.log(validator);

	// IDs pour l’accessibilité
	const nameID = useId();
	const priceID = useId();
	const descriptionID = useId();
	const undertoneID = useId();
	const skinColorID = useId();
	const skinTypeID = useId();
	const imageID = useId();

	// stocker les messages d'erreur de validation coté serveur
	const [serverErrors, setServerErrors] = useState<Partial<Product>>();

	const submitForm = async (data: Partial<Product>) => {
		// normaliser les données saisies : se baser sur les données testées dans flashpost pour que les données marchent

		const normalizedData = {
			...date,
			product_ids: (data.product_ids as unknow as string[]).join(),
		};
		console.log(validator);

		// validation de la saisie avec le validateur côté serveur
		const validation = await validator(normalizedData);
		// si la validation échoue
		if (validation instanceof Error) {
			// 	// stocker les messages d'erreur
			let errors = {};

			// récuperer les messages d'erreur
			(JSON.parse(validation.message) as ZodIssue[]).map((item) => {
				errors = { ...errors, [item.path.shift() as string]: item.message };
				return errors;
			});
			setServerErrors(errors);
			return;
		}
	};

	return (
		<form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
			{/* Nom */}
			<div>
				<label htmlFor={nameID}>Nom du produit</label>
				<input
					id={nameID}
					type="text"
					{...register("name", {
						required: "Le nom est obligatoire",
						minLength: { value: 5, message: "5 caractères minimum" },
						maxLength: { value: 100, message: "100 caractères maximum" },
					})}
				/>
				{errors.name && (
					<small role="alert">
						{errors.name.message ?? serverErrors?.name}
					</small>
				)}
			</div>

			{/* Prix */}
			<div>
				<label htmlFor={priceID}>Prix</label>
				<input
					id={priceID}
					type="number"
					{...register("price", {
						// required: "Le prix est obligatoire",
						// min: { value: 0, message: "Le prix doit être positif" },
					})}
				/>
				{errors.name && (
					<small role="alert">
						{errors.number.message ?? serverErrors?.name}
					</small>
				)}
			</div>

			{/* Description */}
			<div>
				<label htmlFor={descriptionID}>Description</label>
				<textarea
					id={descriptionID}
					{...register("description", {
						required: "La description est obligatoire",
						minLength: { value: 10, message: "10 caractères minimum" },
					})}
				/>
				{errors.description && errors.name && (
					<small role="alert">
						{errors.description?.message ?? serverErrors?.name}
					</small>
				)}
			</div>

			{/* Couleurs de peau - select multiple */}
			<div>
				<label htmlFor={skinColorID}>Couleurs de peau</label>
				<select
					id={skinColorID}
					multiple
					{...register("skin_color_ids", {
						required: "Sélectionnez au moins une couleur",
					})}
				>
					<option value="CLEAR WHITE">CLEAR WHITE</option>
					<option value="DARK SKINED">DARK SKINED</option>
				</select>
				{errors.skin_color_ids && errors.name && (
					<small role="alert">
						{errors.skin_color_ids.message ?? serverErrors?.name}
					</small>
				)}
			</div>

			{/* Sous-ton - select simple */}
			<div>
				<label htmlFor={undertoneID}>Sous-ton</label>
				<p>
					<input
						type="checkbox"
						{...register("undertone_ids", {
							required: "Le sous-ton est obligatoire",
						})}
						value="1"
					/>
					<label htmlFor="">Neutre</label>
				</p>
				{/* <select
					id={undertoneID}
					{...register("undertone_ids", {
						required: "Le sous-ton est obligatoire",
					})}
				>
					<option value="">-- Choisir --</option>
					<option value="NEUTRAL">Neutre</option>
					<option value="WARM">Chaud</option>
					<option value="COOL">Froid</option>
				</select> */}
				{errors.undertone_ids && errors.name && (
					<small role="alert">
						{errors.undertone_ids.message ?? serverErrors?.name}
					</small>
				)}
			</div>

			{/* Types de peau - select multiple */}
			{/* <div>
				<label htmlFor={skinTypeID}>Types de peau</label>
				<select
					id={skinTypeID}
					multiple
					{...register("skinTypes", {
						required: "Sélectionnez au moins un type",
					})}
				>
					<option value="NORMAL">Normale</option>
					<option value="DRY">Sèche</option>
					<option value="COMBO">Mixte</option>
					<option value="OILY">Grasse</option>
				</select>
				{errors.skinTypes && (
					errors.name && <small role="alert">{errors.skinTypes.message ?? serverErrors?.name}</small>
				)}
			</div> */}

			{/* Image */}
			{/* <div>
				<label htmlFor={imageID}>Image (URL ou nom de fichier)</label>
				<input
					id={imageID}
					type="text"
					{...register("image", { required: "L'image est obligatoire" })}
				/>
				errors.name && <small role="alert">{errors.image.message ?? serverErrors?.name}</small>
			</div> */}

			{/* Erreur product_ids */}
			{errors.name && (
				<small role="alert">
					{errors.product_ids.message ?? serverErrors?.name}
				</small>
			)}

			<button type="submit">Soumettre</button>
		</form>
	);
};

export default ProductForm;
