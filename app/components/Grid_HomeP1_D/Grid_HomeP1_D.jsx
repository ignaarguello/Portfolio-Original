'use client'
import '../../styles/styles.css'
import Image from 'next/image'

export default function Grid_HomeP1_D() {
    return (
        <div id="container-gridHomeP1_Desktop">
                <Image src='/images/foto-igna2.jpg' width={100} height={100} sizes='100%' className='image-left__HomeP1-DESKTOP' />
            <div className="container-right-flex__HomeP1-DESKTOP">
                <Image src='/images/foto-igna.jpg' width={100} height={100} sizes='100%' className='image-right__HomeP1-DESKTOP' />
                <Image src='/images/FotoIgna.jpg' width={100} height={100} sizes='100%' className='image-right__HomeP1-DESKTOP' />
            </div>
        </div>
    )
}