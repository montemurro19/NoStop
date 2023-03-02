import { Inicio, PaginaIni, SubtitleInicio, TituloInicial } from "../../styled";
import { useEffect } from "react";
import MenuInicial from "../Cliente/MenuInicial";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const verificar = sessionStorage.getItem("usuario-validado")

export default function PaginaInicial(){

    /* useEffect(()=>{
        if(verificar == null){
            window.location = "/"
        }
    },[])
 */
    return(
        <PaginaIni>
            <MenuInicial/>
            <TituloInicial id="titulo-inicial"><span id="spanM1">NOSTOP</span><span id="spanM2"> mobility</span><span id="spanM3"> solutions.</span><span id="spanM4"> |</span></TituloInicial>
            <SubtitleInicio>Agora que você parte da nossa plataforma aqui estão alguns passos para seguir em frente:</SubtitleInicio>
                <Inicio>
                    <div className="linha"><div id="linhaInterna"></div></div>
                        <div id="conteudo1" className="conteudo">
                        </div>
                </Inicio>
                
                <AnimationOnScroll animateIn="animate__bounceIn">
                <p id="passo1">🤑</p>
                </AnimationOnScroll>
            
                <Inicio>
                    <div className="linha"><div id="linhaInterna"></div></div>
                        <div id="conteudo2" className="conteudo">
                            
                        </div>
                </Inicio>

                <AnimationOnScroll animateIn="animate__bounceIn">
                <p id="passo2">🏁</p>
                </AnimationOnScroll>

                <Inicio>
                    <div className="linha"><div id="linhaInterna"></div></div>
                        <div id="conteudo3" className="conteudo">
                            
                        </div>
                </Inicio>
                <AnimationOnScroll animateIn="animate__bounceIn">
                <p id="passo3">🙋‍♀️</p>
                </AnimationOnScroll>

                <Inicio>
                    <div className="linha"><div id="linhaInterna"></div></div>
                        <div id="conteudo4" className="conteudo">
                            
                        </div>
                </Inicio>


                
                <AnimationOnScroll animateIn="animate__bounceIn">
                <p id="passo4">📃</p>
                </AnimationOnScroll>

                <Inicio>
                    <div className="linha"><div id="linhaInterna"></div></div>
                        <div id="conteudo5" className="conteudo">

                        </div>
                </Inicio>

                <AnimationOnScroll animateIn="animate__bounceIn">
                <p id="passo5">♻️</p>
                </AnimationOnScroll>
        </PaginaIni>
    )
}