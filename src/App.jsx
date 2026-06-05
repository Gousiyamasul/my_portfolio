import React, { useState, useEffect } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from "./pages/Contact"
import Nav from './components/Nav'

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
      document.body.classList.add("dark");
      setDarkMode(true);
    }

  }, []);

  const toggleTheme = () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    setDarkMode(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <>
      <div className="all">

        <Nav darkMode={darkMode} toggleTheme={toggleTheme}/>
        <div id='home'><Home/></div>
        <div id='about'><About/></div>
        <div id='skills'><Skills/></div>
        <div id='projects'><Projects/></div>
        <div id='contact'><Contact/></div>

      </div>
    </>
  )
}

export default App