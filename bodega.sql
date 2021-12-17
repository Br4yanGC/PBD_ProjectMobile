create database StockBodegas;
use StockBodegas;

CREATE TABLE users(
    user_id int NOT NULL AUTO_INCREMENT,
    username varchar(100) NOT NULL UNIQUE,
    password varchar(100) NOT NULL,
    created_date datetime,
    modified_date datetime, 
    PRIMARY KEY (user_id)
);

CREATE TABLE products(
    product_id int NOT NULL AUTO_INCREMENT,
    product_name varchar(100) NOT NULL,
    product_trademark varchar(100) NULL,
    product_price float NOT NULL,
    product_type varchar(100) NOT NULL,
    product_stock int NOT NULL,
    product_image varchar(256) NOT NULL,
    user_id int, 
    created_date datetime,
    modified_date datetime, 
    PRIMARY KEY (product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE cart(
    product_id int NOT NULL AUTO_INCREMENT,
    product_name varchar(100) NOT NULL,
    product_trademark varchar(100) NULL,
    product_price float NOT NULL,
    product_type varchar(100) NOT NULL,
    product_image varchar(256) NOT NULL,
    user_id int,
    PRIMARY KEY (product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users (username, password, created_date, modified_date) 
VALUES ('roberto@hotmail.com', MD5('roberto123'), NOW(), NOW());

INSERT INTO users(username, password, created_date, modified_date) 
VALUES ('alonso@hotmail.com', MD5('enero101992'), NOW(), NOW());

INSERT INTO users(username, password, created_date, modified_date) 
VALUES ('alicia@hotmail.com', MD5('alicia22222'), NOW(), NOW());

#Bodega1

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Sal de mesa 1kg', 'EMSAL', 1.60, 'viveres',30,1, 'https://plazavea.vteximg.com.br/arquivos/ids/561008-450-450/20130448.jpg',now(),now());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Lata de atun', 'Campomar', 3.40, 'viveres',23,1, 'https://plazavea.vteximg.com.br/arquivos/ids/553449-450-450/918024.jpg',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Lata de atun', 'Primor',5.70, 'viveres',23,1, 'https://vivanda.vtexassets.com/arquivos/ids/238559-800-450?v=637427449871230000&width=800&height=450&aspect=true',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Lata de atun', 'Vega', 5.20, 'viveres',23,1, 'https://i.linio.com/p/b3e3e227ca5ef5f0ef623539620191dd-product.jpg',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Azucar Rubia 1kg', 'BELLs', 3.50, 'viveres', 23,1, 'https://plazavea.vteximg.com.br/arquivos/ids/553628-450-450/974378.jpg',NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Gaseosa 500ml', 'Pepsi', 2.20, 'bebidas',40, 1, 'https://wongfood.vteximg.com.br/arquivos/ids/273848-1000-1000/103181-1.jpg?v=636850638318230000',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Gaseosa 500ml', 'Seven UP', 1.80, 'bebidas',22, 1, 'https://marketspressperu.com/wp-content/uploads/2019/12/SEVEN-UP-500-ML.png',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Gaseosa 1.5lt', 'Inca Kola', 5.90, 'bebidas',22, 1, 'https://oechsle.vteximg.com.br/arquivos/ids/1352310-1500-1500/image-73dde211b29746fe83a77680195020aa.jpg?v=637494732891270000',NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Colores Triangulares', 'VINIFAN', 5.80, 'utiles escolares',10, 1, 'https://mister-mango.omni.la/ProductCatalog/Workspace.CWDQQL6GUIJMS/ProductCatalog.CXAUGNKFRRTDK/1500x1500/CXCZIWCP6I7TS.jpg', NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Lapicero 061 Ice Morado', 'Faber Castell', 2.00, 'utiles escolares',15, 1,'https://avasol.pe/wp-content/uploads/2021/08/boligrafo-faber-castell-061-ice-rosado-15730005-default-2.jpg' ,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Lapicero 064 Roller Gel', 'Faber Castell', 3.70, 'utiles escolares',15, 1, 'https://images.utilex.pe/041210/450x450/lapicero-roller-gel-064-negro-blister-x-1-unidad-faber-castell-CYJRL2UIT7RGW.jpeg',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Lapicero 061 Ice Rojo', 'Faber Castell', 2.00, 'utiles escolares',15, 1, 'http://www.infofar.com.pe/wp-content/uploads/BOLIGRAFO-FABER-ICE-061-ROJO.jpg',NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Detergente 500g','Ace', 4.40, 'aseo y limpieza',15, 1, 'https://plazavea.vteximg.com.br/arquivos/ids/512847-450-450/20109492.jpg' ,NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Detergente 500g', 'Opal', 4.80, 'aseo y limpieza',15, 1, 'https://cdn.palbincdn.com/users/38707/images/opal-350-1592259807.jpg',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Cepillo Dental', 'Colgate', 3.50, 'aseo y limpieza',5, 1, 'https://www.corporacionliderperu.com/shop/31608-medium_default/colgate-cepillo-dental-premier-clean.jpg',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Cepillo Dental', 'Oral-B', 3.30, 'aseo y limpieza',15, 1, 'https://www.corporacionliderperu.com/shop/34522-large_default/oral-b-cepillo-1-2-3.jpg',NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Naranja 2.5kg', NULL, 6.60, 'frutas y verduras', 5, 1, 'https://plazavea.vteximg.com.br/arquivos/ids/1034005-450-450/20197397.jpg',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Platano de seda unidad', NULL, 1.00, 'frutas y verduras', 10, 1, 'https://plazavea.vteximg.com.br/arquivos/ids/646256-450-450/772631.jpg',NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Hot Dog 220g', NULL, 5.20, 'carnes y embutidos', 5, 1, 'https://plazavea.vteximg.com.br/arquivos/ids/2515802-450-450/20193527.jpg',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Pate de higado 100g', NULL, 2.50, 'carnes y embutidos', 10, 1,'https://wongfood.vteximg.com.br/arquivos/ids/407087-1000-1000/frontal-3477.jpg?v=637477896087530000',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Hot dog Ahumado 165g', NULL, 4.40, 'carnes y embutidos', 10, 1,'https://vivanda.vtexassets.com/arquivos/ids/243668-800-450?v=637443527475600000&width=800&height=450&aspect=true' ,NOW(),NOW());


INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Galleta de soda', 'San Jorge', 3.10, 'dulces y snacks', 10, 1, 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/10255990-WmaMpTie-large.jpg',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Galleta dulce', 'Black Out', 0.70, 'dulces y snacks', 10, 1, 'https://s.cornershopapp.com/product-images/1122694.png?versionId=BaJtmb3jBbCW9vh39hUjE8OxKuaR6bD5',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Galleta dulce', 'Caritas', 0.70, 'dulces y snacks', 10, 1,'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-RVCtailB-large.jpg',NOW(),NOW());

INSERT INTO products(product_name,product_trademark, product_price, product_type, product_stock, user_id, product_image, created_date, modified_date)
VALUES('Galleta dulce', 'Frac', 0.70, 'dulces y snacks', 10, 1,'https://www.corporacionliderperu.com/shop/32875-medium_default/costa-galletas-frac-x-264-gr-six-pack-chocolate.jpg',NOW(),NOW());