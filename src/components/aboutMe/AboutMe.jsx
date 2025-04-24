import React from 'react';
import SplitText from '../../styles/animations/SplitText';
import './AboutMe.css';
// language
import {useLanguage} from "../../configuration/languages/GlobalLanguages";
// API see component 
import {useInView} from "react-intersection-observer";

export default function AboutMe() {
    const {texts} = useLanguage();

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.20,
    });

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <>
        <section id="about-me" ref={ref} className={`about-me-section ${inView ? 'show' : ''}`}>
            <div className="container-main">
                <div className="container-titule">
                    <SplitText
                        key={texts?.about_me?.title}
                        text={texts?.about_me?.title}
                        className="split-text"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
                <div className="main-container-card">

                    <div className="container-card">
                        <div className="card">
                            <div className="top-card">
                                <div className="circles">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="terminal-body">
                                    <span className="green-text">visitor@portfolio</span>
                                    <span className="white-text">:~$</span>
                                    <span className="blue-text"> cat about-me.txt</span>
                                </div>
                                <div className="card-bash">
                                    <span>Bash</span>
                                </div>
                            </div>
                            <div className="echo-card">
                                <span>$<span>echo</span></span>
                            </div>
                            <div className="card-text">
                                <span>{texts?.about_me?.txt}</span>
                            </div>
                            <div className="bottom-card">
                                <span>$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};