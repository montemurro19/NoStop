package br.com.prova.model.vo;

public class AluguelVO {
    private int idVeiculo;
    private int idCliente;
    private String tipoPagamento;
    private String seguro;
    private int quantidadeHoras;
    private String avaliacao;
    private double valorTotal;

    public AluguelVO(){

    }

    public AluguelVO(int idVeiculo, int idCliente, String tipoPagamento, String seguro, int quantidadeHoras,
            String avaliacao, double valorTotal) {
        this.idVeiculo = idVeiculo;
        this.idCliente = idCliente;
        this.tipoPagamento = tipoPagamento;
        this.seguro = seguro;
        this.quantidadeHoras = quantidadeHoras;
        this.avaliacao = avaliacao;
        this.valorTotal = valorTotal;
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
    public String getTipoPagamento() {
        return tipoPagamento;
    }
    public void setTipoPagamento(String tipoPagamento) {
        this.tipoPagamento = tipoPagamento;
    }
    public String getSeguro() {
        return seguro;
    }
    public void setSeguro(String seguro) {
        this.seguro = seguro;
    }
    public int getQuantidadeHoras() {
        return quantidadeHoras;
    }
    public void setQuantidadeHoras(int quantidadeHoras) {
        this.quantidadeHoras = quantidadeHoras;
    }
    public String getAvaliacao() {
        return avaliacao;
    }
    public void setAvaliacao(String avaliacao) {
        this.avaliacao = avaliacao;
    }
    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    @Override
    public String toString() {
        return "AluguelVO [idVeiculo=" + idVeiculo + ", idCliente=" + idCliente + ", tipoPagamento=" + tipoPagamento
                + ", seguro=" + seguro + ", quantidadeHoras=" + quantidadeHoras + ", avaliacao=" + avaliacao
                + ", valorTotal=" + valorTotal + "]";
    }
}
