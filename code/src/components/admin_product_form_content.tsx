"use client";

import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { ZodIssue } from "zod/v3";
import type { Product } from "../../models/product";
import styles from "../assets/css/admin_product_form.module.css";
import type { AdminProductsForm_props } from "../models/props/admin_products_form_props";
import ProductApiService from "../services/product_api_service";

const ProductForm = ({ validator, dataToUpdate }: AdminProductsForm_props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Product>>();

	useEffect(() => {
		if (dataToUpdate) {
			const normalizedData = {
				...dataToUpdate,
				undertone_ids: (dataToUpdate.undertone_ids as string).split(","),
				skin_type_ids: (dataToUpdate.skin_type_ids as string).split(","),
				skin_color_ids: (dataToUpdate.skin_color_ids as string).split(","),
			};
			reset(normalizedData);
		}
	}, [dataToUpdate, reset]);

	const nameID = useId();
	const priceID = useId();
	const descriptionID = useId();
	const skinColorID = useId();
	const imageID = useId();

	// IDs uniques pour checkbox
	const undertoneNeutreID = useId();
	const undertoneChaudID = useId();
	const undertoneFroidID = useId();

	const skinTypeOilyID = useId();
	const skinTypeComboID = useId();
	const skinTypeDryID = useId();
	const skinTypeNormalID = useId();

	const navigate = useNavigate();
	const [serverErrors, setServerErrors] = useState<Partial<Product>>();
	const [message, setMessage] = useState<string>("");

	const submitForm = async (data: Partial<Product>) => {
		const normalizedData = {
			...data,
			undertone_ids: (data.undertone_ids as unknown as string[]).join(),
			skin_type_ids: (data.skin_type_ids as unknown as string[]).join(),
			skin_color_ids: (data.skin_color_ids as unknown as string[]).join(),
			image: (data.image as string)[0],
		};

		const validation = await validator(normalizedData);

		if (validation instanceof Error) {
			const errors: any = {};
			(JSON.parse(validation.message) as ZodIssue[]).map((item) => {
				errors[item.path.shift() as string] = item.message;
				return errors;
			});
			setServerErrors(errors);
			return;
		}

		const formData = new FormData();
		formData.set("id", normalizedData.id as unknown as string);
		formData.set("name", normalizedData.name as string);
		formData.set("price", normalizedData.price as unknown as string);
		formData.set("description", normalizedData.description as string);
		formData.set("image", normalizedData.image as string);
		formData.set("undertone_ids", normalizedData.undertone_ids as string);
		formData.set("skin_type_ids", normalizedData.skin_type_ids as string);
		formData.set("skin_color_ids", normalizedData.skin_color_ids as string);

		const process = dataToUpdate
			? await new ProductApiService().update(formData)
			: await new ProductApiService().insert(formData);

		if ([200, 201].includes(process.status)) {
			navigate("/admin/products");
		} else if (process.status === 400) {
			setMessage(process.data as unknown as string);
		}
	};

	return (
		<>
			{message && <p role="alert">{message}</p>}

			<form
				onSubmit={handleSubmit(submitForm)}
				encType="multipart/form-data"
				className={styles.form}
			>
				{/* Nom */}
				<div className={styles.formGroup}>
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
				<div className={styles.formGroup}>
					<label htmlFor={priceID}>Prix</label>
					<input id={priceID} type="number" {...register("price")} />
					<small role="alert">
						{errors.price?.message ?? serverErrors?.price}
					</small>
				</div>

				{/* Description */}
				<div className={styles.formGroup}>
					<label htmlFor={descriptionID}>Description</label>
					<textarea
						id={descriptionID}
						{...register("description", {
							required: "La description est obligatoire",
							minLength: { value: 10, message: "10 caractères minimum" },
						})}
					/>
					<small role="alert">
						{errors.description?.message ?? serverErrors?.description}
					</small>
				</div>

				{/* Couleurs de peau */}
				<div className={styles.formGroup}>
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
						{errors.skin_color_ids?.message ?? serverErrors?.skin_color_ids}
					</small>
				</div>

				{/* Sous-ton */}
				<div className={styles.formGroup}>
					<label htmlFor={skinColorID}>Sous-ton</label>
					<div className={styles.checkboxGroup}>
						<input
							id={undertoneNeutreID}
							type="checkbox"
							value="1"
							{...register("undertone_ids", {
								required: "Le sous-ton est obligatoire",
							})}
						/>
						<label htmlFor={undertoneNeutreID}>Neutral</label>

						<input
							id={undertoneChaudID}
							type="checkbox"
							value="2"
							{...register("undertone_ids", {
								required: "Le sous-ton est obligatoire",
							})}
						/>
						<label htmlFor={undertoneChaudID}>Warm</label>

						<input
							id={undertoneFroidID}
							type="checkbox"
							value="3"
							{...register("undertone_ids", {
								required: "Le sous-ton est obligatoire",
							})}
						/>
						<label htmlFor={undertoneChaudID}>Cool</label>
					</div>

					<small role="alert">
						{errors.undertone_ids?.message ?? serverErrors?.undertone_ids}
					</small>
				</div>

				{/* Types de peau */}
				<div className={styles.formGroup}>
					<label htmlFor={skinColorID}>Type de peau</label>
					<div className={styles.checkboxGroup}>
						<input
							id={skinTypeOilyID}
							type="checkbox"
							value="1"
							{...register("skin_type_ids", {
								required: "Le type est obligatoire",
							})}
						/>
						<label htmlFor={skinTypeOilyID}>Oily</label>

						<input
							id={skinTypeComboID}
							type="checkbox"
							value="2"
							{...register("skin_type_ids", {
								required: "Le type est obligatoire",
							})}
						/>
						<label htmlFor={skinTypeComboID}>Combo</label>

						<input
							id={skinTypeNormalID}
							type="checkbox"
							value="3"
							{...register("skin_type_ids", {
								required: "Le type est obligatoire",
							})}
						/>
						<label htmlFor={skinTypeNormalID}>Normal</label>

						<input
							id={skinTypeDryID}
							type="checkbox"
							value="4"
							{...register("skin_type_ids", {
								required: "Le type est obligatoire",
							})}
						/>
						<label htmlFor={skinTypeDryID}>Dry</label>
					</div>
					<small role="alert">
						{errors.skin_type_ids?.message ?? serverErrors?.skin_type_ids}
					</small>
				</div>

				{/* Image */}
				<div className={styles.formGroup}>
					<label htmlFor={imageID}>Image</label>
					<input
						id={imageID}
						type="file"
						{...register(
							"image",
							dataToUpdate ? {} : { required: "L'image est obligatoire" },
						)}
					/>
					<small role="alert">
						{errors.image?.message ?? serverErrors?.image}
					</small>
				</div>

				<input type="hidden" {...register("id")} />

				<button type="submit" className={styles.submitButton}>
					Soumettre
				</button>
			</form>
		</>
	);
};

export default ProductForm;
