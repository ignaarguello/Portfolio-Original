import '../../styles/styles.css'
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Home_P4() {
    return (
        <div id="container-general__Home-P4">
            <h2 id='titulo-contacto__Home-P4'>Contacto</h2>
            <div class="contenedor-grid-socialMedia__Home-P4">
                <div class="item-grid-socialMedia__Home-P4">
                    <div className='cont-logo-socialMed__Home-P4'>
                        <FiInstagram className='logo-socialMedia__Home-P4' />
                    </div>
                    <h3>Instagram</h3>
                </div>
                <div class="item-grid-socialMedia__Home-P4">
                    <div className='cont-logo-socialMed__Home-P4'>
                        <GrLinkedinOption className='logo-socialMedia__Home-P4' />
                    </div>
                    <h3>Linkedin</h3>
                </div>
                <div class="item-grid-socialMedia__Home-P4">
                    <div className='cont-logo-socialMed__Home-P4'>
                        <BsGithub className='logo-socialMedia__Home-P4' />
                    </div>
                    <h3>Github</h3>
                </div>
                <div class="item-grid-socialMedia__Home-P4">
                    <div className='cont-logo-socialMed__Home-P4'>
                        <BsWhatsapp className='logo-socialMedia__Home-P4' />
                    </div>
                    <h3>Whatsapp</h3>
                </div>
            </div>
        </div>
    )
}