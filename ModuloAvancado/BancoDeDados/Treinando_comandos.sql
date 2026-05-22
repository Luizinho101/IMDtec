
CREATE DATABASE Livraria;

USE Livraria;

CREATE TABLE Livros (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    autor VARCHAR(200),
    ano_publicacao int 
);

SELECT * FROM Livros;

insert into Livros (titulo, autor, ano_publicacao)
values ('Quem pensa enriquece', 'Napoleon Hill', 1937),
('Os Seres do Pântano: Sofia e o Bosque das Sombras', 'Linda, Chapman', 2017),
('As 16 Leis do Sucesso', 'Napoleon Hill', 2017);

UPDATE Livros SET ano_publicacao = 2000 WHERE id = 3;

SELECT * FROM Livros;

DELETE FROM Livros WHERE id = 3;

SELECT * FROM Livros;

SELECT titulo , autor  FROM Livros WHERE ano_publicacao > 2010;

ALTER TABLE Livros  ADD column genero varchar(50);

SELECT * FROM Livros;

UPDATE Livros SET genero = 'Autoajuda' WHERE id = 1;
UPDATE Livros SET genero = 'Aventura' WHERE id = 2;

SELECT * FROM Livros;

ALTER TABLE Livros DROP COLUMN  genero;

SELECT * FROM Livros;

