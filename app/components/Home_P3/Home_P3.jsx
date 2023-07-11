import Link from 'next/link';
import { BsGithub } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { proyectos } from '../../data/data_projects'
import { BsArrowRight } from "react-icons/bs";

export default function Home_P3() { 
    return (
        <div id="container-general__Home-P3">
            <h2 id="titulo-proyectos__Home-P3">Proyectos Relevantes</h2>
            <div id="contenedor-cards-projects__Home-P3">
                {
                    proyectos.map(elem =>
                        <div key={elem.id} className="card-project__Home-P3" style={{
                            backgroundImage: `url(${elem.imagen})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }} >
                            <h2 className='nombre_card_project__Home-P3'>{elem.nombre}</h2>
                            <div className='container-refs__Home-P3'>
                                <Link className='cont-ref__Home-P3' href={elem.url_gh} target="_blank">
                                    <BsGithub className='btn-ref__Home-P3' />
                                </Link>
                                <Link className='cont-ref__Home-P3' href={elem.url_deploy} target="_blank">
                                    <BsFillShareFill className='btn-ref__Home-P3' />
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link id='container-ver-mas-proyectos__Home-P3' href='/pages/projects'>
                <h2 id='titulo-ver-mas__Home-P3'>+ Ver más proyectos</h2>
                <BsArrowRight id='flecha-right__Home-P3' />
            </Link>
        </div >
    )
}
