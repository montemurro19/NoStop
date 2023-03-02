package br.com.prova.model.vo;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LoginVO {

	private String usuario;
	private String senha;
	
	public LoginVO() {
		
	}
	
	public LoginVO(String usuario, String senha) {
		this.usuario = usuario;
		this.senha = senha;
	}
	
    public String getUsuario() {
        return usuario;
    }
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
    @Override
    public String toString() {
        return "ClienteVO [usuario=" + usuario + ", senha="
                + senha + "]";
    }
}
