import React, { useEffect, useRef } from 'react';
import './Home.css';
import { matrixRain } from '../../styles/animations/RainMatrix';
import DecryptedText from '../../styles/animations/DecryptedText';

// Languages
import {useLanguage} from "../../configuration/languages/GlobalLanguages";

export default function Home() {
    const {texts} = useLanguage();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        let animationFrameId;
        let animate;
    
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            animate = matrixRain(canvas, ctx); // Re-crear animación con nuevas dimensiones
        };
    
        resizeCanvas(); // Inicial
    
        const loop = () => {
            animate();
            animationFrameId = requestAnimationFrame(loop);
        };
    
        loop();
    
        window.addEventListener('resize', resizeCanvas);
    
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
    

    return (
        <div className="container">
            <canvas ref={canvasRef} className="matrix-canvas" />
            <div className="content">
                <DecryptedText
                    text={texts.home.title}
                    speed={50}
                    key={texts.home.title}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="start"
                    className="revealed"
                    encryptedClassName="encrypted"
                    parentClassName="decrypted-container"
                    animateOn="view" // o "hover"
                />
                <div className="div-btn-contact">
                    <span className="txt-home">{texts.home.txt}</span>
                    <button
                        onClick={() => {
                            const section = document.getElementById('get-in-touch');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        class="shadow__btn"
                    >
                        <DecryptedText
                            key={texts.home.btn}
                            text={texts.home.btn}
                            speed={50}
                            maxIterations={10}
                            sequential={true}
                            revealDirection="start"
                            className="revealed"
                            encryptedClassName="encrypted"
                            parentClassName="decrypted-container"
                            animateOn="view" // o "hover"
                        />
                    </button>
                </div>
            </div>
        </div>
    );

}

