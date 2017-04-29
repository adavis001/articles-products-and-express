DROP DATABASE IF EXISTS products_articles;
DROP USER IF EXISTS bob;

CREATE USER bob WITH ENCRYPTED PASSWORD 'burger';

CREATE DATABASE products_articles WITH OWNER bob;

\c products_articles

CREATE TABLE products (
id SERIAL NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
price MONEY NOT NULL,
inventory INT NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT now(),
updated_at TIMESTAMP NULL
);

INSERT INTO products (name, price, inventory)
  VALUES ('Spam', 2.99, 300);

CREATE TABLE articles (
id SERIAL NOT NULL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
body text NOT NULL,
author VARCHAR(50) NOT NULL,
created_at TIMESTAMP NOT NULL,
updated_at TIMESTAMP NULL
);

\c davis001