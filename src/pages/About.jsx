import React from 'react'
import about from "../assets/about.jpg"

const About = () => {
  return (
    <>
        <h1 id='about'>ABOUT</h1>
        <div className='myself'>
            <div className='aleft'>
              <img src={about} id='comp'></img>
            </div>
            <div className='aright'>
                <p id='desc'>Computer Science and Engineering graduate with hands-on experience developing web applications through academic projects, internships, and full-stack training. Skilled in Python, Django, React.js, MySQL, and REST APIs, with a focus on building practical and user-friendly web solutions.</p>
                <h3 id='btech'>B.Tech </h3>
                <h4 id='course'>Computer Science and Engineering</h4>
                <p>Anantha Lakshmi Institute of Technology & Sciences</p>
                <p>Percentage: 83.3% </p>
                <p>2022 – 2026</p>
            </div>
        </div>
    
    </>
  )
}

export default About