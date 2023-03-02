import MenuInicial from "./MenuInicial";
import {CardVaga} from "../../styled";
import { useState, useEffect } from "react";

const verificar = sessionStorage.getItem("usuario-validado")

export default function Veiculos(){

    const [veiculos, setVeiculos] = useState([])

    useEffect(()=>{
        if(verificar == null){
            window.location = "/"
        }

        console.log(verificar)
        fetch(`http://localhost:8080/Prova/rest/Cadastro/Veiculo/Consulta/${verificar}`).then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setVeiculos(resp)
            console.log(veiculos)
        })
    },[])
    
    return(
        <>
        <MenuInicial/>
        
        {veiculos.map((veiculo)=>(
            <CardVaga>
                <p>Modelo: {veiculo.modelo}</p>
                <p>Marca: {veiculo.marca}</p>
                <p>Ano: {veiculo.ano}</p>
                <p>Preco por hora: R${veiculo.precoHora}</p>
                <p>Endereço: {veiculo.endereco}</p>
                <p>Disponivel de {veiculo.horaInicial} até {veiculo.horaFinal}</p>
            </CardVaga>
            ))}
        </>
    )

}

