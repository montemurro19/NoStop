import styled from "styled-components"
import Parceiro1 from './img/stellantis.png'
import Parceiro2img from './img/fiap.png'
import Parceiro3img from './img/alura.webp'
import Conteudo1 from './img/ConteudoPaginaInicial/conteudo1.png'
import Conteudo2 from './img/ConteudoPaginaInicial/conteudo2.png'
import Conteudo3 from './img/ConteudoPaginaInicial/conteudo3.png'
import Conteudo4 from './img/ConteudoPaginaInicial/conteudo4.png'
import Conteudo5 from './img/ConteudoPaginaInicial/conteudo5.png'

export const Form = styled.form`

width: 40vw;
border-radius: 10px;
background-color: #000d;
animation: slide2 1.5s;
margin: 2em;
border: 2px solid #aaa;
box-shadow: .5em .5em 1em #0006;

fieldset{
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

legend{
    border-radius: 10px;
    color: #ccc;
    text-align: center;
    font-size: 1.5em;
    padding: 1em;
    background-color: #11111a;
}
    
    label{
        align-self: flex-start;
        font-size: 1.2rem;
        padding: 6px;
        color: #ccc;
        margin-left: 4vh;
        
    }
    input{
        margin-left: 5vh;
        border-bottom: 3px solid #ccc;
        display: block;
        width: 85%;
        color: white;
        padding: 3px;
        transition: transform .5s, box-shadow .5s;
        background-color: transparent;

        :focus{
            outline: 0;
            transform: scale(1.1);
            border-color : white;
            caret-color: white;
            background-color: #ffffff0f;
        }
    }

    input[type='submit']{
      background-color: #fff2;
      border: 2px solid gray;
      border-radius: 2em;
      margin: 0;
      align-self: center;
      font-size: 1.1em;
      color: #ccc;
      width: 50%;
      transition: background-color .5s, transform .5s, color .5s, box-shadow .5s;

      :hover{
        transform: scale(1.1);
        background-color: #fff6;
        color: #11111a;
        box-shadow: .5em .5em 1em #fff2;
      }
    }
    
    input[type='checkbox']{
        transform: scale(1.2);
        margin: 1em auto;
    }

    select{
        border-radius: 1em;
        padding: .5em;
        align-self: center;
        width: 50%;
        background-color: #ccc;
        margin-left: 25%;
        display: block;
    }

    textarea{

    }
        
    button{
        border-radius: 2em;
        margin: 0;
        align-self: center;
        font-size: 1em;
        color: #ccc;
        background-color: #f002;
        border: 2px solid #af0000;
        width: 50%;
        padding: .2em;
        transition: transform .5s, background-color .5s, box-shadow .5s;
        letter-spacing: 1px;

        :hover{
        transform: scale(1.1);
        background-color: #f005;
        box-shadow: .5em .5em 1em #f004;
      }
    }

    a{  
    color: #0ab;
    text-decoration: none;
    padding: 1em;
    transition: color .5s;
    margin: 0 auto;
        :hover{
            color: #faa;
        }     
    }
    p{
        color: white;
        align-self: center;
        margin: 1vh 0;
    }

    @media (max-width:768px){
        width: 60vw;
        margin: 2em auto;
       fieldset{
        width: 100%;
        align-items: center;
       }
       input{
        margin: 0;
       }

       label{
        margin: 0;
        align-self: center;
       }
       
        a{
            ::after{
                display: none;
            }
        }
    }
   @keyframes slide2 {
    0%{
        transform: translateX(-50vw);
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
   }
   
`

export const DivBox = styled.div`
margin: 0 5vw;
   ::before{
        content:"";
        position: absolute;
        top:20vh;
        right: 0;
        left: 0;
        z-index: -1;
        bottom: 0;
        background-image: linear-gradient(45deg, #23aefd, #cc8866); 	
        transform: skewY(-8deg);
        animation: slide 3s;
   }

   @keyframes slide {
    0%{
        transform: translateY(-10vh);
        opacity: 0;
    }
}
`

export const DivContent = styled.div`
max-width: 50em;
margin: 45vh auto;
position: relative;
text-align: center;

span{
    font-size: 2em;
}

`

export const Span1 = styled.span`
animation: aparecer 1.5s;
animation-timing-function: step-end;

    @keyframes aparecer {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`
export const Span2 = styled.span`
animation: aparecer 2s;
animation-timing-function: step-end;
`
export const Span3 = styled.span`
animation: aparecer 2.5s;
animation-timing-function: step-end;
`

export const IdeiaHome = styled.p`
margin-top: 5vh;
animation: slide2 2s;
font-size: 1.1em;

@keyframes slide2{
    0%{
        transform: translateY(30vh);
        opacity:0;
    }
}
`

export const LinkCadastro = styled.span`
    background-color: #ccc;
    position: relative;
    transition: color .5s, background-color 1s, transform .5s;
    border-radius: 2em;
    padding: .1em;
    overflow: hidden;
    box-shadow: .5em .5em 1em #0009;

    li{
        display: flex;
        a{
            color: black;
            :hover{
                color: black;
            }
        }
    }
    
    :hover{
        background-color: #23aefd;
        transform: scale(1.1);
        ::before{
            animation: brilho 2s;
        }
    }
    
    ::before{
        content: "";
        position:absolute;
        width: 100px;
        height: 200px;
        top: 0;
        left: 50vh;
        background-color: #222;
    }

    @keyframes brilho {
        from{
            opacity: .5;
            transform: translateX(-60vh);
        }
        to{
            opacity: .5;
            transform: translateX(50vh);
        }
    }

    @media (max-width: 768px) {
        border-radius: none;
        width: 100%;
        border-radius: 0;
    }
`

export const PublicNav = styled.nav`
position: fixed;
top: 0;
z-index: 1;
width: 100%;
background-color: #11111a;
box-shadow: .5em .5em 1em black;

    #logOut{
       width: 80%;
       font-size: 1.5em;
       color: #0ab;
       border:0;
       margin-left: 2vh;
       background-color: transparent;
       box-shadow: none;

       :hover{
        transform:scale(1.2);
       }
    }

    #money{
        font-size: 1.3em;
    }

    .iconMenuPrincipal{
        color: #fff9;
        display: none;
        font-size: 1.2em;
        @media (max-width: 768px) {
            display: inline;
        }
    }

    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 1em;
        white-space: nowrap;
        align-items: center;

    }
    .iconHome{
        display: none;
        color: #fff7;

        @media (max-width: 768px) {
            display: inline;
            margin: 0 auto;
            font-size: 1.1em;
        }
    }

    a{
        text-decoration: none;
        color: #0ab;
        font-size: 1.2em;
        transition:color .5s, background-color .5s, text-shadow .5s;
        width: 100%;
        border-radius: 2em;
        padding:.5em;

            ::after{
                content: '';
                position: relative;
                background-color: #faa;
            }
            :hover{
                color: #ccc;
                text-shadow: .5em 0 1em #fff;
            }
        }

    @media (max-width:768px) {
    width: 10vw;
    border:0;
    height: 8vh;
    background-color: transparent;
    transition: width 1s;
    box-shadow: none;
    
    ul{
        align-items: flex-start;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        
    }

    li{
        display: none;
        margin-top: 1em;
        transition: transform .5s;
        width: 100%;
        border-radius: 1em;
        padding: .2em;
        :hover{
            transform: scale(1.1);
            background-color: #fff2;
        }
    }

    span{
        background-color: transparent;
        box-shadow: none;
        a{
            color: #0ab;

            :hover{
                color: #ccc;
            }
        }
        :hover{
            background-color: transparent;
        }

        ::before{
            display: none;
        }
    }


    
    :hover{
        width: 35vw;
        height: 100vh;
        background-color: #11111a;
        box-shadow: 0 .7em 1em black;

        li{
            display: block;
            animation: surgir 2s;
        }
        div{
            display: none;
        }
    }
}

    @keyframes surgir {
        from{
            opacity: 0;
        }
        to{
            opacity:1;
        }
    }
`
export const MiniMenu = styled.div`
    margin: 5vh;
    display: none;
    height: 3vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        display: flex;
     }
`
export const MenuHamb = styled.div`
    height: .7vh;
    border: 1px solid black;
    box-shadow: .5em .5em .5em #0005;
    border-radius: 1em;
    width: 5vh;
    background-color: #ccc;
    display: none;

    @media (max-width: 768px) {
        display: block;
     }
`

export const DivTexto = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

    h2{
        background-image: linear-gradient(to right, rebeccapurple, steelblue, turquoise);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-size: 2.4em;
        margin: 6vh 0;
        ::selection{
            background-color: #faa5;
        }
    }
    p{
        color: #ccc;
        font-size: 1.2em;
        text-align: center;
        line-height: 6vh;
        width: 100%;
        padding: 0 10vh;
        ::selection{
            background-color: #faa5;
        }
    }
    span{
        background-image: linear-gradient(to right, white, #00ffaa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }
    a{
        color: #0ab;
        text-decoration: none;
        transition: color .5s;
        background-color: #fff2;
        padding: .3em;
        border-radius: 1em;
        transition: padding .5s;
        :hover{
                color: #faa;
                padding: .6em;
            }
    }
`

export const DivLogo = styled.div`
display: flex;
justify-content: center;
width: 40%;

    img{
        max-width: 40%;
        border-radius: 60%;
        box-shadow: .5em .5em 1em #0005;
        @media (max-width: 768px) {
        max-width: 70%;
    }
    }
`

export const DivDevs = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DivFooter = styled.footer`
    position: relative;
    bottom: 0;
    padding: 1.2em;
    width: 100%;
    color: #ccc;
    margin-top: 5vh;
    display: flex;
    background-image: linear-gradient(to top, #111112, #11111a);
    border-top: 1px solid #ccc;

    ul{
        display: flex;
        list-style: none;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }
    
`


export const DivLogin = styled.div`
    display: flex;
    align-items: center;
    margin: 10vh 5vw;
    background-color: #fff2;
    border-radius: 1em;
    box-shadow: .5em .5em 1em #0006;
    background-image: url("https://maisqueseguro.files.wordpress.com/2014/06/274153_papel-de-parede-porsche-911-em-preto-e-branco_1920x1200.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;

    @media (max-width: 800px) {
        background-image: none;
        justify-content: center;
        align-items: center;
        box-shadow: none;
    }

    
`

export const Cadastro = styled.div`
    display: flex;
    align-items: center;
    margin: 10vh 5vw;
    background-color: #fff2;
    border-radius: 1em;
    box-shadow: .5em .5em 1em #0006;
    background-image: url("https://www.bugatti.com/fileadmin/_processed_/sei/p329/se-image-87f40fb0b7981f56cc3f3c7f4dd788c2.jpg");
    background-repeat: no-repeat;
    background-size: auto;

    @media (max-width: 800px) {
        background-image: none;
        justify-content: center;
        align-items: center;
        box-shadow: none;
    }


    /* display: flex;
    background-color: #fff2;
    margin: 5vh 5vw;
    border-radius: 1em;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    } */
`

export const Titulo = styled.h1`
    margin-top: 20vh;
    text-align: center;
    text-shadow: .5em .5em .5em #000;
    color: #ccc;
    animation: fall 2s;

    span{
        color: yellow;
    }

    @keyframes fall {
        from{
            transform: translateY(-20vh);
            opacity: 0;
        }
        to{
            transform: translateY(0);
        }
    }
`

export const TextoCad = styled.div`
    width: 40%;
    margin: 2em auto;
    background-color: white;
    border-radius: 1em;
    padding: .3em;

    @media (max-width: 998px) {
        display: none;
    }

`

export const CardsSection = styled.section`
    width: 100%;
    border-radius: 1em;
    background-color: #fff2;
    position: relative;
    margin-top: 10vh;
    display: flex;
    justify-content: space-around;
    padding: 4em;
   
    span{
        color: #2fa;
    }

    ::before{
        content: "↓";
        padding: 1em;
        position: absolute;
        background-color: #11111a;
        bottom: -5vh;
        border-radius: 20%;
        color: #ccc;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Card = styled.div`
    background-color: #11111a;
    box-shadow: .5em .5em 1em #0005;
    border-radius: 1em;
    padding: 1em;
    width: 30%;

    @media (max-width: 768px) {
        margin: 5vh 0;
        width: 70%;
    }
`

export const CardEco = styled.div`
    padding: 1em;
    border-radius: 1em;
    background-color: #11111a;
    width: 30%;
    box-shadow: .5em .5em 1em #2fa;

    @media (max-width: 768px) {
        margin: 5vh 0;
        width: 70%;
    }
`

export const TituloEco = styled.p`
    margin-top: 10vh;
    text-align: center;
    font-size: 1.4em;
    color: #2fa;
`

export const TituloCard = styled.p`
    text-align: center;
    font-size: 1.1em;
    color: #ccc;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1em;
`
export const TituloSection = styled.h2`
    text-align: center;
    width: 70%;
    color: #0ab;
    margin: 15vh auto;
    animation: popUp 1s alternate-reverse infinite;

    @keyframes popUp {
        from{
            transform: scale(1.1);
        }
        to{
            transform: scale(1);
        }
    }
`
export const CardImg = styled.div`
    width: 100%;
    img{
        border-radius: 1em;
        max-width: 100%;
    }
`

export const Parceiro = styled.div`
    height: 50vh;
    width: 50%;
    margin: 10vh 10vw;
    border-radius: 1em;
    background-size: 100%;
    background-position: center;
    background-image: url(${Parceiro1});
    background-repeat: no-repeat;
    box-shadow: .5em .5em 1em #0006;
    animation: float 3.5s alternate-reverse infinite;

    @media (max-width: 768px) {
        width: 80%;
        margin: 8vh auto;
    }
`
export const Parceiro2 = styled.div`
    height: 50vh;
    width: 50%;
    margin: 8vh 40vw;
    border-radius: 1em;
    background-size: 100%;
    background-position: center;
    background-image: url(${Parceiro2img});
    background-repeat: no-repeat;
    box-shadow: .5em .5em 1em #0006;
    animation: float 4s alternate-reverse infinite;

    @media (max-width: 768px) {
        width: 80%;
        margin: 8vh auto;
    }
`
export const Parceiro3 = styled.div`
    height: 50vh;
    width: 50%;
    margin: 8vh 10vw;
    border-radius: 1em;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${Parceiro3img});
    box-shadow: .5em .5em 1em #0006;
    animation: float 3s alternate-reverse infinite;

    @keyframes float {
        from{
            transform: translateX(-3vw);
        }
        to{
            transform: translateX(3vw);
        }
    }

    @media (max-width: 768px) {
        width: 80%;
        margin: 8vh auto;
    }
`

export const Parceiros = styled.div`
    background-color: #fff2;
    padding: 1em;
    border-radius: 1em;
`

export const TituloParceiros = styled.p`
    text-align: center;
    margin: 10vh 0;
    font-size: 1.3em;
    color: #ccc;
`

export const TituloInicial = styled.h1`
    margin-top: 15vh;
    font-size: 4em;
    padding: 1em;
    background-color: #111114;
    
    #spanM1{
        color: #fc2;
        text-shadow: .5em 0 1em #fc2;
        animation: surgir 1.5s alternate infinite;
    }
    #spanM2{
        color: #ccc;
        animation: surgir 1.5s step-end;
    }
    #spanM3{
        color: #ccc;
        animation: surgir 2s step-end;
    }
    #spanM4{
        color: #ccc;
        animation: surgir .5s linear infinite;
    }
`

export const Inicio = styled.section`
    display: flex;
    width: 100%;
    margin: 1em;

    .linha{
        width: 20%;
        display: flex;
        height: 100vh;
        justify-content: center;
        @media(max-width: 768px){
            height: 100vh;
        }
    }
    #linhaInterna{
        width: 2%;
        background-color: #ccc;
        border-radius:1em;
        height: 100%;
    }
    .conteudo{
        width: 70%;
        transform: translateY(65vh);
        background-color:transparent;
        border-radius: 1em;
        margin:1em;
        padding: 1em;
        height: 87vh;

        h2{
            color: #ccc;
            font-size: 2em;
        }
        @media(max-width: 768px){
            transform: translateY(90vh);
            height:45vh;
        }
    }
    #conteudo1{
        background-image: url(${Conteudo1});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: top center;

    }
    #conteudo2{
        background-image: url(${Conteudo2});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: top center;
    }
    #conteudo3{
        background-image: url(${Conteudo3});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: top center;
    }
    #conteudo4{
        background-image: url(${Conteudo4});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: top center;
    }
    #conteudo5{
        background-image: url(${Conteudo5});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: top center;
    }
`

export const SubtitleInicio = styled.p`
    position: absolute;
    margin:10vh 0 0 30%;
    width: 50%;
    font-size: 1.5em;
    color: #0ab;
    padding: 1em;

    ::after{
        content: '⇣';
        color: #ccc;
        background-color: #fff1;
        border-radius: 20%;
        padding: 1em;
        position: absolute;
        top: 25vh;
        font-size: 1.1em;
        left: 20vw;
        @media (max-width: 768px) {
            display: none;
        }
    }
    @media (max-width:768px) {
        margin:20vh 0 0 30%;
    }
`

export const PaginaIni = styled.div`
    background-image: linear-gradient(-90deg, #11111d, #11111a);
    margin-bottom: 50vh;
`
export const DivAluguel = styled.div`
    margin-top: 20vh;

    form{
        select{
           align-self: center;
        }
    }
    #submitAluguel{
        margin: 5vh auto;
    }
`
export const DivCadastroVeiculos = styled.div`
    margin: 15vh auto;
    width: 50%;
    form{
        select{
            margin-left: 0;
        }
    }
`

export const DivImgHome = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(2em);
    margin-bottom: 10vh;
    background-color: #fff2;
    border-radius: 1em;
    img{
        max-width:60%;
        @media (max-width: 768px) {
            max-width:80%;
        }
    }
`
export const CardVaga = styled.div`
    width: 90%;
    margin: 10vh auto;
    background: radial-gradient(circle, rgba(0,144,130,1) 0%, rgba(17,17,26,1) 100%);
    border-radius: 15px;
    padding: 1em;
    p{
        margin-left: 20px;
        color: #ccc;
        font-size: 1.4em;
    }
    button{
        padding: 10px;
        float: right;
        cursor: pointer;
    }
`

export const ContainerAluguel = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 10vh;

    #sectionAluguel{
        width: 80%;
        scroll-behavior: smooth;
        overflow-y: scroll;
        height: 70vh;
        margin:10vh auto;

        h1{
            text-align:center;
            font-size: 2.2em;
            color: #ccc;
        }
        ::-webkit-scrollbar{
            background-color: #ccc5;
            width: 10px;
            border-radius: 1em;
        }
        ::-webkit-scrollbar-thumb{
            background-color: rgba(0,144,130,.5);
            border-radius: 1em;
            border: 2px solid #000;
        }
    }
    
`
export const TituloPerfil = styled.h1`

margin: 20vh 0 5vh 0;
text-align: center;
color: #ccc;
font-size: 2.4em;
`

export const DivPerfil = styled.div`
    background-color: #111110;
    margin: 0 5vh;
    border-radius: 1em;
    display: flex;
    justify-content: space-around;
    position: relative;
    overflow: hidden;
    ::after{
            content: "";
            background-color: #ccc2;
            position: absolute;
            height: 100%;
            width: 1%;
            left: 30vw;
            border-radius: 1em;

            @media (max-width: 768px) {
                display: none;
            }
        }

    #div-img-perfil{
        width: 180px;
        box-shadow: .5em 0 1em #0ab;
        height: 180px;
        margin: 1em;
        border-radius: 50%;
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: center;

        #logo-user{
            font-size: 9em;
            color: #0abe;
            margin-top: .28em;
        }

    }
    #conteudo-perfil{
        width: 50%;
        margin: 1em;
        border-radius: 1em;
        background-color:#222;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;

        .label-perfil{
            font-weight: bold;
            font-size: 1.4em;
            margin:.5em;
            color: #0ab;
        }
        .valor-label{
            color: #ccc;
            font-size: 1.2em;
        }
        #edit-button{
            background-color: transparent;
            color: #0ab;
            font-size: 1.2em;
            :hover{
                cursor: pointer;
            }
        }
    }
    @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
`

export const DivAvaliacao = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color:#ccc;
    margin-top: 15vh;
    padding: 1em;

    form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 1em;

        textarea{
            background-color: #fff2;
            border-radius: 1em;
            resize: none;
            width: 100%;
            color: #ccc;
            align-self: center;
            padding: 1em;
            margin-bottom: 3vh;
            font-size: 1.1em;
        }

        label{
            font-size: 1.3em;
        }
    }
`