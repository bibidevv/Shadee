import type { Skin_type } from "./skin_type";
import type { Undertone } from "./undertone";

type Product = {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;

	// liste concaténée des identifiants des types de peau

	undertone_ids: string;
	undertones: Undertone[];
};

export type { Product };
