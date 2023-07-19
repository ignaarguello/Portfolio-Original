'use client'
import '../../styles/styles.css'
import ArabicSpanishText from '../ArabicSpanishText/ArabicSpanishText'
import Grid_HomeP1_D from '../Grid_HomeP1_D/Grid_HomeP1_D'
import 'animate.css';

export default function Home_P1_Desktop() {
  return (
    <div id="container-general__HomeP1-DESKTOP">
      <Grid_HomeP1_D />
      <div className="contenedor-interior__HomeP1-DESKTOP-1">
        <div id='container-image-HomeP1-DESKTOP' className='animate__animated animate__fadeIn animate__delay-1s'>
          <ArabicSpanishText />
        </div>
      </div>
      <div className="contenedor-interior__HomeP1-DESKTOP-2">
        <h2 id='title-IgnacioARG__HomeP1-DESKTOP'>Argüello Ignacio</h2>
        <h3>Desarrollador Web</h3>
      </div>
    </div>
  )
}
