import type React from "react";

type GuardProps = {
	roles: string[];
	// children permet de définir que le composant va avoir des éléments enfants
	children: React.JSX.Element | React.JSX.Element[];
};
export type { GuardProps };
