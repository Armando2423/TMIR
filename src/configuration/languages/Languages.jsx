import React from "react";
import './Languages.css';
import { useLanguage } from './GlobalLanguages';

export default function Languages() {
    const { language, setLanguage, texts } = useLanguage();

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const languagesOptions = [

        { id: 1, value: 'es', label: texts.options.es },
        { id: 2, value: 'en', label: texts.options.en },
        { id: 3, value: 'zh', label: texts.options.zh },
        // SECOND ROW
        { id: 4, value: 'fr', label: texts.options.fr },
        { id: 5, value: 'it', label: texts.options.it },
        { id: 6, value: 'ger', label: texts.options.ger }
    ];

    return (
        <div className="filter-switch">
            {languagesOptions.map(option => (
                <React.Fragment key={option.id}>
                    <input
                        id={`option${option.id}`}
                        name="language"
                        type="radio"
                        value={option.value}
                        checked={language === option.value}
                        onChange={handleLanguageChange}
                    />
                    <label className="option-row1" htmlFor={`option${option.id}`}>
                        {option.label}
                    </label>
                </React.Fragment>
            ))}
            <span className="background" />
        </div>
    );
};
