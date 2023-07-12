import '../../styles/styles.css'
import Image from 'next/image'


export default function Home_P1_Desktop() {
  return (
    <div id="container-general__HomeP1-DESKTOP">
      <div className="contenedor-interior__HomeP1-DESKTOP">
        <div id='container-image-HomeP1-DESKTOP'>
          <Image src="/images/FotoIgna1.jpg" alt="X" id='Image-Main__HomeP1-DESKTOP' width={50} height={50} sizes='100'/>
        </div>
      </div>
      <div className="contenedor-interior__HomeP1-DESKTOP">
        <h2 id='title-IgnacioARG__HomeP1-DESKTOP'>Argüello Ignacio</h2>
        <h3>Desarrollador Web</h3>
      </div>
    </div>
  )
}
