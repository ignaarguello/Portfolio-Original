'use client'
import '../../styles/styles.css'
import Image from 'next/image'


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
          <ul id='lista__HomeP1-DESKTOP'>
            <li className="item-li__HomeP1-DESKTOP">De Argentina 🇦🇷</li>
            <li className="item-li__HomeP1-DESKTOP">24 años.</li>
            <li className="item-li__HomeP1-DESKTOP">11-2868-2405 📱</li>
          </ul>
        </div>
      </div>
      <div className="contenedor-interior__HomeP1-DESKTOP">
        <h2 id='title-IgnacioARG__HomeP1-DESKTOP'>Argüello Ignacio</h2>
        <h3>Desarrollador Web</h3>
      </div>
    </div>
  )
}
