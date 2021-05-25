CREATE DATABASE dbempleados;
USE dbempleados;

CREATE TABLE empleados (
    id INT(4) NOT NULL,
    userId INT(4) NOT NULL,
    firstName VARCHAR(40) NOT NULL,
    lastName VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(40) NOT NULL,
);

ALTER TABLE empleados
    ADD PRIMARY KEY (id);
    
ALTER TABLE empleados MODIFY id INT(4) NOT NULL AUTO_INCREMENT;