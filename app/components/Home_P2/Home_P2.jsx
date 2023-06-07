import '../../styles/styles.css'
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs} from "react-icons/fa";
import { SiExpress} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

export default function Home_P2() {

  const skillsFrontend = [
    { titulo: '_ Frontend _' },
    { "nombre": 'html', "logo": <FaHtml5 className='logo-skill' />, },
    { "nombre": 'css', "logo": <SiCss3 className='logo-skill' />, },
    { "nombre": 'javascript', "logo": <DiJavascript1 className='logo-skill' />, },
  ]

  const skillsBackend = [
    { titulo: '_ Backend _' },
    { "nombre": 'Node', "logo": <FaNodeJs className='logo-skill' />, },
    { "nombre": 'Express', "logo": <SiExpress className='logo-skill' />, },
    { "nombre": 'MongoDB', "logo": <SiMongodb className='logo-skill' />, },
  ]
  
  return (
    <div id="container-general__Home__P2">
      <hr />
      <h2 id='titulo-habilidades__Home-P2'>Habilidades Técnicas:</h2>
      <div className='container-GeneralSkill__Home-P2'>
        {
          skillsFrontend.map(elem =>
            <div className='my-5'>
              <h2 className='titulo-stack__Home-P2'>{elem?.titulo}</h2>
              <div className='cont-eachSkill__Home-P2'>
                <h2 className='nombre-skill'>{elem?.nombre?.toUpperCase()}</h2>
                {elem?.logo}
              </div>
            </div>
          )
        }
        {/*  */}
        {
          skillsBackend.map(elem =>
            <>
              <h2 className='titulo-stack__Home-P2'>{elem?.titulo}</h2>
              <div className='cont-eachSkill__Home-P2'>
                <h2 className='nombre-skill'>{elem?.nombre?.toUpperCase()}</h2>
                {elem?.logo}
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
