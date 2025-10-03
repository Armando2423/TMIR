// App.jsx
import React, { useState, useEffect } from 'react';
// sections 
import Navigation from './components/navigation/Navigation.jsx';
import SplashScreen from "./components/splashScreen/SplashScreen.jsx";
import Home from './components/Home/Home.jsx';
import AboutMe from './components/aboutMe/AboutMe.jsx';
import Skills from './components/skills/Skills.jsx';
import TechSkills from './components/techSkills/TechSkills.jsx';
import WhatIDoNow from './components/whatIDoNow/WhatIDoNow.jsx';
import GetInTouch from './components/getInTouch/GetInTouch.jsx';
import GetPdf from './components/getPDF/GetPdf.jsx';
import MadeBy from './components/madeBy/MadeBy.jsx';

// 🔥 MODO OSCURO desde localStorage antes del render
const savedMode = localStorage.getItem('darkMode');
const isDarkMode = savedMode === 'true';
document.body.classList.toggle('dark', isDarkMode);

export default function App() {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isloading ? (
        <SplashScreen />
      ) : (
        <>
          <Navigation />
          <Home />
          <AboutMe />
          <Skills />
          <TechSkills />
          <WhatIDoNow />
          <GetInTouch />
          <GetPdf />
          <MadeBy />
        </>
      )}
    </>
  );
};



