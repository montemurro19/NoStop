
import { Link } from "react-router-dom"

import { LinkCadastro, MenuHamb, MiniMenu, PublicNav } from "../styled"
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import { RiLoginBoxFill } from "@react-icons/all-files/ri/RiLoginBoxFill";
import { FaUserPlus } from "@react-icons/all-files/fa/FaUserPlus";

function scrollTop() {
    window.scrollTo(0)
    
}

export default function Menu(){
    
    return(
        <>
            <PublicNav>
                <MiniMenu>
                    <MenuHamb/>
                    <MenuHamb/>
                    <MenuHamb/>
                </MiniMenu>
                
                <ul>
                    <li>
                        <HiHome className="iconHome"/>
                        <Link onClick={scrollTop} to="/">Home</Link>
                    </li>
                    <LinkCadastro>
                        <li>
                            <FaUserPlus className="iconHome"/>
                            <Link onClick={scrollTop} to="/CadastroCliente">Cadastro</Link>
                        </li>
                    </LinkCadastro>
                    <li>
                        <RiLoginBoxFill className="iconHome"/>
                        <Link onClick={scrollTop} to="/login">Login</Link>
                    </li>
                </ul>
            </PublicNav>

        </>
    )

}