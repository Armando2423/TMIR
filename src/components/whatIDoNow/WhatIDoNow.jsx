import React, { useState, useEffect } from 'react';
import SplitText from '../../styles/animations/SplitText';
// language
import { useLanguage } from '../../configuration/languages/GlobalLanguages';
import './WhatIDoNow.css';

export default function WhatIDoNow() {
    const {texts} = useLanguage();


    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDisplayedText('');
        setIndex(0);
    }, [texts]);
    

    useEffect(() => {
        const fullText = texts.what_i_do_now.txt;
    
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }, 25);
            return () => clearTimeout(timeout);
        }
    }, [index, texts]);
    


    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <>
            <section id="what-i-do-now">
                <div className="container-WIDN">
                    <div className="container-titule">
                        <SplitText
                            key={texts.what_i_do_now.title}
                            text={texts.what_i_do_now.title}
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
                    <div className="linux-main-container">
                        <div className="linux-terminal-container">
                            <div className="linux-terminal-card">
                                <div className="linux-terminal-header">
                                    <span className="linux-terminal-title">user@linux-terminal:~</span>
                                </div>
                                <div className="linux-terminal-command">
                                    <span className="linux-green">user@linux-terminal</span>
                                    <span className="linux-white">:~$</span>
                                    <span className="linux-blue"> cat WIDN.txt</span>
                                </div>
                                <div className="linux-echo-line">
                                    <span>$ <span>echo</span></span>
                                </div>
                                <div className="linux-terminal-text">
                                    <span>{displayedText}<span className="linux-blinking-cursor">|</span></span>
                                </div>
                                <div className="linux-terminal-footer">
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