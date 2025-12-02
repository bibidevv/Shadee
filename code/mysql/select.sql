-- sélectionner les produits par type de peau

-- sélectionner les produits par couleur de peau


-- sélectionner les produits par sous-tons de peau


-- sélectionner les produits par couleur de peau, sous-ton et type de peau


-- sélectionner les couleurs de peau, les sous-tons et les types de peau d'un produit précis : à demain

-- jointures 
SELECT undertone.*
FROM shadee_dev.undertone
JOIN shadee_dev.role
ON role.id = undertone.role_id
\G

-- group_concat
SELECT user.email, role.id
FROM shadee_dev.user;