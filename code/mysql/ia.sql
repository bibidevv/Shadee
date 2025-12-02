INSERT INTO shadee_dev.product (name, description, image, price) VALUES
('Fond de teint léger SPF 20', 'Un fond de teint léger pour un teint naturel et protégé du soleil. Convient à tous les types de peau.', 'images/fond-teint-leger-spf20.jpg', 24.99),
('Fond de teint matifiant SPF 30', 'Un fond de teint matifiant pour les peaux grasses, avec protection solaire.', 'images/fond-teint-matifiant-spf30.jpg', 29.99),
('Correcteur éclaircissant', 'Correcteur pour cernes et imperfections, teinte claire.', 'images/correcteur-eclaircissant.jpg', 19.99),
('Correcteur moyen', 'Correcteur pour cernes et imperfections, teinte moyenne.', 'images/correcteur-moyen.jpg', 19.99),
('Poudre libre transparente', 'Poudre libre pour fixer le maquillage, convient à tous les types de peau.', 'images/poudre-libre-transparente.jpg', 14.99),
('Blush rosé', 'Blush pour un effet bonne mine, teinte rosée.', 'images/blush-rose.jpg', 17.99),
('Blush corail', 'Blush pour un effet bonne mine, teinte corail.', 'images/blush-corail.jpg', 17.99),
('Highlighter doré', 'Highlighter pour un éclat lumineux, teinte dorée.', 'images/highlighter-dore.jpg', 22.99),
('Highlighter argenté', 'Highlighter pour un éclat lumineux, teinte argentée.', 'images/highlighter-argente.jpg', 22.99),
('Rouge à lèvres rouge', 'Rouge à lèvres mat, teinte rouge classique.', 'images/rouge-levres-rouge.jpg', 12.99),
('Rouge à lèvres nude', 'Rouge à lèvres mat, teinte nude naturelle.', 'images/rouge-levres-nude.jpg', 12.99),
('Mascara volume', 'Mascara pour des cils ultra-volumineux, noir intense.', 'images/mascara-volume.jpg', 15.99),
('Eyeliner noir', 'Eyeliner précis, noir intense, longue tenue.', 'images/eyeliner-noir.jpg', 13.99),
('Palettes fards à paupières', 'Palettes de 12 fards à paupières, teintes variées.', 'images/palette-fards.jpg', 27.99),
('Sourcils gel', 'Gel pour sourcils, fixe et discipline les sourcils toute la journée.', 'images/sourcils-gel.jpg', 11.99);


INSERT INTO shadee_dev.product_undertone (product_id, undertone_id) VALUES
(1, 1), (1, 3),  -- Fond de teint léger SPF 20 : chaud, neutre
(2, 2), (2, 3),  -- Fond de teint matifiant SPF 30 : froid, neutre
(3, 1),          -- Correcteur éclaircissant : chaud
(4, 2),          -- Correcteur moyen : froid
(5, 3),          -- Poudre libre transparente : neutre
(6, 1),          -- Blush rosé : chaud
(7, 2),          -- Blush corail : froid
(8, 1),          -- Highlighter doré : chaud
(9, 2),          -- Highlighter argenté : froid
(10, 1),         -- Rouge à lèvres rouge : chaud
(11, 3),         -- Rouge à lèvres nude : neutre
(12, 3),         -- Mascara volume : neutre
(13, 3),         -- Eyeliner noir : neutre
(14, 1), (14, 2),-- Palettes fards à paupières : chaud, froid
(15, 3);         -- Sourcils gel : neutre

INSERT INTO shadee_dev.product_skin_type (product_id, skin_type_id) VALUES
(1, 1), (1, 2), (1, 3), (1, 4),  -- Fond de teint léger SPF 20 : tous types
(2, 2), (2, 3),                  -- Fond de teint matifiant SPF 30 : grasse, mixte
(3, 1), (3, 4),                  -- Correcteur éclaircissant : sèche, normale
(4, 2), (4, 3),                  -- Correcteur moyen : grasse, mixte
(5, 1), (5, 2), (5, 3), (5, 4),  -- Poudre libre transparente : tous types
(6, 1), (6, 4),                  -- Blush rosé : sèche, normale
(7, 2), (7, 3),                  -- Blush corail : grasse, mixte
(8, 1), (8, 4),                  -- Highlighter doré : sèche, normale
(9, 2), (9, 3),                  -- Highlighter argenté : grasse, mixte
(10, 1), (10, 4),                -- Rouge à lèvres rouge : sèche, normale
(11, 2), (11, 3),                -- Rouge à lèvres nude : grasse, mixte
(12, 1), (12, 2), (12, 3), (12, 4), -- Mascara volume : tous types
(13, 1), (13, 2), (13, 3), (13, 4), -- Eyeliner noir : tous types
(14, 1), (14, 4),                -- Palettes fards à paupières : sèche, normale
(15, 2), (15, 3);                -- Sourcils gel : grasse, mixte

INSERT INTO shadee_dev.product_skin_color (product_id, skin_color_id) VALUES
(1, 1), (1, 2),  -- Fond de teint léger SPF 20 : clair, moyen
(2, 1), (2, 2),  -- Fond de teint matifiant SPF 30 : clair, moyen
(3, 1),          -- Correcteur éclaircissant : clair
(4, 2),          -- Correcteur moyen : moyen
(5, 1), (5, 2),  -- Poudre libre transparente : clair, moyen
(6, 1), (6, 2),  -- Blush rosé : clair, moyen
(7, 1), (7, 2),  -- Blush corail : clair, moyen
(8, 1), (8, 2),  -- Highlighter doré : clair, moyen
(9, 1), (9, 2),  -- Highlighter argenté : clair, moyen
(10, 1), (10, 2),-- Rouge à lèvres rouge : clair, moyen
(11, 1), (11, 2),-- Rouge à lèvres nude : clair, moyen
(12, 1), (12, 2),-- Mascara volume : clair, moyen
(13, 1), (13, 2),-- Eyeliner noir : clair, moyen
(14, 1), (14, 2),-- Palettes fards à paupières : clair, moyen
(15, 1), (15, 2);-- Sourcils gel : clair, moyen

