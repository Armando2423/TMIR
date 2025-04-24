import React from 'react';
import './TechSkills.css';

import SplitText from '../../styles/animations/SplitText';
import BackgroundWave from '../../styles/animations/wave/BackgroundWave';
import Grafics from '../../styles/animations/grafic/Grafics';
// language
import { useLanguage } from '../../configuration/languages/GlobalLanguages';

import { useInView } from "react-intersection-observer";

export default function TechSkills() {
    const { texts } = useLanguage();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.20,
    });


    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <section id="tech-skills" ref={ref} className={`tech-skills-section ${inView ? 'show' : ''}`}>
            <div className="container-tech-skills">
                <BackgroundWave />
                <div className="container-txt">
                    <SplitText
                        key={texts.tech_skills.title}
                        text={texts.tech_skills.title}
                        className="split-text"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <div className="container-p">
                        <p>{texts.tech_skills.txt}</p>
                    </div>
                </div>
                <Grafics />
            </div>
        </section>
    );
};
