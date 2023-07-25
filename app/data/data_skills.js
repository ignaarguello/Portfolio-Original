import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { DiPython } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";

const skillsFrontend = [
    { "nombre": 'html', "logo": <FaHtml5 className='logo-skill' style={{ '--color-hex': '#EC6835' }} />, },
    { "nombre": 'css', "logo": <SiCss3 className='logo-skill' style={{ '--color-hex': '#2070C2' }} />, },
    { "nombre": 'javascript', "logo": <DiJavascript1 className='logo-skill' style={{ '--color-hex': '#F7E033' }} />, },
    { "nombre": 'react', "logo": <DiReact className='logo-skill' style={{ '--color-hex': '#74E1F9' }} />, },
    { "nombre": 'nextJS', "logo": <TbBrandNextjs className='logo-skill' style={{ '--color-hex': '#a3a3a3' }} />, },
    { "nombre": 'tailwind', "logo": <SiTailwindcss className='logo-skill' style={{ '--color-hex': '#50BFF8' }} />, },
    { "nombre": 'bootstrap', "logo": <BsFillBootstrapFill className='logo-skill' style={{ '--color-hex': '#7B4FF6' }} />, },
]

const skillsBackend = [
    { "nombre": 'node', "logo": <FaNodeJs className='logo-skill' style={{ '--color-hex': '#8CC849' }} />, },
    { "nombre": 'express', "logo": <SiExpress className='logo-skill' style={{ '--color-hex': '#EBEBEB' }} />, },
    { "nombre": 'mongo DB', "logo": <SiMongodb className='logo-skill' style={{ '--color-hex': '#356D50' }} />, },
    { "nombre": 'python', "logo": <DiPython className='logo-skill' style={{ '--color-hex': '#366D9B' }} />, },
    { "nombre": 'mysql', "logo": <SiMysql className='logo-skill' style={{ '--color-hex': '#266590' }} />, },
    { "nombre": 'api rest', "logo": <AiOutlineApi className='logo-skill' style={{ '--color-hex': '#FFFFFF' }} />, },
    { "nombre": 'flask', "logo": <SiFlask className='logo-skill' style={{ '--color-hex': '#D79D2E' }} />, },
]


export { skillsFrontend, skillsBackend }