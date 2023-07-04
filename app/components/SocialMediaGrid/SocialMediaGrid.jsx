import '../../styles/styles.css'
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Link from 'next/link';

export default function SocialMediaGrid() {
    return (
        <div className="contenedor-grid-socialMedia__Home-P4">
            <Link href='https://www.instagram.com/ignaarguello_/' class="item-grid-socialMedia__Home-P4">
                <div className='cont-logo-socialMed__Home-P4'>
                    <FiInstagram className='logo-socialMedia__Home-P4' />
                </div>
                <h3 className='text-instagram'>Instagram</h3>
            </Link>
            <Link target='_blank' href='https://www.linkedin.com/in/arguelloignacio/' class="item-grid-socialMedia__Home-P4">
                <div className='cont-logo-socialMed__Home-P4'>
                    <GrLinkedinOption className='logo-socialMedia__Home-P4' />
                </div>
                <h3>Linkedin</h3>
            </Link>
            <Link target='_blank' href='https://github.com/ignaarguello' class="item-grid-socialMedia__Home-P4">
                <div className='cont-logo-socialMed__Home-P4'>
                    <BsGithub className='logo-socialMedia__Home-P4' />
                </div>
                <h3>Github</h3>
            </Link>
            <Link href='https://api.whatsapp.com/send?phone=1128682405' class="item-grid-socialMedia__Home-P4">
                <div className='cont-logo-socialMed__Home-P4'>
                    <BsWhatsapp className='logo-socialMedia__Home-P4' />
                </div>
                <h3>Whatsapp</h3>
            </Link>
        </div>
    )
}