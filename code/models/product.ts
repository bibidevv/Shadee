import type { Skin_color } from "./skin_color";
import type { Skin_type } from "./skin_type";
import type { Undertone } from "./undertone";

type Product = {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;

	// liste concaténée des identifiants FK

	undertone_ids: string;
	undertones: Undertone[];

	skin_color_ids: string;
	skin_colors: Skin_color[];

	skin_type_ids: string;
	skin_types: Skin_type[];
};

export type { Product };
