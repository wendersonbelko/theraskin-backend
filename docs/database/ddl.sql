CREATE TABLE users(  
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    picture VARCHAR(255),
    uf CHAR(2),
    city VARCHAR(255),
    street VARCHAR(255),
    district VARCHAR(255),
    zip_code CHAR(8)
) default charset utf8;

CREATE TABLE user_credentials(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_id int NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id) 
)default charset utf8;

CREATE TABLE admins(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    picture VARCHAR(255) NOT NULL
)default charset utf8;

CREATE TABLE admin_credentials(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin_id int NOT NULL,
    FOREIGN KEY(admin_id) REFERENCES admins(id) 
)default charset utf8;

CREATE TABLE categories(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
)default charset utf8;

CREATE TABLE products(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    composition TEXT NOT NULL,
    skin_type INT NOT NULL,
    price DECIMAL(2) NOT NULL,
    category_id int NOT NULL,
    FOREIGN KEY(category_id) REFERENCES categories(id) 
)default charset utf8;

CREATE TABLE drugstores(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255) NOT NULL,
    is_online BIT NOT NULL,
    is_physical BIT NOT NULL,
    uf CHAR(2),
    city VARCHAR(255),
    street VARCHAR(255),
    district VARCHAR(255),
    zip_code CHAR(8),
    latitude VARCHAR(50),
    longitude VARCHAR(50)
)default charset utf8;

CREATE TABLE drugstores_inventory(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    drugstore_id int NOT NULL,
    products_id int NOT NULL,
    FOREIGN KEY(products_id) REFERENCES products(id),
    FOREIGN KEY(drugstore_id) REFERENCES drugstores(id),
    available BIT NOT NULL
)default charset utf8;

CREATE VIEW inventory_view
AS
(
    SELECT 
    d.id as `drugstore_id`, d.name as `drugstore_name`, d.description as `drugstore_description`, 
    d.image as `drugstore_image`, d.is_online as `drugstore_is_online`, d.is_physical as `drugstore_is_physical`, 
    d.uf as `uf`, d.city as `city`, d.street as `street`,  d.district as `district`, d.zip_code as `zip_code`,
    p.id as `product_id`, p.name as `product_name`, p.description as `product_description`, p.price as `product_price`, 
    p.composition as `product_composition`, p.skin_type as `product_skin_type`, 
    c.id as `category_id`, c.name as `category_name` 
    FROM drugstores_inventory AS `i`
    LEFT JOIN drugstores AS `d` ON i.drugstore_id = d.id
    LEFT JOIN products AS `p` ON i.products_id = p.id
    INNER JOIN categories as `c` ON p.category_id = c.id
);