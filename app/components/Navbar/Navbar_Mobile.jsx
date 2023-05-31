"use client"

import '../../styles/styles.css'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

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
        <>
            <div id='container-general__navbar-mobile'>
                <div className="containers-navbar">
                    <img src="./images/logo-ia.png" alt="Logo Arguello Ignacio Developer" id='logo-ia' />
                </div>
                <div className="containers-navbar">
                    <Bars3Icon id='icon-nav-mobile' onClick={getVisibleMenuHM} />
                </div>
            </div>
            <div id='contenedor-hamburguesa__navbar-mobile' className='hm-hidden'>
                <div className="item-list-navbar-mobile">About Me</div>
                <div className="item-list-navbar-mobile">Proyectos</div>
                <div className="item-list-navbar-mobile">Contacto</div>
                <div className="item-list-navbar-mobile">Logos</div>
            </div>
        </>

    )
}