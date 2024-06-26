"use client";
import "../../styles/styles.css";
import "animate.css";

//Componentes
import Grid_HomeP1_D from "../Grid_HomeP1_D/Grid_HomeP1_D";
import IndexPage from "../IndexPage/IndexPage";

export default function Home_P1_Desktop() {
  return (
    <div id="container-general__HomeP1-DESKTOP">
      <div id="container_tituloYSubtitulos_HomeP1-DESKTOP">
        <IndexPage title="01.Home" align="right" />
        <h2 id="title-IgnacioARG__HomeP1-DESKTOP">Argüello Ignacio</h2>
      </div>
      <Grid_HomeP1_D />
    </div>
  );
}
