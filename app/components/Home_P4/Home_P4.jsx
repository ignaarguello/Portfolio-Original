/* Estilos */
import '../../styles/styles.css'

/* Iconos */
import { BsPatchCheckFill } from "react-icons/bs";

/* Componentes */
import SocialMediaGrid from '../SocialMediaGrid/SocialMediaGrid'
import FormContact from '../FormContact/FormContact'
import IndexPage from '../IndexPage/IndexPage';


export default function Home_P4() {
    return (
        <div id="container-general__Home-P4">
            {/* Seccion - 1 */}
            <section id='seccion-1__HomeP4'>
                <div id='container-titleAndLogo__Home-P4'>
                    <IndexPage title='04.Contacto' color='black' align='right' />
                </div>
                {/* <h3 id='TituloEmail__HomeP4'>・El email será respondido a la brevedad</h3> */}
                <FormContact />
            </section>
            {/* Seccion - 2 */}
            <section id='seccion-2__HomeP4'>
                <h4 id='texto-contacto__Home-P4'>Te invito a conectarte conmigo a través de mis redes sociales.</h4>
                <SocialMediaGrid />
            </section>
        </div>
    )
}