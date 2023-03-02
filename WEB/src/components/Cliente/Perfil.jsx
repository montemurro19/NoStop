import { DivPerfil, TituloPerfil } from "../../styled";
import MenuInicial from "./MenuInicial";
import{FaUserCircle} from '@react-icons/all-files/fa/FaUserCircle'
import { useState, useEffect } from "react";

const verificar = sessionStorage.getItem("usuario-validado")

export default function Perfil(){

    const [dados, setDados] = useState([])

    useEffect(()=>{
        console.log("teste")
        fetch(`http://localhost:8080/Prova/rest/Cadastro/Cliente/${verificar}`)
        .then((resp)=>{
            return(resp.json())
        }).then((resp)=>{
            setDados(resp)
            console.log(dados)
        })

    },[])

    return(
        <>
            <MenuInicial/>

            <TituloPerfil id="titulo-perfil">Meu Perfil</TituloPerfil>
            <DivPerfil>
                <div id="div-img-perfil">
                    <p id="logo-user"><FaUserCircle/></p>
                </div>

                    <div id="conteudo-perfil">
                        <p className="label-perfil">Nome:</p>
                        <p className="valor-label">{dados.nome}</p>
                        <p className="label-perfil">CPF:</p>
                        <p className="valor-label">{dados.cpf}</p>
                        <p className="label-perfil">CNH:</p>
                        <p className="valor-label">{dados.cnh}</p>
                        <p className="label-perfil">E-MAIL:</p>
                        <p className="valor-label">{dados.email}</p>
                        <p className="label-perfil">Telefone:</p>
                        <p className="valor-label">{dados.telefone}</p>
                        <p className="label-perfil">Data de Nascimento:</p>
                        <p className="valor-label">{dados.dataDeNasc}</p>
                    </div>
            </DivPerfil>
        </>
    )
}
