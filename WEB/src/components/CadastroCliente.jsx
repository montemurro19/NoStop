import { Form, Cadastro, Titulo } from "../styled"
import { useState } from "react";
import Menu from "./Menu";


export default function CadastroCliente() {
  
  
  const [cliente, setCliente] = useState({'nome' : '','email' : '','senha' : '','telefone' : '','usuario':'','cpf' : '','dataDeNasc': '','cnh' : ''})

  function cadastraCliente(e) {
    setCliente({...cliente, [e.target.name] : e.target.value})
  }

  function inserirCliente(e) {
    e.preventDefault()

    console.log(JSON.stringify(cliente))

    fetch(`http://localhost:8080/Prova/rest/Cadastro/Cliente`,{
      method: "post",
      headers:{
          "Content-Type":"application/json"
    },
      body: JSON.stringify(cliente)
      }).then(()=>{
          window.location = "/login"
      })
  }
  
  return (
    <>
    <Menu/>
    <Titulo>Abra sua conta totalmente <span>GRÁTIS</span> e aproveite todos os benefícios da nossa plataforma!</Titulo>
    <Cadastro>
      <Form onSubmit={inserirCliente}>
        
        <legend>Cadastro Cliente</legend>
        <fieldset>
          <label htmlFor="idNome" >Nome completo</label>
          <input type="text" name="nome" id="idNome" onChange={cadastraCliente} value={cliente.nomeCandidato}/>

          <label htmlFor="idCpf">CPF</label>
          <input type="text" name="cpf" id="idCpf" onChange={cadastraCliente} value={cliente.cpf}/>

          <label htmlFor="idCnh">CNH</label>
          <input type="text" name="cnh" id="idCnh" onChange={cadastraCliente} value={cliente.cnh}/>
    
          <label htmlFor="idEmail" >Email</label>
          <input type="email" name="email" id="idEmail" onChange={cadastraCliente} value={cliente.email}/>

          <label htmlFor="idTel" >Telefone</label>
          <input type="tel" name="telefone" id="idTel" onChange={cadastraCliente} value={cliente.telefone}/>

          <label htmlFor="idDatadeNascimento" >Data de Nascimento</label>
          <input type="date" name="dataDeNasc" id="idDataDeNascimento" onChange={cadastraCliente} value={cliente.dataDeNasc}/>

          <label htmlFor="idUsario">Usuário</label>
          <input type="text" name="usuario" id="IdUsuario" onChange={cadastraCliente} value={cliente.usuario}/>

          <label htmlFor="idSenha" >Senha</label>
          <input type="password" name="senha" id="idSenha" onChange={cadastraCliente} value={cliente.senha}/>

          <p> Aceito os termos de uso:</p>
          <input type="checkbox"/>

          <input type="submit" value="cadastrar" />
        </fieldset>
      </Form> 
    </Cadastro>
    </>
  );
}