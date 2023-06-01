import 'animate.css';

export default function Home_P1() {
  const var_text = `< Desarrollador Web />`

  return (
    <div id="container-general__Home_P1">
      <img id="image-home_P1" src="../images/Argüello Ignacio.jpg" alt="" />
      <div id="container-info__Home-P1">
        <h2 className="item-text__Home-P1 animate__animated animate__slideInRight">Argüello Ignacio</h2>
        <h3 className="item-text__Home-P1 animate__animated animate__bounceIn animate__delay-1s animate__slow">{var_text}</h3>
        {/* <div id="button-descargarCV__Home__P1">Descargar CV</div> */}
      </div>
    </div>
  )
}
