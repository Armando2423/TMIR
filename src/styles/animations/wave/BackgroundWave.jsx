import React from 'react';
import './BackgroundWave.css';

export default function BackgroundWave() {
    return (
        <div className="background-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path 
                    className="wave-path" 
                    d="M0,96L30,96C60,96,120,96,180,122.7C240,149,300,203,360,218.7C420,235,480,213,540,192C600,171,660,149,720,160C780,171,840,213,900,224C960,235,1020,213,1080,176C1140,139,1200,85,1260,58.7C1320,32,1380,32,1410,32L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z" 
                />
            </svg>
        </div>
    );
};