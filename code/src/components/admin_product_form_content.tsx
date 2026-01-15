"use client";

import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { date } from "zod";
import type { ZodIssue } from "zod/v3";
import type { Product } from "../../models/product";
import type { AdminProductsForm_props } from "../models/props/admin_products_form_props";
import ProductApiService from "../services/product_api_service";

const ProductForm = ({ validator, dataToUpdate }: AdminProductsForm_props) => {
	/*
react hook form
- register : remplacer l'attribut name, permet de référencer le champ de saisie lors de la soumission du formulaire
- handleSubmit: permet de gérer la soumission du formulaire
- reset : permet de pré-remplir le formulaire avec des données
- errors : récupérer les erreurs de saisie
*/ const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Product>>();

	// préremplir le formulaire avant l'affichage du composant
	useEffect(() => {
		// si des données sont à méttre à jour
		if (dataToUpdate) {
			// normaliser les données saisies : se baser sur les données testées dans flashpost pour que les données marchent

			const normalizedData = {
				...dataToUpdate,
				undertone_ids: (dataToUpdate.undertone_ids as string).split(","),
				skin_type_ids: (dataToUpdate.skin_type_ids as string).split(","),
				skin_color_ids: (dataToUpdate.skin_color_ids as string).split(","),
			};
			reset(normalizedData);
		}
	}, [dataToUpdate, reset]);

	// console.log(validator);

	// IDs pour l’accessibilité
	const nameID = useId();
	const priceID = useId();
	const descriptionID = useId();
	const undertoneID = useId();
	const skinColorID = useId();
	const skinTypeID = useId();
	const imageID = useId();

	// useNavigate permet de créer une redirection
	const navigate = useNavigate();
	// stocker les messages d'erreur de validation coté serveur
	const [serverErrors, setServerErrors] = useState<Partial<Product>>();

	// message lié à la soumission du formulaire
	const [message, setMessage] = useState<string>("");

	const submitForm = async (data: Partial<Product>) => {
		// normaliser les données saisies : se baser sur les données testées dans flashpost pour que les données marchent

		const normalizedData = {
			...data,
			undertone_ids: (data.undertone_ids as unknown as string[]).join(),
			skin_type_ids: (data.skin_type_ids as unknown as string[]).join(),
			skin_color_ids: (data.skin_color_ids as unknown as string[]).join(),
			image: (data.image as string)[0],
		};

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
			// définir l'état affichant les messages d'erreur coé serveur
			setServerErrors(errors);
			// stopprt l'execution du scrpit
			return;
		}

		// si la validation réussie
		// si le formulaire contient un champ de fichier : envoyer vers l'api un objet de type formData
		const formData = new FormData();
		// reprendre strictement le nom du champ de formulaire testé avec flashpost
		formData.set("id", normalizedData.id as unknown as string);
		formData.set("name", normalizedData.name as string);
		formData.set("price", normalizedData.price as unknown as string);
		formData.set("description", normalizedData.description as string);
		formData.set("image", normalizedData.image as string);
		formData.set("undertone_ids", normalizedData.undertone_ids as string);
		formData.set("skin_type_ids", normalizedData.skin_type_ids as string);
		formData.set("skin_color_ids", normalizedData.skin_color_ids as string);

		// requête HTTP vers l'API
		const process = dataToUpdate
			? await new ProductApiService().update(formData)
			: await new ProductApiService().insert(formData);

		// si la requête HTTP a réussie
		if ([200, 201].indexOf(process.status) !== -1) {
			// redirection
			navigate("/admin/products");
		}

		// si la requête HTTP échoue
		else if ([400].indexOf(process.status) !== -1) {
			// afficher un message
			setMessage(process.data as unknown as string);
		}
	};

	return (
		<>
			message ? <p role="alert">{message}</p> :
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
					<small role="alert">
						{errors.name?.message ?? serverErrors?.name}
					</small>
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
					<small role="alert">
						{errors.price?.message ?? serverErrors?.price}
					</small>
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
					<small role="alert">
						{errors.description?.message ?? serverErrors?.name}
					</small>
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
						<option value="1">CLEAR WHITE</option>
						<option value="2">DARK SKINED</option>
					</select>
					<small role="alert">
						{errors.skin_color_ids?.message ?? serverErrors?.name}
					</small>
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
					<p>
						<input
							type="checkbox"
							{...register("undertone_ids", {
								required: "Le sous-ton est obligatoire",
							})}
							value="2"
						/>
						<label htmlFor="">Chaud</label>
					</p>
					<small role="alert">
						{errors.undertone_ids?.message ?? serverErrors?.undertone_ids}
					</small>
				</div>

				<div>
					<label htmlFor={skinTypeID}>types</label>
					<p>
						<input
							type="checkbox"
							{...register("skin_type_ids", {
								required: "Le type est obligatoire",
							})}
							value="1"
						/>
						<label htmlFor="">Gras</label>
					</p>
					<p>
						<input
							type="checkbox"
							{...register("skin_type_ids", {
								required: "Le type est obligatoire",
							})}
							value="2"
						/>
						<label htmlFor="">Mixte</label>
					</p>
					<small role="alert">
						{errors.skin_type_ids?.message ?? serverErrors?.skin_type_ids}
					</small>
				</div>

				<div>
					<label htmlFor={imageID}>image</label>
					<input
						id={imageID}
						type="file"
						{...register(
							"image",
							dataToUpdate
								? {}
								: {
										required: "L'image est obligatoire",
									},
						)}
					/>

					<small role="alert">
						{errors.image?.message ?? serverErrors?.image}
					</small>
				</div>

				<input type="hidden" {...register("id")} />

				<button type="submit">Soumettre</button>
			</form>
		</>
	);
};

export default ProductForm;
