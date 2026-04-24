
-- Criando o banco de dados
create database StarCoffee;

-- Comando que permite usar o banco
use StarCoffee;


-- Criar tabela
create table Produtos (
	id INT PRIMARY KEY,
    nome VARCHAR(100),
    preco DECIMAL(5,2)
);

-- Vendo a tabela

SELECT * FROM Produtos;

-- Adicionar a coluna "categoria" na tabela

ALTER TABLE Produtos ADD COLUMN categoria VARCHAR(50);

SELECT * FROM Produtos;


-- Criando tabela Clientes

CREATE TABLE Clientes (
	cpf VARCHAR(11),
    nome VARCHAR(100),
    data_cadastro date
);

-- Listando a tabela clientes
SELECT * FROM Clientes;






