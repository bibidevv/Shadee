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

SELECT product.*,
GROUP_CONCAT (undertone.id) AS undertone_ids
FROM shadee_dev.product
JOIN shadee_dev.product_undertone
ON product.id = product_undertone.product_id
JOIN shadee_dev.undertone
ON undertone.id = product_undertone.undertone_id
GROUP BY product.id;


