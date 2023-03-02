import { Form, DivCadastroVeiculos } from "../../styled"
import { useState, useEffect } from "react";
import MenuInicial from "./MenuInicial";

const verificar = sessionStorage.getItem("usuario-validado")

export default function CadastroVeiculo(){


    const [veiculo, setVeiculo] = useState({'idCliente':'','marca':'','modelo':'','ano' : '','precoHora' : '','endereco':'','horaInicial' : '','horaFinal': ''})

    function inserirVeiculo(e) {
        setVeiculo({...veiculo, [e.target.name] : e.target.value})
    }

    const [marca, setMarca] = useState("");

    const marcaSelecionada = (event) => {
        setMarca(event.target.value);
    };

    const [modelo, setModelo] = useState("");

    const modeloSelecionada = (event) => {
        setModelo(event.target.value);
    };
   
    const modeloHonda = [
        "Civic",
    ];
    const modeloToyota = [
        "Corolla",
        "Etios",
    ];
    const modeloChevrolet = [
        "Onix",
    ];
    const modeloNissan = [
        "Kicks",
    ];
    const modeloVolkswagen = [
        "Tcross",
    ];

    let modelos = null;
    let options = null;

    if (marca === "Honda") {
        modelos = modeloHonda;
    } else if (marca === "Toyota") {
        modelos = modeloToyota;
    } else if (marca === "Chevrolet") {
        modelos = modeloChevrolet;
    } else if (marca === "Volkswagen") {
        modelos = modeloVolkswagen;
    } else if (marca === "Nissan") {
        modelos = modeloNissan;
    } 
    if (modelos) {
        options = modelos.map((el) => <option key={el}>{el}</option>);
    }
    if(modelo === "Civic") {
        if(veiculo.ano === "2022"){
            veiculo.precoHora = "33.4"
        } else if (veiculo.ano === "2021"){
            veiculo.precoHora = "32"
        } else if (veiculo.ano === "2020"){
            veiculo.precoHora = "29.8"
        } else if (veiculo.ano === "2019"){
            veiculo.precoHora = "28"
        } else if (veiculo.ano === "2018"){
            veiculo.precoHora = "26.2"
        } else if (veiculo.ano === "2017"){
            veiculo.precoHora = "24.36"
        } else if (veiculo.ano === "2016"){
            veiculo.precoHora = "22.52"
        } else if (veiculo.ano === "2015"){
            veiculo.precoHora = "20.68"
        } else if (veiculo.ano === "2014"){
            veiculo.precoHora = "18.84"
        } else if (veiculo.ano === "2013"){
            veiculo.precoHora = "17"
        } else if (veiculo.ano === "2012"){
            veiculo.precoHora = "15.16"
        } else if (veiculo.ano === "2011"){
            veiculo.precoHora = "13.32"
        } else if (veiculo.ano === "2010"){
            veiculo.precoHora = "11.48"
        } else if (veiculo.ano === "2009"){
            veiculo.precoHora = "9.64"
        } else{
            veiculo.precoHora = "7.8"
        }

    } else if (modelo === "Corolla"){
        if(veiculo.ano === "2022"){
            veiculo.precoHora = "33.8"
        } else if (veiculo.ano === "2021"){
            veiculo.precoHora = "30.8"
        } else if (veiculo.ano === "2020"){
            veiculo.precoHora = "29.4"
        } else if (veiculo.ano === "2019"){
            veiculo.precoHora = "26.8"
        } else if (veiculo.ano === "2018"){
            veiculo.precoHora = "24.6"
        } else if (veiculo.ano === "2017"){
            veiculo.precoHora = "22.36"
        } else if (veiculo.ano === "2016"){
            veiculo.precoHora = "20.12"
        } else if (veiculo.ano === "2015"){
            veiculo.precoHora = "17.88"
        } else if (veiculo.ano === "2014"){
            veiculo.precoHora = "15.64"
        } else if (veiculo.ano === "2013"){
            veiculo.precoHora = "13.4"
        } else if (veiculo.ano === "2012"){
            veiculo.precoHora = "11.16"
        } else if (veiculo.ano === "2011"){
            veiculo.precoHora = "8.92"
        } else if (veiculo.ano === "2010"){
            veiculo.precoHora = "6.68"
        } else if (veiculo.ano === "2009"){
            veiculo.precoHora = "4.44"
        } else{
            veiculo.precoHora = "2.2"
        }
    } else if (modelo === "Etios"){
        if(veiculo.ano === "2022"){
            veiculo.precoHora = "14.8"
        } else if (veiculo.ano === "2021"){
            veiculo.precoHora = "13.8"
        } else if (veiculo.ano === "2020"){
            veiculo.precoHora = "13"
        } else if (veiculo.ano === "2019"){
            veiculo.precoHora = "12.2"
        } else if (veiculo.ano === "2018"){
            veiculo.precoHora = "11"
        } else if (veiculo.ano === "2017"){
            veiculo.precoHora = "10.2"
        } else if (veiculo.ano === "2016"){
            veiculo.precoHora = "9.4"
        } else if (veiculo.ano === "2015"){
            veiculo.precoHora = "8.4"
        } else if (veiculo.ano === "2014"){
            veiculo.precoHora = "7.4"
        } else if (veiculo.ano === "2013"){
            veiculo.precoHora = "6.6"
        } else if (veiculo.ano === "2012"){
            veiculo.precoHora = "5.6"
        } else if (veiculo.ano === "2011"){
            veiculo.precoHora = "4.6"
        } else if (veiculo.ano === "2010"){
            veiculo.precoHora = "3.8"
        } else if (veiculo.ano === "2009"){
            veiculo.precoHora = "3"
        } else{
            veiculo.precoHora = "2.2"
        }
    } else if (modelo === "Onix"){
        if(veiculo.ano === "2022"){
            veiculo.precoHora = "13.6"
        } else if (veiculo.ano === "2021"){
            veiculo.precoHora = "12.6"
        } else if (veiculo.ano === "2020"){
            veiculo.precoHora = "11.8"
        } else if (veiculo.ano === "2019"){
            veiculo.precoHora = "10.8"
        } else if (veiculo.ano === "2018"){
            veiculo.precoHora = "9.8"
        } else if (veiculo.ano === "2017"){
            veiculo.precoHora = "9"
        } else if (veiculo.ano === "2016"){
            veiculo.precoHora = "8"
        } else if (veiculo.ano === "2015"){
            veiculo.precoHora = "7.2"
        } else if (veiculo.ano === "2014"){
            veiculo.precoHora = "6.2"
        } else if (veiculo.ano === "2013"){
            veiculo.precoHora = "5.4"
        } else if (veiculo.ano === "2012"){
            veiculo.precoHora = "4.4"
        } else if (veiculo.ano === "2011"){
            veiculo.precoHora = "3.6"
        } else if (veiculo.ano === "2010"){
            veiculo.precoHora = "2.6"
        } else if (veiculo.ano === "2009"){
            veiculo.precoHora = "1.8"
        } else{
            veiculo.precoHora = "0.96"
        }
    } else if (modelo === "Kicks"){
        if(veiculo.ano === "2022"){
            veiculo.precoHora = "20.2"
        } else if (veiculo.ano === "2021"){
            veiculo.precoHora = "19"
        } else if (veiculo.ano === "2020"){
            veiculo.precoHora = "18.6"
        } else if (veiculo.ano === "2019"){
            veiculo.precoHora = "17.6"
        } else if (veiculo.ano === "2018"){
            veiculo.precoHora = "16.8"
        } else if (veiculo.ano === "2017"){
            veiculo.precoHora = "16"
        } else if (veiculo.ano === "2016"){
            veiculo.precoHora = "15.2"
        } else if (veiculo.ano === "2015"){
            veiculo.precoHora = "14.4"
        } else if (veiculo.ano === "2014"){
            veiculo.precoHora = "13.6"
        } else if (veiculo.ano === "2013"){
            veiculo.precoHora = "12.8"
        } else if (veiculo.ano === "2012"){
            veiculo.precoHora = "12"
        } else if (veiculo.ano === "2011"){
            veiculo.precoHora = "11.2"
        } else if (veiculo.ano === "2010"){
            veiculo.precoHora = "10.4"
        } else if (veiculo.ano === "2009"){
            veiculo.precoHora = "9.6"
        } else{
            veiculo.precoHora = "8.8"
        }
    } else if (modelo === "Tcross"){
        if(veiculo.ano === "2022"){
            veiculo.precoHora = "27"
        } else if (veiculo.ano === "2021"){
            veiculo.precoHora = "26"
        } else if (veiculo.ano === "2020"){
            veiculo.precoHora = "25.4"
        } else if (veiculo.ano === "2019"){
            veiculo.precoHora = "24"
        } else if (veiculo.ano === "2018"){
            veiculo.precoHora = "23.6"
        } else if (veiculo.ano === "2017"){
            veiculo.precoHora = "22.8"
        } else if (veiculo.ano === "2016"){
            veiculo.precoHora = "22"
        } else if (veiculo.ano === "2015"){
            veiculo.precoHora = "21.2"
        } else if (veiculo.ano === "2014"){
            veiculo.precoHora = "20.4"
        } else if (veiculo.ano === "2013"){
            veiculo.precoHora = "19.6"
        } else if (veiculo.ano === "2012"){
            veiculo.precoHora = "18.8"
        } else if (veiculo.ano === "2011"){
            veiculo.precoHora = "18"
        } else if (veiculo.ano === "2010"){
            veiculo.precoHora = "17.2"
        } else if (veiculo.ano === "2009"){
            veiculo.precoHora = "16.4"
        } else{
            veiculo.precoHora = "15.4"
        }
    }


    function setDados(){
        fetch(`http://localhost:8080/Prova/rest/Cadastro/Veiculo`,{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(veiculo)
        }).then(()=>{
            window.location = "/paginaInicial"
        })
    }

    function inserirVeiculoBanco(e) {
        e.preventDefault()

        fetch(`http://localhost:8080/Prova/rest/Cadastro/Veiculo/${verificar}`)
        .then((resp)=>{
            return(resp.json())
        }).then(data=>{
            veiculo.idCliente = data;
            setDados()
        })

        veiculo.modelo = modelo;
        veiculo.marca = marca;
      }

    useEffect(()=>{
        if(verificar == null){
            window.location = "/"
        }
    },[])

   return (
        <>
        <MenuInicial/>
            <DivCadastroVeiculos>
                <Form onSubmit={inserirVeiculoBanco}>
                    <fieldset>
                        <label htmlFor="idMarca">Marca:</label>
                            <select id="idMarca" onChange={marcaSelecionada}>
                                <option>Escolha...</option>
                                <option>Honda</option>
                                <option>Toyota</option>
                                <option>Chevrolet</option>
                                <option>Nissan</option>
                                <option>Volkswagen</option>
                            </select>
                        <label htmlFor="idModelo">Modelo:</label>
                            <select id="idModelo" onChange={modeloSelecionada}>
                                <option>Escolha...</option>
                                {options}
                            </select>

                            <label htmlFor="idAno">Ano veiculo: </label>
                            <input type="text" name="ano" id="idAno" onChange={inserirVeiculo} value={veiculo.ano}/>

                            <label htmlFor="idprecoHora">Preco por hora: </label>
                            <input type="text" name="precoHora" id="idprecoHora" disabled="disabled" onChange={inserirVeiculo} value={veiculo.precoHora}/>

                            <label htmlFor="idEndereco">Endereco localizado o veiculo: </label>
                            <input type="text" name="endereco" id="idEndereco" onChange={inserirVeiculo} value={veiculo.endereco}/>

                            <label htmlFor="idHoraInicial">Hora inicial disponivel do veiculo: </label>
                            <input type="text" name="horaInicial" id="idHoraInicial" placeholder="Ex: 13:00" onChange={inserirVeiculo} value={veiculo.horaInicial}/>

                            <label htmlFor="idHoraFinal">Hora final disponivel do veiculo: </label>
                            <input type="text" name="horaFinal" id="idHoraFinal" placeholder="Ex: 20:00" onChange={inserirVeiculo} value={veiculo.horaFinal}/>
                            <br/>
                            <input type="submit" value="cadastrar" />
                    </fieldset>
                </Form>
            </DivCadastroVeiculos>
        </>
   )
}