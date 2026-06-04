import React from 'react'
import skills from "../assets/skills.jpg"
const Skills = () => {
  return (
    <>    
        
        <h1 id='head'>SKILLS</h1>
        <img src={skills} id='laptop'></img>
        <div className='skills'>
            <div id='lang'>
                <h2>Programming Language</h2>
                <li>Python</li>
            </div>
            <div id='web'>
                <h2>Web Technologies</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
            </div>
            <div id='db'>
                <h2>DataBase</h2>
                <li>MySQL</li>
            </div>
            <div id='tools'>
                <h2>Developer Tools</h2>
                <li>Git</li>
                <li>GitHub</li>
                <li>Visual Studio Code</li>
            </div>
            <div id='concepts'>
                <h2>Core Concepts</h2>
                <li>OOP's</li>
                <li>CRUD Operations</li>
                <li>Responsive Web Design</li>
                <li>REST API's</li>
            </div>
            <div id='lib'>
                <h2>Libraries</h2>
                <li>NumPy</li>
                <li>Pandas</li>
            </div>
        </div>
    
    
    
    </>
  )
}

export default Skills