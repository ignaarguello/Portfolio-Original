"use client"

import '../../styles/styles.css'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Link from 'next/link';
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import UseAnimations from 'react-useanimations';
import menu3 from 'react-useanimations/lib/menu4'

export default function Navbar() {
    const [visible, setVisible] = useState(false)

    const getVisibleMenuHM = () => {
        const menu_hamburguesa = document.querySelector('#contenedor-hamburguesa__navbar-mobile')
        if (!visible) {
            menu_hamburguesa?.classList?.remove('hm-hidden')
            menu_hamburguesa?.classList?.add('hm-visible')
            setVisible(true)
        }

        if (visible) {
            menu_hamburguesa?.classList?.remove('hm-visible')
            menu_hamburguesa?.classList?.add('hm-hidden')
            setVisible(false)
        }
    }

    return (
        <div className='flex flex-col sticky top-0 z-10'>
            <div id='container-general__navbar-mobile'>
                <Link href='/' className="containers-navbar">
                    <img src="../images/logo-ia.png" alt="Logo Arguello Ignacio Developer" id='logo-ia' />
                </Link>
                <div className="containers-navbar">
                    <UseAnimations
                        animation={menu3}
                        size={44}
                        strokeColor='white'
                        id='icon-nav-mobile'
                        onClick={getVisibleMenuHM} />
                </div>
            </div>
            <div id='contenedor-hamburguesa__navbar-mobile' className='hm-hidden'>
                <Link href='/pages/about' className="item-list-navbar-mobile">Sobre Mi</Link>
                <Link href='/pages/projects' className="item-list-navbar-mobile">Proyectos</Link>
                <Link href='/pages/contacto' className="item-list-navbar-mobile">Contacto</Link>
                <div className="item-list-navbar-mobile">
                    <Link id='contenedor-social-media__navbar' target='_blank' href='https://www.instagram.com/ignaarguello_/'><FiInstagram className='logo-social-media__navbar-mobile' /></Link>
                    <Link id='contenedor-social-media__navbar' target='_blank' href='https://www.linkedin.com/in/arguelloignacio/'><GrLinkedinOption className='logo-social-media__navbar-mobile' /></Link>
                    <Link id='contenedor-social-media__navbar' target='_blank' href='https://github.com/ignaarguello'><BsGithub className='logo-social-media__navbar-mobile' /></Link>
                    <Link id='contenedor-social-media__navbar' target='_blank' href='https://api.whatsapp.com/send?phone=1128682405'><BsWhatsapp className='logo-social-media__navbar-mobile' /></Link>
                </div>
            </div>
        </div>
    )
}