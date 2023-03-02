import { DivDevs, DivFooter, DivLogo } from "../styled"
import ImgLogo from '../img/logonp2.jpeg'
export default function Footer() {

    return(
        <>
            <DivFooter>
                <DivLogo>
                    <img src={ImgLogo} alt="logo"/>
                </DivLogo>
                <DivDevs>
                    <ul>
                        <li>- Desenvolvedores -</li>
                        <li>Julio Machado RM:93285</li>
                        <li>Victor Hugo RM:95680</li>
                        <li>Vitório Graton RM:95476</li>
                        <li>Matheus Montemurro RM:94689</li>
                        <li>Ricardo Kim RM:94190</li>
                    </ul>
                </DivDevs>
                
                
            </DivFooter>
        </>
    )
        
}