use StarCoffee;

CREATE TABLE Pedidos (
	id_pedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    item VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL CHECK (quantidade > 0),
    status VARCHAR(50) DEFAULT 'Pendente'
);

SELECT * FROM Pedidos;

-- Inserindo dados na Tabela produtos

SELECT * FROM Produtos;

INSERT INTO Produtos ( id, nome , preco, categoria)
values (1, 'Espresso', 5.50, 'Bebidas');

INSERT INTO Produtos ( id, nome , preco, categoria)
values(2,'Cappuccino', 9.00, 'Bebida'),
(3,'Pão de Queijo', 4.50, 'Comida');

SELECT * FROM Produtos;

UPDATE Produtos SET preco = 6.00 WHERE id =1;

SELECT * FROM Produtos;

-- Inserindo pedidos para teste
INSERT INTO Pedidos (id_pedido, item, quantidade, status) 
VALUES (10, 'Café Espresso', 2, 'Pendente');

INSERT INTO Pedidos (id_pedido, item, quantidade, status) 
VALUES (11, 'Croissant', 1, 'Entregue');

SELECT * FROM Pedidos;

-- Deletando pedido
DELETE FROM Pedidos WHERE id_pedido = 10;

SELECT * FROM Pedidos;
