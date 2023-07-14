'use client'
import { useEffect } from 'react'
import '../../styles/styles.css'
import Image from 'next/image'
import ArabicSpanishText from '../ArabicSpanishText/ArabicSpanishText'
import 'animate.css';


export default function Home_P1_Desktop() {
  const TranslateElement = () => {
    const image_translate = document.querySelector('#Image-Main__HomeP1-DESKTOP')
    image_translate?.classList?.add('TranslateElement')
  }

  const TranslateElementToOriginal = () => {
    const image_translate = document.querySelector('#Image-Main__HomeP1-DESKTOP')
    image_translate?.classList?.remove('TranslateElement')
  }

  const TranslateAndShowElement = () => {
    TranslateElement()
    const second_image = document.querySelector('#Image-Main-Second__HomeP1-DESKTOP')
    second_image?.classList?.add('TranslateAndShowElement-2')
  }

  const DeleteTranslateAndShowElement = () => {
    TranslateElementToOriginal()
    const second_image = document.querySelector('#Image-Main-Second__HomeP1-DESKTOP')
    second_image?.classList?.remove('TranslateAndShowElement-2')
  }

  useEffect(() => {
    TranslateAndShowElement()
  }, [])

  return (
    <div id="container-general__HomeP1-DESKTOP">
      <div className="contenedor-interior__HomeP1-DESKTOP">
        <div id='container-image-HomeP1-DESKTOP' className='animate__animated animate__fadeIn animate__delay-1s' /* onMouseEnter={TranslateAndShowElement} onMouseLeave={DeleteTranslateAndShowElement} */>
          <Image src="/images/foto-igna.jpg" alt="X" id='Image-Main__HomeP1-DESKTOP' width={50} height={50} sizes='100%' />
          <Image src="/images/foto-igna3.png" alt="X" id='Image-Main-Second__HomeP1-DESKTOP' width={50} height={50} sizes='100%' />
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
