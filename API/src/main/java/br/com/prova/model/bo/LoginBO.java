package br.com.prova.model.bo;

import java.sql.SQLException;

import br.com.prova.model.dao.LoginDAO;
import br.com.prova.model.vo.LoginVO;

public class LoginBO {

    public LoginVO verificarLogin(LoginVO loginVO) {
        try {        
            return new LoginDAO().consultaLogin(loginVO);
        } catch (SQLException e) {
            e.printStackTrace();
        }
		return null;
    }
	
}
