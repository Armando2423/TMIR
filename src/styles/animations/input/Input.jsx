import React, { useState } from 'react';
import './Input.css';

export default function Input({
    label = '',
    placeholder = '',
    type = 'text',
    name = '',
    value = '',
    onChange = () => { },
    onFocus = () => { },
    onBlur = () => { },
    error = ''
}) {
    return (
        <>
            <div class="coolinput">
                <label class="text" for="input">{label}</label>
                <input
                    className="input"
                    name={name}
                    maxLength={42}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                <div className="container-error">
                    <label className="error-text">{error}</label>
                </div>
            </div>

        </>
    );
}