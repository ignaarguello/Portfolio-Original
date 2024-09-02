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
                <FormContact />
            </section>
            {/* Seccion - 2 */}
            <section id='seccion-2__HomeP4'>
                <div id='container-titleAndLogo__Home-P4'>
                    <IndexPage title='03.Contacto' color='black' align='right' />
                </div>
                <h2 id='TituloPanelRedesSociales__HomeP4'>Panel de Redes Sociales</h2>
                <SocialMediaGrid />
            </section>
        </div>
    )
}