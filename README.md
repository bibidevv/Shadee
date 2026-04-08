# 💄 Shadee

![title](code/public/images/skin1.jpg)

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-green?logo=mongodb)
![MySQL](https://img.shields.io/badge/MySQL-blue?logo=mysql)
![Docker](https://img.shields.io/badge/Docker-blue?logo=docker)

## Description

Shadee, c'est LE site qui répertorie un grand nombre de produits de maquillage adaptés à chaque types de peaux, chaque couleurs de peau, et chaque sous tons. Un large catalogue reprenant tous ces éléments est proposé.

## Technologies utilisées 💻

### FRONTEND

- React 19
- Typescript
- React Router
- CSS Modules
- Vite
- React Hook Form

### BACKEND

- Node.js
- Express
- Argon2
- Multer
- JOSE

### Base de données

- MySQL
  -MongoDB

## Fonctionnalités

### Utilisateur 👤

- Inscription / Connexion sécurisée
- Accès à un espace utilisateur
- Catalogue de produits :
- Détails du produit :
  - Nom
  - Description
  - Photo
  - Couleur(s) de peau
  - Type(s) de peau
  - Sous-ton

### Administrateur 🚧

- Accès à un dashboard admin
- Gestion des produits -
  - Ajouter ➕
  - Modifier 🔨
  - Supprimer 🚮

## Installation

1. Pré-requis

Assurez-vous d'avoir installé : [Docker](https://www.docker.com/)

2. Cloner le projet

```bash
git clone https://github.com/shadee/shadee.git
cd shadee
```

3. Démarrer le conteneur

Le projet utilise plusieurs services :

- App : application front/back

- MySQL : base de données relationnelle

- Mongo : base de données NoSQL

```bash
docker compose up -d
```

4. Installer les dépendances

Se connecter au conteneur `App`

```bash
npm install
```

5. Lancer l'application

- Frontend

```bash
npm run dev
```

- Backend

```bash
npm run server
```

## Point d'accès - endpoints - de l'API REST

## 🏠 Homepage

| Méthode | Route | Description                    |
| ------- | ----- | ------------------------------ |
| GET     | /api  | Récupérer les données homepage |

---

## 👤 User

| Méthode | Route         | Description                     |
| ------- | ------------- | ------------------------------- |
| GET     | /api/user     | Récupérer tous les utilisateurs |
| GET     | /api/user/:id | Récupérer un utilisateur        |

---

## 🔐 Authentification

| Méthode | Route         | Description             |
| ------- | ------------- | ----------------------- |
| POST    | /api/register | Inscription utilisateur |
| POST    | /api/login    | Connexion utilisateur   |

---

## 🛍️ Produits

| Méthode | Route            | Description         |
| ------- | ---------------- | ------------------- |
| GET     | /api/product     | Liste des produits  |
| GET     | /api/product/:id | Détail d’un produit |

---

## 🎭 Rôles

| Méthode | Route         | Description      |
| ------- | ------------- | ---------------- |
| GET     | /api/role     | Liste des rôles  |
| GET     | /api/role/:id | Détail d’un rôle |

---

## 🎨 Couleurs de peau

| Méthode | Route               | Description                  |
| ------- | ------------------- | ---------------------------- |
| GET     | /api/skin_color     | Liste des couleurs de peau   |
| GET     | /api/skin_color/:id | Détail d’une couleur de peau |

---

## 🧴 Types de peau

| Méthode | Route              | Description              |
| ------- | ------------------ | ------------------------ |
| GET     | /api/skin_type     | Liste des types de peau  |
| GET     | /api/skin_type/:id | Détail d’un type de peau |

---

## 🌈 Sous-tons

| Méthode | Route              | Description          |
| ------- | ------------------ | -------------------- |
| GET     | /api/undertone     | Liste des sous-tons  |
| GET     | /api/undertone/:id | Détail d’un sous-ton |

---

## 📩 Contact

| Méthode | Route        | Description        |
| ------- | ------------ | ------------------ |
| GET     | /api/contact | Liste des messages |
| POST    | /api/contact | Envoyer un message |

## Auteur

Projet réalisé par Abissetou Tounkara 👩🏿‍🎨
