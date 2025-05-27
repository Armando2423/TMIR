import React, { useState, useEffect, useRef } from 'react';
import { MdEmojiPeople, MdContactMail } from 'react-icons/md';
import { FaHandSpock } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { LuUserPen } from "react-icons/lu";
import { PiReadCvLogoFill } from "react-icons/pi";

import DarkMode from '../../configuration/mod/DarkMode'; // activate darkMode
import Languages from '../../configuration/languages/Languages'; // change language

import './Navigation.css';

// Languages
import { useLanguage } from "../../configuration/languages/GlobalLanguages";

export default function Navigation() {
    const { texts } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const menusItem = [
        {
            icon: <MdEmojiPeople />,
            text: texts.navigation_elements.element_1,
            targetId: "about-me",
        },
        {
            icon: <FaHandSpock />,
            text: texts.navigation_elements.element_2,
            targetId: "skills",
        },
        {
            icon: <GiMaterialsScience />,
            text: texts.navigation_elements.element_3,
            targetId: "tech-skills",
        },
        {
            icon: <LuUserPen />,
            text: texts.navigation_elements.element_4,
            targetId: "what-i-do-now",
        },
        {
            icon: <MdContactMail />,
            text: texts.navigation_elements.element_5,
            targetId: "get-in-touch",
        },
        {
            icon: <PiReadCvLogoFill />,
            text: texts.navigation_elements.element_6,
            targetId: "resume",
        },
    ];


    return (
        <div className="component-nav">
            <div className="container-Nav">
                <div ref={navRef} className="container-nav-elements">
                    <div className="container-btn-nav">
                        <button className={`btn-nav ${isOpen ? 'open' : ''}`}
                            onClick={() => setIsOpen(!isOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className={`list-elements ${isOpen ? 'open' : ''}`}>
                        <div className="nav-items">
                            {menusItem.map((item, index) => (
                                <div key={index}
                                    className="nav-item"
                                    onClick={() => {
                                        if (item.targetId) {
                                            const section = document.getElementById(item.targetId);
                                            if (section) {
                                                section.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }
                                        setIsOpen(false);
                                    }}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    <span className="nav-text">{item.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="btn-dark-mode">
                            <Languages />
                            <DarkMode />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};