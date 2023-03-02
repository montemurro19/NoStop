DROP TABLE t_nostop_aluguel CASCADE CONSTRAINTS;
DROP TABLE t_nostop_cliente CASCADE CONSTRAINTS;
DROP TABLE t_nostop_veiculo CASCADE CONSTRAINTS;

CREATE TABLE t_nostop_aluguel (      -- Tabela para salvar todos os alugueis de veiculo feitos no site
    idaluguel       NUMBER GENERATED ALWAYS AS IDENTITY, -- Id para identificação do aluguel
    tipopagamento   VARCHAR2(20),    -- Tipo do pagamento do aluguel
    seguro          VARCHAR2(1),     -- Se vai aderir seguro do site
    quantidadehoras NUMBER,          -- Quantidade de horas do aluguel
    avaliacao       VARCHAR2(1000),  -- Avaliacao do carro que foi alugado
    valortotal      NUMERIC(16,2),   -- Valor total do aluguel
    idveiculo       NUMBER NOT NULL, -- Id para verificar o veiculo alugado
    idcliente       NUMBER NOT NULL  -- Id para identificacao do cliente que alugou o carro
);

ALTER TABLE t_nostop_aluguel ADD CONSTRAINT aluguel_pk PRIMARY KEY ( idaluguel );

CREATE TABLE t_nostop_cliente (        -- Tabela para salvar todos os cadastros de clientes do site
    idcliente  NUMBER GENERATED ALWAYS AS IDENTITY, -- Id para identificação do cliente
    nome       VARCHAR2(100),          -- Nome do cliente
    cpf        VARCHAR2(14) UNIQUE,    -- CPF do cliente
    cnh        VARCHAR2(11) UNIQUE,    -- CNH do cliente
    email      VARCHAR2(100),          -- Email do cliente
    telefone   VARCHAR2(100),          -- Telefone do cliente 
    Datadenasc TIMESTAMP,              -- Data de nascimento do cliente
    usuario    VARCHAR2(100) NOT NULL UNIQUE, -- usuario do cliente para fazer login no site
    senha      VARCHAR2(100) NOT NULL check(LENGTH(senha) >= 8) -- Senha do cliente para fazer login no site
);

ALTER TABLE t_nostop_cliente ADD CONSTRAINT cliente_pk PRIMARY KEY ( idcliente );

CREATE TABLE t_nostop_veiculo (  -- Tabela para cadastrar os veiculos que podem ser alugados no site
    idveiculo   NUMBER GENERATED ALWAYS AS IDENTITY, -- Id da tabela para identificação
    marca       VARCHAR2(100),   -- Marca do veiculo
    modelo      VARCHAR2(100),   -- Modelo do veiculo
    ano         NUMBER,          -- Ano do veiculo
    precohora   NUMBER(16, 2),   -- Preco por hora do aluguel do veiculo
    endereco    VARCHAR2(100),   -- Endereco localizado o veiculo
    horainicial VARCHAR2(100),       -- Hora inicial que o veiculo estará disponivel para ser alugado
    horafinal   VARCHAR2(100),       -- Hora final que o veiculo estará disponivel para ser alugado
    idcliente   NUMBER NOT NULL  -- Id para identifcar o cliente dono do veiculo
);

ALTER TABLE t_nostop_veiculo ADD CONSTRAINT veiculo_pk PRIMARY KEY ( idveiculo );

ALTER TABLE t_nostop_aluguel
    ADD CONSTRAINT aluguel_cliente_fk FOREIGN KEY ( idcliente )
        REFERENCES t_nostop_cliente ( idcliente );

ALTER TABLE t_nostop_aluguel
    ADD CONSTRAINT aluguel_veiculo_fk FOREIGN KEY ( idveiculo )
        REFERENCES t_nostop_veiculo ( idveiculo );

ALTER TABLE t_nostop_veiculo
    ADD CONSTRAINT veiculo_cliente_fk FOREIGN KEY ( idcliente )
        REFERENCES t_nostop_cliente ( idcliente );