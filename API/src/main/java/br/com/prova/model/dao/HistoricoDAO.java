package br.com.prova.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.prova.model.vo.HistoricoVO;
import oracle.jdbc.datasource.impl.OracleDataSource;

public class HistoricoDAO {

	private static final String connString = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private Connection conn;
	
	public HistoricoDAO() throws SQLException{
	       OracleDataSource ods = new OracleDataSource();
	        
	        ods.setURL(connString);
	        ods.setUser(Dados.user);
	        ods.setPassword(Dados.pwd);
	        
	        conn = ods.getConnection();
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
	
    public List<HistoricoVO> listar(int idCliente) throws SQLException{
		
		List<HistoricoVO> listaHistorico = new ArrayList<HistoricoVO>();
		
		String sql = "SELECT T1.idaluguel, T1.tipopagamento, T1.seguro, T1.quantidadehoras, T1.avaliacao, T1.valortotal, T2.marca, T2.modelo"
				+ "	   FROM T_NOSTOP_CLIENTE T0"
				+ "    LEFT JOIN T_NOSTOP_ALUGUEL T1 ON T0.idcliente = T1.idcliente"
				+ "    LEFT JOIN T_NOSTOP_VEICULO T2 ON T1.idveiculo = T2.idveiculo"
				+ "    WHERE T0.idcliente = ?";
		
		PreparedStatement ps = conn.prepareStatement(sql);
		
        ps.setInt(1, idCliente);
		
		ResultSet rs  = ps.executeQuery();
		
		while(rs.next()) {
			int idAluguel = rs.getInt("idaluguel");
			String tipoPagamento = rs.getString("tipopagamento");
			String seguro = rs.getString("seguro");
			int quantidaDeHoras = rs.getInt("quantidadehoras");
			String avaliacao = rs.getString("avaliacao");
            double valortotal = rs.getDouble("valortotal");
            String marca = rs.getString("marca");
            String modelo = rs.getString("modelo");
			
            listaHistorico.add(new HistoricoVO(idAluguel, tipoPagamento, seguro, quantidaDeHoras, avaliacao, valortotal, marca, modelo));
		}
		
		conn.close();
		
		return listaHistorico;
	}
	
    public void inserirAvaliacao(int idAluguel, String avaliacao) throws SQLException{
        
        
        String sql = "UPDATE t_nostop_aluguel SET avaliacao "
        + "= ? WHERE idaluguel = ?";

        PreparedStatement stm = conn.prepareStatement(sql);
        stm.setString(1, avaliacao);
        stm.setInt(2, idAluguel);
        
        stm.executeQuery();
        conn.close();
    }
    
}
