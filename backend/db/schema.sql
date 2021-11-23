CREATE DATABASE project_6
CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) UNIQUE NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE user(
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    address VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE product(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL,
    image VARCHAR(255),
    description VARCHAR(255),
    type VARCHAR(255),
    size VARCHAR(255),
    price VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE basket(
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT,
    FOREIGN KEY ( user_id) REFERENCES user(id),  
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES product(id),
    PRIMARY KEY (id) 
);
CREATE TABLE comment(
    id INT AUTO_INCREMENT NOT NULL,
    comment VARCHAR(255),
    user_id INT,
    FOREIGN KEY ( user_id) REFERENCES user(id),  
    PRIMARY KEY (id) 
);
CREATE TABLE rating(
    id INT AUTO_INCREMENT NOT NULL,
    rate INT,
    user_id INT,
    FOREIGN KEY ( user_id) REFERENCES user(id),  
    PRIMARY KEY (id) 
);