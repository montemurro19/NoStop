package br.com.prova.model.bo;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.prova.model.dao.VeiculoDAO;
import br.com.prova.model.vo.VeiculoVO;

public class VeiculoBO {
    
    public void inserirBanco(VeiculoVO veiculoVO) {
        try {
            new VeiculoDAO().inserir(veiculoVO);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public static int getId(String usuario){
        VeiculoDAO veiculoDAO;
        int id = -1;
        try {
        	veiculoDAO = new VeiculoDAO();
            id = veiculoDAO.getIdCliente(usuario);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return id;
    }
    public static List<VeiculoVO> listar(){
        List<VeiculoVO> lista = new ArrayList<>();;
        try {
           lista = new VeiculoDAO().listar();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return lista;
    }
    public static List<VeiculoVO> getVeiculos(String usuario){
    	List<VeiculoVO> lista = new ArrayList<>();;
        try {
            lista = new VeiculoDAO().getVeiculo(new VeiculoDAO().getIdCliente(usuario));
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return lista;
    }
}
