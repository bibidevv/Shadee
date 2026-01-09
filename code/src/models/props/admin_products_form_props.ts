import type { ZodError } from "zod";
import type { Product } from "../../../models/product";

type AdminProductsForm_props = {
	validator: (data: Partial<Product>) => Promise<Partial<Product> | ZodError>;
};

export type { AdminProductsForm_props };
