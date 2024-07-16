'use client'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './ParticlesComponent.css'

const ParticleComponent = () => {
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log('');
    }, []);

    return (
        <Particles id="tsparticles" className="contenedor-particles__Home-P1" url="./utils/particlesjs-config.json" init={particlesInit} loaded={particlesLoaded} />
    );
};

export default ParticleComponent