import "../../styles/styles.css";

//Componentes
import IndexPage from "../IndexPage/IndexPage";

//Data
//Data
import { proyectos } from "../../data/data_projects";

export default function Home_P3_desktop() {
  return (
    <div id="contenedor-general__HomeP3-D">
      <IndexPage title="02.Proyectos" align="right" />
      <div id="contenedorProyectos_HomeP3_DESK">
        {proyectos.map((elem) => (
          <div
            className="CardProyecto_HomeP3"
            key={elem.id}
            style={{
              backgroundImage: `url(${elem.imagen})`,
              backgroundSize: "cover 50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
              <h2>{elem.nombre}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
