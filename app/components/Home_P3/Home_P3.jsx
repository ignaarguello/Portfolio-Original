import Link from 'next/link';
import Image from 'next/image';
import { BsGithub } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { proyectos } from '../../data/data_projects'

export default function Home_P3() {

    return (
        <div id="container-general__Home-P3">
            <h2 id="titulo-proyectos__Home-P3">Proyectos</h2>
            <div id="contenedor-cards-projects__Home-P3">
                {
                    proyectos.map(elem =>
                        <div className="card-project__Home-P3" style={{
                            backgroundImage: `url(${elem.imagen})`,
                            backgroundSize: "contain",
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
        </div >
    )
}
{/* <div className="container-imagen__Home-P3">
    <img className="imagen-card-project__Home-P3" src={elem.imagen} alt={elem.nombre} />
</div>
<div className="body-card-project__Home-P2">
    <h2 className='nombre_card_project__Home-P2'>{elem.nombre}</h2>
    <div className='container-refs__Home-P2'>
        <Link className='cont-ref__Home-P2' href={elem.url_gh}>
            <BsGithub className='btn-ref__Home-P2' />
            <BsFillShareFill className='btn-ref__Home-P2' />
        </Link>
        <Link className='cont-ref__Home-P2' href={elem.url_deploy}>
            <BsFillShareFill className='btn-ref__Home-P2' />
        </Link>
    </div>
</div> */}