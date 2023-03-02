import {DivBox,DivContent, Span1, DivImgHome, Span2, Span3, IdeiaHome, DivTexto, CardsSection, Card, TituloCard, CardImg, TituloSection, CardEco, TituloEco, Parceiro, Parceiro2, Parceiro3, TituloParceiros, Parceiros} from '../styled'
import Menu from './Menu'
import { Link } from "react-router-dom"
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Card1 from '../img/civic.jpg'
import Card2 from '../img/golf.jpg'
import Card3 from '../img/tracker.webp'
import Card4 from '../img/tiggo.webp'
import Card5 from '../img/arrizo.webp'
import Card6 from '../img/eq5.jpg'
import ImgPergunta from '../img/nostop.jpg'


export default function Home(){
    return(
        <>
        <Menu/>
        <DivBox>
            <DivContent>
                <h1>
                    <Span1>Seja</Span1>
                    <Span2> Bem</Span2>
                    <Span3>-Vindo!</Span3>
                </h1>
                <IdeiaHome>A nossa ideia foi pensada para você ganhar dinheiro enquanto não ultiliza seu veículo.🤑</IdeiaHome>
            </DivContent>

            <DivImgHome>
                <img src={ImgPergunta} alt="" />
            </DivImgHome>

            <DivTexto>
                <h2>Como Funciona ?</h2>
                <p>A No Stop vai permitir que você alugue seu carro enqunto ele está parado! Um exemplo disso é o João, ele demora aproximadamente 30 minutos para chegar ao trabalho e seu carro fica parado 8 horas até o fim do seu expediente, na volta ele demora os mesmos 30 minutos da ida. Exemplificando, seu carro passa mais tempo parado que em movimento.</p>
                <p>E é nesse cenário que o <span>No Stop</span> irá ajudá-lo, enquanto seu carro fica parado em um dos nossos postos, outra pessoa pode alugar através da plataforma, João não precisa pagar o estacionamento e além disso ganha dinheiro 🤑</p>
                <p>
                    <Link to="/CadastroCliente">Faça seu cadastro!</Link>
                </p>
            </DivTexto>

            <TituloSection>Confira os veículos disponíveis e escolha a melhor opção para você!</TituloSection>

            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true}>
                <CardsSection>
                    <Card>
                        <TituloCard>Honda - Civic</TituloCard>
                        <CardImg>
                            <img src={Card1} alt="" />
                        </CardImg>

                    </Card>

                    <Card>
                        <TituloCard>VW - Golf Turbo</TituloCard>
                        <CardImg>
                        <img src={Card2} alt="" />
                        </CardImg>

                    </Card>

                    <Card>
                        <TituloCard>Chevrolet - Tracker</TituloCard>
                        <CardImg>
                        <img src={Card3} alt="" />
                        </CardImg>

                    </Card>
                </CardsSection>
            </AnimationOnScroll>

            <TituloEco>Carros elétricos disponíveis</TituloEco>

            <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce= {true}>
                <CardsSection>
                    <CardEco>
                        <TituloCard>Tiggo 8 PRO - Híbrido <span> Ϟ</span></TituloCard>
                        <CardImg>
                            <img src={Card4} alt="" />
                        </CardImg>

                    </CardEco>
                    <CardEco>
                        <TituloCard>Arrizo 5 - ZERO CARBONO<span> Ϟ</span></TituloCard>
                        <CardImg>
                            <img src={Card5} alt="" />
                        </CardImg>

                    </CardEco>
                    <CardEco>
                        <TituloCard>CAOA CHERRY - eQ5<span> Ϟ</span></TituloCard>
                        <CardImg>
                            <img src={Card6} alt="" />
                        </CardImg>

                    </CardEco>
                </CardsSection>
            </AnimationOnScroll>
         
         <TituloParceiros>Empresas Parceiras</TituloParceiros>
            <Parceiros>
                <Parceiro/>
                <Parceiro2/>
                <Parceiro3/>
            </Parceiros>
        </DivBox>
        </>
    )
}