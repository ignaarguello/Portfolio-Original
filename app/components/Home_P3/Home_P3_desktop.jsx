import "../../styles/styles.css";

//Componentes
import IndexPage from "../IndexPage/IndexPage";

//Data
import { proyectos } from "../../data/data_projects";

//Iconos y Librerias
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";

export default function Home_P3_desktop() {
  return (
    <div id="contenedor-general__HomeP3-D">
      <IndexPage title="02.Proyectos" align="right" />
      <div id="contenedorProyectos_HomeP3_DESK">
        {proyectos.map((elem) => (
          <div className="CardProyecto_HomeP3">
            <div
              className="ImageCard_HomeP3"
              key={elem.id}
              style={{
                backgroundImage: `url(${elem.imagen})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <h2 className="TituloNombreCard_HomeP3">{elem.nombre}</h2>
            <span>{elem.type}</span>
            <div className="ContenedorIconosNavegacion_HomeP3">
              <Link
                className="cont-ref__Home-P3"
                href={elem.url_gh}
                target="_blank"
              >
                <BsGithub className="btn-ref__Home-P3" />
              </Link>
              <Link
                className="cont-ref__Home-P3"
                href={elem.url_deploy}
                target="_blank"
              >
                <BsFillShareFill className="btn-ref__Home-P3" />
              </Link>
            </div>
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4">Conocer más +</button>
          </div>
        ))}
      </div>
    </div>
  );
}
