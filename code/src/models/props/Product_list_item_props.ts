import type { Product } from "../../../models/product";

// reprendre strictement le nom des props définis sur le composant

type ProductListItemProps = {
	data: Product;
};

export type { ProductListItemProps };
