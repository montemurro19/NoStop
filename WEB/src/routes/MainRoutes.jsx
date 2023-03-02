import {Routes, Route} from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import CadastroCliente from '../components/CadastroCliente'
import PaginaInicial from '../components/Cliente/PaginaInicial'
import CadastroVeiculo from '../components/Cliente/CadastroVeiculo'
import Aluguel from '../components/Cliente/Aluguel'
import Historico from '../components/Cliente/Historico'
import Perfil from '../components/Cliente/Perfil'
import Avaliacao from '../components/Cliente/Avaliacao'
import ConfirmacaoAluguel from '../components/Cliente/ConfirmacaoAluguel'
import Veiculos from '../components/Cliente/Veiculos'


export default function MainRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/paginaInicial' element={<PaginaInicial/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cadastroCliente' element={<CadastroCliente/>}/>
            <Route path='/cadastroVeiculo' element={<CadastroVeiculo/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/aluguel' element={<Aluguel/>}/>
            <Route exact path='/confirmacaoAluguel/:id/:precoHora' element={<ConfirmacaoAluguel/>}/>
            <Route path='/historico' element={<Historico/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/veiculos' element={<Veiculos/>}/>
            <Route path='/avaliacao/:id' element = {<Avaliacao/>}/>
        </Routes>
    )
}