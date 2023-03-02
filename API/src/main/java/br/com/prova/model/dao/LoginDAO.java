package br.com.prova.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.xml.bind.annotation.XmlRootElement;

import br.com.prova.model.vo.LoginVO;
import oracle.jdbc.datasource.impl.OracleDataSource;

@XmlRootElement
public class LoginDAO {
	
	private static final String connString = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private Connection conn;
	
	public LoginDAO() throws SQLException{
	       OracleDataSource ods = new OracleDataSource();
	        
	        ods.setURL(connString);
	        ods.setUser(Dados.user);
	        ods.setPassword(Dados.pwd);
	        
	        conn = ods.getConnection();
	}
	
    public LoginVO consultaLogin(LoginVO loginVO) throws SQLException{	
    	
		String sql = "SELECT senha FROM t_nostop_cliente where usuario = ?";
		
        PreparedStatement stm = conn.prepareStatement(sql);        
        stm.setString(1, loginVO.getUsuario());
		ResultSet rs  = stm.executeQuery();
		
		rs.next();
		String senha = rs.getString("senha");
		
		conn.close();
		
		String verificarSenha = loginVO.getSenha();
		
		if(senha.equals(verificarSenha)) {
			return loginVO;
		}
		return null;
    }
    
}
