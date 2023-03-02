import { useState, useEffect } from "react";
import { Form, DivAvaliacao } from "../../styled"
import{ useParams } from 'react-router-dom'
import MenuInicial from './MenuInicial'

const verificar = sessionStorage.getItem("usuario-validado")

export default function Avaliacao(){

    const [avaliacao, setAvaliacao] = useState({'idAluguel':'', 'tipoPagamento':'', 'seguro':'', 'quantidadeHoras':'', 'avaliacao':'', 'valorTotal':'', 'marca':'', 'modelo':'',})

    function inserirAvaliacao(e) {
        setAvaliacao({...avaliacao, [e.target.name] : e.target.value})
    }

    const {id} = useParams();

    useEffect(()=>{
        if(verificar == null){
            window.location = "/"
        }
    },[])

    function inserirAvaliacaoBanco(e) {
        e.preventDefault()

        avaliacao.idAluguel = id;

        console.log(avaliacao)

        fetch(`http://localhost:8080/Prova/rest/Historico`,{
          method: "post",
          headers:{
              "Content-Type":"application/json"
        },
          body: JSON.stringify(avaliacao)
          }).then(()=>{
            window.location = "/paginaInicial"
        })

      }

    return(
        <>
        <MenuInicial/>
            <DivAvaliacao>
                <h1>Deixe uma avaliação, para nós é muito importante seu feedback!</h1>
                <Form onSubmit={inserirAvaliacaoBanco}>
                    <label htmlFor="idAvaliacao">Avaliação: </label>
                    <textarea name="avaliacao" id="idAvaliacao" cols="30" rows="10" onChange={inserirAvaliacao} value={avaliacao.avaliacao}></textarea>
                    <input type="submit" value="Avaliar" />
                </Form>
            </DivAvaliacao>
        </>
    )
}