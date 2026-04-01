INSERT INTO shadee_test.product (name, description, image, price) VALUES
('Fenty Soft Matte Foundation', 'fond de teint mat longue tenue', 'fenty-pro-filtr-soft-matte-longwear-foundation.jpg', 39.90),
('Fenty Hydrating Foundation', 'fond de teint hydratant', 'fenty-pro-filtr-hydrating-longwear-foundation.jpg', 38.00),
('Fenty Eaze Drop', 'skin tint léger', 'fenty-eaze-drop-blurring-skin-tint.jpg', 36.00),
('Fenty Concealer', 'anti-cernes couvrant', 'fenty-pro-filtr-instant-retouch-concealer.jpg', 29.90),

('Charlotte Tilbury Airbrush', 'fond de teint couvrant', 'charlotte-tilbury-airbrush-flawless-foundation.jpg', 52.00),
('Charlotte Tilbury Light Wonder', 'fond de teint léger hydratant', 'charlotte-tilbury-light-wonder-foundation.jpg', 52.00),
('Charlotte Tilbury Concealer', 'anti-cernes lumineux', 'charlotte-tilbury-magic-away-concealer.jpg', 35.00),

('NARS Sheer Glow', 'fond de teint lumineux', 'nars-sheer-glow-foundation.jpg', 44.95),
('NARS Radiant Foundation', 'fond de teint longue tenue', 'nars-natural-radiant-longwear-foundation.jpg', 46.00),
('NARS Creamy Concealer', 'correcteur crémeux', 'nars-radiant-creamy-concealer.jpg', 39.00),

('Maybelline Fit Me Matte', 'fond de teint matifiant', 'maybelline-fit-me-matte-poreless-foundation.jpg', 9.95),
('Maybelline Fit Me Dewy', 'fond de teint hydratant', 'maybelline-fit-me-dewy-smooth-foundation.jpg', 10.95),
('Maybelline SuperStay', 'fond de teint couvrant', 'maybelline-superstay-full-coverage-foundation.jpg', 11.99),
('Maybelline Age Rewind', 'anti-cernes', 'maybelline-instant-age-rewind-concealer.jpg', 10.99),

('Loreal True Match', 'fond de teint naturel', "l'oreal-true-match-foundation.jpg", 14.99),
('Loreal Infallible', 'fond de teint longue tenue', "l'oreal-infallible-foundation.jpg", 15.99),
('Loreal Concealer', 'correcteur couvrant', "l'oreal-infallible-concealer.jpg", 14.99),

('MAC Studio Fix', 'fond de teint mat', 'mac-studio-fix-foundation.jpg', 38.00),
('MAC Concealer', 'correcteur longue tenue', 'mac-pro-longwear-concealer.jpg', 38.00),

('Dior Backstage', 'fond de teint naturel', 'dior-backstage-foundation.jpg', 43.00),
('Dior Glow', 'fond de teint lumineux', 'dior-forever-glow-foundation.jpg', 57.00),

('Huda Faux Filter', 'fond de teint couvrant', 'huda-faux-filter-foundation.jpg', 40.00),
('Huda Concealer', 'correcteur couvrant', 'huda-overachiever-concealer.jpg', 30.00),

('Rare Beauty Foundation', 'fond de teint léger', 'rare-beauty-foundation.jpg', 32.00),
('Rare Beauty Concealer', 'anti-cernes', 'rare-beauty-concealer.jpg', 24.00),

('Este Lauder Double Wear', 'fond de teint tenue extrême', 'estee-lauder-double-wear-foundation.jpg', 55.00),
('Este Lauder Double Wear Concealer', 'correcteur longue tenue', 'estee-lauder-double-wear-concealer.jpg', 35.00),

('Armani Silk', 'fond de teint lumineux', 'armani-luminous-silk-foundation.jpg', 65.00),
('Tarte Shape Tape', 'anti-cernes couvrant', 'tarte-shape-tape-concealer.jpg', 31.00);

INSERT INTO shadee_test.product_undertone VALUES
-- inclusifs
(1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(3,1),(3,2),(3,3),(4,1),(4,2),(4,3),
(8,1),(8,2),(8,3),(9,1),(9,2),(9,3),(10,1),(10,2),(10,3),
(18,1),(18,2),(18,3),(20,1),(20,2),(20,3),
(22,1),(22,2),(22,3),(24,1),(24,2),(24,3),
(26,1),(26,2),(26,3),(28,1),(28,2),(28,3),

-- autres
(5,2),(5,3),
(6,1),(6,2),
(7,2),(7,3),
(11,2),(11,3),
(12,1),(12,2),
(13,2),(13,3),
(14,1),(14,2),
(15,1),(15,2),
(16,2),(16,3),
(17,1),(17,2),
(19,2),(19,3),
(21,1),(21,2),
(23,2),(23,3),
(25,1),(25,2),
(27,2),(27,3),
(29,1),(29,2);

INSERT INTO shadee_test.product_skin_type VALUES
-- Fenty
(1,3),(1,4),
(2,1),(2,2),
(3,1),(3,2),(3,3),(3,4),
(4,1),(4,2),(4,3),(4,4),

-- CT
(5,2),(5,3),
(6,1),(6,2),
(7,1),(7,2),

-- NARS
(8,1),(8,2),(8,3),
(9,2),(9,3),
(10,1),(10,2),(10,4),

-- Maybelline
(11,3),(11,4),
(12,1),(12,2),
(13,2),(13,3),
(14,1),(14,2),(14,3),

-- Loreal
(15,1),(15,2),(15,3),
(16,2),(16,3),(16,4),
(17,1),(17,2),(17,3),

-- MAC
(18,3),(18,4),
(19,3),(19,4),

-- Dior
(20,1),(20,2),
(21,1),(21,2),

-- Huda
(22,3),(22,4),
(23,3),(23,4),

-- Rare
(24,1),(24,2),(24,3),
(25,1),(25,2),(25,3),

-- EL
(26,3),(26,4),
(27,3),(27,4),

-- Armani / Tarte
(28,1),(28,2),
(29,2),(29,3);

INSERT INTO shadee_test.product_skin_color VALUES
-- inclusifs
(1,1),(1,2),(2,1),(2,2),(3,1),(3,2),(4,1),(4,2),
(8,1),(8,2),(9,1),(9,2),(10,1),(10,2),
(18,1),(18,2),(20,1),(20,2),
(22,1),(22,2),(24,1),(24,2),
(26,1),(26,2),(28,1),(28,2),

-- biais réalistes (mais corrigés)
(5,1),(5,2),
(6,1),
(7,1),

(11,1),
(12,1),
(13,1),(13,2),
(14,1),(14,2),

(15,1),(15,2),
(16,1),(16,2),
(17,1),(17,2),

(19,1),(19,2),

(21,1),

(23,1),(23,2),

(25,1),(25,2),

(27,1),(27,2),

(29,1),(29,2);
