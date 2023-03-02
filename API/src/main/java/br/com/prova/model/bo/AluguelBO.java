package br.com.prova.model.bo;

import java.sql.SQLException;

import br.com.prova.model.dao.AluguelDAO;
import br.com.prova.model.vo.AluguelVO;


public class AluguelBO {
    
    public static void inserirBanco(AluguelVO aluguelVO) {
        try {
            new AluguelDAO().inserir(aluguelVO);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public static int getId(String usuario){
    	AluguelDAO veiculoDAO;
        int id = -1;
        try {
        	veiculoDAO = new AluguelDAO();
            id = veiculoDAO.getIdCliente(usuario);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return id;
    }
}
