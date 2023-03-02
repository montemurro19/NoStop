package br.com.prova.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import br.com.prova.model.vo.ClienteVO;
import oracle.jdbc.datasource.impl.OracleDataSource;

public class ClienteDAO {

	private static final String connString = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private Connection conn;
	
	public ClienteDAO() throws SQLException{
	       OracleDataSource ods = new OracleDataSource();
	        
	        ods.setURL(connString);
	        ods.setUser(Dados.user);
	        ods.setPassword(Dados.pwd);
	        
	        conn = ods.getConnection();
	}
	
    public void inserir(ClienteVO clienteVO) throws SQLException{
        
        
        String sql = "INSERT INTO t_nostop_cliente (nome, cpf, cnh, email, telefone, Datadenasc, usuario, senha) "
        + "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        PreparedStatement stm = conn.prepareStatement(sql);
        stm.setString(1, clienteVO.getNome());
        stm.setString(2, clienteVO.getCpf());
        stm.setString(3, clienteVO.getCnh());
        stm.setString(4, clienteVO.getEmail());
        stm.setString(5, clienteVO.getTelefone());
        stm.setString(6, clienteVO.getDataDeNasc());
		stm.setString(7, clienteVO.getUsuario());
        stm.setString(8, clienteVO.getSenha());
        
        
        stm.executeQuery();
        conn.close();
    }

    
	public void excluir(int id) throws SQLException {
		
		String sql = "DELETE FROM t_nostop_cliente WHERE idCliente = ?";
		
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, id);			
			ps.execute();
			
		}catch (SQLException e) {
			if(conn != null) {
				System.err.println("Erro na transação! " + e.getStackTrace());
			}
		}finally {
			conn.close();
		}	
	}
	public int getIdCliente(String usuario) throws SQLException {
        
        
        String sql = "SELECT idcliente FROM t_nostop_cliente WHERE usuario = ?";
        
        PreparedStatement ps = conn.prepareStatement(sql);
        
        ps.setString(1, usuario);
        
        ResultSet rs  = ps.executeQuery();
        int id = -1;
        rs.next();
        id = rs.getInt("idcliente");         
        
        conn.close();
    
    return id; 
	}
    public ClienteVO listar(int idCliente) throws SQLException{
		
		String sql = "SELECT * FROM t_nostop_cliente WHERE idcliente = ?";
		
		PreparedStatement ps = conn.prepareStatement(sql);
		
        ps.setInt(1, idCliente);
		
		ResultSet rs  = ps.executeQuery();
		
		rs.next();
		int id = rs.getInt("idCliente");
		String nome = rs.getString("nome");
		String cpf = rs.getString("cpf");
        String cnh = rs.getString("cnh");
        String email = rs.getString("email");
        String telefone = rs.getString("telefone");
        String dataNascimento = rs.getString("Datadenasc");
        String usuario = rs.getString("usuario");
		
		ClienteVO cliente = new ClienteVO(id, nome, cpf, cnh,email, telefone, dataNascimento,  usuario, "");

		
		conn.close();
		
		return cliente;
	}
}