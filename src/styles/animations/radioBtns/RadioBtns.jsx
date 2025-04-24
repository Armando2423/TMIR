import React from "react";
import './RadioBtns.css';

export default function RadioBtns({
    options = [],     // Array de objetos { label, value }
    error = '',
    selected = '',    // Valor actualmente seleccionado
    onChange = () => {}
}) {
    return (
        <div className="radio-group">
            {options.map((option, index) => (
                <React.Fragment key={index}>
                    <input
                        type="radio"
                        id={`radio${index}`}
                        name="radio-group"
                        className="radio-input"
                        value={option.value}
                        checked={selected === option.value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <label htmlFor={`radio${index}`} className="radio-label">
                        <span className="radio-inner-circle"></span>
                        {option.label}
                    </label>
                </React.Fragment>
            ))}

            {error && (
                <div className="container-error">
                    <label className="error-text">{error}</label>
                </div>
            )}
        </div>
    );
};

