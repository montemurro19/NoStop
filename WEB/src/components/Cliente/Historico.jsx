import MenuInicial from "./MenuInicial";
import { useState, useEffect } from "react";
import { CardVaga} from "../../styled";
import { Link } from "react-router-dom"

const verificar = sessionStorage.getItem("usuario-validado")

export default function Hsitorico(){

    const [historico, setHistorico] = useState([])
    
    useEffect(()=>{
        if(verificar == null){
            window.location = "/"
        }
        console.log(verificar)
        fetch(`http://localhost:8080/Prova/rest/Historico/${verificar}`)
        .then((resp)=>{
            return(resp.json())
        }).then((resp)=>{
            setHistorico(resp)
        })
    },[])

    function verificarAvaliacao(avaliacao, idAluguel){
        console.log(idAluguel)
        if(avaliacao == null){
            return <Link to={"/avaliacao/" + idAluguel}>Avaliar veiculo</Link>
        }else{
            return avaliacao
        }
    }

    return(
        <>
            <MenuInicial/>
            {historico.map((veiculos)=>(
            <CardVaga>
                <p>Tipo de pagamento: {veiculos.tipoPagamento}</p>
                <p>Seguro: {veiculos.seguro}</p>
                <p>Quantidade de Horas: {veiculos.quantidadeHoras}</p>
                <p>Avaliacao: {verificarAvaliacao(veiculos.avaliacao, veiculos.idAluguel)}</p>
                <p>Valor total: {veiculos.valorTotal}</p>
                <p>Marca: {veiculos.marca}</p>
                <p>Modelo: {veiculos.modelo}</p>
            </CardVaga>
            ))}
        </>
    )
}