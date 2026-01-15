import fs from "node:fs/promises";
import { fileTypeFromFile } from "file-type";

class FileService {
	// renommer le fichier transférer en ajoutant l'extension
	// doit retourner le nom complet du fichier
	public rename = async (file: Express.Multer.File): Promise<string> => {
		// ajouter l'extension au fichier
		const fullname = `${file.filename}.${(await fileTypeFromFile(file.path))?.ext}`;
		console.log(fullname);

		// renommer le fichier avec le nom complet
		await fs.rename(file.path, `${file.destination}/${fullname}`);

		// retourner le nom complet
		return fullname;
	};
}

export default FileService;
