package br.com.prova.model.bo;

import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import br.com.prova.model.dao.ClienteDAO;
import br.com.prova.model.vo.ClienteVO;

public class ClienteBO {

    public void formatarData(ClienteVO clienteVO) {
        try {
            String dataNasc = clienteVO.getDataDeNasc();
            String formatarNasc = dataNasc.substring(8,10) + "/" + dataNasc.substring(5,7) + "/" + dataNasc.substring(2,4);
            System.out.println(formatarNasc);
            clienteVO.setDataDeNasc(formatarNasc);
        
            new ClienteDAO().inserir(clienteVO);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    public static ClienteVO listar(String usuario){
    	ClienteVO cliente = new ClienteVO();
        try {
        	cliente = new ClienteDAO().listar(new ClienteDAO().getIdCliente(usuario));
        	String dataStr = cliente.getDataDeNasc();
        	Date data = new SimpleDateFormat("yyyy-MM-dd").parse(dataStr.substring(0,10));
        	cliente.setDataDeNasc(new SimpleDateFormat("dd/MM/yyyy").format(data));
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ParseException e) {
			e.printStackTrace();
		}
        return cliente;
    }
}
