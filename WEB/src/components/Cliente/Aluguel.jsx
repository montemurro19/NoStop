import MenuInicial from "./MenuInicial";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { CardVaga, ContainerAluguel} from "../../styled";

const verificar = sessionStorage.getItem("usuario-validado")

export default function Aluguel(){
    const [aluguel, setAluguel] = useState([])

    useEffect(()=>{

        if(verificar == null){
            window.location = "/"
        }

        fetch("http://localhost:8080/Prova/rest/Cadastro/Veiculo").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setAluguel(resp)
        }).catch((error)=>{
            console.log(error)
        })

        },[])

    return(
        <>
            <MenuInicial/>
            <ContainerAluguel>
            <section id="sectionAluguel">
            <h1>Esses são nossos carros disponiveís</h1>
                {aluguel.map((veiculo)=>(
                <CardVaga>
                    <p>Modelo: {veiculo.modelo}</p>
                    <p>Marca: {veiculo.marca}</p>
                    <p>Ano: {veiculo.ano}</p>
                    <p>Preco por hora: R${veiculo.precoHora}</p>
                    <p>Endereço: {veiculo.endereco}</p>
                    <p>Disponivel de {veiculo.horaInicial} até {veiculo.horaFinal}</p>
                    <Link to={"/confirmacaoAluguel/" + veiculo.idVeiculo + "/" + veiculo.precoHora}>Alugar veiculo</Link>
                </CardVaga>
                ))}
            </section>
            </ContainerAluguel>
        </>
    )
}