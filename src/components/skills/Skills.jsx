import React, { useEffect, useState } from 'react';
import './Skills.css';
import Carousel from '../../styles/animations/carrusel/Carrusel';
import SplitText from '../../styles/animations/SplitText';

import { useLanguage } from '../../configuration/languages/GlobalLanguages';

export default function Skills() {
    const [carouselWidth, setCarouselWidth] = useState(500);
    const {texts} = useLanguage();

    useEffect(() => {
        const updateWidth = () => {
            const screenWidth = window.innerWidth;
            const calculatedWidth = Math.min(500, screenWidth * 0.9); // máximo 500px, o 90% de la pantalla
            setCarouselWidth(calculatedWidth);
        };

        updateWidth(); // Inicializa al montar
        window.addEventListener('resize', updateWidth); // Se actualiza al cambiar tamaño
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <section id="skills">
            <div className="container-skills">
                <Carousel
                    baseWidth={carouselWidth}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
                <div className="container-titule">
                    <SplitText
                        key={texts?.skills?.title}
                        text={texts?.skills?.title}
                        className="split-text"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <div className="line" />
                </div>
            </div>
        </section>
    );
}
