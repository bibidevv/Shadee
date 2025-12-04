import Server from "./core/server";

// créer le serveur
const server = new Server().start();

// démarrer le serveur
// process.env.VAR : accéder aux variables d'environnement 
server.listen( process.env.PORT);

