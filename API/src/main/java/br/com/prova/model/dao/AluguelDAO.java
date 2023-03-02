package br.com.prova.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.prova.model.vo.AluguelVO;
import br.com.prova.model.vo.VeiculoVO;
import oracle.jdbc.datasource.impl.OracleDataSource;

public class AluguelDAO {
    
	private static final String connString = "jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL";
    private Connection conn;
	
	public AluguelDAO() throws SQLException{
	       OracleDataSource ods = new OracleDataSource();
	        
	        ods.setURL(connString);
	        ods.setUser(Dados.user);
	        ods.setPassword(Dados.pwd);
	        
	        conn = ods.getConnection();
	}
	
    public void inserir(AluguelVO aluguelVO) throws SQLException{
        
        String sql = "INSERT INTO t_nostop_aluguel (tipopagamento, seguro, quantidadehoras, avaliacao, valortotal, idveiculo, idcliente) "
        + "VALUES (?, ?, ?, ?, ?, ?, ?)";
        System.out.println(aluguelVO);
        PreparedStatement stm = conn.prepareStatement(sql);
        stm.setString(1, aluguelVO.getTipoPagamento());
        stm.setString(2, aluguelVO.getSeguro());
        stm.setInt(3, aluguelVO.getQuantidadeHoras());
        stm.setString(4, aluguelVO.getAvaliacao());
		stm.setDouble(5, aluguelVO.getValorTotal());
        stm.setInt(6, aluguelVO.getIdVeiculo());
        stm.setInt(7, aluguelVO.getIdCliente());
        
        
        stm.executeQuery();
        conn.close();
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
    public List<VeiculoVO> getVeiculo(int id) throws SQLException{
		
		List<VeiculoVO> listaVeiculos = new ArrayList<VeiculoVO>();
		
		String sql = "SELECT * FROM t_nostop_veiculo where idcliente = ?";
		
		PreparedStatement ps = conn.prepareStatement(sql);
		
        ps.setInt(1, id);
		
		ResultSet rs  = ps.executeQuery();
		
		while(rs.next()) {
			int idVeiculo = rs.getInt("idveiculo");
			int idCliente = rs.getInt("idcliente");
			String marca = rs.getString("marca");
			String modelo = rs.getString("modelo");
            int ano = rs.getInt("ano");
            double precoHora = rs.getInt("precohora");
            String endereco = rs.getString("endereco");
            String horaInicial = rs.getString("horainicial");
            String horaFinal = rs.getString("horafinal");
			
            listaVeiculos.add(new VeiculoVO(idVeiculo, idCliente, marca, modelo, ano, precoHora, endereco, horaInicial, horaFinal));
		}
		
		conn.close();
		
		return listaVeiculos;
	}
}
