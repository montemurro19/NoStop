package br.com.prova.model.vo;

public class ClienteVO {
    private int idCliente;
    private String nome;
    private String cpf;
    private String cnh;
    private String email;
    private String telefone;
    private String dataDeNasc;
    private String usuario;
    private String senha;
    
    public ClienteVO(){
        
    }
    
    public ClienteVO(int idCliente, String nome, String cpf, String cnh, String email, String telefone,
            String dataDeNasc, String usuario, String senha) {
        this.idCliente = idCliente;
        this.nome = nome;
        this.cpf = cpf;
        this.cnh = cnh;
        this.email = email;
        this.telefone = telefone;
        this.dataDeNasc = dataDeNasc;
        this.usuario = usuario;
        this.senha = senha;
    }
    public int getIdCliente() {
        return idCliente;
    }
    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getCnh() {
        return cnh;
    }
    public void setCnh(String cnh) {
        this.cnh = cnh;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getTelefone() {
        return telefone;
    }
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
    public String getDataDeNasc() {
        return dataDeNasc;
    }
    public void setDataDeNasc(String dataDeNasc) {
        this.dataDeNasc = dataDeNasc;
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
        return "ClienteVO [idCliente=" + idCliente + ", nome=" + nome + ", cpf=" + cpf + ", cnh=" + cnh + ", email="
                + email + ", telefone=" + telefone + ", dataDeNasc=" + dataDeNasc + ", usuario=" + usuario + ", senha="
                + senha + "]";
    }
}
