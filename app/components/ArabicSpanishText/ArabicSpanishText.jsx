'use client'
import React, { useState } from 'react';

const LanguageChange = () => {
    const [isSpanish, setIsSpanish] = useState(false);


    const handleMouseEnter = () => {
        setIsSpanish(true);
    };

    const handleMouseLeave = () => {
        setIsSpanish(false);
    };

    return (
        <div
            className="container-languaje-ArabicSpanish__HomeP1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isSpanish ? (
                <span className="spanish-text">¡Hola! Mi nombre es Ignacio Argüello, soy Desarrollador Web especializado en crear experiencias digitales cautivadoras. Con una sólida base en diseño y desarrollo, mi objetivo es fusionar la estética y la funcionalidad para ofrecer soluciones web únicas y atractivas. Siempre busco crear experiencias digitales personalizadas y centradas en el usuario. Soy apasionado por la creación de sitios web intuitivos, accesibles y visualmente impactantes. ¡Bienvenido a mi portfolio!</span>
            ) : (
                <span className="arabic-text">مرحبا! اسمي جناسيو ، أنا مطور ويب متخصص في إنشاء تجارب رقمية آسرة. مع خلفية قوية في التصميم والتطوير ، هدفي هو دمج الجماليات والوظائف لتقديم حلول ويب فريدة وجذابة. أسعى دائمًا إلى إنشاء تجارب رقمية مخصصة تركز على المستخدم. أنا متحمس لإنشاء مواقع ويب سهلة الاستخدام ويمكن الوصول إليها ومذهلة بصريًا. مرحبا بكم في محفظتي!</span>
            )}
        </div>
    );
};

export default LanguageChange;
