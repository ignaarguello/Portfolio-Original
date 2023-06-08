import '../../styles/styles.css'
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";

export default function Home_P2() {

  const skillsFrontend = [
    { titulo: 'Frontend' },
    { "nombre": 'html', "logo": <FaHtml5 className='logo-skill' />, },
    { "nombre": 'css', "logo": <SiCss3 className='logo-skill' />, },
    { "nombre": 'javascript', "logo": <DiJavascript1 className='logo-skill' />, },
    { "nombre": 'react', "logo": <DiReact className='logo-skill' />, },
    { "nombre": 'NextJS', "logo": <TbBrandNextjs className='logo-skill' />, },
  ]

  const skillsBackend = [
    { titulo: 'Backend' },
    { "nombre": 'node', "logo": <FaNodeJs className='logo-skill' />, },
    { "nombre": 'express', "logo": <SiExpress className='logo-skill' />, },
    { "nombre": 'mongo DB', "logo": <SiMongodb className='logo-skill' />, },
    { "nombre": 'api rest', "logo": <AiOutlineApi className='logo-skill' />, },
  ]

  const alternativeSkills = skillsFrontend.slice(4, 7)

  return (
    <div id="container-general__Home__P2">
      <h2 id='titulo-habilidades__Home-P2'>Habilidades Técnicas:</h2>
      <div className='container-GeneralSkill__Home-P2'>
        {/* Comienzo de contenedor FRONTEND */}
        {
          skillsFrontend.map(elem =>
            <div className='mt-2'>
              <h2 className='titulo-stack__Home-P2'>{elem?.titulo}</h2>
              <div className='cont-eachSkill__Home-P2'>
                <h2 className='nombre-skill'>{elem?.nombre?.toUpperCase()}</h2>
                {elem?.logo}
              </div>
            </div>
          )
        }
        {/* Comienzo de contenedor BACKEND */}
        {
          skillsBackend.map(elem =>
            <div className='mt-4'>
              <h2 className='titulo-stack__Home-P2'>{elem?.titulo}</h2>
              <div className='cont-eachSkill__Home-P2'>
                <h2 className='nombre-skill'>{elem?.nombre?.toUpperCase()}</h2>
                {elem?.logo}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
