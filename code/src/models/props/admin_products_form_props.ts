import type { ZodError } from "zod";
import type { Product } from "../../../models/product";

type AdminProductsForm_props = {
	validator: (data: Partial<Product>) => Promise<Partial<Product> | ZodError>;
	dataToUpdate: Product | undefined;
};

export type { AdminProductsForm_props };
