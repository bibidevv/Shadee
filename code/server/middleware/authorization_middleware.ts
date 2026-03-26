import type { NextFunction, Request, Response } from "express";
import * as jose from "jose";
import type { JWTInvalid } from "jose/errors";
import type { User } from "../../models/user";

class AuthorizationMiddleware {
	// vérifier le JWT contenu dans l'en-tête HTTP Authorization
	public authorize = (roles: string[]) => {
		// retourner un middleware
		return async (req: Request, res: Response, next: NextFunction) => {
			// récupération du JWT dans l'en-tête authorization
			const token = req.header("authorization")?.split("Bearer ")[1];
			// vérfication de la validité du token
			try {
				const secret = new TextEncoder().encode(process.env.VITE_JWT_SECRET);
				await jose.jwtVerify(token as string, secret);
			} catch (error) {
				// si le token est invalide
				res.status(403).json({
					status: 403,
					message:
						process.env.NODE_ENV === "production"
							? "Error"
							: (error as JWTInvalid).code,
				});
				return;
			}
			// récuperer le payload contenant les données de l'utilisateur
			const payload = jose.decodeJwt(token as string) as User;
			if (roles.indexOf(payload.role.name) === -1) {
				// si le token est non autorisé
				res.status(401).json({
					status: 401,
					message:
						process.env.NODE_ENV === "production"
							? "Error"
							: "Unauthorized - Role not authorized",
				});
				return;
			}
			// passer au middleware suivant
			next();
		};
	};
}

export default AuthorizationMiddleware;
