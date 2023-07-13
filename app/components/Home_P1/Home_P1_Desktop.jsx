'use client'
import '../../styles/styles.css'
import Image from 'next/image'
import ArabicSpanishText from '../ArabicSpanishText/ArabicSpanishText'


export default function Home_P1_Desktop() {

  const TranslateElement = () => {
    const image_translate = document.querySelector('#Image-Main__HomeP1-DESKTOP')
    image_translate?.classList?.add('TranslateElement')
  }

  const TranslateElementToOriginal = () => {
    const image_translate = document.querySelector('#Image-Main__HomeP1-DESKTOP')
    image_translate?.classList?.remove('TranslateElement')
  }


  return (
    <div id="container-general__HomeP1-DESKTOP">
      <div className="contenedor-interior__HomeP1-DESKTOP">
        <div id='container-image-HomeP1-DESKTOP' onMouseEnter={TranslateElement} onMouseLeave={TranslateElementToOriginal}>
          <Image src="/images/foto-igna.jpg" alt="X" id='Image-Main__HomeP1-DESKTOP' width={50} height={50} sizes='100%' />
          {/* <p id='text__HomeP1-DESKTOP'>
            ¡Hola! Mi nombre es Ignacio Argüello, soy Desarrollador Web especializado en crear experiencias digitales cautivadoras. Con una sólida base en diseño y desarrollo, mi objetivo es fusionar la estética y la funcionalidad para ofrecer soluciones web únicas y atractivas. Siempre busco crear experiencias digitales personalizadas y centradas en el usuario. Soy apasionado por la creación de sitios web intuitivos, accesibles y visualmente impactantes. ¡Bienvenido a mi portfolio!
          </p> */}
          <ArabicSpanishText />
        </div>
      </div>
      <div className="contenedor-interior__HomeP1-DESKTOP">
        <h2 id='title-IgnacioARG__HomeP1-DESKTOP'>Argüello Ignacio</h2>
        <h3>Desarrollador Web</h3>
      </div>
    </div>
  )
}
