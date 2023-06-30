import 'bootstrap/dist/css/bootstrap.css';
import Home_P1 from './components/Home_P1/Home_P1'
import Home_P2 from './components/Home_P2/Home_P2'
import Home_P3 from './components/Home_P3/Home_P3'
import Home_P4 from './components/Home_P4/Home_P4'
import ParticleComponent from './components/Particles/ParticlesComponent'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <ParticleComponent />
      <Home_P1 />
      <Home_P2 />
      <Home_P3 />
      <Home_P4 />
    </div>
  )
}
