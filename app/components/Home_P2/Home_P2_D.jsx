'use client'
import { skillsFrontend, skillsBackend } from '../../data/data_skills'
import 'animate.css';
import { useState } from 'react';


export default function Home_P2_Desktop() {
    const [stateSkill, setStateSkill] = useState(undefined)

    //Funcion que cambia el estado de las skills
    const showSkillsFrontend = () => {
        if (stateSkill === undefined) {
            console.log('Empty')
        }
        if (stateSkill === true) {
            setStateSkill(false)
        }
    }

    const showSkillsBackend = () => {
        if (stateSkill === undefined) {
            setStateSkill(true)
        }
        else if (stateSkill === false) {
            setStateSkill(true)
        }
    }

    return (
        <div id="container-general__HomeP2-D">
            <div id='subContenedorGeneral_HomeP2-D'>
                <div className="div-interiores__HomeP2-D">
                    <h2 className="title-skill__HomeP2-D" onClick={showSkillsFrontend}>•Frontend</h2>
                    <h2 className="title-skill__HomeP2-D" onClick={showSkillsBackend}>•Backend</h2>
                </div>
                <div className="div-interiores__HomeP2-D">
                    <h2 className='title-eachSkill__HomeP2-D'>Habilidades</h2>
                    {/*  <hr id='hr1_habilidades-HomeP2-D' /> */}
                    <div id='container-second-eachSkill__HomeP2-D'>
                        {
                            !stateSkill ?
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
            </div>
        </div>
    )
}