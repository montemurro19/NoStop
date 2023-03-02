SELECT * FROM T_NOSTOP_ALUGUEL 
    WHERE tipopagamento = 'Pix' 
    ORDER BY valortotal DESC; 
    
-- Retornar todos os alugueis que foram efetuados o pagamento por PIX e ordenados do maior valor para o menor

--------------------------------------------------------------------------------------------------------------------------------

SELECT * FROM T_NOSTOP_CLIENTE CLIENTE 
    INNER JOIN t_nostop_veiculo VEICULO ON CLIENTE.idcliente = VEICULO.idcliente 
    WHERE VEICULO.ano > 2020 
    ORDER BY VEICULO.precohora; 
    
-- Retorna os valores da tabela cliente e veiculo quando o ano do veiculo for maior que 2020 e ordenado do menor preco por hora para o maior.

--------------------------------------------------------------------------------------------------------------------------------

SELECT CLIENTE.nome, MAX(VEICULO.PRECOHORA) PRECOHORA FROM T_NOSTOP_CLIENTE CLIENTE
    LEFT JOIN T_NOSTOP_VEICULO VEICULO ON CLIENTE.idcliente = VEICULO.idcliente
    GROUP BY CLIENTE.nome
    ORDER BY MAX(VEICULO.PRECOHORA) DESC;
    
-- Retorna o nome do cliente e o maior preco por hora dos veiculos que ele tem cadastrado.

--------------------------------------------------------------------------------------------------------------------------------

SELECT CLIENTE.nome, SUM(ALUGUEL.valortotal) GASTO FROM T_NOSTOP_CLIENTE CLIENTE
    LEFT JOIN T_NOSTOP_ALUGUEL ALUGUEL ON CLIENTE.idcliente = ALUGUEL.idcliente
    GROUP BY CLIENTE.nome
    HAVING SUM(ALUGUEL.valortotal) > 100;

-- Retorna todo o todos os clientes que gastaram mais de 100 reais alugando veiculos.