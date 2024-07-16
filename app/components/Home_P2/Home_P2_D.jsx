'use client'
import { skillsFrontend, skillsBackend } from '../../data/data_skills'
import 'animate.css';
import { useState, useEffect, use } from 'react';

//Componentes
import IndexPage from '../IndexPage/IndexPage'

export default function Home_P2_Desktop() {
    const [skillActiva, setSkillActiva] = useState('frontend'); // Estado para la skill activa
    const [stateHabilidad, setStateHabilidad] = useState(false)

    const showSkillsBackend = (event) => {
        setSkillActiva('backend');
    }

    const showSkillsFrontend = (event) => {
        setSkillActiva('frontend');
    }

    useEffect(() => {
        let titulosSkills = document.querySelectorAll('.title-skill__HomeP2-D');
        if (skillActiva === 'backend') {
            setStateHabilidad(true) 
            titulosSkills[0].classList.remove('elemento-activo_HomeP3'); // Elimina la clase del frontend
            titulosSkills[1].classList.add('elemento-activo_HomeP3'); // Agrega la clase al backend
        } else if (skillActiva === 'frontend') {
            setStateHabilidad(false)
            titulosSkills[0].classList.add('elemento-activo_HomeP3'); // Agrega la clase al frontend
            titulosSkills[1].classList.remove('elemento-activo_HomeP3'); // Elimina la clase del backend
        } else {
            // Opcional: código a ejecutar si no hay skillActiva definida
        }
    }, [skillActiva]); // Dependencia del efecto secundario

    return (
        <div id="container-general__HomeP2-D">
            <div id='subContenedorGeneral_HomeP2-D'>
                <section id='contenedorTituloIndex_HomeP3'>
                    <IndexPage title='03.Habilidades' color='whitesmoke' id='TituloIndex_HomeP3' />
                </section>
                <section id='contenedorHabilidadesYLogos'>
                    <div className="div-interiores__HomeP2-D animate__animated animate__fadeIn animate__slow">
                        <h2 className="title-skill__HomeP2-D" onClick={showSkillsFrontend}>Frontend</h2>
                        <h2 className="title-skill__HomeP2-D" onClick={showSkillsBackend}>Backend</h2>
                    </div>
                    <div className="div-interiores__HomeP2-D animate__animated animate__fadeIn animate__slow">
                        <div id='container-second-eachSkill__HomeP2-D'>
                            {
                                !stateHabilidad ?
                                    skillsFrontend.map((elem, index) =>
                                        <div className='container-per-each-skill__HomeP2-D'>
                                            <div data-color={elem.color} className='elem-logo__HomeP2-D'>{elem.logo}</div>
                                            <h2 data-color={elem.color} className='elem-nombre__HomeP2-D'>{elem.nombre.toUpperCase()}</h2>
                                        </div>
                                    )
                                    :
                                    skillsBackend.map((elem, index) =>
                                        <div className='container-per-each-skill__HomeP2-D'>
                                            <div data-color={elem.color} className='elem-logo__HomeP2-D'>{elem.logo}</div>
                                            <h2 data-color={elem.color} className='elem-nombre__HomeP2-D'>{elem.nombre.toUpperCase()}</h2>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
