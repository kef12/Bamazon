DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT(11) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Krusty Brand Imitation Gruel', 'Krusty Brand Department', '10', '3');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Alf Pogs', 'Alf Memorabilia Department', '25', '5');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Chippos', 'Animal Food Department', '5', '40');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Hamburger Earmuffs', 'Krusty Brand Department', '25', '15');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Strawberrito', 'Cocktail Mix Department', '15', '15');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Duff Beer', 'Cocktail Mix Department', '10', '40');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Moon Waffles', 'Animal Food Department', '8', '16');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('TUBBB!', 'Animal Food Department', '10', '3');



SELECT * FROM products;
