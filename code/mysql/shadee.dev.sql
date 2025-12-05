-- supprimer la bdd si elle existe 
-- ATTENTION, ne pas faire en production

DROP DATABASE IF EXISTS shadee_dev;

-- créer la base de données 
CREATE DATABASE shadee_dev; 

-- créer les tables 
CREATE TABLE shadee_dev.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (10) NOT NULL UNIQUE
);

CREATE TABLE shadee_dev.product(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(500) NOT NULL, 
    description TEXT NOT NULL, 
    image VARCHAR(150) NOT NULL,
    price DECIMAL(5,2) UNSIGNED NOT NULL 
); 

CREATE TABLE shadee_dev.undertone(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT NOT NULL
);

CREATE TABLE shadee_dev.product_undertone(
    product_id TINYINT UNSIGNED,
    undertone_id TINYINT UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES shadee_dev.product(id),
    FOREIGN KEY (undertone_id) REFERENCES shadee_dev.undertone(id),
    PRIMARY KEY (product_id, undertone_id)
);

CREATE TABLE shadee_dev.skin_type(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT NOT NULL
);

CREATE TABLE shadee_dev.product_skin_type(
    product_id TINYINT UNSIGNED,
    skin_type_id TINYINT UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES shadee_dev.product(id),
    FOREIGN KEY (skin_type_id) REFERENCES shadee_dev.skin_type(id),
    PRIMARY KEY (product_id, skin_type_id)
);

CREATE TABLE shadee_dev.skin_color(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    image VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE shadee_dev.product_skin_color(
    product_id TINYINT UNSIGNED,
    skin_color_id TINYINT UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES shadee_dev.product(id),
    FOREIGN KEY (skin_color_id) REFERENCES shadee_dev.skin_color(id),
    PRIMARY KEY (product_id, skin_color_id)
);

CREATE TABLE shadee_dev.user(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(150) NOT NULL UNIQUE ,
    password VARCHAR(150) NOT NULL,
    role_id TINYINT(1) UNSIGNED,
    FOREIGN KEY user(role_id)REFERENCES role(id),
    skin_color_id TINYINT UNSIGNED,
    FOREIGN KEY skin_color(skin_color_id)REFERENCES skin_color(id),
    skin_type_id TINYINT UNSIGNED,
    FOREIGN KEY skin_type(skin_type_id)REFERENCES skin_type(id),
    undertone_id TINYINT UNSIGNED,
    FOREIGN KEY undertone(undertone_id)REFERENCES undertone(id)
);

-- insérer des données 
INSERT INTO shadee_dev.role
VALUES 
    (NULL,"admin"),
    (NULL, "user")
;

-- INSERT INTO shadee_dev.product
-- VALUES
--     (NULL, "FENTY EAZE DROP", "crème teintée légère", "imgeasedrop.jpg", 39.00), 
--     (NULL, "ANASTASIA BERVERLY HILLS BEATY BALM", "beauty balm serum boosted skin tint beaume teinté", "bbs.jpeg", 52.00)
-- ;

INSERT INTO shadee_dev.undertone
VALUES
    (NULL, "NEUTRAL", "sous ton neutre"), 
    (NULL, "WARM", "sous ton chaud"),
    (NULL, "COOL", "sous ton froid")
;

INSERT INTO shadee_dev.skin_type
VALUES
    (NULL, "DRY", "peau sèche et/ou très sèche"), 
    (NULL, "NORMAL", "peau normale"), 
    (NULL, "COMBO", "peau mixte"),
    (NULL, "OILY", "peau grasse")
;

INSERT INTO shadee_dev.skin_color
VALUES
    (NULL, "CLEAR WHITE", "peau très très claire", "imgclear.jpg"),
    (NULL, "DARK SKINED", "peau très très foncée", "imgdark.jpg")
;

-- admin@admin.fr / admin 
-- user@user.fr / user
INSERT INTO shadee_dev.user
VALUES
    (NULL, "admin@admin.fr", "$argon2i$v=19$m=16,t=2,p=1$ODc2VnZqdnNnZ3lQUnFobA$CNXArmmmxp81Q9A59hYrHA", 1),
    (NULL, "user@user.fr", "$argon2i$v=19$m=16,t=2,p=1$OVBSYnpMOFQxeXh6Q0xOaw$Pgh1E9qfclkVJYe7CJDqug", 2)
;

-- transaction sql 
-- START TRANSACTION; 
-- --requête 1
-- INSERT INTO shadee_dev.product
-- VALUE (NULL, "CONCEALER BORN THIS WAY", "correcteur très couvrant hydratant", "imgbtw.jpg", 30.99);

-- -- variable qui stock le dernier id inséré
-- SET @product_id = LAST_INSERT_ID();

-- -- requête 2
-- INSERT INTO shadee_dev.product_skin_color
-- VALUES
--     (@product_id, 1),
--     (@product_id, 2)
-- ;
-- COMMIT;

-- START TRANSACTION;
-- INSERT INTO shadee_dev.product
-- VALUE (NULL, "CHARLOTTE TILBURY UNREAL SKIN SHEER", "Unreal skin sheer glow tint stick fond de teint hydratant", "ct.jpg", 48.00);

-- SET @product_id = LAST_INSERT_ID();

-- INSERT INTO shadee_dev.product_skin_type
-- VALUES
--     (@product_id, 1),
--     (@product_id, 2)
-- ;
-- COMMIT;

-- START TRANSACTION;
-- INSERT INTO shadee_dev.product
-- VALUE (NULL, "HUDA BEAUTY FAUX FILTER COLOR CORRECTOR", "correcteur de couleur mini format", "fauxfilter.jpg", 16.00);

-- SET @product_id = LAST_INSERT_ID();

-- INSERT INTO shadee_dev.product_undertone
-- VALUES
--     (@product_id, 1),
--     (@product_id, 2),
--     (@product_id, 3)
-- ;

-- INSERT INTO shadee_dev.product_skin_type
-- VALUES
--     (@product_id, 1),
--     (@product_id, 2)
-- ;

-- INSERT INTO shadee_dev.product_skin_color
-- VALUES
--     (@product_id, 1),
--     (@product_id, 2)
-- ;

-- COMMIT;

-- -- mettre à jour un enregistrement 
-- UPDATE shadee_dev.product
-- SET 
--     product.name = 'FENTY EAZE DROP FONDATION'
-- WHERE
--     product.id = 1
-- ;
-- -- supprimer un enregistrement 
-- START TRANSACTION;

-- DELETE FROM shadee_dev.product_skin_color
-- WHERE 
--     product_skin_color.product_id = 1
-- ;

-- DELETE FROM shadee_dev.product_skin_type
-- WHERE 
--     product_skin_type.product_id = 1
-- ;

-- DELETE FROM shadee_dev.product_undertone
-- WHERE 
--     product_undertone.product_id = 1
-- ;

-- DELETE FROM shadee_dev.product
-- WHERE
--     product.id = 1
-- ;

-- COMMIT;

 -- sélectionner toutes les colonnes d'une table 
--  SELECT product.*
--  FROM shadee_dev.product;
--  -- séléctionner une seule/plusieurs colonne d'une table 
-- SELECT product.name, product.price
-- FROM shadee_dev.product 
-- -- condition d'affichage 
-- WHERE product.price > 10
-- AND product.name LIKE "F%"
--      -- produit qui commence par un f : "f%", produit qui contient un f : "%f%"
-- WHERE product_id IN (1,3)
--  -- afficher les produits 1 et 3
--     -- WHERE product.id = 1 OR product.id = 3
-- ;


   