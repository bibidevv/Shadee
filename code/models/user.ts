import type { Role } from "./role";
import type { Skin_color } from "./skin_color";
import type { Skin_type } from "./skin_type";
import type { Undertone } from "./undertone";

type User = {
	id: number;
	email: string;
	password: string;

	role_id: number;
	role: Role;

	skin_color_id: number;
	skin_color: Skin_color;

	skin_type_id: number;
	skin_type: Skin_type;

	undertone_id: number;
	undertone: Undertone;
};

export type { User };
