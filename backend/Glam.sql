CREATE DATABASE query1;

USE query1;

Create table dados (
  id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
);

INSERT INTO dados (nome, endereco, email) VALUES ('João Silva', 'Rua das Flores, 123', 'joao.silva@example.com');

select * from dados;




