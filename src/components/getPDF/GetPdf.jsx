import React, { useState, useEffect } from 'react';
import './GetPdf.css';
import { useLanguage } from '../../configuration/languages/GlobalLanguages';
// PDF CV
import CVEnglish from "../../pdf/CV_english.pdf";
import cv_current from "../../pdf/my_cv.pdf"; 
import cv_upgrade from "../../pdf/cv_cv_v00.pdf"; // current CV

export default function GetPdf() {
    const { texts } = useLanguage();

    return (
        <section id="resume">
            <div className="container-get-pdf">
                <a
                    href={cv_upgrade}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="shadow__btn"
                >
                    <span className="revealed">
                        {texts.download_pdf.txt}
                    </span>
                </a>
            </div>
        </section>
    );
};