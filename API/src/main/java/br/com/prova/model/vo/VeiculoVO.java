package br.com.prova.model.vo;

public class VeiculoVO {
    private int idVeiculo;
    private int idCliente;
    private String marca;
    private String modelo;
    private int ano;
    private double precoHora;
    private String endereco;
    private String horaInicial;
    private String horaFinal;

    public VeiculoVO(){

    }

    public VeiculoVO(int idVeiculo, int idCliente, String marca, String modelo, int ano, double precoHora,
            String endereco, String horaInicial, String horaFinal) {
        this.idVeiculo = idVeiculo;
        this.idCliente = idCliente;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.precoHora = precoHora;
        this.endereco = endereco;
        this.horaInicial = horaInicial;
        this.horaFinal = horaFinal;
    }

    public int getIdVeiculo() {
        return idVeiculo;
    }
    public void setIdVeiculo(int idVeiculo) {
        this.idVeiculo = idVeiculo;
    }
    public int getIdCliente() {
        return idCliente;
    }
    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public int getAno() {
        return ano;
    }
    public void setAno(int ano) {
        this.ano = ano;
    }
    public double getPrecoHora() {
        return precoHora;
    }
    public void setPrecoHora(double precoHora) {
        this.precoHora = precoHora;
    }
    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public String getHoraInicial() {
        return horaInicial;
    }
    public void setHoraInicial(String horaInicial) {
        this.horaInicial = horaInicial;
    }
    public String getHoraFinal() {
        return horaFinal;
    }
    public void setHoraFinal(String horaFinal) {
        this.horaFinal = horaFinal;
    }
    
    @Override
    public String toString() {
        return "VeiculoVO [idVeiculo=" + idVeiculo + ", idCliente=" + idCliente + ", marca=" + marca + ", modelo="
                + modelo + ", ano=" + ano + ", precoHora=" + precoHora + ", endereco=" + endereco + ", horaInicial="
                + horaInicial + ", horaFinal=" + horaFinal + "]";
    }
}
