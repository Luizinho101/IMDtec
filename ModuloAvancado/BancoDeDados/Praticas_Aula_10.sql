CREATE DATABASE Pesquisa_Histórica;

USE Pesquisa_Histórica;

CREATE TABLE LugaresHistoricos(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome_atual VARCHAR(50) NOT NULL,
    nome_antigo VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    altitude INT NOT NULL 
);

INSERT INTO LugaresHistoricos (id, nome_atual, nome_antigo, categoria, altitude) VALUES
(1, 'Caicó', 'Povoado do Queiroz', 'Cidade', 151),
(2, 'Serra Negra do Norte', 'Vila de Campo Grande', 'Cidade', 214),
(3, 'Acari', 'Vila do Povoado do Acauã', 'Cidade', 270),
(4, 'Carnaúba dos Dantas', 'Povoado de Carnaúba', 'Vila', 380),
(5, 'Jardim do Seridó', 'Conceição do Azevedo', 'Cidade', 245);

SELECT * FROM LugaresHistoricos;

SELECT nome_atual , nome_antigo FROM LugaresHistoricos;


SELECT nome_antigo AS Nome_Original FROM LugaresHistoricos;


SELECT * FROM LugaresHistoricos WHERE altitude > 250;


SELECT nome_antigo FROM LugaresHistoricos WHERE nome_antigo LIKE '%Povoado%';

SELECT nome_atual , altitude FROM LugaresHistoricos ORDER BY altitude DESC;