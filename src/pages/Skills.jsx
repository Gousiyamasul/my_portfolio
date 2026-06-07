import React from 'react'
import skills from "../assets/skills.jpg"
const Skills = () => {
  return (
    <>    
        
        <h1 id='head'>SKILLS</h1>
        <img src={skills} id='laptop'></img>
        <div className='skills'>
            <div className='skill-box' id='lang'>
                <h2>Programming Language</h2>
                <ul>
                    <li>Python</li>
                </ul>
                
            </div>
            <div className='skill-box' id='web'>
                <h2>Web Technologies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                </ul>
            </div>
            <div className='skill-box' id='db'>
                <h2>DataBase</h2>
                <ul>
                    <li>MySQL</li>
                </ul>
            </div>
            <div className='skill-box' id='tools'>
                <h2>Developer Tools</h2>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Visual Studio Code</li>
                </ul>
            </div>
            <div className='skill-box' id='concepts'>
                <h2>Core Concepts</h2>
                <ul>
                    <li>OOP's</li>
                    <li>CRUD Operations</li>
                    <li>Responsive Web Design</li>
                    <li>REST API's</li>
                </ul>
            </div>
            <div className='skill-box' id='lib'>
                <h2>Libraries</h2>
                <ul>
                    <li>NumPy</li>
                    <li>Pandas</li>
                </ul>
            </div><div className="skill-box" id='frame'>
                <h2>Frameworks</h2>
                <ul>
                    <li>Flask</li>
                </ul>
            </div>
        </div>
    
    
    
    </>
  )
}

export default Skills