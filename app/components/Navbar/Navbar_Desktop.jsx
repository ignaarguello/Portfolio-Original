"use client"

import '../../styles/styles.css'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Link from 'next/link';
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Navbar_Desktop() {
    return (
        <>
            <div id='container-general__navbar-desktop'>
                <div className="containers-navbar-desktop">
                    <Link href='/'> <img src="../images/logo-ia.png" alt="Logo Arguello Ignacio Developer" id='logo-ia-desktop' /></Link>
                </div>
                <div className="containers-navbar-desktop">
                    <Link id='link-ref__navbar-desktop' href='/pages/about'>Sobre Mi</Link>
                    <Link id='link-ref__navbar-desktop' href='/pages/projects'>Proyectos</Link>
                    <Link id='link-ref__navbar-desktop' href='/pages/contacto'>Contacto</Link>
                </div>
                <div className="containers-navbar-desktop">
                    <Link id='contenedor-social-media__navbar-desktop' href='https://www.instagram.com/ignaarguello_/'><FiInstagram className='logo-social-media__navbar-desktop' /></Link>
                    <Link id='contenedor-social-media__navbar-desktop' href='https://www.linkedin.com/in/arguelloignacio/'><GrLinkedinOption className='logo-social-media__navbar-desktop' /></Link>
                    <Link id='contenedor-social-media__navbar-desktop' href='https://github.com/ignaarguello'><BsGithub className='logo-social-media__navbar-desktop' /></Link>
                    <Link id='contenedor-social-media__navbar-desktop' href='https://api.whatsapp.com/send?phone=1128682405'><BsWhatsapp className='logo-social-media__navbar-desktop' /></Link>
                </div>
            </div>
        </>

    )
}