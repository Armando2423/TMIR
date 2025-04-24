import React, { useState, useEffect } from 'react';
import { IoIosSunny } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";


export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    // ⚡ Aplicar clase SOLO cuando cambia el estado
    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <div className="theme-switch-container">
            <div className={`theme-switch ${darkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
                <div className="icon left sunny-icon">
                    <IoIosSunny className='icon-light' />
                </div>
                <div className="icon night">
                    <MdOutlineDarkMode className='icon-dark' />
                </div>
                <div className="switch-thumb" />
            </div>
        </div>
    );
};
