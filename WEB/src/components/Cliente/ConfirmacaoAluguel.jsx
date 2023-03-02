import{ useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { Form, DivAluguel, ContainerAluguel} from "../../styled";
import MenuInicial from './MenuInicial'

export default function ConfirmacaoAluguel() {

    const verificar = sessionStorage.getItem("usuario-validado")

    const {id, precoHora} = useParams();

    const [aluguel, setAluguel] = useState({'idVeiculo':'','idCliente':'','tipoPagamento': '', 'seguro':'', 'quantidadeHoras':'', 'valorTotal':''})

    function cadastraAluguel(e) {
      setAluguel({...aluguel, [e.target.name] : e.target.value})
    }

    if(aluguel.quantidadeHoras > 0){
        aluguel.valorTotal = aluguel.quantidadeHoras * precoHora;
    }

    useEffect(()=>{
        if(verificar == null){
            window.location = "/"
        }
    },[])

    function setDados(){
        fetch(`http://localhost:8080/Prova/rest/Aluguel`,{
          method: "post",
          headers:{
              "Content-Type":"application/json"
        },
          body: JSON.stringify(aluguel)
          })
    }
    
    function inserirAluguel(e) {
        e.preventDefault()

        aluguel.idVeiculo = id;

        fetch(`http://localhost:8080/Prova/rest/Aluguel/${verificar}`)
        .then((resp)=>{
            return(resp.json())
        }).then(data=>{
            aluguel.idCliente = data;
            setDados()
        }).then(()=>{
            window.location = "/paginaInicial"
        })
    }
    return(
        <>
            <MenuInicial/>
            <ContainerAluguel>
                <DivAluguel>
                    <Form onSubmit={inserirAluguel}>
                        <legend>Alugar Veiculo</legend>

                        <label id='pagamento' htmlFor="idTipoPagamento">Tipo de Pagamento:</label>
                                <select id="idTipoPagamento" name="tipoPagamento" onChange={cadastraAluguel} value={aluguel.tipoPagamento}>
                                    <option>Escolha...</option>
                                    <option>Pix</option>
                                    <option>Cartão de Crédito</option>
                                    <option>Cartão de Débito</option>
                                </select>
                                <br/>

                        <label id='seguro' htmlFor="idSeguro">Seguro: </label>

                                <select id="idSeguro" name="seguro" onChange={cadastraAluguel} value={aluguel.seguro}>
                                    <option>Escolha...</option>
                                    <option>S</option>
                                    <option>N</option>
                                </select>
                                <br/>

                        <label htmlFor="idquantidadeHoras">Quantidade de Horas: </label>
                        <input type="text" name="quantidadeHoras" id="idquantidadeHoras" onChange={cadastraAluguel} value={aluguel.quantidadeHoras}/>

                        <label htmlFor="idValorTotal">Valor Total: </label>
                        <input type="text" name="valorTotal" id="idValorTotal" disabled="disabled" onChange={cadastraAluguel} value={aluguel.valorTotal}/>

                        <input type="submit" value="cadastrar" id="submitAluguel" />
                        
                    </Form>
                </DivAluguel>
            </ContainerAluguel> 
        </>
    )
}