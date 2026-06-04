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
                <p id='desc'>Aspiring Computer Science and Engineering graduate with strong skills in Python, web development, MySQL, and Object-      
                Oriented Programming, seeking an entry-level IT role to apply my technical knowledge, contribute to projects, and grow      
                professionally. </p>
                <h2 id='btech'>B.Tech in Computer Science and Engineering </h2>
                <p>Anantha Lakshmi Institute of Technology & Sciences</p>
                <p>Percentage: 83.9% </p>
                <p>2022 – 2026</p>
                <h2 id='inter'>Intermediate (MPC)</h2>
                <p>Sri Chaitanya Junior College</p>
                <p>Percentage: 92.3% </p>
                <p>2020 – 2022</p>
                <h2 id='school'>Secondary Education</h2>
                <p>Montessori Smart English Medium School</p>
                <p>Percentage: 99.5%  </p>
                <p>2019 – 2020</p>
            </div>
        </div>
    
    </>
  )
}

export default About