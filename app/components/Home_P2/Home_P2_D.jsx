import { skillsFrontend, skillsBackend } from '../../data/data_skills'

export default function Home_P2_Desktop() {
    return (
        <div id="container-general__HomeP2-D">
            <div className="div-interiores__HomeP2-D">
                <h2 className="title-skill__HomeP2-D">Frontend</h2>
                <h2 className="title-skill__HomeP2-D">Backend</h2>
            </div>
            <div className="div-interiores__HomeP2-D">
                <h2 className='title-eachSkill__HomeP2-D'>Habilidades</h2>
                <div id='container-eachSkill__HomeP2-D'>

                </div>
            </div>
        </div>
    )
}