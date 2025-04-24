import React from 'react';
import './InputDescription.css';

export default function InputDescription({
    label = '',
    placeholder = '',
    name = '',
    value = '',
    onChange = () => { },
    onFocus = () => { },
    onBlur = () => { },
    rows = 4,
    error = ''
}) {
    return (
        <div className="coolinput">
            <label className="text" htmlFor={name}>{label}</label>
            <textarea
                className="textarea"
                name={name}
                maxLength={150}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    onChange(e);
                    // Ajusta el tamaño dinámicamente
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                rows={rows}
            />
            <div className="container-error">
                    <label className="error-text">{error}</label>
                </div>
        </div>
    );
};
