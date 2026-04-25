USE Pesquisa_Histórica;

SELECT * FROM LugaresHistoricos;

SELECT COUNT(*) AS total_lugares_cadastrados, ROUND (AVG(altitude),2) AS Altitude FROM LugaresHistoricos;

SELECT COUNT(*) AS Categorias FROM LugaresHistoricos GROUP BY categoria;

SELECT UPPER(nome_atual) , LOWER(nome_antigo) FROM LugaresHistoricos;