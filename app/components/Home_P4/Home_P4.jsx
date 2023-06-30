import '../../styles/styles.css'
import { BsPatchCheckFill } from "react-icons/bs";
import SocialMediaGrid from '../SocialMediaGrid/SocialMediaGrid'
import FormContact from '../FormContact/FormContact'

export default function Home_P4() {
    return (
        <div id="container-general__Home-P4">
            <div id='container-titleAndLogo__Home-P4'>
                <h2 id='titulo-contacto__Home-P4'>Contacto</h2>
                <BsPatchCheckFill id='logo-contacto__Home-P4' />
            </div>
            <FormContact />
            <hr className="hr" />
            <hr className="hr" />
            <hr className="hr" />
            <h4 id='texto-contacto__Home-P4'>Te invito a conectarte conmigo a través de mis redes sociales.</h4>
            <SocialMediaGrid />
        </div>
    )
}