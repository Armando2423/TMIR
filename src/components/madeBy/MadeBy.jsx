import React from 'react';
import './MadeBy.css';

// language
import { useLanguage } from '../../configuration/languages/GlobalLanguages';

export default function MadeBy() {
    const { texts } = useLanguage();

    return (
        <div className="made-by">
            <p>{texts.made_by.title}</p>
            <h1>{texts.made_by.txt}</h1>
            <h1>{texts.made_by.date}</h1>
        </div>
    );
};