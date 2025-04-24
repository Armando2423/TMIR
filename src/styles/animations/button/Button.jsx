import React from 'react';
import './Button.css';

export default function Button(
    {
        text = '',
        type = '',
        onClick = () => {}
    }
) {
    return (
        <>
            <div className="container-btn">
                <button onClick={onClick} type={type} className="button">
                    <span class="liquid"></span>
                    <span class="btn-txt">{text}</span>
                </button>z
            </div>
        </>
    );

};