import { Link } from "react-router-dom"
import { useState } from "react";
import { DivLogin, Form, Titulo } from "../styled"
import Menu from "./Menu";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { RiLockPasswordFill } from "@react-icons/all-files/ri/RiLockPasswordFill";
export default function Login() {

    const [login, setLogin] = useState({
        'usuario' : '',
        'senha' : ''
    })

    function lerLogin(e){
        setLogin({...login, [e.target.name] : e.target.value})
    }

    const logar = async (e) =>{
        e.preventDefault()

        console.log(JSON.stringify(login))

        const requestOption = {
            method:"post",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(login)
        }
        const response = await fetch(
            "http://localhost:8080/Prova/rest/Login",
            requestOption
        )
        const data = await response.json()

        console.log(data.usuario)

        if(data.usuario){
            sessionStorage.setItem("usuario-validado", data.usuario)
        }
        if(data){
            window.location = "/paginaInicial"
        }else{
            window.location = "/login"
        }

    }

    return (
        <>
            <Menu/>
            <Titulo></Titulo>
            <DivLogin>
                <Form onSubmit={logar}>
                    <legend>Sign-in</legend>
                    <fieldset>
                        <label htmlFor="idUsuario"><FaUserAlt/> Usuário</label>
                        <input id="idUsuario" name="usuario" type="text" onChange={lerLogin} value={login.usuario}/>
                        
                        <label htmlFor="idSenha"><RiLockPasswordFill/> Senha</label>
                        <input id="idSenha" name="senha" type="password" onChange={lerLogin} value={login.senha}/>
                        
                        <Link to="/CadastroCliente">Cadastre-se</Link>
                        
                        <input type="submit" value="Login"/>
                        
                    </fieldset>                
                </Form>
            </DivLogin>
        </>      
    )
}