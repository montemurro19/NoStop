package br.com.prova.model.bo;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.prova.model.dao.HistoricoDAO;
import br.com.prova.model.vo.HistoricoVO;

public class HistoricoBO {

    public static List<HistoricoVO> listar(String usuario){
        List<HistoricoVO> lista = new ArrayList<>();;
        try {
           lista = new HistoricoDAO().listar(new HistoricoDAO().getIdCliente(usuario));
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return lista;
    }
    
    public static void inserirAvaliacao(HistoricoVO historicoVO) {
        try {
        		
        	int idAluguel = historicoVO.getIdAluguel();
        	String avaliacao = historicoVO.getAvaliacao();
        	
            new HistoricoDAO().inserirAvaliacao(idAluguel, avaliacao);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
}
