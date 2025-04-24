import React from "react";
import './Languages.css';
import { useLanguage } from './GlobalLanguages';

export default function Languages  () {
    const { language, setLanguage, texts } = useLanguage();

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="filter-switch">
            <input
                id="option1"
                name="language"
                type="radio"
                value="es"
                checked={language === 'es'}
                onChange={handleLanguageChange}
            />
            <label className="option" htmlFor="option1">{texts.options.es}</label>

            <input
                id="option2"
                name="language"
                type="radio"
                value="en"
                checked={language === 'en'}
                onChange={handleLanguageChange}
            />
            <label className="option" htmlFor="option2">{texts.options.en}</label>

            <input
                id="option3"
                name="language"
                type="radio"
                value="zh"
                checked={language === 'zh'}
                onChange={handleLanguageChange}
            />
            <label className="option" htmlFor="option3">{texts.options.zh}</label>

            <span className="background"></span>
        </div>
    );
};
