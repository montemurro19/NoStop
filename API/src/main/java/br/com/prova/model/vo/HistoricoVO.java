package br.com.prova.model.vo;

public class HistoricoVO {

	private int idAluguel;
	private String tipoPagamento;
	private String seguro;
	private int quantidadeHoras;
	private String avaliacao;
	private double valorTotal;
	private String marca;
	private String modelo;
	
    public HistoricoVO(){

    }
    
	public HistoricoVO(int idAluguel, String tipoPagamento, String seguro, int quantidadeHoras, String avaliacao, double valorTotal,
            String marca, String modelo) {
		this.idAluguel = idAluguel;
        this.tipoPagamento = tipoPagamento;
        this.seguro = seguro;
        this.quantidadeHoras = quantidadeHoras;
        this.avaliacao = avaliacao;
        this.valorTotal = valorTotal;
        this.marca = marca;
        this.modelo = modelo;
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

    public int getIdAluguel() {
		return idAluguel;
	}

	public void setIdAluguel(int idAluguel) {
		this.idAluguel = idAluguel;
	}

	@Override
    public String toString() {
        return "HistoricoVO [tipoPagamento=" + tipoPagamento + ", idAluguel=" + idAluguel + ", seguro=" + seguro + ", quantidadeHoras="
                + quantidadeHoras + ", avaliacao=" + avaliacao + ", valorTotal=" + valorTotal + ", marca=" + marca
                + ", modelo=" + modelo + "]";
    }
}
