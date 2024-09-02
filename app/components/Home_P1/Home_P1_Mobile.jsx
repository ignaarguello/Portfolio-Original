'use client'
import 'animate.css';


export default function Home_P1_Mobile() {
  const var_text = `< Desarrollador Web />`

  return (
    <div id="container-general__Home_P1">
      <img id="image-home_P1" src="../images/foto-igna2.jpg" alt="" className='animate__animated animate__fadeIn animate__slow' />
      <div id="container-info__Home-P1">
        <h2 className="item-text__Home-P1 animate__animated animate__fadeIn animate__delay-1s animate__slow">Argüello Ignacio</h2>
        <h3 className="item-text__Home-P1 animate__animated animate__fadeIn animate__delay-1s animate__slow">{var_text}</h3>
        <div id='container-texto__home__P1'>
          <p id='texto-home__P1' className='animate__animated animate__fadeIn animate__delay-2s animate__slow'>¡Hola! Mi nombre es Ignacio Argüello, soy Desarrollador Web especializado en crear experiencias digitales cautivadoras. Con una sólida base en diseño y desarrollo, mi objetivo es fusionar la estética y la funcionalidad para ofrecer soluciones web únicas y atractivas. Siempre busco crear experiencias digitales personalizadas y centradas en el usuario. Soy apasionado por la creación de sitios web intuitivos, accesibles y visualmente impactantes. Bienvenido a mi portfolio!</p>
        </div>
      </div>
    </div>
  )
}
